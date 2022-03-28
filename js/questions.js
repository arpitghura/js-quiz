data = [
  {
    question: {
      1: "Javascript is an _______ language?",
      2: "Which of the following keywords is used to define a variable in Javascript?",
      3: "Which of the following methods is used to access HTML elements using Javascript?",
      4: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      5: "Which of the following methods can be used to display data in some form using Javascript?",
      6: "How can a datatype be declared to be a constant type?",
      7: "What will be the output of the following code snippet?<br>a = 5 + '9';<br>document.write(a);",
      8: "What will be the output of the following code snippet?<br>var a = 'Scaler';<br>var result = a.substring(2, 4);<br>document.write(result);",
      9: "What will be the output of the following code snippet?<br>var x=12;<br>var y=8;<br>var res=eval('x+y');<br>document.write(res);",
      10: "When the switch statement matches the expression with the given labels, how is the comparison done?",
      11: "What keyword is used to check whether a given property is valid or not?",
      12: "What is the use of the &lt;noscript&gt; tag in Javascript?",
      13: "What will be the output of the following code snippet?<br>(function(){setTimeout(()=&gt; console.log(1),2000);console.log(2);setTimeout(()=&gt; console.log(3),0);console.log(4);})();",
      14: "What will be the output of the following code snippet?<br>(function(a){ return (function(){   console.log(a);   a = 6; })()})(21);",
      15: "What will be the output of the following code snippet?<br>function solve(arr, rotations)<br>{ if(rotations == 0) return arr; <br>for(let i = 0; i &lt; rotations; i++)<br>{   let element = arr.pop(); <br>  arr.unshift(element); } <br>return arr;}<br>// solve([44, 1, 22, 111], 5);",
      16: "What will be the output for the following code snippet?&lt;p&gt; &lt;id='example'&gt; &lt;/p&gt; <br> &lt;script&gt;<br>function Func()  { <br> document.getElementById('example').innerHTML=Math.sqrt(81); <br> } <br> &lt;/script&gt;",
      17: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
      18: "What will be the output of the following code snippet?var a = 1;  var b = 0;  while (a &lt;= 3)  {     a++;     b += a * 2;     print(b);}",
      19: "What does the Javascript “debugger” statement do?",
      20: "What will be the output of the following code snippet?var a = Math.max();var b = Math.min();print(a);print(b);",
      21: "What will be the output of the following code snippet?var a = Math.max() &lt; Math.min();var b = Math.max() &gt; Math.min();print(a);print(b);",
      22: "What will be the output of the following code snippet?var a = true + true + true * 3;print(a)",
      23: "What is the output of the following code snippet?print(NaN === NaN);",
      24: "What will be the output of the following code snippet?print(typeof(NaN));",
      25: "What does the ‘toLocateString()’ method do in JS?",
      26: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
      27: "Which function is used to serialize an object into a JSON string in Javascript?",
      28: "The 3 basic object attributes in Javascript are:",
      29: "What will be the output of the following code snippet?let sum = 0; const a = [1, 2, 3];a.forEach(getSum);print(sum);function getSum(ele) {   sum += ele;}",
      30: "What will be the output of the following code snippet? a = [1, 2, 3, 4, 5];print(a.slice(2, 4));",
      31: "What will be the output of the following code snippet?print(parseInt('123Hello'));print(parseInt('Hello123'));",
      32: "Which of the following are closures in Javascript?",
      33: "Which of the following is not a Javascript framework?",
      34: "What will be the output of the following code snippet?var a = 'hello';var sum = 0;for(var i = 0; i &lt; a.length; i++) {   sum += (a[i] - 'a');}print(sum);",
      35: "What keyword is used to declare an asynchronous function in Javascript?",
      36: "How to stop an interval timer in Javascript?",
      37: "What will be the output of the following code snippet?const set = new Set();set.add(5);set.add('Hello');set.add({ name: 'Scaler' }); for (let item of set) { console.log(item + 6);}",
      38: "How are objects compared when they are checked with the strict equality operator?",
      39: "What does … operator do in JS?",
      40: "What will be the output of the following code snippet?const example = ({ a, b, c }) =&gt; { console.log(a, b,c);};example(0, 1, 2);",
      41: "What will be the output of the following code snippet? let a = [1, 2, 3, 4, 5, 6];var left = 0, right = 5;var found = false;var target = 5;while(left &lt;= right) {var mid = Math.floor((left + right) / 2);if(a[mid] == target) {<br>   found = true;<br>   break;}else if(a[mid] &lt; target) {<br>   left = mid + 1;}else {<br>   right = mid - 1;}}if(found) {print('YES');}else {print('NO);'}",
      42: "What will be the output of the following code snippet? let s = '00000001111111';let l = 0, r = s.length - 1, ans = -1;while(l &lt;= r) {var mid = Math.floor((l + r) / 2);   if(s[mid] == '1') {<br>   ans = mid;<br>   r = mid - 1;   }   else {<br>   l = mid + 1;   }}print(ans);",
      43: "What will be the output of the following code snippet?let n = 24;let l = 0, r = 100, ans = n;while(l &lt;= r) {   let mid = Math.floor((l + r) / 2);   if(mid * mid &lt;= n) {<br>   ans = mid;<br>   l = mid + 1;   }   else {<br>   r = mid - 1;   }}print(ans);",
      44: "What will be the output of the following code snippet?const obj1 = {Name: 'Hello', Age: 16};const obj2 = {Name: 'Hello', Age: 16};print(obj1 === obj2);",
      45: "What happens when we run this code? function dog() { print('I am a dog.');}dog.sound = 'Bark';",
      46: "How do we write a comment in javascript?",
      47: "Which object in Javascript doesn’t have a prototype?",
      48: "What will be the output of the following code snippet?function test(...args) { console.log(typeof args);}test(12);",
      49: "What will be the output of the following code snippet?const obj1 = {first: 20, second: 30, first: 50}console.log(obj1);",
      50: "Which of the following are not server-side Javascript objects?",
    },
  },
  {
    options: {
      1: {
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
      },
      2: { a: "var", b: "let", c: "Both A and B", d: "None of the above" },
      3: {
        a: "getElementbyId()",
        b: "getElementsByClassName()",
        c: "Both A and B",
        d: "None of the above",
      },
      4: {
        a: "Throws an error",
        b: "Ignores the statements",
        c: "Gives a warning",
        d: "None of the above",
      },
      5: {
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
      },
      6: { a: "const", b: "var", c: "let", d: "constant" },
      7: { a: "Compilation Error", b: "14", c: "Runtime Error", d: "59" },
      8: { a: "al", b: "ale", c: "cal", d: "caler" },
      9: { a: "20", b: "x+y", c: "128", d: "None of the above" },
      10: {
        a: "Both the datatype and the result of the expression are compared.",
        b: "Only the datatype of the expression is compared.",
        c: "Only the value of the expression is compared.",
        d: "None of the above.",
      },
      11: { a: "in", b: "is in", c: "exists", d: "lies" },
      12: {
        a: "The contents are displayed by non-JS-based browsers.",
        b: "Clears all the cookies and cache.",
        c: "Both A and B.",
        d: "None of the above.",
      },
      13: { a: "1 2 3 4", b: "2 3 4 1", c: "2 4 3 1", d: "4 3 2 1" },
      14: { a: "6", b: "NaN", c: "21", d: "None of the above" },
      15: {
        a: "[111, 44, 1, 22]",
        b: "[44, 1, 22, 111]",
        c: "[111, 44, 1, 22]",
        d: "[1, 22, 111, 44]",
      },
      16: { a: "9", b: "81", c: "Error", d: "0" },
      17: { a: "Boolean", b: "Undefined", c: "Object", d: "Integer" },
      18: { a: "4 10 18", b: "1 2 3", c: "1 4 7", d: "None of the above" },
      19: {
        a: "It will debug all the errors in the program at runtime.",
        b: "It acts as a breakpoint in a program.",
        c: "It will debug error in the current statement if any.",
        d: "All of the above.",
      },
      20: {
        a: "-Infinity Infinity",
        b: "Infinity -Infinity",
        c: "Infinity Infinity",
        d: "-Infinity -Infinity",
      },
      21: {
        a: "true false",
        b: " false true",
        c: "true true",
        d: "false false",
      },
      22: { a: "3", b: "0", c: "Error", d: "5" },
      23: { a: "true", b: "false", c: "undefined", d: "Error" },
      24: { a: "Object", b: "Number", c: "String", d: "None of the above" },
      25: {
        a: "Returns a localised object representation.",
        b: "Returns a parsed string.",
        c: "Returns a localized string representation of an object.",
        d: "None of the above.",
      },
      26: {
        a: "Object Serialization",
        b: "Object Encapsulation",
        c: "Object Inheritance",
        d: "None of the above",
      },
      27: {
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
      },
      28: {
        a: "Class, prototype, objects' parameters.",
        b: "Class, prototype, object's extensible flag.",
        c: "Class, parameters, object's extensible flag.",
        d: "Classes, Native object, and Interfaces and Object's extensible flag.",
      },
      29: { a: "6", b: "1", c: "2", d: "None of the above" },
      30: { a: "3, 4", b: "2, 3", c: "3, 4, 5", d: "2, 3, 4" },
      31: { a: "123 NaN", b: "123Hello Hello123", c: "NaN NaN", d: "123 123" },
      32: {
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
      },
      33: { a: "Node", b: "Vue", c: "React", d: "Cassandra" },
      34: { a: "47", b: "NaN", c: "0", d: "None of the above" },
      35: { a: "async", b: "await", c: "setTimeout", d: "None of the above" },
      36: {
        a: "clearInterval",
        b: "clearTimer",
        c: "intervalOver",
        d: "None of the above",
      },
      37: {
        a: "11 NaN NaN",
        b: "11 NaN [object Object]",
        c: "11 Hello6 [object Object]6",
        d: "None of the above",
      },
      38: {
        a: "The contents of the objects are compared",
        b: "Their references are compared",
        c: "Both A and B",
        d: "None of the above",
      },
      39: {
        a: "It is used to spread iterables to individual elements",
        b: "It is used to describe a datatype of undefined size",
        c: "No such operator exists",
        d: "None of the above",
      },
      40: {
        a: "0 1 2",
        b: "0 Undefined Undefined",
        c: "Undefined Undefined Undefined",
        d: "None of the above",
      },
      41: { a: "YES", b: "NO", c: "Syntax Error", d: "None of the above" },
      42: { a: "8", b: "7", c: "0", d: "1" },
      43: { a: "5", b: "4", c: "6", d: "3" },
      44: { a: "true", b: "false", c: "Undefined", d: "None of the above" },
      45: {
        a: "Syntax Error",
        b: "“I am a dog” gets printed",
        c: "ReferenceError",
        d: "Nothing happens",
      },
      46: { a: "/* */", b: "//", c: "#", d: "$ $" },
      47: {
        a: "Base Object",
        b: "All objects have a prototype",
        c: "None of the objects have a prototype",
        d: "None of the above",
      },
      48: { a: "NaN", b: "Number", c: "Object", d: "Array" },
      49: {
        a: "{first: 20, second: 30}",
        b: "{first: 50, second: 30}",
        c: "{first: 20, second: 30, first: 50}",
        d: "Syntax Error",
      },
      50: { a: "Date", b: "FileUpload", c: "Function", d: "All of the above" },
    },
  },
  {
    answers: {
      1: "Object-Oriented",
      2: "Both A and B",
      3: "Both A and B",
      4: "Ignores the statements",
      5: "All of the above",
      6: "const",
      7: "59",
      8: "al",
      9: "20",
      10: "Both the datatype and the result of the expression are compared.",
      11: "in",
      12: "The contents are displayed by non-JS-based browsers.",
      13: "2 4 3 1",
      14: "21",
      15: "[111, 44, 1, 22]",
      16: "9",
      17: "Object",
      18: "4 10 18",
      19: "It acts as a breakpoint in a program.",
      20: "-Infinity Infinity",
      21: " true false",
      22: "5",
      23: "false",
      24: "Number",
      25: "Returns a localized string representation of an object.",
      26: "Object Serialization",
      27: "stringify()",
      28: "Class, prototype, object's extensible flag.",
      29: "Classes, Native object, and Interfaces and Object's extensible flag.",
      30: "6",
      31: "3, 4",
      32: "123 NaN",
      33: "All of the above",
      34: "Cassandra",
      35: "NaN",
      36: "async",
      37: "clearInterval",
      38: "11 Hello6 [object Object]6",
      39: "Their references are compared",
      40: "It is used to spread iterables to individual elements",
      41: "Undefined Undefined Undefined",
      42: "YES",
      43: "7",
      44: "4",
      45: "false",
      46: "Nothing happens",
      47: "//",
      48: "Base Object",
      49: "Object",
      50: "{first: 50, second: 30}",
      51: "All of the above",
    },
  },
];

