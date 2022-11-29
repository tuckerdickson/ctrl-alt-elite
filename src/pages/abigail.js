import * as React from "react"
import { Script } from "gatsby"

//importing images
import volleyball from '../images/abigail_images/volleyball.jpg'
import calligraphy from '../images/abigail_images/calligraphy.jpg'
import ferrari from '../images/abigail_images/ferrari2.jpeg'
import abigailPortrait from '../images/abigail_portrait.jpeg'

const AbigailPage = () => {
  return (
    <main>
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


      <div id="indexheader">
        <h1>About Abigail
        <span class="blink">_</span>
        </h1>
      </div>
      
    <center>
      <p>Hi, I'm Abigail! I'm a senior majoring in Electrical and Computer Engineering at the University of Iowa.</p>
      <img src = {abigailPortrait} height = "25%" width = "25%"  alt = {abigailPortrait} class = "portraitImage"></img>
    </center>

    <h1>Personal Interests</h1>
    <p>&#x2022; I play volleyball every chance I get</p>
    <p>&#x2022; I love Formula 1 (Forza Ferrari!)</p>
    <p>&#x2022; I practice calligraphy for fun in my free time</p>
    <div id="pics">
    <img src = {volleyball} height = "35%" width = "35%" alt = {volleyball}></img>
    <img src = {ferrari} height = "29%" width = "29%" alt = {ferrari}></img>
    <img src = {calligraphy} height = "36%" width = "36%" alt = {calligraphy}></img>
    </div>
   

    <h1>Fun Facts</h1>
    <p>&#x2022; My go-to karaoke song is <a href="https://youtu.be/Vy0mqXuBMY4">I Write Sins Not Tragedies</a> by Panic! At The Disco</p>
    <p>&#x2022; I once broke both of my wrists at the same time and had double hot pink casts</p>
    <p>&#x2022; My favorite animal is a stingray</p>
    <p>&#x2022; I come from a long line of Hawkeyes</p>


    <div class = "contact-abigail">
      <center>
          <h1>Connect With Me!</h1>

          <div class = "icons">
            <a href = "https://twitter.com/abbybrightt" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>

            <a href = "https://www.instagram.com/abby.bright/?hl=en" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a href = "http://www.linkedin.com/in/abigailbright" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a href = "https://github.com/abbybright" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
          </center>
        </div>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      

    </main>
  )
}
export default AbigailPage

export const Head = () => <title>Abigail's Page</title>
