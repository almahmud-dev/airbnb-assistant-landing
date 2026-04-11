export default function Container({ children, className }) {
  return (
    <div className={`mx-auto max-w-6xl px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}