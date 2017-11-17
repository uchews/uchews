import React from 'react';

const Input = (props) => {

  return (
    <div>
      <form>
        <h4>Location</h4><br />
        <input type="text" name="location" /><br />
        <h4>Number of people</h4><br />
        <input type="text" name="peopleNum" /><br />
        <h4>How far are you willing to travel?</h4><br />
        <input type="radio" name="radius" value="0" />less than 1 mi<br />
        <input type="radio" name="radius" value="0" />up to 2 mi<br />
        <input type="radio" name="radius" value="0" />up to 5 mi<br />
        <input type="radio" name="radius" value="" />10 mi<br />
        <h4>Budget</h4><br />
        <input type="checkbox" name="budget" value="$" />$
        <input type="checkbox" name="budget" value="$$" />$$
        <input type="checkbox" name="budget" value="$$$" />$$$
        <input type="checkbox" name="budget" value="$$$$" />$$$$<br />
        <input type="submit" value="-->" onClick={() => props.clickHandle("types")} />
      </form>
    </div>
  )

}

export default Input;