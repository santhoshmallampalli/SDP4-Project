import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <input type="radio" name="gender" value="P" /> Premium &nbsp; Cost:10000Rs
        <br />
    <input type="radio" name="gender" value="M" /> Medium &nbsp;  Cost:7000Rs
      <br />
    <input type="radio" name="gender" value="B" /> Basic &nbsp&nbsp;  Cost:5000Rs
      <br />
      <p>Premium includes most experienced guides present at that state and hotel facilities are quite cheap compared to others</p>
      <p>Medium includes good exprerienced guides and hotel facilities are paid by the tourists half of the guides charge</p>
      <p>Basic includes guides but it is completely allocated to travel and guide expenses</p>
      <Link to="/">
      <button type="submit" class="primary-button">Book</button>
      </Link>
      <br/>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}