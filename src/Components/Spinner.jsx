import React from 'react'
import loading from "../fxVE.gif"
import "./spinner.scss"

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" width={"400px"} height={"400px"}  />
      <h3>It's Loading . . .</h3>
    </div>
  )
}

export default Spinner
