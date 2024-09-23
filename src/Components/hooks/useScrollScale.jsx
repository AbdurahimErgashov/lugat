import { useEffect } from "react";

const useScrollScale = (refs) => {
  useEffect(() => {
    const handleScroll = () => {
      refs.forEach((ref) => {
        if (ref.current) {
          const scrollPosition = window.scrollY;
          const elementPosition = ref.current.offsetTop;
          const elementHeight = ref.current.offsetHeight;
          const viewportHeight = window.innerHeight;

          // Calculate the distance from the bottom of the viewport to the top of the element
          const distanceFromViewportBottom = elementPosition + elementHeight - scrollPosition - viewportHeight;

          let scaleValue = 1;
          let brightnessValue = 1;

          // Check if the element has fully exited the viewport from the bottom
          if (distanceFromViewportBottom < 0) {
            // Scale down and apply brightness filter only after the element's height has scrolled out of view
            scaleValue = 1 - Math.min(Math.abs(distanceFromViewportBottom) / 500, 0.2); // Shrink up to 0.8
            brightnessValue = 0.5;
          }

          // Apply scaling, transitions, and brightness
          ref.current.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s ease-in-out';
          ref.current.style.transform = `scale(${scaleValue})`;
          ref.current.style.filter = `brightness(${brightnessValue})`;

          // Adjust shadow effect when scaling down
          // ref.current.style.boxShadow = `0 4px 20px rgba(0, 0, 0, ${0.3 * (1 - scaleValue)})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);
};

export default useScrollScale;
