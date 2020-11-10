// function displayDate(){
//     var date = new Date();
//     console.log (`${date}`)
// }
// var num =0;
// function count(){
//     num++;
//     console.log(`you have clicked ${num} times`)
// }
// function doo(){
// var x = document.getElementById("aa");
// x.innerHTML='my name';
// }
// function does(){
//     var x = document.getElementById("para");
//     if(x.innerHTML=="my dummy text"){
//      x.innerHTML ='new text';
//     }
// }
// function makeinvisible(){
//     var x= document.getElementsByTagName('img');
//     console.log(x[0].src)
//     x[0].className='invisible'
// }
// function para(){
//     var x = document.getElementById('grabpara');
//     console.log(x.className)
//     x.className +='newpara'
// }
// // document.addEventListener('contextmenu', function (e) {
// //     document.body.innerHTML += '<p>Right-click is disabled</p>'
// //     e.preventDefault();
// //   }, false);
// document.addEventListener('contextmenu', 
// event => event.preventDefault());
// function humpty(){
//  var d = document.getElementById('humpty');

//  var pCounter = 0;
//  for (var i = 0; i < d.childNodes.length; i++) {
//  if (d.childNodes[i].nodeType === 1 ) {
//  pCounter++;
//  }
//  if (pCounter === 2) {
//  d.childNodes[i].innerHTML = "All his men.";
// break;
//  }
//  }
// }
// function todoList() {
//     var item = document.getElementById('todoInput').value
//     var text = document.createTextNode(item)
//     var newItem = document.createElement("li")
//     newItem.appendChild(text)
//    document.getElementById("todoList").appendChild(newItem)
//   }
// function addPara(){
//     var x=document.createElement('p')
//     var text = document.createTextNode('new paragraph')
//     x.appendChild(text)
//     var div = document.getElementById('mydiv');
//     // div.appendChild(x)
//     div.insertBefore(x,div.firstChild.nextSibling)
// }
// Question 1 in object
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
 for(var key in student){  
    console.log(key+' '+student[key])
 } 
//  question 2 in object
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
    for (var key in library){
      console.log(key+' '+library[key].author)  
    }
function Employee(name,salary,absent){
    this.name=name;
    this.salary=salary;
    this.absent=absent;
Employee.prototype.bonus =0;
Employee.prototype.salaryCalc=function(){
        if(this.absent>2){
            this.salary=this.salary*.8;
            console.log(this.salary+' '+'is your salary')
        }
    }
}
var Employee1=new Employee('aemon',5000,4);
Employee1.salaryCalc()
var Employee2=new Employee('abc',5000,4);
var Employee3=new Employee('xyz',5000,4);
Employee1.bonus=2000;
console.log(Employee1)
console.log(Employee2)
console.log(Employee3)
