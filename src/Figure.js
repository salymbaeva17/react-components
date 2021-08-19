import React, {useState} from "react"

const Figure = () => {
    const [figure, setFigure] = useState("круг")
    const circle = () => {
      setFigure("круг")
    }
    const square = () => {
      setFigure("квадрат")
    }
  return (
      <>
          <button onClick={circle}>Circle</button>
          <button onClick={square}>Square</button>
          <div>{figure}</div>
      </>
  )
}

export default Figure