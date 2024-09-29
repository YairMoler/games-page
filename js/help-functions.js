const validate = (str, storage) => {
    let retrieved = localStorage.getItem(storage);
    retrieved = JSON.parse(retrieved);
    return retrieved.includes(str);
};

const newItem = (str, storage) => {
    let retrieved = localStorage.getItem(storage);
    retrieved = JSON.parse(retrieved);
    retrieved.push(str);
    let intoStorage = JSON.stringify(retrieved);
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
