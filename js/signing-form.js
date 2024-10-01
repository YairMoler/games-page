/* build empty user object */
let user = {
    username: "",
    password: "",
};
/*recognize them by their id and then Activates the function*/
document.getElementById("username").addEventListener("change", (event) => handleChange(event));

document.getElementById("password").addEventListener("change", (event) => handleChange(event));

const handleChange = (event) => {
    console.log("event.target.id: ", event.target.id);
    user[event.target.id] = event.target.value;
    console.log("username: ", user[event.target.id]);
};

const onSubmit = () => {
    /*chacking if the username already log in*/
    if (validate(user.username, "usernames") == -1 && validate(user.password, "passwords") == -1) {
        /* creat new username */
        newItem(user.username, "usernames");
        newItem(user.password, "passwords");
    } else {
        alert("username or password invalid");
    }
};
