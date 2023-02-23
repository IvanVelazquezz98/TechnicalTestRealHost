import React, { useState } from 'react';
import linkedin from './linkedin.png'
import git from './git.png'
import styles from './My.module.css'

const My = () => {

  return (
    <div>
      <h2>Ivan Emanuel Velazquez - Full Stack Developer</h2><div>
        <div>
          <img src={'https://media.licdn.com/dms/image/D4D35AQFVQDUciGtSyQ/profile-framedphoto-shrink_200_200/0/1674956213911?e=1677715200&v=beta&t=jkhkEtw6jGGwy9qJAlRi9C5qdA4OiqFo6bgFZlNWY6Q'} /></div>
        <div></div></div>
      <br></br>
      <h3 className={styles.divTitle}>Te cuento un poco sobre mí:</h3>
      <p>Desarrollador Web FullStack con capacidad de aprendizaje, y pensamiento creativo.
        Quiero ser parte de un equipo donde pueda crecer de manera personal,
        donde pueda desarrollar y mejorar mis habilidades, ayudar a crecer a mis compañeros y alcanzar todos los objetivos.

        Actualmente me encuentro cursando la carrera de Licenciatura en Informática en la UNQ (Universidad Nacional de Quilmes).
        Terminé bootcamp soy Henry, en el que realize de forma exitosa todos los proyectos necesarios para la graduación. Estoy listo para nuevos desafíos en el mundo de la programación.
      </p>
      <br></br>
      <h3 className={styles.divTitle}>Sobre la prueba técnica:  </h3>
      <p>
        Nunca había utilizado Sagas (había utilizado thunk) y me pareció un lindo desafío.
        También veo que Sagas es mucho más completo y era un mundo que desconocía por así que me ayudo para aprender algo nuevo.
        Espero que les haya gustado, intente enfocarme lo más posible en usar las mejores prácticas que conozco.
        Ya es mi tercer prueba técnica, algunos dicen que la tercera es la vencida :).
      </p>
      <h3 className={styles.divTitle}>Mis redes y demás vínculos:</h3>
      <h4>Email:</h4><h5>Velazquez.ivan.e98@gmail.com</h5>
      <div> <h5>Linkedin: </h5>  <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/ivan-velazquez-a095aa243/"
        target="_blank"
      >
        <img className={styles.image} alt="linkedin" src={linkedin} />
      </a>
        <h5>GitHub:</h5><a
          rel="noreferrer"
          href="https://github.com/IvanVelazquezz98/"
          target="_blank"
        >
          <img className={styles.image} alt="github" src={git} />
        </a>
        </div>
    </div>
  )
}

export default My;