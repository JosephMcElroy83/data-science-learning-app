import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function Home() {
  return (
    <div className="home-div">
      <img className="home-image" src="https://cdn.pixabay.com/photo/2018/09/27/09/22/artificial-intelligence-3706562_1280.jpg" alt="data science" />
        
      <h1 className="home-h1">
        What is Data Science
      </h1>
        
      <p>
        Most people believe that data science is a field of study that just reviews numbers and calculations. This may be true, however the focus on data science is hypothesis testing and writing. What problems can you see and what can be done about it? This is a life long question through the scientific processes. With this in mind, if you saw a set of data and were asked to write a hypothesis on the spot, what would draw your eye first? How would you approach data itself; do visuals help you, maybe reading through some data charts to make connections in a side by side comparison? The strength that Data Science brings to the table is the ability to approach from almost any angle and see how various questions can bring results, what might yours bring?
      </p>
      <hr />

      <h1 className="home-h1">What Does Data Science Solve</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iure provident libero sunt eveniet saepe earum maxime impedit. Iusto totam, mollitia magnam adipisci repellendus a? Fugit dolorum sit aperiam at molestias officiis earum nam corrupti. Suscipit voluptatem unde in reprehenderit molestiae aliquid animi aperiam, quibusdam facere deserunt laudantium expedita! Commodi optio molestiae nam magni, temporibus itaque consequuntur nulla vero ipsa obcaecati eum asperiores dolorum adipisci quam repellendus! Nesciunt mollitia, dolorem provident tempore ipsam qui cum quod architecto sint voluptate, ducimus eos. Saepe, ipsa deserunt? Neque quia nisi vel doloribus iure, ipsum, reiciendis cumque repudiandae doloremque quasi soluta rem quisquam necessitatibus.</p>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque numquam sapiente tenetur unde, consequuntur ipsum quam error vero, commodi rerum quibusdam? Eveniet in earum perspiciatis dicta saepe temporibus animi odio quidem officiis? Fugiat, maxime. Repellat officia reiciendis molestiae facere beatae voluptatem quo sapiente hic nostrum nesciunt corporis veniam impedit temporibus, quidem blanditiis maxime! At, magnam? Aliquam facilis dolor velit. Omnis nihil, eligendi aliquid magnam tenetur laudantium accusamus quam quae deserunt odit eveniet suscipit quis itaque minus numquam quasi debitis totam eos. Tenetur quod vero dolorum optio in. Ex ducimus dolorem iste odit modi vitae perferendis sapiente repellat. Vel, excepturi doloremque.</p>
      <hr />
      
      <h2 className="home-h2">How to Get Started</h2>
      <p>
        Please read the remainder of the page for a breif introduction to data science first if you are not already familiar with the process. Once complete, feel free to explore the <Link to="/data"><span className="intext-link">Data</span></Link> tab and start your analysis of what the data presents. If you feel stuck with formulating questions, please reference the <Link to="/questions"><span className="intext-link">Analysis Questions</span></Link> tab for some ideas about how to approach data. When you feel relatively confident with what is present, take the time to submit your own hypothesis in the <Link to="/form"><span className="intext-link">Form</span></Link> tab! No cheating though! There is a responses tab to see other individuals posts about the data currently, but we recommend that you approach the data with fresh eyes and make your own assumptions and approach before jumping in and reading how others are trying to find the question and solve it. Important note to make as well, there is no <span className="italic-me">"This is the only way to do Data Science"</span> and you can approach it in any way that makes sense to you, especially if you believe you could back up your claim with the data!
      </p>
    </div>

  )
}
