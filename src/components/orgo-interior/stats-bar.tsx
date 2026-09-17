import React from "react";

export function StatsBar() {
  const stats = [
    {
      value: "60+",
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
      label: "Bespoke Joinery",
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
      value: "15+",
      label: "Years Atelier Craft",
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
          <polyline points="12 7 12 12 15 15" />
        </svg>
      ),
    },
    {
      value: "5.0★",
      label: "Client Rating",
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
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white border-y border-[#E5E7E9] py-6 sm:py-8 lg:py-9 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-animate="stagger-group"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-0"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              data-animate="stagger-item"
              className={`group flex items-center gap-2.5 sm:gap-4 transition-transform duration-300 hover:translate-x-1 ${
                index > 0 ? "lg:border-l lg:border-[#E5E7E9] lg:pl-8 xl:pl-10" : ""
              } ${
                index % 2 === 1
                  ? "border-l border-[#E5E7E9] pl-3 sm:pl-6 lg:border-l lg:border-[#E5E7E9]"
                  : ""
              } ${
                index >= 2 ? "border-t border-[#E5E7E9] pt-3 sm:pt-4 lg:border-t-0 lg:pt-0" : ""
              }`}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded bg-[#F7F8F6] border border-[#E5E7E9] flex items-center justify-center flex-shrink-0 shadow-none group-hover:border-[#1C6BAE] group-hover:bg-[#EAF3F9] group-hover:scale-105 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <span className="block font-display text-base sm:text-xl lg:text-2xl font-medium text-[#111111] leading-tight tracking-tight group-hover:text-[#1C6BAE] transition-colors">
                  {item.value}
                </span>
                <span className="block font-sans text-[10px] sm:text-xs text-[#5F6368] font-normal mt-0.5 leading-tight">
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
