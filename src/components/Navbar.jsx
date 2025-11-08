import { useMemo } from 'react';
import { Menu, Phone, MapPin } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const links = useMemo(
    () => [
      { key: 'home', label: 'Home' },
      { key: 'menu', label: 'Menù' },
      { key: 'contact', label: 'Contattaci' },
    ],
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-2xl bg-[#0E3B3C]/70 px-4 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <Menu className="h-6 w-6 text-[#D4AF37]" />
            <span className="font-semibold tracking-wide text-[#D4AF37]">Via Roma • Sassari</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <button
                key={l.key}
                onClick={() => onNavigate(l.key)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  currentPage === l.key
                    ? 'text-[#D4AF37]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="tel:+39000000000"
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/5 px-4 py-2 text-sm text-[#D4AF37] transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Prenota
            </a>
            <a
              href="https://maps.app.goo.gl/drpoTU9JPW2uy4VR8"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-xs text-white/70 hover:text-white md:flex"
            >
              <MapPin className="h-4 w-4 text-[#D4AF37]" /> Dove siamo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
