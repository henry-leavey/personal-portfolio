// src/components/Skills.js
import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiFirebase,
  SiSass,
  SiBootstrap,
  SiFlutter,
  SiUnity,
} from 'react-icons/si';

import { FaJava, FaSwift } from 'react-icons/fa';

const skills = [
  { icon: <FaJava />, label: 'Java' },
  {
    icon: (
      <img
        src="/icons/kotlin.png"
        alt="Kotlin"
        className="w-10 h-10 object-contain"
      />
    ),
    label: 'Kotlin',
  },
  { icon: <FaSwift />, label: 'Swift' },
  { icon: <SiFlutter />, label: 'Flutter' },
  { icon: <SiReact />, label: 'React Native' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <SiUnity />, label: 'Unity' },
  { icon: <SiHtml5 />, label: 'HTML' },
  { icon: <SiCss3 />, label: 'CSS' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiSass />, label: 'Sass' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS' },
  { icon: <SiReact />, label: 'React' },
  { icon: <SiNextdotjs />, label: 'NextJS' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiNodedotjs />, label: 'NodeJS' },
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiFigma />, label: 'Figma' },
];

const Skills = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-slate-300">Here is my Skills for success.</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, idx) => (
            <div
            key={idx}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl text-white mb-2">{skill.icon}</div>
              <p className="text-sm text-slate-400">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
