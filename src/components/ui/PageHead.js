import Image from "next/image";

export default function PageHead({ title, intro, image = "/images/facility/shop-floor-wide.jpg", imagePosition }) {
  return (
    <section className="page-head on-dark">
      <div className="hero__bg">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
      <div className="wrap">
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