//getting references
const container = document.getElementById("container");
const nextQueBtn = document.getElementById("nextQueBtn");
const resetBtn = document.getElementById("resetBtn");
resetBtn.style.display = "none";
let score = 0;
let userName = "User";

const loadQuestion = (index) => {
  let question = document.createElement("div");
  let htmlData = `<h2><span class="txt-orange">${index} :</span> ${data[0].question[index]}</h2>
  <div class="options">
      <button id="opt1">${data[1].options[index].a}</button>
      <button id="opt2">${data[1].options[index].b}</button>
      <button id="opt3">${data[1].options[index].c}</button>
      <button id="opt4">${data[1].options[index].d}</button>
  </div>`;
  question.insertAdjacentHTML("afterbegin", htmlData);
  container.innerHTML = question.innerHTML;
  let answer = data[2].answers[index];
  opt1Btn = document.querySelector("#opt1");
  opt2Btn = document.querySelector("#opt2");
  opt3Btn = document.querySelector("#opt3");
  opt4Btn = document.querySelector("#opt4");
  let selectedOption = "No Ans";
  // let score = 0;

  opt1Btn.addEventListener("click", () => {
    opt1Btn.style.backgroundColor = "orange";
    opt2Btn.style.backgroundColor = "white";
    opt3Btn.style.backgroundColor = "white";
    opt4Btn.style.backgroundColor = "white";
    selectedOption = opt1Btn.innerText;
  });
  opt2Btn.addEventListener("click", () => {
    opt1Btn.style.backgroundColor = "white";
    opt2Btn.style.backgroundColor = "orange";
    opt3Btn.style.backgroundColor = "white";
    opt4Btn.style.backgroundColor = "white";
    selectedOption = opt2Btn.innerText;
  });
  opt3Btn.addEventListener("click", () => {
    opt1Btn.style.backgroundColor = "white";
    opt2Btn.style.backgroundColor = "white";
    opt3Btn.style.backgroundColor = "orange";
    opt4Btn.style.backgroundColor = "white";
    selectedOption = opt3Btn.innerText;
  });
  opt4Btn.addEventListener("click", () => {
    opt1Btn.style.backgroundColor = "white";
    opt2Btn.style.backgroundColor = "white";
    opt3Btn.style.backgroundColor = "white";
    opt4Btn.style.backgroundColor = "orange";
    selectedOption = opt4Btn.innerText;
  });

  const validateAns = () => {
    if (selectedOption != "No Ans") {
      if (selectedOption === answer) {
        score++;
        showScore();
      }
    }
  };
  nextQueBtn.onclick = function () {
    validateAns();
    if (index < 50) loadQuestion(++index);
    else {
      alert("You have completed the quiz");
      alert(`You scored ${score}/50`);
      resetBtn.style.display = "inline-block";
      nextQueBtn.style.display = "none";
    }
  };
};
loadQuestion(1);
resetBtn.onclick = function () {
  loadQuestion(1);
  score = 0;
  resetBtn.style.display = "none";
  nextQueBtn.style.display = "block";
  showScore();
};

ModalInput = document.querySelector(".modal-user-name");

ModalSubmitBtn = document.querySelector("#submit");
ModalSubmitBtn.addEventListener("click", () => {
  ModalUserName = document.getElementById("name").value;
  if (ModalUserName == "") {
    alert("Please enter your name");
  } else {
    userName = ModalUserName;
    ModalInput.style.display = "none";
    changeUserName();
    body.classList.remove("open");
    ModalInput.classList.remove("noBlur");
  }
});

changeUserName = () => {
  document.getElementById("user-name").innerText = userName;
};
const showScore = () => {
  document.getElementById("score").innerText = score;
};
changeUserName();

body = document.querySelector("body");
window.addEventListener("load", () => {
  body.classList.add("open");
  ModalInput.classList.add("noBlur");
});
