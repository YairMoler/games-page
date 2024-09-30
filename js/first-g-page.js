let element= document.getElementsByClassName("game-floor-container")[0];
console.log(element);

let arr=[1,2,0,2,1,0,1,2,1,0];
for(let i=0; i<arr.length; i++)
{
   el = document.createElement('div');
   el.classList.add(`div${arr[i]}`, `general1`);
   element.appendChild(el);
}