// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {     // b의 값을 넘기지 않으면, 기본적으로 숫자 10을 제공
    var c = 'hi';
    return b + c;   // string 형태로 출력 => '10hi'
}

10 + '10' // 1010

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
}

// Best Common Type => 알고리즘
var arr = [1,2,3,'a',true];
