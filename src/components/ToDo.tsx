import { useSetRecoilState } from "recoil"
import { Categories, IToDo, toDoState } from "../atoms"

// {
//   "text": "4",
//   "category": "TO_DO",
//   "id": 1645352937524
// }
/*

  1. array 안에 있는 object 의 index를 찾는다.
  2. 수정하고자 하는 todo의 경로를 알아야함.

*/
// 배열의 index 지키면서 요소 바꾸기
// const food = ["pizza", "mango", "kimchi", "kimbab"]
// const front = ["pizza"]
// const back = ["kimchi", "kimbab"]
//const final = [...front, "감", ...back]
//console.log([...food.slice(0, 1), "감", ...food.slice(1+1)])

function ToDo({text, category, id} : IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
      // 누른놈의 id와 원래있던 id 가 같은걸 찾음.
      const oldToDo = oldToDos[targetIndex]
      const newToDo = {text, id, category: name as any}
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex+1)]
      /*
      3개중 2번째의 버튼을 눌럿을때 1번째 배열요소는 남아있고 그 다음에 newToDo 를
      넣어준다음에 나머지 배열요소를 합침. newToDo는 name 의 값이 바뀌기 때문에
      버튼의 value 값이 바뀐다.
      */
    })
  }

  return (
    <li>
      <span>{text}</span> 
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  ) 
}

export default ToDo