import styles from "./About.module.css";
import Navbar from "../Navbar/Navbar";
import maxi from "./imagenes/maxiPerfil.jpg";
import matiball from "./imagenes/matiballPerfil.jpg";
import matisch from "./imagenes/matischPerfil.jpg";
import sol from "./imagenes/solPerfil.jpg";
import ivan from "./imagenes/ivanPerfil.jpg";
import cristian from "./imagenes/cristianPerfil.jpg";
import joni from "./imagenes/joniPerfil.jpg";
import flor from "./imagenes/florPerfil.jpg";
import linkedin from "./imagenes/linkedin.png";
import github from "./imagenes/github.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Navbar />
      <div>
        <Link to="/home">
          <button className={styles.botonR}>Go Back</button>
        </Link>
        <div className={styles.padre}>
          <div className={styles.container}>
            <div>
              <h1 className={styles.title}>Web Developers</h1>
            </div>
            <div className={styles.dosColumnas}>
              <div className={styles.columnaUno}>
                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={matiball} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Matías Ballestá</h3>
                    <p>Team Wallaby Full Stack</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/matias-ballest%C3%A1-207b9915a/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/matiasballesta">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={matisch} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Matías Schmidt</h3>
                    <p>Team Wallaby Frontend</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/matias-schmidt-48486723a/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/mschmidt17">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={cristian} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Cristian Lair</h3>
                    <p>Team Wallaby Backend</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/cristian-lair-8ab7971b8/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/CristianLair">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={joni} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Jonathan Caliva</h3>
                    <p>Team Wallaby Frontend</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jonathan-andres-caliva-891328172/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/JonathanCaliva">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={sol} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Sol Olmos</h3>
                    <p>Team Wallaby Frontend</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/sol-olmos-15b166b8/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/sololmos">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={ivan} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Ivan Koch</h3>
                    <p>Team Wallaby Full Stack</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/ivan-koch-b32a77239/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/Krieger28">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={maxi} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Maximiliano Giraudo</h3>
                    <p>Team Wallaby Frontend</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/maximiliano-giraudo-2a1933119/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/maxigiraudo">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.card}>
                  <div className={styles.imageTitulo}>
                    <img className={styles.imagen} src={flor} alt="img" />
                    <p className={styles.fullstack}>Full Stack Developer</p>
                  </div>
                  <div className={styles.letras}>
                    <h3>Florencia Aguirre</h3>
                    <p>Team Wallaby Full Stack</p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/floaguirre/"
                    >
                      <img
                        className={styles.imagenLogo}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                    <a target="_blank" href="https://github.com/floaguirre">
                      <img
                        className={styles.imagenLogog}
                        src={github}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
