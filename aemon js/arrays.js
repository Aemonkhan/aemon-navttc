// var a = 0;
// var old = ['habiba', 'areeba', 'aiman', 'seema', 'maryam', 'sahar'];
// var newSt = ['sultana', 'qamar', 'pervaiz', 'sikandar', 'jameel', 'suleman'];
// var fullList = [];
// if (old.length === newSt.length) {
//     for (var i = 0; i < old.length; i++) {
//         fullList[i] = old[i] + ' ' + newSt[i];
//     }
//     console.log("fullList", fullList)
// }
// var student = ['aiman', 'habiba', 'sahar', 'maryam'];
// var name = 'faiza';
// for (var i = 0; i < student.length; i++) {
//     if (student[i] == name) {
//         console.log('found')
//     }

//     else {
//         console.log('not found')
//     }
// }
// Create a function that take array input and make 
// each element double and then return an array (use for loop)
// var str = "aemon";
// function uppercase(str) {
//     newStr = str.toUpperCase();
//     return newStr
// }
// var newStr = uppercase(str);
// console.log(newStr)
// var str = "aemon pervaiz khan";
// var newStr
// function titleCase(str1) {
//     var str2 = str1.split(" ")
//     for (i = 0; i < str2.length; i++) {
//         str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1)
//     }
//     str2 = str2.join(" ")
//     console.log(str2)
// }
// var newstr = titleCase(str)
// // console.log(newstr)
// var str = "the quick brown fox jumps  over the lazy dog";
// console.log(str.indexOf('quick'));
// console.log(str.charAt(2));
// var sliceToreplace = str.slice(0, 15);
// var replaceStr = "the white cat";
//  var newStr = replaceStr + str.slice(15);
//  console.log(newStr)
// var start = str.indexOf('the quick brown fox');
// var replace = "the quick brown fox";
// var end = start + replace.length;
// var newText = str.slice(0, start) + replaceStr + str.slice(end);
//  console.log(newText)
// str = str.replace(/the quick brown fox/g, "the white cat")
// console.log(str)
// 14 Write a program that takes string
//  and find exclaimation point in the string.(use charAt and indexOf)
// var find = "!"
// var str = "hello world!"
// var address = str.indexOf("!")
// if (address !== -1) {
//     console.log(`!found at address ${address}`)
// }
// 15 Write a program that takes string and find if user has given two 
// spaces. wirte the msg "2 spaces found" if there are two spaces in the text
// var phrase = "my test is  double space"
// var find = '  ';
// for (let i = 0; i < phrase.length; i++) {
//     if (phrase.slice(i, i + 2) == "  ") {
//         console.log('yes double space found')
//         break
//     }
// }
// var input = prompt('enter your num');
// console.log(typeof input)
// var result = parseInt(input) + 1;
// console.log('result', result)
// fiver 3000 Rs/- cuts off 20%
// 17 Write a JavaScript function to format a number
//  up to specified decimal places. Go to the editor Test Data : console.log(decimals(2.100212, 2));
//  //"2.10" console.log(decimals(2.100212, 3)); //2.100 console.log(decimals(2100, 2)); // 2100.00
// var total = 3000;
// var commission = 20;
// var percentage = total * commission / 100;
// console.log('percentage', percentage);
// var remaining = total - percentage;
// remaining = Math.floor(remaining);
// console.log('remaining', remaining)
// var fixDec = +prompt('enter your number');
// var formula = (fixDec / 75) * 100
// console.log(formula.toFixed(3))
// var arr = ['sunday', 'saturday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']
// // console.log(math .random()*12);
// var range = Math.floor((Math.random() * 6) + 1)
// console.log("range", range)
// console.log(arr[range]);
// // date is a builten object;
// var now = new Date();
// console.log('now', now)
// var now = new Date();
// var birth = new Date('may 20,1993')
// var diff = now.getTime() - birth.getTime()
// diff = diff / (1000 * 60 * 60 * 24)
// console.log("diff", diff)
// var now = new Date();
// var tommorrow = new Date('nov 5,2020 09:00:00')
// var diff = tommorrow.getTime() - now.getTime()
// diff = Math.ceil(diff / (1000 * 60 * 60))
// console.log("diff", diff)
// var future = new Date();
// future.setHours(12)
// console.log("future", future)
console.log(0.2 + 0.1)
console.log(0.2 + 0.3)

