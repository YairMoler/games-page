const logIn = (username, password) => {
    if (validate(username, "usernames") == validate(password, "passwords") && validate(username, "usernames") != -1) {
        return true;
    } else {
        return false;
        // alert("username or password invalid");
    }
};


const validate = (str, storage) => {
    let retrieved = localStorage.getItem(storage);
    console.log(retrieved);
    retrieved = JSON.parse(retrieved);
    return retrieved.indexOf(str);
};


const newItem = (str, storage) => {
    let retrieved = localStorage.getItem(storage);
    retrieved = JSON.parse(retrieved);
    retrieved.push(str);
    let intoStorage = JSON.stringify(retrieved);
    // console.log("key: " , storage, " value: " , intoStorage)
    localStorage.setItem(storage, intoStorage);
};

// const getValue = (inputName) => {
//     let valueName;
//     document
//         .getElementById(inputName)
//         .addEventListener("change", (event) => handleChange(event));
//     const handleChange = (event) => {
//         valueName = event.target.value;
//     };
//     return valueName;
// };
