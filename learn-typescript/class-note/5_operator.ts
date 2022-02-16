// function logMessage(value: any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니언 타입 사용 (|)
var seho: string | number | boolean;
function logMessage(value: string | number){
    if (typeof value === 'number'){
        value.toLocaleString();     // toLocaleString() : 숫자의 사용 언어에 따른 표현을 포함한 문자열을 반환
    }
    if (typeof value === 'string'){
        value.toString();           // toString) : 객체를 나타내는 문자열을 반환
    }
    throw new TypeError('value must be string or number');  // 다른 타입오류 에러 발생시, 메시지 출력
}

logMessage('hello');
logMessage(100);


// 유니언 타입의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// function askSomeone(someone: Developer | Person){
//     someone.name;       // 유니언 타입은 공통된 속성만 접근할 수 있다.
//     // someone.skill;   // 에러
//     // someone.age;     // 에러
// }
// askSomeone({ name: '디펠로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });


// 인터섹션 타입 ( & ) => 두 인터섹션을 합친 합집합, 새로운 타입을 만듬
function askSomeone(someone: Developer & Person){
    someone.name;       
    someone.skill;      // 에러가 사라짐
    someone.age;        // 인터섹션 타입은 interface 속성을 모두 가지기 때문에, name/skill/age 모두 접근할 수 있다.
}
askSomeone({ name: '디펠로퍼', skill: '웹 개발', age: 34 });     // 모든 속성을 적어줘야된다. name/skill/age

