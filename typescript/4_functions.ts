// This is basically the type definition of a function
function greeter(fn: (a: string) => void) {
  fn("hello world")
}
function printToConsole(s: string): void {
  console.log(s + "hi")
}
greeter(printToConsole)


