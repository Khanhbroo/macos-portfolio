import { useEffect, useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import useWindowStore, { type WindowKey } from "@/store/window";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component: any, windowKey: WindowKey) => {
  const Wrapped = (props: any) => {
    const { focusWindow, windows, closeWindow, focusWindowKey } =
      useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
      const element = ref.current;

      if (!element || !isOpen) return;

      element.style.display = "block";

      gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0, y: 200 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;

      if (!element) return;

      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const element = ref.current;

      if (!element) return;
      element.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    useEffect(() => {
      const element = ref.current;

      if (!element) return;

      const handleKeyDown = (event: any) => {
        if (event.key === "Escape" && focusWindowKey === windowKey) {
          closeWindow(windowKey);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [focusWindowKey]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
