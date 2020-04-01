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
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total course={course.parts} />   
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
      <h1>
        {props.course}
      </h1>
  )
}

const Content = (props) => {
  console.log(props.course[1].name)
  return (
    <div>
      <p>
        {props.course[0].name} {props.course[0].excercises}
        </p>
        <p>
        {props.course[1].name} {props.course[1].excercises}
        </p>
        <p>
        {props.course[2].name} {props.course[2].excercises}
        </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
      <p>
        Number of exercises {props.course[0].excercises + props.course[1].excercises + props.course[2].excercises}
      </p>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))