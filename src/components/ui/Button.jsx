import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}) {
  const base =
    "inline-flex items-center gap-2 text-[14px] font-bold leading-[100%] py-[18px] pl-[22px] pr-[20.5px] rounded-[5px] transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: "bg-[#ED3C6A] hover:bg-[#d4006e] text-white",
    outline: "border border-[#F72585] text-[#F72585] hover:bg-[#F72585] hover:text-white",
    white:   "bg-white text-[#F72585] hover:bg-pink-50",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight size={10} />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowRight size={10} />}
    </button>
  );
}