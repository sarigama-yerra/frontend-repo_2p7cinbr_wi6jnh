import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A2F30] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl text-[#D4AF37]">Ristorante Via Roma</h3>
            <p className="mt-3 text-white/70">Nel cuore di Sassari, una cucina che esalta il territorio con un tocco contemporaneo.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm uppercase tracking-wider text-[#D4AF37]">Contatti</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#D4AF37]" /> +39 079 000000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#D4AF37]" /> prenotazioni@viaroma.it</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#D4AF37]" /> Via Roma, Sassari</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm uppercase tracking-wider text-[#D4AF37]">Seguici</h4>
            <div className="flex gap-3">
              <a href="#" className="rounded-full border border-[#D4AF37]/40 p-2 text-[#D4AF37] transition hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="rounded-full border border-[#D4AF37]/40 p-2 text-[#D4AF37] transition hover:bg:white/10 hover:bg-white/10"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Ristorante Via Roma — Tutti i diritti riservati
        </div>
      </div>
    </footer>
  );
}
