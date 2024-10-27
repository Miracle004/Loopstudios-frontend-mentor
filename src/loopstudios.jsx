import { useEffect, useState } from "react";

export default function Loopstudios() {
  const images = {
    siteLogo: "src/assets/images/logo.svg",
    vrMan: "src/assets/images/desktop/image-interactive.jpg",
    facebookIcon: "src/assets/images/icon-facebook.svg",
    twittericon: "src/assets/images/icon-twitter.svg",
    pinterestIcon: "src/assets/images/icon-pinterest.svg",
    instagramIcon: "src/assets/images/icon-instagram.svg",
    hamburgerIcon: "src/assets/images/icon-hamburger.svg",
    closeIcon: "src/assets/images/icon-close.svg",
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*HAMBURGER MENU MOBILE NAVIGATION*/
  function mobileNav(){
    let navContainer = document.querySelector(".mobileNavigation");
      let img = navContainer.querySelector('img')
      let list = navContainer.querySelector("ul");
      if (!clicked) {
        img.src = images.closeIcon;
        navContainer.style.zIndex = "-1";
        navContainer.style.backgroundColor = "black";
        list.style.visibility = "visible";
        list.style.opacity = "1";
        setClicked(true);
      } else {
        img.src = images.hamburgerIcon;
        navContainer.style.zIndex = "-1";
        navContainer.style.background = "none";
        navContainer.style.transition = "all .5s ease"
        list.style.visibility = "hidden";
        list.style.opacity = "0";
        setClicked(false);
      }
  }

  return (
    <div className="container">
      <header
        style={
          isMobile < 380
            ? {
                background: 'url("src/assets/images/mobile/image-hero.jpg")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : {
                background: 'url("src/assets/images/desktop/image-hero.jpg")',
               backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
        }
      >
        <nav>
          <img src={images.siteLogo} alt="" />
          {isMobile < 380 ? (
            <div className="mobileNavigation">
              <img src={images.hamburgerIcon} id="hamburger" onClick={mobileNav} alt="" />
              <ul>
                <li>ABOUT</li>
                <li>CAREERS</li>
                <li>EVENT</li>
                <li>PRODUCTS</li>
                <li>SUPPORT</li>
              </ul>
            </div>
          ) : (
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Event</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          )}
        </nav>
        <h1>
          IMMERSIVE <br /> EXPERIENCES <br /> THAT DELIVER
        </h1>
      </header>
      <section id="vr">
        <img src={images.vrMan} alt="" />
        <aside>
          <span>THE LEADER IN INTERACTIVE VR</span>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed <br />
            businesses through digital experiences that bind to their brand.
          </p>
        </aside>
      </section>

      <main>
        <div className="contentTitle">
          <p>OUR CREATIONS</p>
          <p>SEE ALL</p>
        </div>
        <section>
          <div className="earth">
            <p>
              DEEP <br /> EARTH
            </p>
          </div>
          <div className="arcade">
            <p>
              NIGHT <br /> ARCADE
            </p>
          </div>
          <div className="soccer">
            <p>
              SOCCER <br /> TEAM VR
            </p>
          </div>
          <div className="dGrid">
            <p>
              THE <br /> GRID
            </p>
          </div>
          <div className="aboveVr">
            <p>
              FROM UP <br /> ABOVE VR
            </p>
          </div>
          <div className="borealis">
            <p>
              POCKET <br /> BOREALIS
            </p>
          </div>
          <div className="curiosity">
            <p>
              THE <br /> CURIOSITY
            </p>
          </div>
          <div className="fisheye">
            <p>
              MAKE IT <br /> FISHEYE
            </p>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <div className="moreInfo">
            <img src={images.siteLogo} alt="" />
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="marketing">
            <div className="socials">
              <img src={images.facebookIcon} alt="" />
              <img src={images.twittericon} alt="" />
              <img src={images.pinterestIcon} alt="" />
              <img src={images.instagramIcon} alt="" />
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </div>
  );
}
