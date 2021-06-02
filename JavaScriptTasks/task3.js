const getObject = (arr) => {
    const obj = {};

    for (let i in arr) {
        obj[arr[i].name] = arr[i].value;
    }

    return obj
}


// {overflow: “hidden”, cursor: “pointer”}
const array =  [ {name: "overflow", value: "hidden"}, {name: "cursor", value: "pointer"} ]

console.log(getObject(array));