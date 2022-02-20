import { atom, selector } from "recoil";


// 자주쓰는값을 저장함, 좌변만 넣으면 index순서에따라 0,1,2,3... 의 값을 같게됨.
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE"
}

export interface IToDo {
  text : string
  id : number,
  category : Categories
}

export const categoryState = atom<Categories>({
  key : "category",
  default : Categories.TO_DO
})

// 1. 새로 추가하는 toDo들이 모두 toDoState로 들어가서 보여줌 -> 하지만 toDO를 보려고할때는 selector 라는걸 이용했음. selector 는 state를 가져다가 조금 변형해주는 함수임.
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
})

// 2. get function 은 selector 가 어떤것을 반환할지 결정한다. 이 selector 는 두개의 atom 을 이용하고 있음. 모든 toDo를 저장하고있는 toDos 와 category의 상태를 저장하는 atorm

// 3. todoList 에서 select 태그를 만들어주고 input event 를 감지해서 선택에따라 category 의 상태를 바꿔주고 있음. 이건 즉 selector 가 변하고 있다는 뜻임. categoryState 가 변할때마다 selector도 같이 실행됨.

// 4. 이 selector는 toDo들을 가져다 categoryState에 맞는 toDo만을 걸러서 반환해줌.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({get}) => {
    const toDos = get(toDoState) // 들어와있는 배열
    const category = get(categoryState) // select 태그의 onInput함수로 인해 변경되고있음.
    return toDos.filter((toDo) => toDo.category === category)
  }
})