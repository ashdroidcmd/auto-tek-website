const Location = () => {
  return (
    <>
      {/* 24/7 FREE SERVICE Section */}
      <section
        className="bg-cover bg-no-repeat px-5 text-center text-white"
        style={{
          backgroundImage: "url('/images/herocover2.jpg')",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="bg-opacity-60 py-20">
          <div className="container mx-auto">
            <p className="mb-4 text-5xl font-bold">24/7 FREE SERVICE</p>
            <p className="mt-2 text-lg">
              We are committed to providing our customers with quality repairs
              at a fair price.
            </p>
            <a
              href="#contact-form"
              className="btn btn-xl mt-5 rounded-2xl bg-red-600 hover:bg-black hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section
        className="scroll-mt-20 bg-[#F9F9F9] px-5 py-16"
        id="location-section"
      >
        <h1 className="mb-3 text-center text-6xl font-bold text-black">
          Our Location
        </h1>

        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="p-6 text-center text-xl text-black">
            <h2 className="mb-4 text-2xl font-semibold text-red-600">
              Visit Auto-Tek at our convenient location!
            </h2>
            <p className="mb-1">
              📍 <strong>Address:</strong> Corella, Bohol, Philippines
            </p>
            <p className="mb-4">
              📞 <strong>Phone:</strong> 0991 234 5678
            </p>

            <p className="mb-1 font-semibold">🕒 Business Hours:</p>
            <p className="mb-1">Monday – Friday: 8:00 AM – 5:00 PM</p>
            <p className="mb-1">Saturday: 8:00 AM – 12:00 NN</p>
            <p>Sunday: Closed</p>
          </div>

          {/* Google Map Embed */}
          <div className="h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.09191374096!2d123.90696316212185!3d9.681558964168522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa49bc83b3f199%3A0xd1adc6c75b121bbb!2sCorella%20Car%20Care%20Center!5e1!3m2!1sen!2sph!4v1740407565950!5m2!1sen!2sph"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
