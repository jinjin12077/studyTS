// 숫자형 이넘 (자동으로 숫자가 증가함)
enum Shoes {
    Nike,       // 0
    Adidas      // 1
}

var myShoes = Shoes.Nike;
console.log(myShoes);   // [출력값] 0

// 문자형 이넘
enum Shoes2 {
    Nike = '나이키',       // '나이키'
    Adidas = '아디다스'      // '아디다스'
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2);   // [출력값] '나이키'

// 예제
function askQuestion(answer: string){
    if(answer === 'yes'){
        console.log('정답입니다');
    }
    if(answer === 'no'){
        console.log('오답입니다');
    }
}
askQuestion('예스');    // string으로 받으면 정확한 yes라고 치지않는 이상 원하는 값을 얻을 수 없다.
askQuestion('y');
askQuestion('Yes');


enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion2(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다');
    }
    if(answer === Answer.No){
        console.log('오답입니다');
    }
}
askQuestion2(Answer.Yes);
// askQuestion2('Yes');        // 이넘에서 제공하는 값만 넘길 수 있기때문에 좀더 정확하게 타입 지정을 할 수 있다.
