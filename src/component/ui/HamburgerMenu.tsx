"use client";

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
}

export default function HamburgerMenu({
  isOpen,
  onToggle,
  className = "",
}: HamburgerMenuProps) {
  const handleToggle = () => {
    if (onToggle) onToggle(!isOpen);
  };

  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className={`relative lg:hidden w-10 h-10 focus:outline-none ${className}`}
      onClick={handleToggle}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 flex flex-col items-end justify-center">
          {/* Top bar */}
          <span
            className={`block h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>

          {/* Middle bar */}
          <span
            className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1.5 ${
              isOpen ? "w-0 opacity-0" : "w-4/5 opacity-100"
            }`}
          ></span>

          {/* Bottom bar */}
          <span
            className={`block h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1.5 ${
              isOpen ? "-rotate-45 w-full -translate-y-1.5" : "w-2/3"
            }`}
          ></span>
        </div>
      </div>
    </button>
  );
}
