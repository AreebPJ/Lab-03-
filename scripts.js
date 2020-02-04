


const hello = document.getElementById("hello");
function greeting(){
alert("Wasuuuuup");
hello.textContent = "Goodbye";
}
hello.addEventListener("click", greeting);


function Person(first, job, age) {
  this.firstName = first;
  this.job = job;
  this.age = age;
}


var khaled = new Person("khaled", "student", 22);
var Areeb = new Person("Areeb","Software Engineer", 22)


console.log(Areeb);
