let username;
let password;

document.getElementById("username").addEventListener("change", (event) => handleChangeUsername(event));

const handleChangeUsername = (event) => {
    username = event.target.value;
};

document.getElementById("password").addEventListener("change", (event) => handleChangePassword(event));

const handleChangePassword = (event) => {
    password = event.target.value;
};

const onSubmit = () => {
    /*chacking if the username already log in*/
    if (validate(username, "usernames") == -1 && validate(password, "passwords") == -1) {
        /* creat new username */
        newItem(username, "usernames");
        newItem(password, "passwords");
    } else {
        alert("username or password invalid");
    }
};



