import Image from "next/image";

const navItems = [
  { href: "#about", label: "O nas" },
  { href: "#members", label: "Zespół" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-h-11 items-center text-foreground"
          aria-label="Fundacja Gada — strona główna"
        >
          <Image
            src="/brand/fundacja-gada-logo.png"
            alt="Fundacja Gada"
            width={3270}
            height={1500}
            priority
            className="h-auto w-[8.75rem] sm:w-40"
          />
        </a>

        <nav className="hidden items-center gap-4 lg:gap-8 md:flex" aria-label="Nawigacja główna">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition-colors hover:text-[var(--brand-pink)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold whitespace-nowrap text-[var(--accent-foreground)] transition-opacity hover:opacity-90"
          >
            Dołącz do nas
          </a>
        </nav>

      </div>
    </header>
  );
}
