import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(4)).map(Number.prototype.valueOf,0))
  const [index, setIndex] = useState()

  const handleVoteClick = () => {
    const copy = [...points]
    // increment the value in position 2 by one
    copy[selected] += 1   
    setPoints(copy)
    setIndex(copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))
    console.log(points)
    const bestAnecdote = props.anecdotes[index]
    console.log(bestAnecdote)
  }


  function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
  } 

  const generate = () => {
    setSelected(randomNumber(0,4))
  }

  return (
    <div>
      <Header></Header>
      <p>
      {props.anecdotes[selected]}
      </p>
      <button onClick={() => {handleVoteClick()}}>vote</button>
      <button onClick={() => {generate()}}>next anecdote</button>
      <AnecDoteOfTheDay i={props.anecdotes[index]} j={points[selected]} />
    </div>
  )
}

const AnecDoteOfTheDay = (props) => {
  return (
    <div>
      <h1>Best Anecdote</h1>
      {props.i}
      <p>has {props.j} votes</p>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
