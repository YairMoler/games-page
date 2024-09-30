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
    if (logIn(username, password)) {
        window.location = "./html/picture_of_games.html";
    }
};
