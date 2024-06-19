const somedata = "subatomico"

// Type declaration
interface Data {
  name: string;
  surname: string;
}

let data: Data = {
  name: "name",
  surname: "surname",
}

function Basics() {
  return (
    <>
      <a className="text-xl pr-10" href="someotherlink">gennaro</a>
      <a className="text-teal-400 text-xl" href="https://talesign.com">alberto</a> 
      <a>{somedata}</a>
      <a>{data.name}</a>
    </>
  )
}

export default Basics
