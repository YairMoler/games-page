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

// const handleChangePassword = (event) => {
//     password = event.target.value;
// };
/* save the data(take it from html, paste it in the local storage) */ 
const onSubmit = () => {
    if (logIn(user.username, user.password)) {
        window.location = "./html/picture_of_games.html";
    }
};
