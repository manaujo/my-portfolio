import React from 'react';

function Skills() {
  const skills = ["Go", "Java", "Javascript", "React", "Node.js", "React Native", "SQL", "Git",];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
