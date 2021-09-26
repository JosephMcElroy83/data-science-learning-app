import "./analysisQuestions.css"

export default function AnalysisQuestions() {
  return (
    <div className="questions-main-div">
      <h1>Here are some basic style of questions to get you started!</h1>
      <hr className="breaks"/>
      <div className="text-container-div">
        <h2 className="title-questions">What if the data is not clearly understandable?</h2>
        <br className="breaks"/>
        <p className="body-text">The first thing you should do is start with an assumption if there is not a clear direction to start with. What draws your eye? Is it the style of presentation, the type of data present, the interactibility, or maybe its the ordering of the data. Everything has an effect on how we percieve data, so don't forget that everything starts with a question.</p>
        <hr className="breaks"/>

        <h2 className="title-questions">What if I can't see a pattern right away?</h2>
        <br className="breaks"/>
        <p className="body-text">The data is interactible for that very specific reason. There may not be a direct pattern right away, but you can still move around the data and see if something stands out. However, keep in mind, that if you make an assumption based upon what you see, it is speculation that you want to pursue further into. The same saying as correlation is not causation, remembering that each person might view the data different. This promotes discussion for how data can be viewing in various ways and lead to a more comprehensive view or maybe a lot of people are saying the same thing about the data. Why it is also important to view the data before getting a bias overlay from others.</p>
        <hr className="breaks"/>

        <h2 className="title-questions">What if something seems to obvious?</h2>
        <br className="breaks"/>
        <p className="body-text">Sometimes we see data that seems to present something so obvious, but is that the reality? Again, this is am immediate assumption about the data, but what if we did external research and found out something happened one year that had a drastic impact? There could be a million reasons and Data Science promotes the obvious assumptions and the not so obvious. What I mean by this is that the data is just a segway to finding out more of the reason behind why the data might seem obvious or lean so biased towards one category over another. Question yourself about, "is there something else going on here? Can I possible think outside the box as to why?". You can use that inference and discuss it further with others!</p>
      </div>
    </div>
  )
}
