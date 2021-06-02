const quickSortIncrease = (arr) => {
    if (arr.length < 2) {
        return arr;
    } else {

        const pivot = arr[Math.floor(Math.random() * arr.length)];   // Используем рандом для усреднения скорости обработки массива
        const less = arr.filter(value => value < pivot);
        const greater = arr.filter(value => value > pivot);

        return [...quickSortIncrease(less), pivot, ...quickSortIncrease(greater)];
    }
}

const quickSortWaning = (arr) => {
    if (arr.length < 2) {
        return arr;
    } else {

        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const less = arr.filter(value => value > pivot);
        const greater = arr.filter(value => value < pivot);

        return [...quickSortWaning(less), pivot, ...quickSortWaning(greater)];
    }
}



const array = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

console.log(quickSortIncrease(array));              // Быстрая сортировка по возрастанию, с удалением повторяющихся элементов
console.log(quickSortWaning(array));                // Быстрая сортировка по убыванию, с удалением повторяющихся элементов

console.log(Math.max(...array));                    // Поиск наибольшего числа массива
console.log(Math.min(...array));                    // Поиск наимеьшего числа массива

const array2 = array.sort((a, b) => a - b);
console.log(array2);                                // Сортировка по возрастанию, с сохранением повторяющихся элементов
const array3 = array.sort((a,b) => b - a);
console.log(array3);                                // Сортировка по убыванию, с сохранением повторяющихся элементов