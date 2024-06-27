'use client';

import { useActionState } from "react"

async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}

export default function Form(){
  const [state, formAction] = useActionState(increment, 0)

  return ( 
    <form action={formAction}>
      {state}
      <button >Increment!</button>
    </form>
  )
}
