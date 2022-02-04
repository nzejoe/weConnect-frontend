import React, { useRef, useEffect } from "react";

const ClickOutsideDetector = ({ isOpen, closeMenu, children, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const checkClickOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', checkClickOutside)
    // clean out event from memory
    return () => document.removeEventListener("mousedown", checkClickOutside);
    // eslint-disable-next-line
  }, [ref, isOpen]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ClickOutsideDetector;
