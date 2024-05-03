import { useEffect } from "react";
import "./css/App.css"
import logo from "/BarronCountyOverheadDoors.Orange.png";
import iconImage from "/Bcohd.png";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
    script.async = true;

    document.body.appendChild(script);
  })
  return (
    <div id="home">
      <section id="hero-section">
        <div id="hero">
           <div className="pa-carousel-widget" style={{width: "100vw", height: "600px", display: "none", zIndex: "1", position: "static"}}
              data-link="https://photos.app.goo.gl/jxnJxALwEdmTB6u76"
              data-title="BCOHD"
              data-description="8 new items added to shared album"
              data-background-color="#242424">
              <object data="https://lh3.googleusercontent.com/pw/AP1GczNhQ1zqLen40o1Y43SfB7pWLqfImtGyQEVukAafuIwCagjfuXKMTjTInHox4nimaNFEhkhojrR7qWOO1w6eHGMdBhir1czz-hZ8ffhJoXMb6cZQMek=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczPLNNGYYJxMvwcDytEcrCZPwG543PHtdlUdmxuT1kAs0-S74MQZgPM2ySsCmPNZhaaV2bmG7-X76D_gOM3w2Jv6-ivhzfkc4-hwbu3P6f2m5G-x1dQ=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczNaZQXbV_ZlzFLJIQTaZF7qiT8jSvhqjFDaeW-OeWEjmZagyXLvxN3Rlk9OZ_Nu0hW7wusFf9KaYkLgObVDXmkNY26C4hftn5HrtWl19zLQyU8mSDc=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczNIfRTA2bjFQ4AGsqWDuoLhpszRLQkS--uG3H6GbdFZ7MpqEsbhc3xgPKKCI8ifVI2tOhbB1vd4y8WvCbvjzF8B86yb13l57aFEkX1jS9fXLo-a9JE=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczMgl2HDYNycZTTnTDCPEp-Im3nQ2RCLLDnjFCdDKXV1XpD6HH1pog2Ugg01PPKd4pLWfCP9Tfm9b_s06tQhcPg9DPOmarOYgA2iDHsr6f4vR6gFld8=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczN41kVOaMiawtK_GzyaDT6Q2wCnDHMzQxpmwMFL6jxFo2vK380B1KoBe_zX8Dal7JKjAXUcIGg2DPJJwqa39RxKXruXhaLe-HHhBM8np1LKWRKmNVI=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczPPH7d1zG9S-3do8qHg4lTRdL9jC9lvL40xCN9Z6teCVfbqR0e3gKGMn500C5MtlHOCLLVeGPXsyQbqJT4LjoFJwlgqIX-x500h20qWLh5hIjy3Zrs=w1920-h1080"></object>
              <object data="https://lh3.googleusercontent.com/pw/AP1GczM_Y-YrnkaZ37sj6JFqMKabwkb2e2brPg_PupEFagT3njJH3CkT5GjELISFlVNa5PIogTOaD-OOCJNvAkBbTkxhoqOradJtcIihFzRL8Ee4S0aP-II=w1920-h1080"></object>
            </div>{/* <img id="hero-background" src="https://res.cloudinary.com/dawteptkh/image/upload/c_crop,h_554,w_1108/v1712594724/366348802_234916502846127_4754259628068731190_n_kdfwmz.jpg" alt="" /> */}
          <div id="logo-hero">
           

            <img alt="" src={logo} />
          </div>
        </div>
      </section>
      <div id="icon">
        <img src={iconImage} alt="" />
      </div>
      <div id="number">
        <h2>715-931-7924</h2>
      </div>
      <section id="map-section">
        <iframe
          width="700"
          height="450"
          style={{border:"0"}}
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDeq9ZDHk_5yIu_upHgfurpt4eQM3UF0EE
          &q=Barron+County+WI">
        </iframe>
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
        <div className="home-service">
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1712594746/424569635_336349606036149_1377031431520613176_n_xvzkcn.jpg" className="service-images" alt="" />
          <h1 className="service-header">Service</h1>
          <h3 className="service-description">This is a service description. The quick brown fox jumps over the lazy dog.</h3>
        </div>
        <div className="home-service">
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1712594741/421483019_331679836503126_1834004321399508433_n_rfx8rw.jpg" className="service-images" alt="" />
          <h1 className="service-header">Service</h1>
          <h3 className="service-description">This is a service description. The quick brown fox jumps over the lazy dog.</h3>
        </div>
        <div className="col-4 home-service">
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1712594730/392875929_274104815593962_8239132060169234559_n_esiucq.jpg" className="service-images" alt="" />
          <h1 className="service-header">Service</h1>
          <h3 className="service-description">This is a service description. The quick brown fox jumps over the lazy dog.</h3>
        </div>
      </section>
    </div>
  )
}

export default App
