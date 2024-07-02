const paragraph1 = `Do you see the story. Do you see anything. It seems to me I am trying to tell you a dream.`;

const stuff = (str) => {

    console.log("str", str)


    console.log(str.split(".").join("!"))

    let split = str.split("")
    console.log("split", split)

    let test = []

    for (item of split) {
        if (item == ".") {
            console.log("item", item)
            test.push("!")
        }else {
            test.push(item)
        }
    }
    // console.log("newsplit", test.join(""))
return test.join("")
}


console.log(stuff(paragraph1))