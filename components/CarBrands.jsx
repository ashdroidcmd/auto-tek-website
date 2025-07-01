import Image from "next/image";

const brandLogos = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
  "13.webp",
  "14.webp",
  "15.webp",
  "16.webp",
  "17.webp",
  "18.webp",
];

const CarBrands = () => {
  return (
    <section className="bg-black px-5 py-16">
      <div className="container mx-auto mb-5">
        <p className="mb-3 text-center text-5xl font-bold text-white">
          We Service Most Makes & Models
        </p>

        {/* Car Brands Logos */}
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {brandLogos.map((fileName, index) => (
            <div
              key={index}
              className="flex h-[200px] items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={`/images/brands/${fileName}`}
                alt={`Car Brand ${index + 1}`}
                width={150}
                height={100}
                className="h-auto py-20"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarBrands;
