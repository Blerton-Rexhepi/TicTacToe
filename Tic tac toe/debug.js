let text="welcome to game"
let newArr = text.split(" ");
console.log(newArr)
let arr = [];
for (let i = 0; i < newArr.length; i++) {
  newArr[i].split("").reverse().join("");
  console.log(newArr[i])
  arr.push(newArr);
  console.log(arr);
}

return arr;
