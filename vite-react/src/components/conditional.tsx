let isLogged:boolean = false;
let name:string = "Gennaro";

function Logged() {
  return (
    <div>I'm logged!</div>
  )
}

function NotLogged() {
  return (
    <div>I'm not logged!</div>
  )
}

function Conditional() {
  return (
    <div>
      {isLogged ? (
        <Logged />
      ) : (
        <NotLogged />
      )}
      { name != "" && <div>Hi {name}</div>}
    </div>
  )
  
}

export default Conditional
