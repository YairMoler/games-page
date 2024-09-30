let element= document.getElementById("container");

let arr=[1,2,0,2,1,0,2,1,0];
for(let i=0; i<arr.length; i++)
{
   el = document.createElement('div');
   el.classList.add(`div${arr[i]}`, `general2`);
   element.appendChild(el);
}
console.log(arr);