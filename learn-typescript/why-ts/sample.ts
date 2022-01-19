function add(a: number, b: number): number{
    return a + b;
}

// add(10, '20');  // 코드상에서 에러를 미리 확인할 수 있음
var result = add(10, 20);
result.toLocaleString();    // 제공되는 api 속성을 바로 확인하고 사용할 수 있다.
