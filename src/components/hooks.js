import { useState, useRef, useEffect } from "react";

const useElementSize = () => {
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

  return { elementSize, elementRef };
};

export { useElementSize };
