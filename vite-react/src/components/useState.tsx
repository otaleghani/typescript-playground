import { useState } from "react";

interface UpdateTogetherProps {
  count: number,
  onClick: () => void;
}

export function UpdateOnlyMe() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>The count is {count}</button>
  )
}

export function UpdateTogether({ count, onClick }: UpdateTogetherProps) {
  return (
    <button onClick={onClick}>{count}</button>
  )
}
