'use client';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', alt: 'Nextjs', h: 20 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', alt: 'tailwind', h: 25 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS', h: 22 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Figma.svg', alt: 'Figma', h: 22 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg', alt: 'Wordpress', h: 24 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg', alt: 'Github', h: 22 },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Google_Cloud_icon_%282026%29.svg', alt: 'googlecloud', h: 22 },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg', alt: 'webflow', h: 22 },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg', alt: 'react', h: 22 },
];

const allLogos = [...logos, ...logos];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden border-y border-[#E5E5E5] py-7"
      style={{ background: '#FFFFFF' }}
    >
      <div className="ticker-animate flex items-center gap-16 w-max">
        {allLogos.map((logo, i) => (
          <div key={i} className="flex items-center shrink-0">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ height: logo.h, opacity: 0.5, filter: 'grayscale(1)' }}
              className="hover:opacity-80 transition-opacity duration-300"
            />
            {i < allLogos.length - 1 && (
              <div className="w-1 h-1 rounded-full bg-[#D1D5DB] ml-16 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
