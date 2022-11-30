import * as React from "react"
import ryanPortrait from '../images/ryan_portrait.jpg'
import { Script } from "gatsby"

import tennis from '../images/ryan_images/tennis_court.jpg'
import pumpkin from '../images/ryan_images/pumpkin_roll.jpg'
import sketch from '../images/ryan_images/sketch.jpg'
import research from '../images/ryan_images/research.jpg'


import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('5680389167251456-proj');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" />
        );
    }
}

const RyanPage = () => {
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
        <h1>Ryan Edwall
        <span class="blink">_</span>
        </h1>
      </div>
      <div id = "background">
      <center>
      <p>Hello, I'm Ryan! I'm a senior, majoring in Electrical and Computer Engineering at the University of Iowa.</p>
      <img src = {ryanPortrait} height = "25%" width = "25%"  alt = {ryanPortrait} class = "portraitImage"></img>
      </center>

      <h1>Interests/Hobbies</h1>
      <p>&#x2022; I like to recreationally play tennis/volleyball</p>
      <p>&#x2022; Recently, I've been working on my baking skills</p>
      <p>&#x2022; I also enjoy singing/sketching in my free time</p>
      <div id="pics">
      <img src = {tennis} height = "25%" width = "33%" alt = {tennis}></img>
      <img src = {pumpkin} height = "25%" width = "33%" alt = {pumpkin}></img>
      <img src = {sketch} height = "25%" width = "33%" alt = {sketch}></img>
      </div>
        <h1>Fun Facts</h1>
        <p>&#x2022; My go to karoke song is <a href="https://www.youtube.com/watch?v=D5P1R6CRsoM">Falling All in You</a> by Shawn Mendes</p>
        <p>&#x2022; I have a total of 7 siblings</p>
        <p>&#x2022; I am a first-generation college student and the first engineer in my family</p>
        <p>&#x2022; I am undergradate research assistant for the <a href="https://ftoor.lab.uiowa.edu/">Toor Lab</a></p>

      </div>
      <center>
          <img src = {research} height = "25%" width = "25%" alt = {research}></img>
      </center>
      <div class = "contact-tucker">
        <center>
          <h1>Connect With Me!</h1>
          <div class = "icons">

            <a href = "https://www.instagram.com/ryan_edwall/?next=%2F" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a href = "https://www.linkedin.com/in/ryan-edwall-453a86199/" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a href = "https://github.com/ryan-edwall" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a href = "mailto:ryan-edwall@uiowa.edu?">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
          </center>
        </div>

      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    <PageWithComments />
    </main>
  )
}
export default RyanPage

export const Head = () => <title>Ryan's Page</title>
