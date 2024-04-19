import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

import { heroImages } from "../utils/pageData";
import NavLink from "../components/Header/NavLink";
import { Card, Loading } from "../components";

const URL =
  "https://ecommercebackend-rt0y.onrender.com/api/v1/products/featured";

const Home = () => {
  const targetRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [reStructuredProducts, setReStructuredProducts] = useState([]);

  // Adding a Resize Observer to check for changes in window width
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const test = entry.contentRect.width;
        setWindowWidth(test);
      }
    });

    if (targetRef.current) {
      resizeObserver.observe(targetRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const response = await axios.get(URL);
      setReStructuredProducts(
        renderFeaturedProducts(response.data.data.products, windowWidth),
      );
      return response.data.data.products;
    },
  });

  const renderFeaturedProducts = (data, windowWidth) => {
    if (data) {
      const step =
        windowWidth > 1800
          ? 4
          : windowWidth > 1300
            ? 3
            : windowWidth > 875
              ? 2
              : 1;
      let divSet = [];
      for (let i = 0; i < data.length; i += step) {
        let cards = [];
        for (let j = i; j < i + step; j++) {
          cards = [...cards, data[j]];
        }
        divSet = [...divSet, cards];
      }
      return divSet;
    }
  };

  useEffect(() => {
    setReStructuredProducts(renderFeaturedProducts(data, windowWidth));
  }, [data, windowWidth]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
      >
        {heroImages.map((image, index) => {
          return (
            <div key={index} className="h-fit md:h-[600px]">
              <img
                className="object-contain object-bottom"
                src={image.src}
                alt={image.title}
              />
            </div>
          );
        })}
      </Carousel>

      <div className="my-6 flex w-full flex-col items-center justify-evenly gap-y-8">
        <h1 className="mt-4 text-center text-5xl font-semibold">
          Welcome to UrbanForge!
        </h1>
        <p className="text-3xl">👋</p>
        <p className="flex w-full justify-center text-center md:w-1/3">
          At UrbanForge, we bridge the gap between traditional gold jewelry and
          contemporary street style, offering Indians access to premium,
          on-trend accessories at reasonable prices.
        </p>
        <p className="flex w-full justify-center text-center md:w-1/3">
          Embrace individuality with our curated collection of affordable and
          stylish metal jewelry, redefining the way you adorn yourself in a
          modern, budget-friendly way.
        </p>

        <NavLink
          style="cursor-pointer text-blue-400 underline hover:text-blue-600"
          to="/about"
        >
          Read more about us!
        </NavLink>
      </div>

      <div className="my-4 flex w-full justify-center bg-white">
        <div className="flex w-full flex-col items-center justify-center gap-y-6 pb-8">
          <h2 className="text-3xl font-semibold">Featured Products</h2>
          <div className="w-full rounded-md bg-gray-300 py-6">
            <Carousel
              className="p-4"
              infiniteLoop={true}
              interval={3000}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              {isPending ? (
                <Loading />
              ) : isError ? (
                error.message
              ) : (
                reStructuredProducts.map((set, index) => {
                  return (
                    <div key={index}>
                      {set.map((card) => {
                        return (
                          <Card
                            key={card._id}
                            id={card._id}
                            imgSrc={card.imageCover}
                            title={card.name}
                            desc={card.quote}
                          />
                        );
                      })}
                    </div>
                  );
                })
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
