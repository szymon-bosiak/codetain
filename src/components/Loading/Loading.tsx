import "./loading.css"
import { GiDeathStar } from "react-icons/gi"
import { motion } from "framer-motion"

function Loading() {
  return (
    <div className="loading">
      <motion.div
        className="loading-icon"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <GiDeathStar />
      </motion.div>
    </div>
  )
}

export default Loading
