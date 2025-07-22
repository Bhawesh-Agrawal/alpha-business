export default function Card({
  id,
  title,
  description,
  promo,
  image,
}: {
  id: number;
  title: string;
  description: string;
  promo: string;
  image: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Image Card */}
      <div
        className="relative h-96 bg-cover bg-center rounded-xl shadow-md overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay (only visible on group hover) */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* --- MODIFIED BUTTON --- */}
        {/* It now has its own centered position, style, and hover effect. */}
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     px-5 py-2.5
                     text-lg font-semibold text-white
                     border-2 border-white/75 rounded-lg
                     opacity-0 group-hover:opacity-100 
                     hover:bg-white/20 hover:border-white
                     transition-all duration-300 ease-in-out"
        >
          View Product
        </button>
      </div>

      {/* Promo + Description */}
      <div className="flex flex-col gap-2 px-1">
        <p className="text-black font-semibold text-lg">{promo}</p>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}