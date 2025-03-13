import "./assets/styles/global.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Movies from "./pages/Movies/Movies"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { AnimatePresence, motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/movies"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Movies />
            </motion.div>
          }
        />
        <Route
          path="/movie/:movieId"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <MovieDetails />
            </motion.div>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App
