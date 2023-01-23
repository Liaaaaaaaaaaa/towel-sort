
// You should implement your task here.

module.exports =

    // const matrix = [
    //     [1, 2, 3, 4],
    //     [5, 6, 7, 8],
    //     [9, 10, 11, 12],
    //     [13, 14, 15, 16],
    // ];

    //  matrix.map(function (it, index) { 

    // console.log(matrix);


function towelSort(matrix) {
    if(matrix !== undefined && matrix.length > 0 ) {
         matrix.forEach(function (element, index) {
        if (index % 2 !== 0) { element.reverse() };

    });

    let matrixTotal = matrix.reduce((previousValue, item) => previousValue + ',' + item);
    return matrixTotal.split(',').map(e => +e);
    } else {
        return [];
    }
   

}

//   console.log(towelSort(matrix));

