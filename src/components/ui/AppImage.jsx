import NextImage from "next/image";

export default function AppImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
  style,
  sizes,
  quality = 75,
}) {
  if (fill) {
    return (
      <NextImage
        src={src}
        alt={alt ?? "image"}
        fill
        className={className}
        priority={priority}
        style={{ objectFit: "cover", ...style }}
        sizes={sizes ?? "100vw"}
        quality={quality}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt ?? "image"}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      priority={priority}
      style={{ width: "auto", height: "auto", ...style }}
      sizes={sizes}
      quality={quality}
    />
  );
}
