import * as React from "react"
import { Script } from "gatsby"

//importing images
import kona1 from '../images/cathryn_images/KonaInCoat.jpeg'
import kona2 from '../images/cathryn_images/KonaOnCouch.jpeg'
import kona3 from '../images/cathryn_images/KonaOutside.jpeg'
import kona4 from '../images/cathryn_images/KonaWithToy.jpeg'
import guam1 from '../images/cathryn_images/Guam1.jpg'
import guam2 from '../images/cathryn_images/Guam2.jpg'
import guam3 from '../images/cathryn_images/Guam3.jpg'
import guam4 from '../images/cathryn_images/Guam4.jpg'
import cathrynPortrait from '../images/cathrynlyonss.jpeg'

const CathrynPage = () => {
  return (
    <main>  
    <div id = "background">

    <div class="navbar-wrapper">
          <div class="left">
              <div class="navbar-link-wrapper">
                  <a href="/">HOME</a>

              </div>
              
              <div class="navbar-link-wrapper">
                  <a href="/about">ABOUT</a>
              </div>
          </div>

          <div class="right">
              <div class="brand">
                  <div>CTRL ALT ELITE</div>
              </div>
          </div>
      </div>

    <p></p>
    <div id="indexheader">
    <h1>About Cathryn</h1>
    </div>
    
    <center>
    <p>Hi, I'm Cathryn. I'm a senior, majoring in Computer Science and Engineering at the University of Iowa.</p>
    <img src = {cathrynPortrait} height = "25%" width = "25%"  alt = {cathrynPortrait} class = "portraitImage"></img>
    </center>

    <h1>Pets</h1>
    <p>This is my puppy, Kona. She is an 8 month old, Australian Shepherd. </p>
    <p>Her talents include:</p>
    <p>&#x2022; Sitting</p>
    <p>&#x2022; Sometimes laying</p>
    <p>&#x2022; Being cute</p>
    <img src = {kona1} height = "25%" width = "25%" alt = {kona1}></img>
    <img src = {kona2} height = "25%" width = "25%" alt = {kona2}></img>
    <img src = {kona3} height = "25%" width = "25%" alt = {kona3}></img>
    <img src = {kona4} height = "25%" width = "25%" alt = {kona4}></img>

    <h1>Fun Facts</h1>
    <p>&#x2022; My go to karoke song is <a href="https://youtu.be/idFJkZQmN38">Picture</a> by Kidrock ft. Sheryl Crow</p>
    <p>&#x2022; I'm a first generation engineer</p>
    <p>&#x2022; I've been to Guam!</p>
    <img src = {guam1} height = "25%" width = "25%" alt = {guam1}></img>
    <img src = {guam4} height = "25%" width = "25%" alt = {guam4}></img>
    <img src = {guam2} height = "25%" width = "25%" alt = {guam2}></img>
    <img src = {guam3} height = "25%" width = "25%" alt = {guam3}></img>
    
    <div class = "contact-tucker">
        <center><h1>Connect With Me!</h1>
          
          <div class = "icons">
            <a href = "https://twitter.com/CathrynLyonss" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>

            <a href = "https://www.instagram.com/cathrynlyonss/" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a href = "https://www.linkedin.com/in/cathryn-lyons/" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a href = "https://github.com/Cathrynlyonss" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a href = "mailto:cathryn-lyons@uiowa.edu?">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
          </center>
        </div>
    </div>
    <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
    <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </main>
  )
}
export default CathrynPage

export const Head = () => <title>Cathryn's Page</title>
