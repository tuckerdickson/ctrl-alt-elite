import * as React from "react"

//importing stylesheets
import '../fonts/stylesheet.css';
import '../css/index.css';


//importing images
import ryanPortrait from '../images/ryan_portrait.jpg'
import tuckerPortrait from '../images/tucker_portrait.jpeg'
import cathrynPortrait from '../images/cathrynlyonss.jpeg'
import abigailPortrait from '../images/abigail_portrait.jpeg'
import groupPhoto from '../images/group_photo.png'


const Abigail =
{
  name:"Abigail Bright",
  major:"Electrical Engineering: Computer Track",
  portrait: abigailPortrait,
  webPage: 'abigail'

}

const Tucker =
{
  name: "Tucker Dickson",
  major:"Computer Science and Engineering",
  portrait: tuckerPortrait,
  webPage: 'tucker',
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  portrait: cathrynPortrait,
  webPage: 'cathryn'
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  portrait: ryanPortrait,
  webPage: 'ryan'
}

const groupMembers = [Abigail,Tucker,Ryan,Cathryn]

function MemberList(members)
{
  return(
    <div class = "members">
      <div class = "two-column-wrapper">
        {
          members.groupMembers.map(memberInfo =>
            <>
              <div class = "member">
                <a href={memberInfo.webPage}>
                  <img src = {memberInfo.portrait} class = "portraitImage" alt = {memberInfo.name}></img>
                </a>
                <p>{memberInfo.name}</p>
              </div>
            </>
            )
        }
      </div>
    </div>
  )
}

const displayMembers = <MemberList groupMembers = {groupMembers}/>
const IndexPage = () => {
  return (
    <main>
      <div class="navbar-wrapper">
          <div class="left">
              <div class="navbar-link-wrapper active-nav-link">
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
        <h1>Ctrl Alt Elite
        <span class="blink">_</span>
        </h1>
      </div>

      <div class = "pageinfo">
        {/* <div class = "team-content">
          <div class = "team-text">
            <h1>Our Team</h1>
          </div>
          <div class = "team-image">
            <a href = "/about">
              <img src = {groupPhoto} class = "portraitImage"></img>
            </a>
          </div>
        </div> */}
        {displayMembers}
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
