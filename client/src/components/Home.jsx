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

      <p>Data Science focuses on solving analytic problems for organizations. This is where a problem exists somewhere in industry or any business, which has a ton of data to siphon through. The process invovles determining correct data sets or variables that pertain to the problem at hand, not using some random data or the entirety of a massive dataset. Compartmentalizing data and organizing unstructured data to determine patterns or associations between fields is the bread and butter here. The next important step after compiling data into a meaningful or appears to be meaningful data, is how to determine what is important or significant.</p>

      <p>When Data Scientists sit down with their workable data, they are always asking a question. The most important question to ask first and foremost is, "What does this help solve and why is this data in particular helpful?". What patterns and trends can be discovered from the type of data you have, will you be able to bring in extra data to suppliment your hypothesis to feel more confident in what you are working on or does the new data pose a different question now? Sometimes Data Scientists make data visuals to help them distinguish patterns quicker and more efficiently since looking at numbers doesn't always give us the best image of what is being told by the data. Not only do visuals help us view our own data, but present them to stakeholders or clients in a way that they can understand much easier than a sea of numbers. Presenting and articulating data is a very important skill, even if you did not have to work the data yourself. The end goal of the Data Scientist is to tell a story of the data and why it is impactful or not, depending on the demand. This app is designed to start you with a story telling process to introduce you to the basic mindset and limit the scope to exploring data and being able to make a question and what you would do with it!</p>
      <hr />
      
      <h2 className="home-h2">How to Get Started</h2>
      <p>
        Please read the remainder of the page for a breif introduction to data science first if you are not already familiar with the process. Once complete, feel free to explore the <Link to="/data"><span className="intext-link">Data</span></Link> tab and start your analysis of what the data presents. If you feel stuck with formulating questions, please reference the <Link to="/questions"><span className="intext-link">Analysis Questions</span></Link> tab for some ideas about how to approach data. When you feel relatively confident with what is present, take the time to submit your own hypothesis in the <Link to="/form"><span className="intext-link">Form</span></Link> tab! No cheating though! There is a responses tab to see other individuals posts about the data currently, but we recommend that you approach the data with fresh eyes and make your own assumptions and approach before jumping in and reading how others are trying to find the question and solve it. Important note to make as well, there is no <span className="italic-me">"This is the only way to do Data Science"</span> and you can approach it in any way that makes sense to you, especially if you believe you could back up your claim with the data!
      </p>
    </div>

  )
}
