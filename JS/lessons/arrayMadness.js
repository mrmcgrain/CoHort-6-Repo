

// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr[2], arr[4])


let nested = ["hello", "world", ["Im Nested"], [2, ["OMG", [2], 4]]]


let arr = [  
        //0        1       2          3   
    [ [1,2,3,], [4,5,6], [7,8,9], ["hello"] ],  // 0
 
    [ [10,11,12,], [13,14,15], [16, 17,18] ],   // 1
 
    [ [19,20,21,], [22,23,24], [25,26,27] ]     // 2
]

for ( let i = 0 ; i < arr.length ; i++){

    // console.log("i", i, arr[i])

    for ( let j = 0 ; j < arr[i].length ; j++){

        
        for ( let k = 0  ; k < arr[i][j].length ; k++){
            
            
            for ( let m = 0 ; m < arr[i][j][k].length ; m++){
                
                console.log("i", i, "j", j, "k", k, "m", m, arr[i][j][k][m])
            }

        }

    }


}

let test = [ [], [], [] ]
// console.log(sud[0][1][2])


// console.log("nested", nested[3][1][0][1])