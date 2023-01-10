import React from 'react'

function Feature({ text, title ,flexRow,noWrap}) {
  return (
    <div data-aos="fade-up">
      <div className="gradient-line mb-3"></div>
      <div
        className={`${
          flexRow
            ? "flex md:flex-row flex-col w-full justify-between items-start"
            : ""
        }flex flex-col gap-y-7 ${noWrap ? "gap-x-40" : "gap-x-20"}`}
      >
        <div
          className={`font-extrabold text-2xl ${
            noWrap ? "whitespace-nowrap " : "md:max-w-[180px] w-full"
          }`}
        >
          {title}
        </div>
        <p
          className={`text-slate font-medium ${noWrap ? "" : "max-w-[400px]"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Feature