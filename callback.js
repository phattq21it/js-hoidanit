var language = ["Javascript", "PHP", "Ruby", "Java"];
// let x=5,y=6,z=7;
// console.log('x='+x,'y='+y)
// function giai(){
//     var a=document.getElementById("a").value
//     var b=document.getElementById("b").value
//     parseFloat(a)
//     parseFloat(b)
//     if(a==0){
//         if(b==0){
//         alert('phuong trinh vo so nghiem')}
//         else{
//             alert('phuong trinh vo nghiem')
//         }
//     }else{
//         alert('x='+-b/a)
//     }
// }
// let sm = (a, b) => {
//   return a + b;
// };
// console.log(sm(1, 2));

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// let mang1 = [1, 2, 3];
// let gtmang = mang1.map(x=>x*2);
// console.log(gtmang);

//
// let arr2=[
//   {id:1,name: 'john'},
//   {id:2,name: 'phat'},
//   {id:3,name: 'cc'},
//   {id:4,name: 'cdầdsfs'}
// ];
// let type= arr3.map(item=>item.name)
// let allname = arr2.map(arrmoi => {
//   let idValue = parseInt(arrmoi.id); // convert id value to a numeric value
//   if (!isNaN(idValue)) { // check if id value is a number
//     return idValue * 2;
//   } else {
//     return NaN;
//   }
// });

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,5,10
// );

// console.log(sumWithInitial);
// // Expected output: 10
//

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a,b)=>a-b);
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
let callback = (errorr, dataa) => {
  console.log(">> callback calling : ", errorr, dataa);
};
console.log(1);
console.log(2);
getdata(callback);

function getdata(callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      const data = JSON.parse(xhttp.responseText);
      // chuyen reponseText sang String
      const dataString = JSON.stringify(data);
      callback(undefined, data);
    }
  };
  xhttp.open("GET", "data.json");
  xhttp.send();
}

console.log(3);
console.log(4);
