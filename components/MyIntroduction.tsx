import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function MyIntroduction() {
  const testimonials = [
    {
      quote:
        "Building & Scaling systems like it’s my superpower (because it is) – cloud native sorcerer and master of microservices mayhem.",
      name: "Manik Malik",
      designation: "AI Enthusiastic Software Engineer/Developer",
      src: "/manik_malik2.jpeg",
    },
    {
        quote:
          "At FAU, I’ve mastered the art of explaining Kubernetes to my Kaffeeautomat—because even machines deserve a patient teacher (and caffeine-fueled pep talks).",
        name: "Manik Malik",
        designation: "Master's in Computational Engineering at Friedrich-Alexander-Universität-Erlangen-Nürnberg",
        src: "/manik_malik_1.jpeg",
      }
  ];
  return <div className="-mt-10" id="myintroduction"><AnimatedTestimonials testimonials={testimonials} /></div>;
}
