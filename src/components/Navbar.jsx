const navlinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
const Navbar = () => {
  return (
    <header className="max-w-6xl mx-auto  py-6 px-3 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-white flex-1">
        Mok<span className="text-pink-500">nine</span>
      </a>
      <nav className="flex justify-between md:gap-14 gap-6 text-sm font-semibold text-white items-center">
        {navlinks.map((link) => (
          <a
            className="hover:text-pink-500 duration-300"
            href={link.href}
            key={link.label}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
