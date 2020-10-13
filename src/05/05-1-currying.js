// a * b
function multiply(a, b) {
  return a * b;
}

//multiply 함수를 활요하여 a에 2를 곱한 값을 반환
function multiplyTwo(a) {
  return multiply(a, 2);
}

//이를 응용하여 n배 함수 생성해주는 커링함수
function multiplyX(x) {
  return function(a) {
    return multiply(a, x);
  };
}

//화살표 함수 표현식
// const multiplyX = x => a => multiply(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3); // 3 * 3 = 9
const result2 = multiplyFour(3); // 4 * 3 = 12

const result3 = multiplyX(3)(3); // 9
const result4 = multiplyX(3)(4); // 12

// => ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => x => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

const multiply1 = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX1 = x => a => multiply(a, 2);
const addX = x => a => add(x, a);
const addFour = addX(4);

const multiplyTwo1 = multiplyX1(2);
const multiplyThree1 = multiplyX1(3);
const formula1 = x => addFour(multiplyThree1(multiplyTwo1(x)));

console.log(multiplyTwo1(6));
console.log(multiplyThree1(6));
console.log(formula1(4));

//compose()
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

//배열함수 slice를 사용하여 나열형자료를 배열형태로 변환
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
