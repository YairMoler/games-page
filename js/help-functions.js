

const logIn = (username, password) => {
    if (validate(username, "usernames") == validate(password, "passwords") && validate(username, "usernames") != -1) {
        return true;
    } else {
        return false;
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
