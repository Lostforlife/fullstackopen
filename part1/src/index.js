import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header name={course} />
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>      
    </div>
  )
}
const Header = (props) => {
  console.log(props)
  return (
      <h1>{props.name}</h1>
  )
}
const Content = (props) => {
  console.log(props)
  return (
      <p>
        {props.part} {props.exercises}
      </p>
  )
}
const Total = (props) => {
  console.log(props)
  return (
      <p>
        Number of exercises {props.total}
      </p>
  )
}

const sum = (p1, p2) => {
  return p1 + p2
}
const result = sum(15, 5)
console.log(result)

ReactDOM.render(<App />, document.getElementById('root'))