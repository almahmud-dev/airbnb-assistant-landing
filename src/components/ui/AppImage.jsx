import NextImage from "next/image";

export default function AppImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill,
  priority = false,
  style,
  sizes,
  quality = 75,
}) {
  if (fill) {
    return (
      <NextImage
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        style={style}
        sizes={sizes || "100vw"}
        quality={quality}
      />
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ height: "auto", ...style }}
      sizes={sizes}
      quality={quality}
    />
  );
}