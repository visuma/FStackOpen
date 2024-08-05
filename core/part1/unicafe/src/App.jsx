import { useState } from 'react'

function Button(props) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

function StatLine(props) {
  const { text, val } = props

  return (
    <tr>
      <td>{text}</td>
      <td>{val}</td>
    </tr>
  )
}

function Statistics({ props }) {
  const sum = props.reduce(
    (acc, curr) => acc + curr.val, 0)

  const avg = (props[0].val - props[2].val) / sum

  const goodPercentage = 100 * props[0].val / sum

  if (sum > 0)
    return (
      <table>
        <tbody>
          {props.map(({ id, text, val }) => (
            <StatLine key={id} text={text} val={val} />
          ))}
          <StatLine text="all" val={sum} />
          <StatLine text="average" val={avg.toFixed(2)} />
          <StatLine text="positive" val={goodPercentage.toFixed(2) + "%"} />
        </tbody>
      </table>
    )
  else
    return (
      <p>No feedback given</p>
    )
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickHandler = (val, valSetter) => () => { valSetter(val + 1) }

  const buttons = [
    {
      id: 1,
      text: "good",
      val: good,
      setVal: setGood
    },
    {
      id: 2,
      text: "neutral",
      val: neutral,
      setVal: setNeutral
    },
    {
      id: 3,
      text: "bad",
      val: bad,
      setVal: setBad
    }
  ]

  return (
    <div>
      <h1>giveFeedback</h1>
      {buttons.map(({ id, text, val, setVal }) => {
        return (<Button
          key={id}
          handleClick={clickHandler(val, setVal)}
          text={text} />
        )
      })}
      <h1>statistics</h1>
      <Statistics props={buttons} />
    </div>
  )
}

export default App
