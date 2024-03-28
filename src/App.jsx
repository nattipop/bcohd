import { useEffect } from "react";
import "./css/App.css"

function App() {
  useEffect(() => {
    document.title = "Website Example | Home"
    window.scrollTo(0, 0);
  }, [])
  return (
    <div id="home">
      <section id="hero-section">
        <div id="hero">
          <img id="hero-background" src="https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/366348802_234916502846127_4754259628068731190_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7HYhV3kiB8gAX8CX8HN&_nc_ht=scontent-msp1-1.xx&oh=00_AfCfSGzS0ceyib_snnasioqPAstKCe_ND178urCLf6IZng&oe=660A15FE" alt="" />
          <h1 id="hero-header">Barron County Overhead Doors</h1>
        </div>
      </section>
      <section id="about-section">
        <div className="row">
          <div className="col-4">
            <img id="about-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1711467410/linkedin-sales-solutions-pAtA8xe_iVM-unsplash_wugsfz.jpg" alt="" />
          </div>
          <div className="col-8" id="about-text">
            <h3>This filler text will be replaced by a write-up about your business. It should be short, friendly and informative</h3>
          </div>
        </div>
      </section>
      <section id="services-section">
        <div className="row">
          <div className="col home-service">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1710719289/blake-verdoorn-cssvEZacHvQ-unsplash_pkqqun.jpg" className="service-images" alt="" />
            <h1 className="service-header">Service</h1>
            <h3 className="service-description">This is a service description. The quick brown fox jumps over the lazy dog.</h3>
          </div>
          <div className="col home-service">
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1710719208/jorge-vasconez-c4cWawGBFv8-unsplash_i1yyc3.jpg" className="service-images" alt="" />
            <h1 className="service-header">Service</h1>
            <h3 className="service-description">This is a service description. The quick brown fox jumps over the lazy dog.</h3>
          </div>
          <div className="col home-service">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1710719398/jesse-gardner-9DHyVy-G1rM-unsplash_h6eiyt.jpg" className="service-images" alt="" />
            <h1 className="service-header">Service</h1>
            <h3 className="service-description">This is a service description. The quick brown fox jumps over the lazy dog.</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
