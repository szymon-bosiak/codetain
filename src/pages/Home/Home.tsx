import "./home.css"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const homeColumns = [
  {
    title: "On Perception and Judgment",
    quotes: [
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
      "The universe is change; our life is what our thoughts make it.",
    ],
  },
  {
    title: "On Acceptance and Duty",
    quotes: [
      "What doesn't transmit light creates its own darkness.",
      "Let each thing you would do, say or intend be like that of a dying person.",
    ],
  },
  {
    title: "On Inner Strength and Virtue",
    quotes: [
      "You have power over your mind – not outside events. Realize this, and you will find strength.",
      "Waste no more time arguing what a good man should be. Be one.",
    ],
  },
]

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <motion.div
          className="home__heading"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1>Szymon Bosiak</h1>
        </motion.div>

        <motion.div
          className="home__columns"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {homeColumns.map((column, index) => (
            <motion.div
              key={index}
              className="home__column"
              variants={fadeInUp}
            >
              <h2>{column.title}</h2>
              {column.quotes.map((quote, qIndex) => (
                <motion.p key={qIndex} variants={fadeInUp}>
                  {quote}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home
