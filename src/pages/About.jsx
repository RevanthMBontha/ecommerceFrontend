import { useNavigate } from "react-router";
import { Button } from "../components";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center gap-y-8 py-8">
        <h1 className="text-center text-3xl font-semibold">Get to know us!</h1>
        <p className="w-4/5 text-center lg:w-1/2">
          Welcome to UrbanForge, where passion meets craftsmanship to redefine
          affordable luxury in the world of jewelry. Established with a vision
          to break away from the ordinary, we pride ourselves on offering
          handcrafted accessories that tell a unique story of artistry,
          authenticity, and accessibility!
        </p>
      </div>

      {/* About Us Details */}
      <div className="flex flex-col gap-y-8 py-8">
        {/* First Row */}
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-12 p-4 lg:w-2/3 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:order-2">
            <img
              className="custom-shadow h-[250px] w-fit rounded-md transition-all hover:scale-105"
              src="/images/about_us/our_story.avif"
              alt="our story"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:order-1">
            <h2 className="text-2xl font-semibold">Our Story!</h2>
            <p className="w-4/5 text-center lg:w-full">
              Born from a desire to bring exceptional jewelry to every
              individual, we started UrbanForge as a celebration of creativity
              and community. Our journey began with the realization that quality
              craftsmanship and distinctive design should be accessible to all.
              We set out to create a space where jewelry transcends mere
              adornment and becomes a statement of personal expression.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-12 p-4 lg:w-2/3 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:order-1">
            <img
              className="custom-shadow h-[250px] w-fit rounded-md transition-all hover:scale-105"
              src="/images/about_us/craftsmanship_unveiled.avif"
              alt="craftsmanship unveiled"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:order-2">
            <h2 className="text-2xl font-semibold">Craftsmanship Unveiled!</h2>
            <p className="w-4/5 text-center lg:w-full">
              At UrbanForge, we collaborate with local artisans, blending
              traditional techniques with modern aesthetics. Each piece is
              meticulously crafted, bearing the mark of skilled hands and a
              passion for quality. Our commitment to supporting local talent not
              only ensures the uniqueness of every creation but also contributes
              to the preservation of time-honored craftsmanship.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-12 p-4 lg:w-2/3 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:order-2">
            <img
              className="custom-shadow h-[250px] w-fit rounded-md transition-all hover:scale-105"
              src="/images/about_us/affordable_excellence.avif"
              alt="affordable excellence"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:order-1">
            <h2 className="text-2xl font-semibold">Affordable Excellence!</h2>
            <p className="w-4/5 text-center lg:w-full">
              We believe that everyone deserves to own jewelry that reflects
              their style without compromising on quality. By eliminating
              unnecessary markups and embracing a direct-to-consumer model, we
              offer you unparalleled value. Our dedication to affordability is
              not a compromise but a conscious choice to redefine the meaning of
              accessible luxury.
            </p>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-12 p-4 lg:w-2/3 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:order-1">
            <img
              className="custom-shadow h-[250px] w-fit rounded-md transition-all hover:scale-105"
              src="/images/about_us/materials_matter.avif"
              alt="materials matter"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:order-2">
            <h2 className="text-2xl font-semibold">Materials Matter!</h2>
            <p className="w-4/5 text-center lg:w-full">
              Our collections feature a fusion of metals, with stainless steel
              at the core, coated in protective layers of titanium, rose gold,
              and silver. This not only mimics the allure of genuine jewelry but
              also extends the life of each piece, ensuring that your investment
              stands the test of time.
            </p>
          </div>
        </div>

        {/* Fifth Row */}
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-12 p-4 lg:w-2/3 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:order-2">
            <img
              className="custom-shadow h-[250px] w-fit rounded-md transition-all hover:scale-105"
              src="/images/about_us/our_vision.avif"
              alt="our vision"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:order-1">
            <h2 className="text-2xl font-semibold">Our Vision!</h2>
            <p className="w-4/5 text-center lg:w-full">
              More than a brand, UrbanForge is a vision to inspire confidence,
              celebrate individuality, and spark joy through the artistry of
              jewelry. We strive to create a community where each piece becomes
              a cherished part of your story, an embodiment of your style, and a
              connection to the hands that crafted it.
            </p>
          </div>
        </div>

        {/* Sixth Row */}
        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-12 p-4 lg:w-2/3 lg:grid-cols-2">
          <div className="flex items-center justify-center lg:order-1">
            <img
              className="custom-shadow h-[250px] w-fit rounded-md transition-all hover:scale-105"
              src="/images/about_us/join_us.avif"
              alt="join us"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 lg:order-2">
            <h2 className="text-2xl font-semibold">Join Us in our Journey!</h2>
            <p className="w-4/5 text-center lg:w-full">
              Thank you for being a part of our story. Explore our collections,
              find the piece that resonates with you, and join us on this
              exciting journey of self-expression and style. At UrbanForge, we
              invite you to adorn yourself with more than just jewelry – embrace
              a statement of you.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-4 p-4 text-center">
        <p className="pb-8">
          Welcome to a world where every piece is a masterpiece. Welcome to{" "}
          <span className="font-bold">UrbanForge!</span>
        </p>
        <Button
          style="mx-auto text-white p-4 px-6"
          onClick={() => navigate("/all")}
        >
          Explore our Products!
        </Button>
      </div>
    </div>
  );
};

export default About;
