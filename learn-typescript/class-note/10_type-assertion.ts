// 타입 단언 (type assertion)
var a;
a = 20;
a = 'a';
// var b = a;    // a 변수에 string값을 넣어서 당연히 a의 값을 넣은 b도 string 타입 추론이 되었을 것이라고 생각했지만, 아니였음(any)
var b = a as string;    // 변수의 타입을 직접 지정하려면 as 사용


