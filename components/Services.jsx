const services = [
  {
    img: "/images/service/fluid-changes.webp",
    title: "FLUID CHANGES",
    desc: "Inspecting and replacing essential vehicle fluids to ensure smooth operation of various systems and prevent damage.",
  },
  {
    img: "/images/service/brake.webp",
    title: "BRAKE REPAIR & REPLACEMENT",
    desc: "Inspecting, repairing, or replacing brake components like pads, rotors, and calipers to maintain safe stopping power.",
  },
  {
    img: "/images/service/engine.webp",
    title: "ENGINE DIAGNOSTICS AND TUNE-UPS",
    desc: "Using specialized tools to detect engine problems and performing tune-ups (e.g., replacing spark plugs, filters) to improve performance.",
  },
  {
    img: "/images/service/suspension.webp",
    title: "SUSPENSION SYSTEM REPAIR",
    desc: "Repairing shocks struts to ensure a comfortable ride.",
  },
  {
    img: "/images/service/electrical.webp",
    title: "ELECTRICAL SYSTEM DIAGNOSTICS & REPAIR",
    desc: "Testing and repairing electrical components such as alternators, starters, wiring, and fuses.",
  },
  {
    img: "/images/service/steering.webp",
    title: "STEERING SYSTEM REPAIR",
    desc: "Repairing steering components to ensure proper vehicle control.",
  },
  {
    img: "/images/service/wheel.webp",
    title: "TIRE ROTATION, REPAIR, & REPLACEMENT",
    desc: "Rotating tires to promote even wear, fixing punctures, or replacing worn-out tires for optimal grip and safety.",
  },
  {
    img: "/images/service/air-conditioning.webp",
    title: "AIR CONDITIONING AND HEATING REPAIR",
    desc: "Diagnosing and fixing issues with the A/C and heating system to maintain cabin comfort.",
  },
  {
    img: "/images/service/transmission.webp",
    title: "TRANSMISSION REPAIR AND MAINTENANCE",
    desc: "Inspecting, repairing, or replacing transmission components to ensure smooth gear shifts and prevent major failures.",
  },
];

const Services = () => {
  return (
    <section className="scroll-mt-20 bg-white py-20" id="service-page">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-black">OUR SERVICES</h1>
          <p className="mt-2 text-2xl text-red-600">
            We offer a wide range of services to help you get back on the road
            quickly and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mx-auto mb-4 h-auto w-40"
                loading="lazy"
              />
              <div className="text-center">
                <p className="mb-2 text-2xl font-bold text-red-600">
                  {service.title}
                </p>
                <p className="text-lg text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
