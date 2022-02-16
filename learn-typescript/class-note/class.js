// 클래스를 사용하지 않아도 프로토타입을 이용해서 상속을 사용해 왔다.
function Person(name, age){
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);


// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age){      // 초기화 메서드
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}

new Person();   // [출력값] 생성 되었습니다.
var seho = new Person('세호', 30);
console.log(seho);

