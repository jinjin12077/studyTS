// 기존 js 문법과 ts문법의 다른점 : 1.변수와 파라미터값의 타입을 모두 지정해줘야된다.
// 2.변수의 접근 범위까지 지정할 수 있다. 기본적으로는 public 고정
class Person {
    private name: string;   // 이 클래스 안에서만 사용하겠다 => private
    public age: number;
    readonly log: string;

    constructor(name: string, age: number){
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component{

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App(){
    return <div>Hello World</div>
}

// 뷰에서 추가될 컴포지션 api
new Vue({
    el: '',
    setup(){

    }
})

// 클래스를 볼 일이 별로 없을 것이다.
