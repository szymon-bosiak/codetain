import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="home_content">
        <div className="home_content-heading">
          <h1>Szymon Bosiak</h1>
        </div>
        <div className="home_content-columns">
          <div className="home_content-column">
            <h2>On Perception and Judgment</h2>
            <p>
              "Everything we hear is an opinion, not a fact. Everything we see
              is a perspective, not the truth."
            </p>
            <p>
              "The universe is change; our life is what our thoughts make it."
            </p>
          </div>
          <div className="home_content-column">
            <h2>On Acceptance and Duty</h2>
            <p>"What doesn't transmit light creates its own darkness."</p>
            <p>
              "Let each thing you would do, say or intend be like that of a
              dying person."
            </p>
          </div>
          <div className="home_content-column">
            <h2>On Inner Strength and Virtue</h2>
            <p>
              "You have power over your mind – not outside events. Realize this,
              and you will find strength."
            </p>
            <p>
              "Waste no more time arguing what a good man should be. Be one."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
