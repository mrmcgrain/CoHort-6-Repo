let arr = [[5, 12, 17, 21, 23], [1, 2, 4, 6, 8], [12, 14, 18, 19, 27], [3, 7, 9, 15, 25]]


const sortMe = (arr) => {
console.log(arr)

let pos = [0, 0]
let counter = 1
let hold 

for ( let i = 0 ;  i < arr.length ; i++){

    for (let j = 0 ; j < arr[i].length ; j++){

        if (arr[i][j] === counter ){
            console.log("hit", arr[i][j], "i", i, "j" , j)

                hold = arr[i][j]
                console.log("hold", hold) 
                counter ++
                console.log("WTF", arr[pos[0]][pos[1]])
                arr[i][j] = arr[pos[0]][pos[1]]
                arr[pos[0]][pos[1]] = hold 
                console.log("arr", arr)



        }
    }
}

}



console.log(sortMe(arr))