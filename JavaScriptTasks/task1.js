// Объект с типами данных

const getTypeObj = (obj) => {
    return typeof(obj)
}

const enviroments= {
    num: 123,
    str: "hello",
    bool: true,
    nul: null,
    undf: undefined,
}

for (let key in enviroments) {
    console.log(getTypeObj(enviroments[key])); // Вывод каждого типа данных из enviroments
}

