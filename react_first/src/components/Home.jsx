import React from 'react'
import vg from "../assets/1.webp"

import {AiFillGoogleCircle,  AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home">
      <main>
        <h1> NIK Site</h1>  
        <p> If you are free come here</p>
      </main>
    </div>

    <div id="home2">
      <img src={vg} alt="Graphics"/>
      <div>
        <p>
          This is my first React Website. My presentation for representation of my working on react. If you guys need any help related to react then you can freely contact me. This will help you to grow and also help me in problem solving and learning at further level.
          I am leading my webb page here. It can be used for multiple different purposes.
          It shows my react working ability.
          Thanks.
        </p>
      </div>
    </div>
    <div className="home3 "id="about">
      <div>
        <h1> Who we Are?</h1>
        <p>
            Network Topology is not regular.
            There exist multiple paths between a source-destination pair for better network reliability.
            The switching nodes are not concerned with the contents of data.
            Their purpose is to provide a switching facility that will move data from node to node until
            they reach the destination.
        </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1> Brands </h1>

        <article>
          <div style={{animationDelay: "0.3s"}}>

            <AiFillGoogleCircle />
            <p> Google </p>
          </div>
          <div style={{animationDelay: "0.5s"}}>

            <AiFillAmazonCircle />
            <p> Amazon </p>
          </div>
          <div style={{animationDelay: "0.7s"}}>

            <AiFillYoutube />
            <p> YouTube </p>
          </div>
          <div style={{animationDelay: "1.0s"}}>

            <AiFillInstagram />
            <p> Instagram </p>
          </div>

        </article>
      </div>
    </div>
    </>
  )
}

export default Home