import Navbar from "@/components/navbar"

export default function AboutPageId(props: {id: string}) {
  return (
    <>
      <header>
        <Navbar />
        <h1>About page of {props.id}</h1>
      </header>
    </>
  )
}
