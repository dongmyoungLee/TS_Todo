import React, { useState } from "react"

function ToDoList() {
  const [value, setValue] = useState("")
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    // currentTarget 를 value 에 넣어주는 작업
    const {
      currentTarget : { value }
    } = event
    setValue(value)
  }

  return (
    <div>
      <form>
        <input onChange={onChange} value={value} placeholder="Writ a to do" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList