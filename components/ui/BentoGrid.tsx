'use client';

import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import Image from "next/image";


// Also install this npm i --save-dev @types/react-lottie
import Lottie from 'react-lottie';

import { cn } from '@/utils/cn';
import { BackgroundGradientAnimation } from './GradientBg';
import GridGlobe from './GridGlobe';
import animationData from '@/data/confetti.json';
import MagicButton from './MagicButton';
import InfiniteScroll from './InfiniteScroll';


export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = 'malikmanik145@gmail.com';
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  const items = [
    { content: <>
        <Image src="/techIcons/AndroidStudio.svg" alt="Android Studio" className="tech-icon" />
        Android Studio
    </> },
    { content: <>
        <Image src="/techIcons/AWS.svg" alt="AWS" className="tech-icon" />
        AWS
    </> },
    { content: <>
        <Image src="/techIcons/AzureDevops.svg" alt="Azure DevOps" className="tech-icon" />
        Azure DevOps
    </> },
    { content: <>
        <Image src="/techIcons/Confluence.svg" alt="Confluence" className="tech-icon" />
        Confluence
    </> },
    { content: <>
        <Image src="/techIcons/CosmosDB.svg" alt="Cosmos DB" className="tech-icon" />
        Cosmos DB
    </> },
    { content: <>
        <Image src="/techIcons/CSS3.svg" alt="CSS3" className="tech-icon" />
        CSS3
    </> },
    { content: <>
        <Image src="/techIcons/FastAPI.svg" alt="FastAPI" className="tech-icon" />
        FastAPI
    </> },
    { content: <>
        <Image src="/techIcons/Firebase.svg" alt="Firebase" className="tech-icon" />
        Firebase
    </> },
    { content: <>
        <Image src="/techIcons/Git.svg" alt="Git" className="tech-icon" />
        Git
    </> },
    { content: <>
        <Image src="/techIcons/GitHub.svg" alt="GitHub" className="tech-icon" />
        GitHub
    </> },
    { content: <>
        <Image src="/techIcons/GitLab.svg" alt="GitLab" className="tech-icon" />
        GitLab
    </> },
    { content: <>
        <Image src="/techIcons/Inkscape-.svg" alt="Inkscape" className="tech-icon" />
        Inkscape
    </> },
    { content: <>
        <Image src="/techIcons/IntelliJ-IDEA.svg" alt="IntelliJ IDEA" className="tech-icon" />
        IntelliJ IDEA
    </> },
    { content: <>
        <Image src="/techIcons/Java.svg" alt="Java" className="tech-icon" />
        Java
    </> },
    { content: <>
        <Image src="/techIcons/JavaScript.svg" alt="JavaScript" className="tech-icon" />
        JavaScript
    </> },
    { content: <>
        <Image src="/techIcons/Jenkins.svg" alt="Jenkins" className="tech-icon" />
        Jenkins
    </> },
    { content: <>
        <Image src="techIcons/Jira.svg" alt="Jira" className="tech-icon" />
        Jira
    </> },
    { content: <>
        <Image src="/techIcons/Keras.svg" alt="Keras" className="tech-icon" />
        Keras
    </> },
    { content: <>
        <Image src="/techIcons/Kotlin.svg" alt="Kotlin" className="tech-icon" />
        Kotlin
    </> },
    { content: <>
        <Image src="/techIcons/Kubernetes.svg" alt="Kubernetes" className="tech-icon" />
        Kubernetes
    </> },
    { content: <>
        <Image src="/techIcons/Linux.svg" alt="Linux" className="tech-icon" />
        Linux
    </> },
    { content: <>
        <Image src="/techIcons/MongoDB.svg" alt="MongoDB" className="tech-icon" />
        MongoDB
    </> },
    { content: <>
        <Image src="/techIcons/MySQL.svg" alt="MySQL" className="tech-icon" />
        MySQL
    </> },
    { content: <>
        <Image src="/techIcons/Next.js.svg" alt="Next.js" className="tech-icon" />
        Next.js
    </> },
    { content: <>
        <Image src="/techIcons/Node.js.svg" alt="Node.js" className="tech-icon" />
        Node.js
    </> },
    { content: <>
        <Image src="/techIcons/Postman.svg" alt="Postman" className="tech-icon" />
        Postman
    </> },
    { content: <>
        <Image src="/techIcons/Powershell.svg" alt="PowerShell" className="tech-icon" />
        PowerShell
    </> },
    { content: <>
        <Image src="/techIcons/Python.svg" alt="Python" className="tech-icon" />
        Python
    </> },
    { content: <>
        <Image src="/techIcons/PyTorch.svg" alt="PyTorch" className="tech-icon" />
        PyTorch
    </> },
    { content: <>
        <Image src="/techIcons/Redis.svg" alt="Redis" className="tech-icon" />
        Redis
    </> },
    { content: <>
        <Image src="/techIcons/Spring.svg" alt="Springboot" className="tech-icon" />
        Springboot
    </> },
    { content: <>
        <Image src="/techIcons/Streamlit.svg" alt="Streamlit" className="tech-icon" />
        Streamlit
    </> },
    { content: <>
        <Image src="/techIcons/TailwindCSS.svg" alt="Tailwind-CSS" className="tech-icon" />
        Tailwind-CSS
    </> },
    { content: <>
        <Image src="/techIcons/TensorFlow.svg" alt="TensorFlow" className="tech-icon" />
        TensorFlow
    </> },
    { content: <>
        <Image src="/techIcons/TypeScript.svg" alt="TypeScript" className="tech-icon" />
        TypeScript
    </> },
    { content: <>
        <Image src="/techIcons/VSC.svg" alt="Visual Studio Code" className="tech-icon" />
        Visual Studio Code
    </> },
  ];
  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div style={{height: '500px', position: 'relative'}}>
                <InfiniteScroll
                  items={items}
                  isTilted={true}
                  tiltDirection='left'
                  autoplay={true}
                  autoplaySpeed={0.1}
                  autoplayDirection="down"
                  pauseOnHover={true}
                  />
                </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {/* <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                /> */}
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
