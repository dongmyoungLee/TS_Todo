
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms"
import CreateToDo from "./CreateToDo"
import ToDo from "./ToDo"

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector) // TO_Do 렌더
  const [category, setCategory] = useRecoilState(categoryState)
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
    //category 가 변경됨
  }
  console.log(toDos)

  return (
    <div>
      <h1>To Dos</h1> 
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>

      <CreateToDo/>
      {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
    </div>
  )
}

// interface IForm {
//   email : string
//   userName? : string
//   password : string
//   password1 : string
//   extraError? : string
// }

// function ToDoList() {
//   const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({
//     defaultValues : {
//       email : "@naver.com"
//     }
//   })
//   const onValid = (data:IForm) => {
//     if(data.password !== data.password1) {
//       setError("password1", { message : "비밀번호가 일치하지 않습니다."}, { shouldFocus : true })
//     }
//     // setError("extraError", { message : "서버가 응답하지 않습니다."})
//     console.log(data)
//   }

//   return(
//     <div>
//       <form style={{ display:"flex", flexDirection:"column" }} onSubmit={handleSubmit(onValid)}>
//         <input {...register("email", {
//           required : "필수 입력 사항입니다.",
//           pattern : {
//             value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//             message: "naver.com 만 가능 합니다."
//           }, 
//           })}
//           placeholder="E-mail" />
//         <span>
//           {errors?.email?.message}
//         </span>
//         <input {...register("userName", {required : false, minLength: 3, validate : (value) => value?.includes("apple") ? "no apple" : true})} placeholder="이름" />
//         <span>
//           {errors?.userName?.message}
//         </span>
//         <input {...register("password", {required : "필수 입력 사항입니다.", minLength: 5})} placeholder="비밀번호" />
//         <span>
//           {errors?.password?.message}
//         </span>
//         <input {...register("password1", {required : "필수 입력 사항입니다.", minLength: 5})} placeholder="비밀번호확인" />
//         <span>
//           {errors?.password1?.message}
//         </span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   )
// }

export default ToDoList