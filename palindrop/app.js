//let string = prompt("enter");
//let len = string.length;
// let msg = "is palindrop";
// for (let i = 0; i < len / 2; i++) {
//   if (string[i] != string[len - 1 - i]) {
//     msg = "is not palindrop";
//   }
// }
// document.write(`${string} : ${msg}`);

let btn = document.getElementById("btn");
let getimg = document.getElementById("img");
let getimg2 = document.getElementById("img");
btn.addEventListener("click", () => {
  let getinp = document.getElementById("get-inp").value;
  let getp = document.getElementById("get-p");
  // let getin = getinp;
  const msg2 = "is not palindrome";
  let msg = "is palindrome";

  let len = getinp.length;
  for (let i = 0; i < len / 2; i++) {
    if (getinp[i] != getinp[len - 1 - i]) {
      //console.log(`${getinp} : ${msg2}`);
      getp.innerHTML = `${getinp} : ${msg2}`;
      getimg.src = "./notemoji.png";
      break;
    } else {
      //console.log(`${getinp} : ${msg}`);
      getp.innerHTML = `${getinp} : ${msg}`;
      getimg2.src = "./yes-emoji.png";
    }
  }
});
// document.write
