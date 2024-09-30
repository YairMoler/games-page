function Entity(elemnt) {
    (this.x = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("left"))),
        (this.width = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("width"))),
        (this.y = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("bottom"))),
        (this.height = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("height")));
}

const container = new Entity("container");
console.log(container);

const moveRightLeft = (entity, direction, amount = 0) => {
    let movingEntity = document.getElementById("container");
    if (direction == "right") {
        entity.x += amount;
        movingEntity.style.left = entity.x + "px";
    } else {
        entity.x -= amount;
        movingEntity.style.left = entity.x + "px";
    }
};

const notMoving = setInterval(moveRightLeft(container, "right"), 5);

document.onkeydown = function () {
    switch (event.key) {
        case "ArrowRight":
            moveRightLeft("container", "right", 1);
            break;
        case "ArrowLeft":
            moveRightLeft("container", "left", 1);
    }
};

const touching = (entity1, entity2) => {
    const obj1 = new Entity(entity1);
    const obj2 = new Entity(entity2);

    if (obj1.x >= obj2.x && obj1.x <= obj2.x + obj2.width && obj1.y + obj1.height >= obj1.y + obj2.height) {
        return true;
    } else {
        return false;
    }
};

console.log(touching("container", "container2"));
