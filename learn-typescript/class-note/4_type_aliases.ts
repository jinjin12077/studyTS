// interface Person {
//     name: string;
//     age: number;
// }

type Person {
    name: string;
    age: number;
}

// 별칭 사용시, 정확한 요구조건을 확인할 수 있다.
var seho: Person = {
    name: '세호',
    age: 30
}

// 예시 1
type MyString = string;
var str: MyString = 'hello';

// 예시 2
type Todo = { id: string; title: string; done: boolean; };
function getTodo(todo: Todo){

}


