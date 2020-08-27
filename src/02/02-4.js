//가변 변수는 let 키워드로 선언
//let으로 선언한 변수는 읽거나 수정 가능
let num = 1;
num = num * 3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = { name: '새 객체' };

//불변 변수는 const 키워드로 선언
//const로 선언한 변수는 읽기만 가능
const num = 1;
num = 3; //자료형 오류가 발생
const str = '문자';
str = '새 문자'; //자료형 오류가 발생
const ar = [];
arr = [1, 2, 3]; //자료형 오류가 발생
const obj = {};
obj = { name: '내 이름' }; //자료형 오류가 발생

//무결성 제약 조건에 위배된 경우
const arr2 = [];
arr2.push(1); //arr2 = [1]
arr2.splice(0, 0, 0); //arr2 = [0, 1]
arr2.pop(); //arr2 = [1]
const obj2 = {};
obj2['name'] = '내이름'; //obj2 = { name : '내이름' }
Object.assign(obj2, { name: '새이름' }); //obj2 = { name : '새이름' }
delete obj2.name; //obj2 = {}

const num1 = 1;
const num2 = num1 * 3; //num2 = 3
const str1 = '문자';
const str2 = str1 + '추가'; //str2 = '문자추가'
const arr3 = [];
const arr4 = arr3.concat(1); //arr4 = [1]
const arr5 = [...arr4, 2, 3]; //arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); //arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; //arr7 = [2, 3], frist = 1
const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' }; //obj4 = { name : '새이름', age : 20 }
const { name, ...obj5 } = obj4; //obj5 = { age : 20 }

//배열에 새로운 값 추가 시 push() 대신 concat()
//삭제시 pop(), shift() 대신 slice(), concat()
//새 값을 할당하는 것이 아니라 기존의 값을 추출하여 새 불변 변수에 할당 하는 것이므로 무결성 위배 되지 않음.
