'use client';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png', alt: 'Amazon', h: 20 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png', alt: 'Netflix', h: 20 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Googlelogo_2013.svg/1000px-Googlelogo_2013.svg.png', alt: 'Google', h: 22 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1000px-IBM_logo.svg.png', alt: 'IBM', h: 22 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png', alt: 'Apple', h: 24 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png', alt: 'Microsoft', h: 22 },
];

const allLogos = [...logos, ...logos];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-[#1E2130] py-7"
      style={{ background: '#07080D' }}
    >
      <div className="ticker-animate flex items-center gap-16 w-max">
        {allLogos.map((logo, i) => (
          <div key={i} className="flex items-center shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ height: logo.h, opacity: 0.35, filter: 'grayscale(1) brightness(2)' }}
              className="hover:opacity-70 transition-opacity duration-300"
            />
            {i < allLogos.length - 1 && (
              <div className="w-1 h-1 rounded-full bg-[#1E2130] ml-16 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
