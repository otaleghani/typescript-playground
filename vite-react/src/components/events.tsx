function Events() {
  function clickHandler() {
    alert("You clicked!")
  }

  return (
    <>
      <button onClick={clickHandler}>click me</button>
    </>
  )
}

export default Events
