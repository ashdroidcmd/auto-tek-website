import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-primary-content border-t border-stone-600 bg-black p-10">
      <div>
        <figure>
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={160}
            height={80}
            className="h-auto w-70"
            loading="lazy"
          />
        </figure>
        <p>Corella, Bohol | 0991 234 5678</p>
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
