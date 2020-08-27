function patse(qs) {
  var queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; //key = 'banana'
    var value = parts[1]; //value = '10'
    result[key] = value; //result = {banana : '10'}
  }
  return result;
}

function parse(qs) {
  var queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; //key = 'banana'
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value; // result = {banan : 10}
  }
  return result;
}

function parse(qs) {
  const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //chunks=['banana=10', 'apple=20', 'orange=30']
  let result = {};
  chunks.forEach(chunk => {
    const parts = chunk.split('='); //chunk = 'banana=10', parts = ['banana', '10']
    const key = parts[0]; //key = 'banana'
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value; // result = {banana : 10}
  });
  return result;
}

function parse(qs) {
  const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //chunks=['banana=10', 'apple=20', 'orange=30']
  let result = {};
  chunks.forEach(chunk => {
    const [key, value] = chunk.split('='); //key = 'banana', value = '10'
    result[key] = value; // result = {banana : '10'}
  });
  return result;
}

//불변함수(const) 사용하려면 map() 함수를 사용
function parse(qs) {
  const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //chunks=['banana=10', 'apple=20', 'orange=30']
  const result = chunks.map(chunk => {
    const [key, value] = chunk.split('='); //key = 'banana', value = '10'
    return { key: key, value: value }; //{key : 'banana', vaule : '10'}
  });
  return result;
}

//reduce()함수를 응용하여 배열을 객체로 변환
function parse(qs) {
  const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //chunks=['banana=10', 'apple=20', 'orange=30']
  return chunks
    .map(chunk => {
      const [key, value] = chunk.split('='); //key = 'banana', value = '10'
      return { key, value }; //{key : 'banana', vaule : '10'}
    })
    .reduce((result, item) => {
      //result = {}. item = {key : 'banana', value : '10'}
      result[item.key] = item.value; //result = {banana : '10'}
      return result;
    }, {});
}
