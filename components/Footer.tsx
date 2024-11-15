"use client";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/images/Gam3THub.png"
            alt="Game3THub Logo"
            className="h-10 mx-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 mb-4 text-sm">
          <a
            href="#home"
            className="hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="#faq"
            className="hover:text-white transition duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 6.034a8.19 8.19 0 01-2.357.641 4.118 4.118 0 001.804-2.267 8.223 8.223 0 01-2.605.977A4.107 4.107 0 0015.847 4c-2.266 0-4.1 1.815-4.1 4.055 0 .317.037.626.107.92C7.728 8.867 4.1 7.136 1.67 4.149a4.013 4.013 0 00-.553 2.038c0 1.406.72 2.648 1.814 3.377a4.108 4.108 0 01-1.857-.51v.051c0 1.965 1.398 3.608 3.25 3.981a4.095 4.095 0 01-1.852.07 4.109 4.109 0 003.835 2.825A8.233 8.233 0 010 18.406a11.616 11.616 0 006.29 1.811" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22.675 0H1.325C.595 0 0 .588 0 1.317v21.366C0 23.413.595 24 1.325 24h11.494V14.709H9.692V11.24h3.127V8.409c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.098 2.794.142v3.24H17.78c-1.429 0-1.705.678-1.705 1.671v2.19h3.406l-.445 3.468h-2.961V24h5.804c.73 0 1.325-.587 1.325-1.317V1.317C24 .588 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.012 7.052.07 5.772.128 4.561.36 3.588 1.333c-.973.973-1.205 2.184-1.263 3.464C2.012 5.87 2 6.279 2 12s.012 6.13.07 7.409c.058 1.28.29 2.491 1.263 3.464.973.973 2.184 1.205 3.464 1.263 1.28.058 1.689.07 7.409.07s6.13-.012 7.409-.07c1.28-.058 2.491-.29 3.464-1.263.973-.973 1.205-2.184 1.263-3.464.058-1.28.07-1.689.07-7.409s-.012-6.13-.07-7.409c-.058-1.28-.29-2.491-1.263-3.464C20.532.36 19.321.128 18.041.07 16.761.012 16.352 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          &copy; 2024 Gam3THub. All rights reserved.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

    </footer>
  );
};

export default Footer;
