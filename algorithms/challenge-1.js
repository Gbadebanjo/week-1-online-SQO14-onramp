function countTruthy(arr) {
    const value = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            value += i;
        }
    }   return value;
}

//Solved