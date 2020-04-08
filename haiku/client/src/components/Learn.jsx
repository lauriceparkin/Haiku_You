import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

function Learn(props) {
  return (
    <>
      <div className="learn">

        <Navbar />

        <div className="paper">
          {/* <img src={require("../images/paper1.jpg")} /> */}
          <div className="title">haiku 101<br /></div>
          <div className="faq">What is Haiku?<br />


Does it have to be about something specific?<br />


<h4>Can I see some examples?</h4><br />


So, wait, what’s the purpose of this site?<br />

For people to not only learn more about haiku and share their work with others.

Will writing haiku really help me find my zen?<br /> <br />

Not scientifically proven, but definitely maybe.</div>






        </div>

      </div>

      <Footer />

    </>

  )
}



export default Learn;