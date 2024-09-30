function Entity(elemnt) {
    (this.x = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("left"))),
        (this.width = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("width"))),
        (this.y = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("bottom"))),
        (this.height = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("height")));
}

const player = new Entity("player");

console.log(player);
console.log(wall);
const touchingRight = (entity1, entity2) => {
    return entity1.x + entity1.width >= entity2.x && entity1.x + entity1.width <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};
const touchingLeft = (entity1, entity2) => {
    return entity1.x >= entity2.x && entity1.x <= entity2.x + entity2.width && entity1.y < entity2.y + entity2.height;
};
const touchingBottom = (entity1, entity2) => {
    return (
        entity1.x + entity1.width >= entity2.x && entity1.x + entity1.width <= entity2.x + entity2.width && entity1.y <= entity2.y + entity2.height
    );
};

console.log(touchingBottom(player, wall[0]));
const checkIfTouchWalls = (entity, arr, direction) => {
    for (let item in arr) {
        if (direction == "right") {
            if (touchingRight(entity, arr[item])) {
                return true;
            }
        } else {
            if (touchingLeft(entity, arr[item])) {
                return true;
            }
        }
    }
    return false;
};

const checkIfTouchFloor = (entity, arr) => {
    for (let item in arr) {
        console.log("item: ", item);

        if (touchingBottom(entity, arr[item])) {
            return true;
        } else {
            return false;
        }
    }
};

const move = (entity, direction, amount = 0) => {
    let movingEntity = document.getElementById("player");
    if (direction == "right") {
        entity.x += amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "left") {
        entity.x -= amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "up") {
        entity.y += amount;
        movingEntity.style.bottom = entity.y + "px";
    }
};

let keysPressed = {};

document.addEventListener("keydown", (event) => {
    keysPressed[event.code] = true;
    console.log("keysPressed[event.code]: ", event.code);
});
document.addEventListener("keyup", (event) => (keysPressed[event.code] = false));

const GRAVITY = -9.8;
const STARTINGVELOCITY = 44.2718872;
let velocity = STARTINGVELOCITY;

let isJumping = false;
const caculateJump = () => {
    isJumping = true;
    move(player, "up", velocity);
    velocity += GRAVITY / 2;
    console.log("velocity += GRAVITY / 20: ", (velocity += GRAVITY / 20));
    if (checkIfTouchFloor(player, wall)) {
        clearInterval(JumpTime);
        velocity = STARTINGVELOCITY;
        isJumping = false;
    }
};

let JumpTime;

const jump = () => {
    if (checkIfTouchFloor(player, wall)) {
        JumpTime = setInterval(() => caculateJump(), 50);
    }
};

const detectMovment = () => {
    if (keysPressed["ArrowRight"] == true) {
        if (!checkIfTouchWalls(player, wall, "right")) {
            move(player, "right", 5);
        }
    } else if (keysPressed["ArrowLeft"] == true) {
        if (!(checkIfTouchWalls(player, wall, "left") || player.x == 0)) {
            move(player, "left", 5);
        }
    }

    console.log('keysPressed["ArrowUp"]: ', keysPressed["ArrowUP"]);
    if (keysPressed["ArrowUp"] == true) {
        jump();
    }
};

const constantChecking = setInterval(detectMovment, 50);
