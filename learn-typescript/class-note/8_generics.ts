// 기존 함수의 반환되는 값
// function logText(text){
//     console.log(text);
//     return text;
// }
// logText(10);    // 숫자 10
// logText("하이");    // 문자열 하이
// logText(true);  // 진위값 true

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText('하이');    // 문자열 하이를 가져가서 넘겨줌
// logText<string>('하이');    // 명시적으로 string을 넘기겠다하고 정해놓을 수 있음


// 단순히 타입을 다르게 받기 위해서 중복된 코드들을 나열하는 것은 유지보수 측면에서도 좋지않고
// 코드만 비대해지기 때문에 가독성면에서도 좋지 않다.
// function logText(text: string){
//     console.log(text);
//     // text.split('').reverse().join('');
//     return text;
// }

// function logNum(text: number){
//     console.log(text);
//     return text;
// }


// input에 대해서는 유니언타입으로 해결할 수 있지만, 반환값이 지정되지 않아서 문제가 생긴다.
function logText(text: string | number){
    console.log(text);
    return text;
}
// logText("하이");
const a = logText('a');
a.split('');    // [에러] 정확하게 string을 받지 않고 string|number 을 반환하고 있기 때문에 split()을 사용할 수 없다.
logText(10);
// logNum(10);
// logText(true);



// 제네릭의 장점
// 실제로 함수를 정의할 때 타입을 비워놔서 함수를 호출하는 시점에 타입을 지정하는 것
function logText2<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText2<string>('abc');
str.split('');
const login = logText2<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown{
    value: string;
    selected: boolean;
}
const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown2<T>{
    value: T;
    selected: boolean;
}
const obj2: Dropdown2<number> = { value: 'abc', selected: false };  // 함수를 호출하는 순간 타입을 지정하기 때문에 바로바로 타입오류를 잡을 수 있다.


// 제네릭의 타입 제한 => 타입 힌트를 추가적으로 좀더 줄 수 있다.
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text){
        console.log(text);
    });
    return text;
}
logTextLength(['hi', 'abc']);


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2(10);
logTextLength2({ length: 10 });     // length 라는 속성만 있으면 객체로 받을 수 있는 모습


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// getShoppingItemOption 함수의 인자로는 ShoppingItem의 name/price/stock 중에 한가지만 들어갈 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem> (itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');


