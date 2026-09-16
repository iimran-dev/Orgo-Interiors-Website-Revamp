import React from "react";

export function StatsBar() {
  const stats = [
    {
      value: "50+",
      label: "Projects Completed",
      icon: (
        <svg
          className="w-5 h-5 text-[#1C6BAE]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-4" />
          <path d="M9 9v.01" />
          <path d="M9 12v.01" />
          <path d="M9 15v.01" />
          <path d="M9 18v.01" />
        </svg>
      ),
    },
    {
      value: "100%",
      label: "Bespoke Plans",
      icon: (
        <svg
          className="w-5 h-5 text-[#1C6BAE]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="m14.5 9.5-5 5" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
          <circle cx="5" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
        </svg>
      ),
    },
    {
      value: "Turnkey",
      label: "Execution & Oversight",
      icon: (
        <svg
          className="w-5 h-5 text-[#1C6BAE]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 21h5v-5" />
        </svg>
      ),
    },
    {
      value: "Chennai Studio",
      label: "Serving Across South India",
      icon: (
        <svg
          className="w-5 h-5 text-[#1C6BAE]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white border-y border-[#E5E7E9] py-6 sm:py-8 lg:py-9 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="stagger-group"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              data-animate="stagger-item"
              className={`group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1 ${
                index > 0 ? "lg:border-l lg:border-[#E5E7E9] lg:pl-8 xl:pl-10" : ""
              } ${
                index % 2 === 1 && index !== 0
                  ? "sm:border-l sm:border-[#E5E7E9] sm:pl-6 lg:border-l-0 lg:pl-0"
                  : ""
              } ${
                index > 0 ? "pt-4 sm:pt-0" : ""
              } ${
                index >= 2 ? "sm:border-t sm:border-[#E5E7E9] sm:pt-6 lg:border-t-0 lg:pt-0" : ""
              }`}
            >
              <div className="w-12 h-12 rounded bg-[#F7F8F6] border border-[#E5E7E9] flex items-center justify-center flex-shrink-0 shadow-none group-hover:border-[#1C6BAE] group-hover:bg-[#EAF3F9] group-hover:scale-105 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-medium text-[#111111] leading-tight tracking-tight group-hover:text-[#1C6BAE] transition-colors">
                  {item.value}
                </span>
                <span className="block font-sans text-xs text-[#5F6368] font-normal mt-0.5">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
