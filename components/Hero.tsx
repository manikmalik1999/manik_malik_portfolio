import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { LampContainer } from './ui/lamp';

const Hero = () => {
  return (
    <div className="py-30" id="hero">
    <LampContainer>
      <div className="flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100">
          DIGITAL PORTFOLIO
        </p>
        <TextGenerateEffect
          words="Architecting intelligent systems so seamless, even my cat could deploy them—no bugs, just brilliance."
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <p className="text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-2xl">
          Hi, I&apos;m Shikhar, a digital craftsman from Germany. I blend AI, cloud-native innovation, and a dash of caffeine to convert raw ideas into intelligent, scalable systems. Say goodbye to buggy code and hello to automation that truly works!
        </p>
        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </LampContainer>
    </div>
  );
};

export default Hero;
