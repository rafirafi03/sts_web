import Image from "next/image";

/**
 * Fixed-ratio photo. Uses `fill` so the crop is handled by CSS and the
 * source files can be swapped without touching width/height props.
 */
export default function Photo({ src, alt, ratio = "4x3", sizes = "(min-width: 900px) 560px, 100vw", priority = false }) {
  return (
    <div className={`photo photo--${ratio}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}
