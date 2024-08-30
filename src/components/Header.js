import React from 'react';
import profilePic from './assets/profile.jpg';


function Header() {
  return (
    <header>
      <h1>Márcio Costa Araújo</h1>
      <img src={profilePic} alt="Márcio Araújo" style={{ width: '150px', borderRadius: '50%' }} />
      <p> Desenvolvedor de Software | JavaScript | React | React Native | Java | Go </p>
      <nav>
        <a href="https://www.linkedin.com/in/marcio-araujo-35b71b233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
        <a href="https://github.com/manaujo">GitHub</a>
        <a href="mailto:marcio.araujo.m7@gmail.com">Email</a>
      </nav>
    </header>
  );
}

export default Header;

