let user = {
    username: "",
    password: "",
};

document.getElementById("username").addEventListener("change", (event) => handleChange(event));

document.getElementById("password").addEventListener("change", (event) => handleChange(event));

const handleChange = (event) => {
    console.log("event.target.id: ", event.target.id);
    user[event.target.id] = event.target.value;
    console.log("username: ", user[event.target.id]);
};

// const handleChangePassword = (event) => {
//     password = event.target.value;
// };
const onSubmit = () => {
    if (logIn(user.username, user.password)) {
        window.location = "./html/picture_of_games.html";
    }
};
