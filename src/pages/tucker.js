import * as React from "react"
import { Script } from "gatsby"

//importing images
import tuckerPortrait from '../images/tucker_portrait.jpeg'

const TuckerPage = () => {
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
        <h1>Tucker Dickson
        <span class="blink">_</span>
        </h1>
      </div>

      <div class = "content-tucker">
        <center>
          <img src = {tuckerPortrait} class = "portraitImage" alt = "tucker"></img>
        </center>
        <div class = "about-tucker">
          <div class = "about-tucker-text">
            <h1>About Me</h1>
            <font size="+1">
              <p>Hello! My name is Tucker Dickson and I'm a Computer Science & Engineering undergraudate at the University of Iowa. I'm originally from Mount Vernon, Iowa, a small town in the eastern part of the state. After graduating in May 2023, I would like to pursue a Master's program in either Electrical & Computer Engineering or Computer Science! </p>
            </font>
          </div>
        </div>

        <div class = "skills-tucker">
          <h1>Skills</h1>
          <font size="+1">
            <p>During my time at Iowa, I've gained experience creating software projects using...</p>
            <ul>
              <li>High-level, general-purpose languages like C, C++, Java, and Python</li>
              <li>Low-level assembly languages like AVR Assembler Language</li>
              <li>Functional languages like Haskell</li>
            </ul> 
            <p>All of these projects (and more) can be accessed on my <a href = "https://github.com/tuckerdickson" target = "_blank" rel="noreferrer">Github</a> page!</p>
          </font>
        </div>
    
        <div class = "experience-tucker">
          <h1>Professional Experience</h1>
          <h2>Internships</h2>
          <font size="+1">
            <p>Over the past three years, I have held a position as as intern at two different companies. From January 2021 until August 2021, I worked as a programmer analyst intern for GreatAmerica Financial Services Corporation in Cedar Rapids, Iowa. In that role, I helped maintain the company's databases and improve custom comapny applications. Since May of 2022, I have been serving as a software engineering intern at Collins Aerospace in Cedar Rapids, Iowa. In this role, I help test software that goes into airplane cockpit displays.
            </p>
          </font>
          <h2>Assistantships</h2>
          <font size="+1">
            <p>During the Fall 2021 and Spring 2022 semesters, I served as a teaching assistant for ENGR:2730 Computers in Engineering. This was something that I really enjoyed doing, and would like to get back into during my final semester!</p>
          </font>
        </div>

        <div class = "contact-tucker">
          <h1>Connect With Me!</h1>
          <font size="+1">
            <p>The icons below are linked to my Twitter, Instagram, LinkedIn, Github, and email accounts. If you would like to connect with me or check out my past work, go ahead and give them a click!</p>
          </font>

          <center>
            <div class = "icons">
              <a href = "https://twitter.com/DicksonTucker" target = "_blank" rel="noreferrer">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>

              <a href = "https://www.instagram.com/tuckerdickson/?hl=en" target = "_blank" rel="noreferrer">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a href = "http://www.linkedin.com/in/tucker-dickson-58526a1bb" target = "_blank" rel="noreferrer">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>

              <a href = "https://github.com/tuckerdickson" target = "_blank" rel="noreferrer">
                <ion-icon name="logo-github"></ion-icon>
              </a>

              <a href = "mailto:nathan-dickson@uiowa.edu?">
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
export default TuckerPage

export const Head = () => <title>Tucker's Page</title>
