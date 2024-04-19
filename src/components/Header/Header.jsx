import { useState, useEffect, useRef } from "react";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import Logo from "./Logo";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import ActionButtons from "./ActionButtons";
import Button from "../Button";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const targetRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    if (targetRef.current) {
      resizeObserver.observe(targetRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return width > 900 ? (
    <div
      ref={targetRef}
      className={`sticky top-0 z-10 bg-gray-900 text-white transition-all`}
    >
      <div className="flex items-center justify-evenly p-3">
        <Logo />
        <SearchBar />
        <ActionButtons />
      </div>
      <Nav />
    </div>
  ) : (
    <div className={`sticky top-0 z-10 bg-gray-900 text-white transition-all`}>
      <div className="flex justify-between">
        <Logo />
        <Button
          style="flex mt-2 mr-2 mb-2 p-2"
          onClick={() => setShowHeader(!showHeader)}
        >
          {showHeader ? <IoMdClose size={24} /> : <IoMenu size={24} />}
        </Button>
      </div>
      <div
        className={`${showHeader ? "visible opacity-100" : "hidden opacity-0"} flex flex-col items-center justify-evenly gap-y-2 p-3 transition-all`}
      >
        <SearchBar />
        <ActionButtons />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
