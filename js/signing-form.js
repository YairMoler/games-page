/* build empty user object */
let user = {
    username: "",
    password: "",
};
/*recognize them by their id and then Activates the function*/
document.getElementById("username").addEventListener("change", (event) => handleChange(event));

document.getElementById("password").addEventListener("change", (event) => handleChange(event));

const handleChange = (event) => {
    user[event.target.id] = event.target.value;
};
/*add new user */
const onSubmit = () => {
    /*chacking if the username still not log in*/
    if (validate(user.username, "usernames") == -1 && validate(user.password, "passwords") == -1) {
        /* creat new username */
        newItem(user.username, "usernames");
        newItem(user.password, "passwords");
    } else {
        alert("username or password invalid");
    }
};
