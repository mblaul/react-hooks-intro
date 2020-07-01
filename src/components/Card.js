import React, { useEffect, useRef, useState } from "react";

const Card = () => {
  const elementRef = useRef(null);
  const [elementSize, setElementSize] = useState(null);

  const handleWindowResize = (event) => {
    setElementSize(elementRef.current.offsetWidth);
  };

  useEffect(() => {
    setElementSize(elementRef.current.offsetWidth);
  }, [elementRef.current]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div ref={elementRef} className="card m-2">
      <div className="card-body">
        <h2 className="card-title">Hello</h2>
        <p className="card-text lead">
          <strong>The card's size is: {elementSize}</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;
