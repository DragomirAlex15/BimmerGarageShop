import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <video autoPlay muted loop className="background-video">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="home-content">
          <h1>BimGarage</h1>
          <p>Custom Car Culture</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
