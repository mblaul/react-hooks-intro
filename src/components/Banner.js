import React from "react";
import { useElementSize } from "./hooks";

const Banner = () => {
  const { elementSize, elementRef } = useElementSize();

  const numOfEmojis = Math.round(elementSize / 100);
  const emojiEnd = `${"🤯".repeat(numOfEmojis)}`;
  const bannerText = `${emojiEnd} ${elementSize} ${emojiEnd}`;

  return (
    <nav
      ref={elementRef}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <a className="navbar-brand" href="#">
        {bannerText}
      </a>
    </nav>
  );
};

export default Banner;
