import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-auto max-w-7xl px-8 py-8 grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />

        <article>
          <SectionTitle text="Code And Coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Passionate Frontend Developer with expertise in HTML, CSS,
            JavaScript, and React. I specialize in creating seamless and
            engaging web experiences. Let's bring your ideas to life with the
            power of code and creativity.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
