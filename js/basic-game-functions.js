function Entity(elemnt) {
    (this.x = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("left"))),
        (this.width = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("width"))),
        (this.y = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("bottom"))),
        (this.height = parseInt(getComputedStyle(document.getElementById(elemnt)).getPropertyValue("height")));
}

const player = new Entity("player");
console.log(player);
const player2 = new Entity("player2");

const move = (entity, direction, amount = 0) => {
    let movingEntity = document.getElementById("player");
    console.log("movingEntity: ", movingEntity);
    if (direction == "right") {
        entity.x += amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "left") {
        entity.x -= amount;
        movingEntity.style.left = entity.x + "px";
    } else if (direction == "up") {
        entity.y -= amount;
        movingEntity.style.left = entity.y + "px";
    }
};

let keysPressed = {};

document.addEventListener("keydown", (event) => {
    keysPressed[event.key] = true;
    console.log("keysPressed[event.key]: ", event.key);
});
document.addEventListener("keyup", (event) => (keysPressed[event.key] = false));

const detectMovment = () => {
    if (keysPressed["ArrowRight"] == true) {
        move(player, "right", 1);
    } else if (keysPressed["ArrowLeft"] == true) {
        move(player, "left", 1);
    }
    if (keysPressed["ArrowUP"] == true) {
        jump();
    }
};

const gravity = -9.8; //todo upper
const startingVelocity = 44.2718872;
let velocity = startingVelocity;

const caculateJump = (velocity) => {
    move(player, "up", velocity);
    velocity += gravity / 20;
    if (touching(player, player2 || player.y == 0)) {
        clearInterval(JumpTime);
        velocity = startingVelocity;
    }
};

const jump = () => {
    if (touching(player, player2 || player.y == 0)) {
        const JumpTime = setInterval(() => caculateJump(velocity), 50);
    }
};

const constantChecking = setInterval(detectMovment, 50);

const touching = (entity1, entity2) => {
    if (entity1.x >= entity2.x && entity1.x <= entity2.x + entity2.width && entity1.y + entity1.height >= entity1.y + entity2.height) {
        return true;
    } else {
        return false;
    }
};
