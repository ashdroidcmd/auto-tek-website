const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-110px)] items-center justify-center bg-[url('/images/herocover.jpg')] bg-cover bg-center bg-no-repeat px-5">
      {/* Hero Text */}
      <div className="mx-auto max-w-4xl text-center text-white">
        <img
          className="mx-auto mb-3 h-auto max-h-40 w-auto"
          loading="lazy"
          src="/images/logo.webp"
          alt="Auto-Tek Logo"
        />
        
        <p className="mb-4 text-4xl font-bold md:text-5xl">
          Maintenance and Repair
        </p>
        <p className="mb-4 text-lg md:text-xl">
          At Auto-Tek, we're committed to earning your trust by providing the
          highest quality car repair services at a fair price.
        </p>
        <a
          href="#contact-form"
          className="btn btn-xl rounded-2xl bg-red-600 hover:bg-black hover:text-white"
        >
          BOOK A SERVICE
        </a>
      </div>
    </section>
  );
};

export default Hero;
