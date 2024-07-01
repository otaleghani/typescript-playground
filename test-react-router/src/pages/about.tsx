import Navbar from "@/components/navbar"
import { Outlet } from "react-router-dom"

export default function AboutPage() {
  return (
    <>
      <header>
        <Navbar />
        <h1>About</h1>
        <Outlet />
      </header>
    </>
  )
}
