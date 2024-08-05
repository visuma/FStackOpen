const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ props }) => {
  return (
    <div>
      <Part
        name={props[0].name}
        exercises={props[0].exercises}
      />
      <Part
        name={props[1].name}
        exercises={props[1].exercises}
      />
      <Part
        name={props[2].name}
        exercises={props[2].exercises}
      />
    </div>
  )
}

const Total = ({ props }) => {
  return (
    <p>Number of exercises {props.reduce(
      (acc, curr) => acc + curr.exercises, 0,)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }]
  }

  return (
    <div>
      <Header
        course={course.name}
      />
      <Content
        props={course.parts}
      />
      <Total
        props={course.parts}
      />
    </div>
  )
}

export default App
