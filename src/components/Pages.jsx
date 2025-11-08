import { useEffect } from 'react';

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#0E3B3C] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-[#D4AF37]">La nostra filosofia</h2>
            <p className="mt-4 text-white/80">
              Materie prime locali, tecnica contemporanea e una carta dei vini selezionata per valorizzare ogni abbinamento. Un percorso tra tradizione e innovazione nel cuore di Sassari.
            </p>
          </div>
          <div>
            <img
              className="rounded-2xl shadow-2xl ring-1 ring-white/10"
              src="https://images.unsplash.com/photo-1541542684-4a3bfb4c5c65?q=80&w=1600&auto=format&fit=crop"
              alt="Chef e piatto signature"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      title: 'Antipasti',
      items: [
        { name: 'Tartare di tonno', desc: 'Capperi, agrumi, olio evo sardo', price: '16' },
        { name: 'Carpaccio di manzo', desc: 'Scaglie di pecorino, rucola', price: '14' },
      ],
    },
    {
      title: 'Primi',
      items: [
        { name: 'Fregola ai frutti di mare', desc: 'Brodetto di pesce, prezzemolo', price: '18' },
        { name: 'Ravioli di ricotta', desc: 'Burro, salvia, bottarga', price: '16' },
      ],
    },
    {
      title: 'Secondi',
      items: [
        { name: 'Filetto di orata', desc: 'Verdure di stagione, emulsione di limone', price: '22' },
        { name: 'Agnello in crosta di erbe', desc: 'Riduzione al cannonau', price: '24' },
      ],
    },
    {
      title: 'Dessert',
      items: [
        { name: 'Seadas', desc: 'Miele di corbezzolo', price: '8' },
        { name: 'Tiramisù classico', desc: 'Cacao amaro, savoiardi artigianali', price: '7' },
      ],
    },
  ];

  return (
    <div className="bg-[#0E3B3C] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-4xl text-[#D4AF37]">Menù</h2>
        <p className="mt-2 text-white/70">Una selezione che cambia con le stagioni.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-2xl text-[#D4AF37]">{s.title}</h3>
              <ul className="mt-4 space-y-4">
                {s.items.map((it) => (
                  <li key={it.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{it.name}</p>
                      <p className="text-sm text-white/70">{it.desc}</p>
                    </div>
                    <span className="text-[#D4AF37]">€ {it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#0E3B3C] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-4xl text-[#D4AF37]">Contattaci</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form className="space-y-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <div>
              <label className="block text-sm text-white/80">Nome</label>
              <input className="mt-1 w-full rounded-lg border-none bg-white/10 p-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Il tuo nome" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border-none bg-white/10 p-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="name@email.com" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Messaggio</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border-none bg-white/10 p-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Scrivici come possiamo aiutarti" />
            </div>
            <button type="button" className="w-full rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#0A2F30] transition hover:bg-[#E2BE4C]">Invia richiesta</button>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="text-2xl text-[#D4AF37]">Dove siamo</h3>
              <p className="mt-2 text-white/80">Nel centro di Sassari, facilmente raggiungibile. Clicca sulla mappa per aprire le indicazioni.</p>
              <a
                href="https://maps.app.goo.gl/drpoTU9JPW2uy4VR8"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block overflow-hidden rounded-xl ring-1 ring-white/10"
              >
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Sassari,Italy&zoom=15&size=800x400&scale=2&maptype=roadmap&markers=color:gold%7Clabel:S%7C40.7272,8.5603&key="
                  alt="Mappa di Sassari"
                  className="h-56 w-full object-cover"
                />
              </a>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-white/80">Telefono: +39 079 000000</p>
              <p className="text-white/80">Email: prenotazioni@viaroma.it</p>
              <p className="text-white/80">Indirizzo: Via Roma, Sassari</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
