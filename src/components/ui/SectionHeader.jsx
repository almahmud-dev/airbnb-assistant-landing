export default function SectionHeader({ title, highlight, description }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {title} <span className="text-[#F72585]">{highlight}</span>
      </h2>
      {description && (
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}