export default function SectionHeader({ title, highlight, description, className = "" }) {
  return (
    <div className={`text-center mb-13.5 ${className}`}>
      <h2 className="text-[32px] font-bold text-[#000000] mb-3.5">
        {title}{" "}
        {highlight && <span className="text-[#ED3C6A]">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-[#000000] text-sm leading-relaxed max-w-184.5 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}