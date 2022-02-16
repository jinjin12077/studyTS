interface User {    // 상호간의 약속, 규칙을 정함
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number{
    return a + b;
}
    
// 인덱싱
interface StringArray{
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10;        // 괄호 안에 index: string 값으로 배열에 접근할 수 있다.
                    // 인터페이스 StringArray에 보면 넣을 수 있는 값이 string 밖에 안됨.

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;       // RegExp = '정규표현식'의 약오
}

var obj: StringRegexDictionary = {
    // sth: /abc/,     // 정규식 표현 /ab+c/
    cssFile: /\.css$/,  // css 파일 전부 가져오기
    jsFile: /\.js$/     // js 파일 전부 가져오기
}
obj['cssFile'] = 'a';       // 정규식 표현이 와야되는데 string이 와서 에러남

Object.keys(obj).forEach(function(value){ });

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    langage: string;
}

var captain: Developer = {
    langage : 'ts',
    age : 100,
    name: '캡틴'
}



