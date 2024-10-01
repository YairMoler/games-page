let element = document.getElementsByClassName("game-floor-container")[0];
let wall = [];
/* build some array of divs */
let arr = [1, 2, 0, 2, 1, 0, 1, 2, 1, 0];
for (let i = 0; i < arr.length; i++) {
    el = document.createElement("div");
    el.classList.add(`div${arr[i]}`, `general1`);
    el.setAttribute("id", "div" + i);
    element.appendChild(el);
    /*get the dimentions of the cube by calculated it*/
    let divDimentions = el.getBoundingClientRect();
    wall[i] = {
        id: "div" + i,
        x: divDimentions.x,
        y: 0,
        width: divDimentions.width,
        height: divDimentions.height,
    };
}
/* build the cube */
playerDiv = document.createElement("div");
playerDiv.setAttribute("id", "player");
playerDiv.setAttribute("style", `left: 0px; bottom: ${wall[0].height}px;`);
element.appendChild(playerDiv);

























