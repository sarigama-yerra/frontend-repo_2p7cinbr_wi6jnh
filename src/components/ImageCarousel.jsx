import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop',
    alt: 'Dettaglio piatto gourmet',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop',
    alt: 'Sala elegante del ristorante',
  },
  {
    src: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2000&auto=format&fit=crop',
    alt: 'Piatto di mare con ingredienti locali',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop',
    alt: 'Dessert raffinato',
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section className="bg-[#0E3B3C] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">La nostra esperienza</h2>
            <p className="mt-2 text-white/70">Location suggestiva e piatti curati in ogni dettaglio.</p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Precedente"
              onClick={prev}
              className="rounded-full border border-[#D4AF37]/40 bg-white/5 p-2 text-[#D4AF37] transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Successivo"
              onClick={next}
              className="rounded-full border border-[#D4AF37]/40 bg-white/5 p-2 text-[#D4AF37] transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full transition ${
                i === index ? 'bg-[#D4AF37]' : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Vai alla slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
