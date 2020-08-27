function add(first, second) {
  return first + second;
}
//typeof add === 'function'
var add = function(first, second) {
  return first + second;
};
//typeof add === 'function'

//화살표 함수로 변경
var add = (first, second) => {
  return first + second;
};
//결괏값을 바로 반환하는 경우에는 중괄호 생략가능
var add = (first, second) => first + second;
//반환값이 객체라면 괄호로 결괏값을 감싸 간결하게 표현 가능
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

function addNumber(num) {
  return function(value) {
    return num + value;
  };
}
var addNumber = num => value => num + value;

//콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind() 함수를 사용
//this를 bind() 함수에 전달하여 this의 범위를 유지
class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
