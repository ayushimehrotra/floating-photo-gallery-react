
export const Navigation = () => {
  const navItems = [
    { label: "research", href: "#research" },
    { label: "blog", href: "#blog" },
    { label: "resume", href: "#resume" },
  ];

  return (
    <nav className="mt-16">
      <ul className="flex space-x-16 text-2xl lg:text-3xl font-light">
        {navItems.map((item, index) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="relative inline-block transition-all duration-300 hover:text-gray-300 group"
              style={{
                animationDelay: `${0.8 + index * 0.2}s`,
              }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
