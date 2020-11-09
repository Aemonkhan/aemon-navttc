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
function addPara(){
    var x=document.createElement('p')
    var text = document.createTextNode('new paragraph')
    x.appendChild(text)
    var div = document.getElementById('mydiv');
    // div.appendChild(x)
    div.insertBefore(x,div.firstChild.nextSibling)
}
