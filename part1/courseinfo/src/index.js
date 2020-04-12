import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }
  return (
    <div>
      <Header i={course.name} />
      <Content i={course.parts} />
      <Total i={course.parts} />   
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.i}
      </h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
        <p>
        {props.i[0].name} {props.i[0].excercises}
        </p>
        <p>
        {props.i[1].name} {props.i[1].excercises}
        </p>
        <p>
        {props.i[2].name} {props.i[2].excercises}
        </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
      <p>
        Number of exercises {props.i[0].excercises + props.i[1].excercises + props.i[2].excercises}
      </p>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))