let password;

document
    .getElementById("username")
    .addEventListener("change", (event) => handleChangeUsername(event));

document
    .getElementById("password")
    .addEventListener("change", (event) => handleChangePassword(event));

const handleChangeUsername = (event) => {
    username = event.target.value;
};

const handleChangePassword = (event) => {
    password = event.target.value;
};
const onSubmit = () => {
    console.log(validate(username, "usernames"));
    console.log("username: ", username);
    console.log(validate(password, "passwords"));
    console.log("pasword: ", password);
};
