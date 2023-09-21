
// You should implement your task here.
module.exports = 

function towelSort(matrix) {

    let resultMatrix = [];

        if (typeof matrix != 'object'){
            return resultMatrix};

        for (let i = 0; i < matrix.length; i++){

        if (i % 2 === 0){
            resultMatrix = resultMatrix.concat(matrix[i]);
        } else {
            resultMatrix = resultMatrix.concat(matrix[i].reverse());
        } 

    } 
        return resultMatrix;
}