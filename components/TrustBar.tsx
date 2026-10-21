const clients = [
  "Alera Health",
  "OQpin",
  "L&M Energy",
  "Emersn",
  "JCS info solutions",
  "Bezvada Biomed",
];

export function TrustBar() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl border-x border-line">
        <p className="px-6 pt-8 pb-5 text-sm text-cool-gray-500 md:px-10">Trusted by operations teams at</p>
        <ul className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((name) => (
            <li
              key={name}
              className="flex h-20 items-center justify-center bg-canvas px-4 text-center font-display text-base font-medium tracking-tight text-cool-gray-400"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
