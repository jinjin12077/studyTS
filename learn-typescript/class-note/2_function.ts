// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number){
    return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number{
    return 10;
}

// 함수에 타입을 정의하는 방식
function person(a: string, b: string): string{
    return a + b;
}
person('student1', 'student2', 'student3', 'student4'); // TS에서는 두개의 인자만 받는다는 것을 확인할 수 있다.

// 함수의 옵셔널 파라미터(?) : 선택적 파라미터
function log(a: string, b?: string){

}
log('hello world');     // 옵셔널 파라미터(?)을 사용하지 않았다면 인수가 1개밖에 없어서 오류라고 표시
log('hello ts', 'abc');


