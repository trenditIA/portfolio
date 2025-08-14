import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollAnimations = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.dataset.animate;
            entry.target.classList.add(animationClass);

            // Cuando termine la animación CSS
            const onAnimationEnd = () => {
              const section = entry.target.closest(".project-item");
              if (section) {
                const h3 = section.querySelector("h3");
                if (h3) h3.classList.add("animate-done");
              }
              entry.target.removeEventListener("animationend", onAnimationEnd);
            };

            entry.target.addEventListener("animationend", onAnimationEnd);

            observer.unobserve(entry.target); // animar solo la primera vez
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);
};

export default useScrollAnimations;
