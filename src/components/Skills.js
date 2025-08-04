// src/components/Skills.js
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNodedotjs,
  SiJupyter,
  SiGooglecolab,
  SiUnity,
  SiDotnet,
} from 'react-icons/si';

const skills = [
  { icon: <SiPython />, label: 'Python' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiHtml5 />, label: 'HTML' },
  { icon: <SiCss3 />, label: 'CSS' },
  { icon: <SiDotnet />, label: '.NET' },
  { icon: <SiUnity />, label: 'Unity' },
  { icon: <SiTensorflow />, label: 'TensorFlow' },
  { icon: <SiKeras />, label: 'Keras' },
  { icon: <SiPandas />, label: 'pandas' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiGit />, label: 'Git/GitHub' },
  { icon: <SiJupyter />, label: 'Jupyter Notebook' },
  { icon: <SiGooglecolab />, label: 'Google Colab' },
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
