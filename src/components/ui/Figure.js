import Photo from "./Photo";

export default function Figure({ caption, ...photo }) {
  return (
    <figure className="figure">
      <Photo {...photo} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
