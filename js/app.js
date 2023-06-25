// n = 11;
// if (n < 10) {
//   alert("Small!");
// } else {
//   alert("Big!");
// }
// n = 5;
// switch (n) {
// case 1:
//   alert("One");
//   break;
// case 2:
//   alert("Two");
//   break;
// case 3:
// case 4:
//   alert("Three or Four");
//   break;
// default:
//   alert("Other");
//   break;
// }
// n = 99;
// while (n > 0) {
//   console.log(n);
//   n--;
// }
// var data = { name: "Yamada", age: 26, country: "Japan" };
// for (var d in data) {
//   console.log(d, data[d]);
// }
// alert();
// abc:
//   for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < 10; j++) {
//       xx = i * 10 + j;
//       if (xx == 55) {
//         continue abc;
//       }
//     }
//   }
// for (var i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }
// 
try {
  error = doSomething();
  if (error) {
    throw "myException";
  }
  // エラーが発生するとこの部分の処理はスキップされます
} catch (e) {
  // 例外が発生するとこの部分の処理が実行されます
  console.log(e);    // "myException"
} finally {
  // この部分の処理は例外発生の有無に関わらず実行されます
  console.log("finally");
}
  