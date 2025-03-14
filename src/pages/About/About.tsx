import { useState } from "react"
import "./about.css"
import gaming from "../../assets/images/gaming.jpg"
import art from "../../assets/images/building.jpg"
import workout from "../../assets/images/workout.jpg"
import { FaReact, FaVuejs, FaSass, FaCss3, FaGitSquare } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiNuxtdotjs,
  SiKnexdotjs,
  SiVite,
  SiAxios,
} from "react-icons/si"
import { AnimatePresence, motion } from "framer-motion"

function About() {
  interface GalleryItem {
    title: string
    img: string
    desc: string
  }

  const contentVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  const gallery = [
    {
      title: "Workout",
      img: workout,
      desc: "Physical exertion clears my mind, providing a vital counterbalance to my creative pursuits. It's where I build resilience, both mentally and physically, pushing my limits beyond the digital and artistic realms.",
    },
    {
      title: "Art",
      img: art,
      desc: "I delve into the timeless beauty of ancient architecture, exploring its philosophical underpinnings through detailed drawings. This pursuit allows me to connect with history and translate complex concepts into tangible, visual forms.",
    },
    {
      title: "Gaming",
      img: gaming,
      desc: "Gaming offers an immersive escape, a chance to explore intricate worlds and solve complex challenges. It's a space for strategic thinking and collaborative problem-solving, fostering a different kind of creativity.",
    },
  ]

  const technologies = [
    {
      icon: <SiJavascript />,
      title: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <FaVuejs />,
      title: "Vue",
    },
    {
      icon: <FaCss3 />,
      title: "CSS",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <FaSass />,
      title: "Sass",
    },
    {
      icon: <SiNuxtdotjs />,
      title: "Nuxt.js",
    },
    {
      icon: <SiPostgresql />,
      title: "PostgreSQL",
    },
    {
      icon: <SiKnexdotjs />,
      title: "Knex.js",
    },
    {
      icon: <SiVite />,
      title: "Vite",
    },
    {
      icon: <FaGitSquare />,
      title: "Git",
    },
    {
      icon: <SiAxios />,
      title: "Axios",
    },
  ]

  const [clickedImg, setClickedImg] = useState<GalleryItem>(gallery[0])

  const handleImgClick = (img: GalleryItem) => {
    setClickedImg(img)
  }
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__heading">
          <h1>Szymon Bosiak</h1>
        </div>

        <div className="about__desc">
          <p>
            I am a developer with a passion for creating aesthetically pleasing
            applications, where I can combine my interest in design and art with
            attention to technical details. I am characterized by good
            communication skills, commitment, attention to detail and a desire
            to improve my skills.
          </p>
        </div>

        <div className="about__gallery">
          <AnimatePresence mode="wait">
            <motion.div
              key={clickedImg.title}
              className="about__gallery-selected"
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img
                className="about__gallery-selected-img"
                src={clickedImg.img}
                alt={clickedImg.title}
              />
              <div className="about__gallery-selected-desc">
                <h2>{clickedImg.title}</h2>
                <p>{clickedImg.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="about__selection">
            {gallery.map((item, index) => (
              <div
                key={index}
                onClick={() => handleImgClick(item)}
                className={`about__selection-item ${
                  clickedImg.title === item.title
                    ? "about__selection-item--active"
                    : ""
                }`}
              >
                <img src={item.img} alt={item.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="about__list">
          <h2>Technologies that I am familiar with:</h2>
          <div className="about__list-items">
            {technologies.map((tech, index) => (
              <div key={index} className="about__list-item">
                {tech.icon}
                <p>{tech.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
