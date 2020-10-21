//커링 함수를 순서대로 조합하는 compose()함수
[multiplyTwo, multiplyThree, addFour].reduce(
    function(prevFunc, nextFunc) {
        return function(value) {
            return nextFunc(prevFunc(value));
        }
    },
    function(k) { return k;}
)

function compose(funcArr) {
    return funcArr.reduce(
      function(prevFunc, nextFunc) {
        return function(value) {
          return nextFunc(prevFunc(value));
        };
      },
      function(k) {
        return k;
      },
    );
  }
const flrmulaWithCompose = compse([multiplyTwo1, multiplyThree1, addFour]);
  
//1.배열함수 slice를 사용하여 나열형자료를 배열형태로 변환
function compose() {
const funcArr = Array.prototype.slice.call(arguments);
return funcArr.reduce(
    function(prevFunc, nextFunc) {
    return function(value) {
        return nextFunc(prevFunc(value));
    };
    },
    function(k) {
    return k;
    },
);
}
const formulaWithCompose = compose(multiplyTwo1, multiplyThree1, addFour);

//2.arguments를 활용하여 하나의 실행 인자 value를 다중 인자로 사용 가능하게 확장하기

function compose() {
    const funcArr = Array.prototype.slice.call(arguments);
    return funcArr.reduce(
        function(prevFunc, nextFunc) {
            return function(){
                const args = Array.prototype.slice.call(arguments);
                return nextFunc(prevFunc.apply(null, args));
            }
        },
        function(k) { return k;}
    )
}


//3.전개 연산자로 더 간결하게 만들기
function compose(...funcArr){
    return funcArr.reduce(
        function(prevFunc, nextFunc){
            return function(...args){
                return nextFunc(prevFunc(...args));
            }
        },
        function(k) { return k; }
    );
}

//4.함수 조합 실행하기
const formulaWithCompose = compse(multiplyTwo, multiplyThree, addFour);
//혹은
const formulaWithCompose = compose(
    multiplyTwo,
    multiplyThree,
    addFour
);
const x = 10;
formulaWithCompose(10); //앞의 공식 함수 formula와 동일한 64값이 반환

// => ((x * 2) * 3) + 4
const formulaWithCompose = compose(
    multiplyX(2),
    multiplyX(3),
    addX(4)
);