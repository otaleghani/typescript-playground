'use server';

// Server actions can be invoked directly from a form
import { FormValidation } from "../ui/form"
import { doesSomething } from "./server-action"

export async function checkForm(previousState:FormValidation, formData: FormData) {
  console.log("im on the server now!")
  console.log(formData)
  const sandro =formData.get('name')
  console.log(sandro)

  if (sandro !== "") {
    previousState.message = sandro as string
    console.log(previousState)
    doesSomething()
    return previousState
  } 

  previousState.message = "METTECE QUALCOSA";
  return previousState;
}

