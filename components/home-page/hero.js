import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jatin.jpg"
          alt="An image showing Jatin Gambhir"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Jatin Gambhir</h1>
      <p>
        {" "}
        I blog about web development - especially frontend frameworks like
        NodeJS or React
      </p>
    </section>
  );
}

export default Hero;
