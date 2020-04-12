import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

    
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const AllClicks = () => {
    if (good === 0 ) {
      setAll(all + 1)
      setPositive(0 + "%")
      setAverage(parseFloat((bad*(-1) + neutral*0)/(bad + neutral)).toFixed(2))
    }
    else {
      setAll(all + 1)
      setPositive(parseFloat((good / (all))*100).toFixed(2) + "%")
      setAverage(parseFloat((bad*(-1) + good + neutral*0)/(all)).toFixed(2))
    }
  }


  return (
    <div>
      <Header></Header>
      <div>
        <button onClick={() => {handleGoodClick();AllClicks()}}>good</button>
        <button onClick={() => {handleNeutralClick();AllClicks()}}>neutral</button>
        <button onClick={() => {handleBadClick();AllClicks()}}>bad</button>
      </div>
      <Table good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive}></Table>
    </div>
  )
}

const Header = () => {
  return (
      <h1>
        Give Feedback
      </h1>
  )
}

const Table = (props) => {
  return (
    <div>
      <h1>
        statistics
      </h1>
      <table>
        <tbody>
            <tr>
              <td>good</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{props.all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{props.average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{props.positive}</td>
            </tr>
            </tbody>
        </table>
      </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
