let username;
let password;

document
    .getElementById("username")
    .addEventListener("change", (event) => handleChangeUsername(event));

const handleChangeUsername = (event) => {
    username = event.target.value;
};

document
    .getElementById("password")
    .addEventListener("change", (event) => handleChangePassword(event));

const handleChangePassword = (event) => {
    password = event.target.value;
};

const onSubmit = () => {
    if (!validate(username, "usernames") && !validate(password, "passwords")) {
        newItem(username, "usernames");
        newItem(password, "passwords");
    } else {
        alert("username or password invalid");
    }
};
