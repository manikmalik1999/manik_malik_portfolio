import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function MyIntroduction() {
  const testimonials = [
    {
      quote:
        "Building & Scaling systems like it’s my superpower (because it is) – cloud native sorcerer and master of microservices mayhem.",
      name: "Shikhar Srivastava",
      designation: "AI Enthusiastic Software Engineer/Developer",
      src: "/shikharPhotoNew.jpeg",
    },
    {
        quote:
          "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Shikhar Srivastava",
        designation: "Master's in Data Science Student at Friedrich-Alexander-Universität-Erlangen-Nürnberg",
        src: "/shikharFauPhoto.jpeg",
      }
  ];
  return <div className="-mt-10" id="myintroduction"><AnimatedTestimonials testimonials={testimonials} /></div>;
}
