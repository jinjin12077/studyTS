// function sum(a, b){
//     return a+b;
// }

// // sum(10, '20');  // 1020 출력
// var result = sum(10, 20);
// result.toLocaleString();    // js로는 오탈자를 찾기 어려움


// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b){
    return a + b;
}

sum(10, '20');  // 원래는 오타임을 알려주지 않음, // @ts-check를 위에 써주면 ts처럼 사용할 수 있음

