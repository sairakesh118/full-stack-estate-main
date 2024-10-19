import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser  } = useContext(AuthContext);
  const onview=()=>{

  }

  return (
    <div className="mainpage">
    <div className="homePage">
        <div className="homepagewrapper">
          <h1 className="hometitle">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Discover your dream property with us! Whether you're looking to buy your first home,
            sell an investment property, or find the perfect commercial space, our expert team is here to guide you every step of the way.
          </p>

          <button className="homebutton">view</button> 
        </div>
        
      </div>
      <div>

      <div className="searchbar">
          <SearchBar/>
          </div>
          
      <div className="boxes">
            <div >
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div >
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
            <div >
              <h1>7000+</h1>
              <h2>Customers</h2>
            </div>
          </div>
      </div>
      <section>
       
        <div className="reviewheading">
          <h1>what our customers say have to say?</h1>
        </div>
        <div className="reviewcardset">
        <div className="reviewcard">
                <div className="persondetail">
                  <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600" className="reviewimage"/>
                  <div className="reviewname">
                       <h2>sai</h2>
                       <p>australia</p> 
                  </div>
                  </div>
                  <p>
                  “The moment the keys change hands, a new chapter begins. Walking through the front door feels like crossing a threshold into a world of possibilities—a canvas waiting for memories to be painted.
                     Homeownership is an adventure—a journey of nesting and connecting.” 🏡❤️
                  </p>
        </div>
        <div className="reviewcard">
                <div className="persondetail">
                  <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" className="reviewimage"/>
                  <div className="reviewname">
                       <h2>sai</h2>
                       <p>australia</p> 
                  </div>
                  </div>
                  <p>
                  “Leaky faucets, creaky floors—our house has character. But it’s the neighbors and coffee shop that truly make it home."From keys to cozy corners, our new home feels like destiny. Grateful for quirks and community alike! 🏠❤️
                  " ☕🌟
                  </p>
        </div>
        <div className="reviewcard">
                <div className="persondetail">
                  <img src="https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600" className="reviewimage"/>
                  <div className="reviewname">
                       <h2>sai</h2>
                       <p>australia</p> 
                  </div>
                  </div>
                  <p>
                  “From housewarming parties to lazy Sunday mornings, our new home wraps us in comfort. Grateful for the quirks and the community that welcomed us." Grateful for quirks and community alike! 🏠❤️
                  " 🏡❤️ </p>
        </div>
        </div>
      </section>

      <section className="contactsection">
         <div className="emailsection">
            <div className="contact-info">
                <h1 className="contact-title">Feel Free To Contact Us</h1>
                <h3 className="contact-email">Restate@gmail.com</h3>
            </div>
            <div className="newsletter">
                <h2 className="newsletter-title">Sign up for newsletter that </h2>
                   <h2>offers you free information</h2>
                <div className="newsletter-input">
                    <input type="email" placeholder="email@example.com" className="email-input" />
                    <button className="unsubscribe-button">subscribe</button>
                </div>
            </div>
            </div>
            <div className="contactsections">
              <div className="singlesection1">
                <div className="singlesection">
                    <h2 className="section-title">Popular Searches</h2>
                    <ul>
                        <li>Apartment for Rent</li>
                        <li>Apartment Low to hide</li>
                        <li>Offices for Buy</li>
                        <li>Offices for Rent</li>
                    </ul>
                </div>
                <div className="singlesection">
                    <h2 className="section-title">Services</h2>
                    <ul>
                        <li>Perfect Location</li>
                        <li>Kinder Garden</li>
                        <li>Parking Space</li>
                        <li>Shopping Area</li>
                    </ul>
                </div>
                </div>
                <div className="singlesection1">
                <div className="singlesection">
                    <h2 className="section-title">Markets</h2>
                    <ul>
                        <li>Los Angeles Offices</li>
                        <li>Las Vegas Apartments</li>
                        <li>Sacramento Townhome</li>
                        <li>San Francisco Offices</li>
                    </ul>
                </div>
                <div className="singlesection">
                    <h2 className="section-title">Quick Links</h2>
                    <ul>
                        <li>Pricing Plans</li>
                        <li>Our Services</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                </div>
                <div className="contact-details">
                    <h1 className="section-title">Contact us</h1>
                      <h4> 53127 Hyderarabad</h4>
                    <h4>Office Hours: 8AM - 11PM</h4>
                    <h4>Sunday - Weekend Day</h4>
                    
                </div>
            </div>
            
      </section>
      </div>
  );
}

export default HomePage;