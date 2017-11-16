const Input = (props) => {

  return (
    <div>
      <form>
        Location<br />
        <input type="text" name="location" /><br />
        Number of people<br />
        <input type="text" name="peopleNum" /><br />
        Budget<br />
        <input type="checkbox" name="budget" value="$" />$
        <input type="checkbox" name="budget" value="$$" />$$
        <input type="checkbox" name="budget" value="$$$" />$$$
        <input type="checkbox" name="budget" value="$$$$" />$$$$<br />
        <input type="submit" value="-->" onClick={() => props.clickHandle("types")} />
      </form>
    </div>
  )

}

window.Input = Input;