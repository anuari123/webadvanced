var programmingLanguages=['html','php','python'];

console.log(programmingLanguages);
console.log(programmingLanguages[2]);

programmingLanguages.push('js');
console.log(programmingLanguages);

programmingLanguages.pop();
console.log(programmingLanguages);

programmingLanguages.unshift('c#');
console.log(programmingLanguages);

//programmingLanguages.shift();
//console.log(programmingLanguages);

programmingLanguages.splice(0,2, 'ruby');
console.log(programmingLanguages);

console.log(Math.random()*5);
console.log(Math.random(Math.random()*2));

var students=['john','drin','filan'];

var[s1,s2,s3]=students;

console.log(s1);
console.log(s2);
console.log(s3);

var places=['london','new york','paris','berlin','prishtina'];

var [firstPlace, ,secondPlace,thirdPlace]=places;

console.log(secondPlace);
console.log(thirdPlace);

var numbers=[1,2,3,4,5,6,7,8,9,10];
var [first,second, ...otherNumbers]=numbers;

console.log(first);
console.log(otherNumbers,toString());