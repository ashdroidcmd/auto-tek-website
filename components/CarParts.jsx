import Image from "next/image";

const partLogos = [
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
];

const CarParts = () => {
  return (
    <section className="bg-[#F9F9F9] px-5 py-16">
      <div className="container mx-auto mb-5">
        <div className="mb-6 text-center">
          <p className="mb-3 text-5xl font-bold text-black">
            We work with the best brand partners
          </p>
          <p className="text-2xl text-red-600">
            We collaborate with industry-leading brands to ensure top-quality
            car maintenance service. Our trusted partners guaranteeing
            excellence in every service.
          </p>
        </div>

        {/* Car Parts Logos */}
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {partLogos.map((fileName, index) => (
            <div
              key={index}
              className="flex h-[200px] items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={`/images/parts/${fileName}`}
                alt={`Car Part Brand ${index + 1}`}
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

export default CarParts;
