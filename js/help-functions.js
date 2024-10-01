/*connect them to the server if their exist*/
const logIn = (username, password) => {
    if (validate(username, "usernames") == validate(password, "passwords") && validate(username, "usernames") != -1) {
        return true;
    } else {
        alert("username or password invalid");
        return false;
    }
};

/*chack if they exist in the array */
/* in order to creat them, they cannot exist */
const validate = (str, storage) => {
    let retrieved = localStorage.getItem(storage);
    retrieved = JSON.parse(retrieved);
    return retrieved.indexOf(str);
};

/* enter them to the local storge (using JSON) */
const newItem = (str, storage) => {
    let retrieved = localStorage.getItem(storage);
    retrieved = JSON.parse(retrieved);
    retrieved.push(str);
    let intoStorage = JSON.stringify(retrieved);
    localStorage.setItem(storage, intoStorage);
}