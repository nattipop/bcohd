import "./css/App.css"

function App() {
  return (
    <div id="home">
      <section id="hero-section">
        <div id="hero">
          <img id="hero-background" src="https://res.cloudinary.com/dawteptkh/image/upload/v1712594724/366348802_234916502846127_4754259628068731190_n_kdfwmz.jpg" alt="" />
          <h1 id="hero-header">Barron County Overhead Doors</h1>
        </div>
      </section>
      <section id="about-section">
        <div>
          <div>
            <img id="about-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1712594735/404306440_295507313453712_3059014787345549309_n_n96kex.jpg" alt="" />
          </div>
            <h3 id="about-text">Hi! My name is Michael Stamps. I&apos;m a southern boy that has lived all over the south. My beautiful wife and I lived and worked in St. Louis, MO, for 8 years. We moved north to her hometown of Chetek in 2022 where I opened Barron County Overhead Doors LLC.<br/><br/>I began installing and repairing garage doors in high school and have since acquired 15 years of extensive experience in the overhead garage door industry handling residential and commercial installations and repairs. In my years of experience, ve partnered with companies large and small to address a wide variety of needs.<br/><br/>In addition to garage doors, I also own True North Facilities Services LLC which handles residential and commercial maintenance. Previous roles have included Facilities Technician for Hillcraft Services which managed maintenance for over 150+ Aldi locations, Facilities Supervisor for Kaldi&apos;s Coffee Roasting Company, Facilities Director/Construction Manager for Domaine Wine Storage.<br/><br/>My wife and I have three beautiful children - 2 boys and a girl - who are our world. We enjoy hiking, traveling and great food and love all that the Northwoods has to offer.</h3>
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
