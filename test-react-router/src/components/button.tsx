import { DropdownMenuDemo } from "@/components/dropdown"
import Dropdown2 from "@/components/dropdown-2"

export default function Button(props: { counter: number }) {
  return (
    <>
      <Dropdown2 />
      <DropdownMenuDemo />
      <button>
        Insert your will to live {props.counter}
      </button>
    </>
  )
}
