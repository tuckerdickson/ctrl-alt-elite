import * as React from "react"

//importing stylesheets
import '../fonts/stylesheet.css';
import '../css/index.css';


//importing images
import ryanPortrait from '../images/ryan_portrait.jpg'
import tuckerPortrait from '../images/tucker_portrait.jpeg'
import cathrynPortrait from '../images/cathrynlyonss.jpeg'
import abigailPortrait from '../images/abigail_portrait.jpeg'


const Abigail =
{
  name:"Abigail Bright",
  major:"Major: Electrical & Computer Engineering",
  skills:"Skills: Bringing snacks for everyone",
  interests:"Interests: Software Engineering",
  contact:"Email: abigail-bright@uiowa.edu",
  portrait: abigailPortrait,
  webPage:"tucker"

}

const Tucker =
{
  name: "Tucker Dickson",
  major:"Major: Computer Science and Engineering",
  skills:"Skills: sinistromanual",
  interests:"Interests: software design",
  contact:"Email: nathan-dickson@uiowa.edu",
  portrait: tuckerPortrait,
  webPage: 'tucker',
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  skills:"Skills: Chatting and distracting others",
  interests:"Interests: Software Design and Machine Learning",
  contact:"Email: cathryn-lyons@uiowa.edu",
  portrait: cathrynPortrait,
  webPage: 'cathryn'
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical and Computer Engineering",
  skills: "Skills: Color Coordinating",
  interests:"Interests: IoT Devices/Software Engineering",
  contact:"Email: ryan-edwall@uiowa.edu",
  portrait: ryanPortrait,
  webPage: 'ryan'
}

const groupMembers = [Abigail,Tucker,Ryan,Cathryn]

function MemberList(members)
{
  return(
        <div class = "two-column-wrapper">
        {
            members.groupMembers.map(memberInfo =>
                <>
                    <div class = "about-photo">
                        <img src={memberInfo.portrait} class="aboutImage" alt={memberInfo.name}></img>
                    </div>

                    <div class = "about-paragraph">
                        <h1>{memberInfo.name}</h1>
                        <h3>{memberInfo.major}</h3>
                        <h3>{memberInfo.skills}</h3>
                        <h3>{memberInfo.interests}</h3>
                        <h3>{memberInfo.contact}</h3>
                    </div>
                </>
        )}
        </div>
    )}

const displayMembers = <MemberList groupMembers = {groupMembers}/>
const IndexPage = () => {
  return (
    <main>
        <div class="navbar-wrapper">
            <div class="left">
                <div class="navbar-link-wrapper">
                    <a href="/">HOME</a>
                </div>

                <div class="navbar-link-wrapper active-nav-link">
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
            <h1> About Us
            <span class="blink">_</span>
            </h1>
        </div>

        <div class = "pageinfo">
            {displayMembers}
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>About</title>
