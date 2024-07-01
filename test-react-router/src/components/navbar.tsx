import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <ul className="flex gap-8">
      <li><Link to={"/"} className="text-xl">Homepage</Link></li>
      <li><Link to={"/about"} className="text-xl">About</Link></li>
    </ul>
  )
}
