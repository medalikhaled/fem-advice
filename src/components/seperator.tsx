import { useEffect } from "react";
import { useState } from "react";

function Icon() {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth < 768) {
        setIsMobile(true);
      }
    }
    window.addEventListener("resize", handleResize);
  }, [isMobile]);

  // ! There is some problem with responsive

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`xl:w-[444px] w-[295px] h-[16px]  my-8 xl:my-12 ${
        typeof isMobile == "undefined"
      } && "hidden"`}
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#4F5D74" d="M0 8h122v1H0zm173 0h122v1H173z"></path>
        <g
          fill="#CEE3E9"
          transform={isMobile ? "translate(138)" : "translate(212)"}
        >
          <rect width="6" height="16" rx="3"></rect>
          <rect width="6" height="16" x="14" rx="3"></rect>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
