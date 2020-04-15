import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './shared/Navbar'

function Learn(props) {
  return (
    <>
      <div className="learn">

        <Navbar />

        <div className="paper">
          <div className="title">haiku 101<br /></div>
          <div className="faq"><h4>What is Haiku?</h4><br />
            A form of poetry that originated in Japan. A traditional haiku consist of 17 syllables divided among three lines: 5 syllables / 7 syllables / 5 syllables. It has a ryhthm like music.<br />
            <br />
            <h4>Can I see some examples?</h4><br />
            Absolutely, here's a couple by Matsuo Basho, who's considered a master of the form:<br />

            In the twilight rain, these brilliant-hued hibiscus, A lovely sunset.
            An old silent pond, A frog jumps into the pond, Splash! Silence again.<br />
            <br />

            <h4>Oh, I get it, it's all about nature.</h4><br />
            Not at all, they can be about anything you like. Food's a fun topic:
            Electric salsa, Glides across beans, rice and meat, Dancing palate joy.<br />
            Here's one about food and nature:<br />
            Like crunchy cornflakes, Gold leaves rustle underfoot, Beauty in decay.<br />
            <br />

            <h4>So, wait, what’s the purpose of this site?</h4><br />
            To share some haiku love. Get inspired, get creative, and share your poems. Register for an account and join the party.<br />
            <br />
            <h4>Will writing haiku really help me find my zen?</h4><br />
60            Not scientifically proven, but definitely maybe.<br />

            </div>

        </div>

      </div>


    </>

  )
}

export default Learn;