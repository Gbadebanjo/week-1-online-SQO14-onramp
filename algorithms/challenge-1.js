function countTruthy(arr) {
    for(i = 0; i < arr.length; i++);
        if i 

}
countTruthy([1,3,6,8])
module.exports = countTruthy



function countTruthy(arr) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            k++;
        }
    }
    return k;
}
module.exports = countTruthy