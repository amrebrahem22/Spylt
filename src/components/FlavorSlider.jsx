import { useRef } from "react";
import { flavorlists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FlavorSlider = () => {
  const slideRef = useRef();

  useGSAP(() => {
    const scrollAmount = slideRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 1500}px`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1500}px`,
      ease: "power1.inOut",
    });
    const titleTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTL
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={slideRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`images/${flavor.color}-bg.svg`}
              alt={`${flavor.color} flavor`}
              className="absolute bottom-0"
            />
            <img
              src={`images/${flavor.color}-drink.webp`}
              alt={`${flavor.color} flavor drink`}
              className="drinks"
            />
            <img
              src={`images/${flavor.color}-elements.webp`}
              alt={`${flavor.color} flavor elements`}
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
