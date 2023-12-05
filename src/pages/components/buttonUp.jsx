import { ArrowUp } from "react-feather";
import { useEffect, useState } from "react";

export default function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const section = document.getElementById("top");
      const bottomThreshold = 25;

      if (section) {
        setIsVisible(scrollPosition > section.offsetTop + bottomThreshold);
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  function scrollToSection() {
    const section = document.getElementById("top");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToSection}
          className=" fixed z-20 bottom-8 right-12 bg-[#FFECCC] p-2 rounded-full  animate-bounce"
        >
          <ArrowUp size={30} className=" text-[#ff9825]" />
        </button>
      )}
    </>
  );
}
