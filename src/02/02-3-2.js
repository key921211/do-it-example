var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
//combined = { one : 1, two : 2, three : 3, four : 4, other : -1 }
var combined = Object.assign({}, objectTwo, objectOne);
//combined = { one : 1, two : 2, three : 3, four : 4, other : 0 }
var others = Object.assign({}, combined);
delete others.other;
//combined = { one : 1, two : 2, three : 3, four : 4 }

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne,
  ...objectTwo,
};
//combined = { one : 1, two : 2, three : 3, four : 4, other : -1 }
var combined = {
  ...objectTwo,
  ...objectOne,
};
//combined = { one : 1, two : 2, three : 3, four : 4, other : 0 }
//두 객체를 병합할 때 중복된 키값들은 마지막에 사용한 객체의 값으로 덮어씀.
var { other, ...others } = combined;
//combined = { one : 1, two : 2, three : 3, four : 4 }
//객체에서 특정값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당할 수 있음.
