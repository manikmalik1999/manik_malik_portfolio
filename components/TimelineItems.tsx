"use client";
import React from "react";
import FlowingMenu from "./ui/FlowingMenu";

const FlowingMenuDemo = () => {
  const demoItems = [
    { link: 'https://www.fau.de/', text: 'M.Sc in Data Science', image: '/faulogo.gif' },
    { link: 'https://www.bajajfinserv.in/', text: 'Senior Software Engineer', image: '/bajajlogo.gif' },
    { link: 'https://www.bajajfinserv.in/', text: 'Software Engineer', image: '/bajajlogo.gif' },
    { link: 'https://www.bajajfinserv.in/', text: 'Intern - Software Engineer', image: '/bajajlogo.gif' },
    { link: 'https://vitbhopal.ac.in/', text: 'B.Tech in CSE & Engineering', image: '/vitbhopal.png' },
  ];

  return (
    <div className="py-20" id="timeline"> {/* Changed background color */}
      <h1 className="heading">
        My <span className="text-purple">Timeline</span>
      </h1>    
      <div className="h-[600px] relative"> {/* Converted inline styles to Tailwind classes */}
      <FlowingMenu items={demoItems} />
    </div>
    </div>
  );
};

export default FlowingMenuDemo;