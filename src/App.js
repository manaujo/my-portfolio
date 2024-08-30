import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const projects = [
    {
      title: "Projeto Pizzaria",
      description: "Projeto de uma Pizzaria usando NodeJS para backend + (banco de dados), ReactJS para frontend e React Native para desenvolver aplicativos Android e iOS.",

      technologies: ["JavaScript", "React", "Node.Js", "React Native", "TypeScript."],
      link: "https://github.com/manaujo"
    },
    {
      title: "Desenvolvimento de uma aplicação de rede social",
      description: "Desenvolver uma rede social utilizando a linguagem Go, Utilizando Go para desenvolvimento front-end e back-end. usando concorrência, Construindo uma aplicação de linha de comando, API altamente robusta e escalável utlizando boas práticas.",
      technologies: ["Go", "Concorrência", "API", "Banco de Dados."],
      link: "https://github.com/manaujo"
    },

  ];

  return (
    <div>
      <Header />
      <section id="about">
        <h2>Sobre Mim</h2>
        <p>
        Sou desenvolvedor de software em JavaScript, com experiência em criar aplicações utilizando React, 
        React Native e Node.js. Além disso, possuo uma base sólida em Java, Golang e outras tecnologias como Docker, MySQL, e APIs,
         que estou constantemente aprimorando por meio de cursos e estudos. Minha paixão é resolver problemas complexos e otimizar 
         o desempenho de sistemas, buscando sempre a melhor solução para os desafios que surgem no desenvolvimento de software.
        </p>
      </section>
      <section id="projects">
        <h2>Projetos</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
