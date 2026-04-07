import NextImage from "next/image";

export default function AppImage({ src, alt, width = 48, height = 48, className = "" }) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}