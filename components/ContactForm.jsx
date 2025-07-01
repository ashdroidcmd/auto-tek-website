const ContactForm = () => {
  return (
    <div className="scroll-mt-20 bg-black px-5 py-16" id="contact-form">
      {/* Contact Form */}
      <form className="container mx-auto">
        <h1 className="mb-6 text-6xl font-bold text-red-600">Contact Us</h1>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="label mb-2 text-white">
              <span className="label-text text-2xl">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label mb-2 text-white">
              <span className="label-text text-2xl">Email address*</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="label mb-2 text-white">
            <span className="label-text text-2xl">Car Details*</span>
          </label>
          <input
            type="text"
            placeholder="Make and Model / Year / Transmission / Fuel Type / Odometer"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label className="label mb-2 text-white">
            <span className="label-text text-2xl">Message*</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Message Here"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-xl rounded-2xl bg-red-600 hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
