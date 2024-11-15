

"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black/50 backdrop-blur-md max-w-4xl mx-auto flex justify-between items-center p-4 sticky top-0 z-50">
      <div>
        <img
          src="/images/Gam3THub.png"
          alt="Gam3THub Logo"
          className="h-10"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Link href="https://twitter.com">
          <img src="/images/twitter-logo.svg" alt="Twitter" className="w-6 h-6" />
        </Link>
        <Link href="https://discord.com">
          <img src="/images/discord-logo.svg" alt="Discord" className="w-6 h-6" />
        </Link>
        <button className="bg-orange text-black font-bold px-4 py-2 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;


