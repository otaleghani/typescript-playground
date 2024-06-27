'use client';

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export interface FormValidation {
  message?: string;
  error?: { 
    field: string;
    error: string;
  }
}

import { useActionState } from "react"
import { checkForm } from "../lib/action";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Form(){
  const initialState: FormValidation = {
    message: "",
  }
  const [state, formAction] = useActionState(checkForm, initialState)

  return ( 
    <div className="flex flex-col align-middle p-72">
      <Alert>
        <Terminal className="h-4 w-4"/>
        <AlertTitle>something</AlertTitle>
        <AlertDescription>SOMETHING ELSE</AlertDescription>
      </Alert>

<Carousel>
  <CarouselContent>
    <CarouselItem><div className="bg-yellow-500 w-full h-24"></div></CarouselItem>
    <CarouselItem><div className="bg-yellow-500 w-full h-24"></div></CarouselItem>
    <CarouselItem><div className="bg-yellow-500 w-full h-24"></div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      <form className="flex flex-col p-16 text-center" action={formAction}>
        <input 
          name="name" 
          placeholder="name" 
          className="border-2 border-black p-4"
          aria-describedby="message"/>
          {state.message && (
            <p className="mt-2 text-sm text-red-600" key={state.message}>
              {state.message}
            </p>
            )}
        <button >Increment!</button>
        <div id="message" aria-live="polite" aria-atomic="true">
        </div>
      </form>
    </div>
  )
}
