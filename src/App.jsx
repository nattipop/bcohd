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
  }, []);

  return (
    <div id="home">
      <section id="hero-section">
        <div id="hero" className="row">
          <div id="slideshow" className="pa-carousel-widget col" style={{width: "700px", height: "933px", display: "none"}}
            data-link="https://photos.app.goo.gl/jxnJxALwEdmTB6u76"
            data-title="BCOHD"
            data-description="10 new items added to shared album">
            <object data="https://lh3.googleusercontent.com/pw/AP1GczMhdAfeWJQk1MO4vxPfgmMy9MAcmgH0jf8aewhwIbo2Jp1sRwTDle7Hq9RNMGd118ScfTzjPp9o95RBJnnWQFB3OISK-T6TgX8pqaFHVDF5QeS9p6A=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczPLNNGYYJxMvwcDytEcrCZPwG543PHtdlUdmxuT1kAs0-S74MQZgPM2ySsCmPNZhaaV2bmG7-X76D_gOM3w2Jv6-ivhzfkc4-hwbu3P6f2m5G-x1dQ=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczNaZQXbV_ZlzFLJIQTaZF7qiT8jSvhqjFDaeW-OeWEjmZagyXLvxN3Rlk9OZ_Nu0hW7wusFf9KaYkLgObVDXmkNY26C4hftn5HrtWl19zLQyU8mSDc=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczMgl2HDYNycZTTnTDCPEp-Im3nQ2RCLLDnjFCdDKXV1XpD6HH1pog2Ugg01PPKd4pLWfCP9Tfm9b_s06tQhcPg9DPOmarOYgA2iDHsr6f4vR6gFld8=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczN41kVOaMiawtK_GzyaDT6Q2wCnDHMzQxpmwMFL6jxFo2vK380B1KoBe_zX8Dal7JKjAXUcIGg2DPJJwqa39RxKXruXhaLe-HHhBM8np1LKWRKmNVI=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczPPH7d1zG9S-3do8qHg4lTRdL9jC9lvL40xCN9Z6teCVfbqR0e3gKGMn500C5MtlHOCLLVeGPXsyQbqJT4LjoFJwlgqIX-x500h20qWLh5hIjy3Zrs=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczM_Y-YrnkaZ37sj6JFqMKabwkb2e2brPg_PupEFagT3njJH3CkT5GjELISFlVNa5PIogTOaD-OOCJNvAkBbTkxhoqOradJtcIihFzRL8Ee4S0aP-II=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczMuvKryXCjurtkmcTWOOXOoVOXU3taZm2SeBx9_Ha-UCpZrGLn_Khpbc2UHXYLj8Nz98Ah-j53PtdZnIB7q-K0igV_BbgyvUjOuYmSoorO6MM5zjhs=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczNuz_ClsIyrCPfoKpOEvTwEvhaRDHPILHx5r3jyFD961gytEYn9dVqDFrGNbEzJg6gl-HQFo-Uk1Pz7gmFb9urCACFSh4Vb5sCjxK5yyJBiMY23Xn0=w640-h853"></object>
            <object data="https://lh3.googleusercontent.com/pw/AP1GczN708iadeo4J3c4mf25ed38LlrPQQUJD0ILIAukRxBHUDFfHaqEBAaF_h5pphjePL_xVc1HNskp8YOq2IUseFnqEe6NOrEU2R-VOl_7raPn7GAJpIk=w640-h853"></object>
          </div>
          <div id="logo-hero" className="col">
            <img alt="" src={logo} />
          </div>
        </div>
      </section>
      <div id="icon">
        <img src={iconImage} alt="" onClick={() => {
          window.location.reload();
          window.scrollTo(0,0)
        }} />
      </div>
      <div id="number">
        <h2 id="number-header"><a href="tel:7159317924">715-931-7924</a></h2>
      </div>
      <div id="contact-div">
        <div className="row">
          <div className="contact-link-div">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1714782471/phone-call_1_ppxheg.png" alt="" className="contact-img" width="32px" />
            <a className="contact-links" href="tel:7159317924">715-931-7924</a>
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1714782475/mail_ywwaym.png" className="contact-img" alt="" width="32px" />
            <a className="contact-links" href="mailto:michaelstamps@outlook.com">michaelstamps@outlook.com</a>
          </div>
        </div>
      </div>
      <section id="map-section">
          <h3 id="map-text">Providing full Garage Door Services, Sales and Installation for Barron County and the surrounding area!</h3>
          <img id="map-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1714783925/Screen_Shot_2024-05-03_at_7.50.37_PM_iq1m98.png" alt="" />
      </section>
      <section id="about-section">
        <h2>About Michael</h2>
        <div>
          <div>
            <img id="about-image" src="https://res.cloudinary.com/dawteptkh/image/upload/v1712594735/404306440_295507313453712_3059014787345549309_n_n96kex.jpg" alt="" />
          </div>
            <h3 id="about-text">Hi! My name is Michael Stamps. I&apos;m a southern boy that has lived all over the south. My beautiful wife and I lived and worked in St. Louis, MO, for 8 years. We moved north to her hometown of Chetek in 2022 where I opened Barron County Overhead Doors LLC.<br/><br/>I began installing and repairing garage doors in high school and have since acquired 15 years of extensive experience in the overhead garage door industry handling residential and commercial installations and repairs. In my years of experience, I&apos;ve partnered with companies large and small to address a wide variety of needs.<br/><br/>In addition to garage doors, I also own True North Facilities Services LLC which handles residential and commercial maintenance. Previous roles have included Facilities Technician for Hillcraft Services which managed maintenance for over 150+ Aldi locations, Facilities Supervisor for Kaldi&apos;s Coffee Roasting Company, Facilities Director/Construction Manager for Domaine Wine Storage.<br/><br/>My wife and I have three beautiful children - 2 boys and a girl - who are our world. We enjoy hiking, traveling and great food and love all that the Northwoods has to offer.</h3>
        </div>
      </section>
      <section id="facebook-section">
        <div id="facebook-div">
          <h3 id="facebook-text">Latest from our <a href="https://www.facebook.com/profile.php?id=100089833360840">Facebook</a>:</h3>
          <div>
          <iframe id="facebook-iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089833360840&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1854438328352096" width="500" height="600" style={{border: "none",overflow:"hidden"}} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
          </div>
        </div>
      </section>
      <section id="footer">
        <div>
          <div className="footer-link-div">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1714782471/phone-call_1_ppxheg.png" alt="" className="contact-img" width="20px" />
            <a className="footer-links" href="tel:7159317924">715-931-7924</a>
          </div>
          <div className="footer-link-div">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1714782475/mail_ywwaym.png" className="contact-img" alt="" width="20px" />
            <a className="footer-links" href="mailto:michaelstamps@outlook.com">michaelstamps@outlook.com</a>
          </div>
          <p id="footer-credit">Website designed by <a href="https://www.vitawd.com">Vita Web Design</a></p>
          <p id="footer-credit">© 2024 Barron County Overhead Doors LLC</p>
        </div>
      </section>
    </div>
  )
}

export default App
