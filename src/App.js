import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const projects = [
    {
      title: "API RESTful para Gerenciamento de Tarefas",
      description: "Uma API completa para gerenciamento de tarefas, com autenticação JWT, CRUD para usuários e tarefas, e integração com PostgreSQL.",
      technologies: ["Go", "Gin", "GORM", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      title: "Serviço de Chat em Tempo Real",
      description: "Um servidor de chat em tempo real utilizando WebSockets, permitindo comunicação instantânea entre múltiplos clientes.",
      technologies: ["Go", "Gorilla WebSocket", "Redis", "Docker"],
      link: "#"
    },
    // Adicione outros projetos aqui
  ];

  return (
    <div>
      <Header />
      <section id="about">
        <h2>Sobre Mim</h2>
        <p>
          Sou um Software Developer especializado em Go (Golang) com experiência
          em criar aplicações robustas e escaláveis. Tenho cursos de Java, Golang,
          Javascript, React, Node.js e React Native, e sou apaixonado por resolver
          problemas complexos e otimizar o desempenho de sistemas.
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
