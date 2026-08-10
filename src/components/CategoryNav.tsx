import React from 'react';

interface CategoryNavProps {
  onSelectCategory: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  onSelectCategory,
}) => {
  const categories = [
    {
      name: 'BULBS',
      image:
        '../assets/c1.png',
      categoryQuery: 'Lighting',
    },
    {
      name: 'GENERATOR',
      image:
        '../assets/c2.png',
      categoryQuery: 'Generators',
    },
    {
      name: 'FANS',
      image:
        '../assets/c3.jpeg',
      categoryQuery: 'Fans',
    },
    {
      name: 'RELAY',
      image:
        '../assets/c4.jpeg',
      categoryQuery: 'Relay Modules',
    },
    {
      name: 'SENSORS',
      image:
        '../assets/c5.jpeg',
      categoryQuery: 'Sensors',
    },
    {
      name: 'METER',
      image:
        '../assets/c6.jpeg',
      categoryQuery: 'Meters',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden px-3 md:px-6">
      {/* Horizontal Scroll Container */}
      <div
        className="
          flex
          flex-nowrap
          overflow-x-auto md:overflow-x-hidden
          overflow-y-hidden
          w-full
          max-w-full
          rounded-xl
          no-scrollbar
          scrollbar-hide
          overscroll-x-contain
        "
      >
        {categories.map((cat, idx) => (
          <React.Fragment key={cat.name}>
            <button
              onClick={() => onSelectCategory(cat.categoryQuery)}
              style={{
                backgroundImage: `url("${cat.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="
  relative
  group
  overflow-hidden
  cursor-pointer
  flex
  items-center
  justify-center
  text-white
  font-bold
  shrink-0

  w-[calc((100vw-24px)/3)]
  h-[75px]

  md:flex-1
  md:w-auto
  md:h-[110px]

  transition-all
  hover:opacity-90
"
            >
              {/* Dark overlay */}
              <span className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

              {/* Category Name */}
              <span className="relative z-10 text-base md:text-xl font-extrabold tracking-wide whitespace-nowrap">
                {cat.name}
              </span>
            </button>

            {/* Divider */}
            {idx < categories.length - 1 && (
              <div className="hidden md:block w-px bg-white/30 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};