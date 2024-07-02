


const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    start: function () {
        console.log(`Car started and its a ${this.make}`);
    },

};

// console.log(car.start())
//   console.log(car.start())







let one = "Hello"
let two = "World"
// console.log(`${one} ${two}`)
// console.log(one + " " + two)

// this - the this keyword
const person = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// person.greet()
// console.log(person.name)

// Class Contructors... 


//   let myStr = "Hello World"

//   class String {
//     constructor(name, type) {
//       this.name = name;
//       this.type = type;
//     }
//     length() {}
//     split() {}
//     substring() {}
//   }






class Student {
    constructor(first, last, location, grade) {
        this.first = first;
        this.last = last;
        this.location = location;
        this.grade = grade
    }
    fullname() {
        console.log(`${this.first} ${this.last}`)
    }
    makeSound() {
        console.log(`${this.first} makes a sound ROOOOARRRRR!!!`);
    }
}

// const andrew = new Student('Andrew', 'Smith', 'TN', "B")
// console.log(andrew.location)
// andrew.fullname()
// andrew.makeSound()



















//   const dog = new Animal('Earl', 'Dog', "Red");
//   const cat = new Animal('Bob', 'cat', 'purple');

//   console.log("Dog", dog)
//   console.log("cat", cat)
//   cat.makeSound()

// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     makeSound() {
//         console.log(`${this.name} makes a sound from ANIMAL CONTRUCTOR`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, type, breed) {
//         super(name, type);
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`${this.name} barks from DOG CLASS`);
//     }
// }

// const myDog = new Dog("fido", "dog", "poodle")
// console.log(myDog)
// myDog.bark()
// myDog.makeSound()


// class Bird extends Animal {
//     constructor(name, type, breed) {
//         super(name, type);
//         this.breed = breed
//     }

//     fly() {
//         console.log(`${this.breed} is flying`)
//     }
// }

// const myBird = new Bird('flappy', 'bird', 'pidgeon')
// console.log(myBird)
// myBird.makeSound()
// myBird.fly()






// class SmallDog extends Dog {
//     constructor(name, type, breed, color) {
//         super(name, type, breed);
//         this.color = color;
//     }

//     lilBark() {
//         console.log(`${this.name} LIL barks from SMALLDOG CLASS`);
//     }
// }

// const myDog = new Dog('Buddy', 'Dog', 'Golden Retriever');
//   const myDog2 = new Dog('Buddy2', 'Dog2', 'Golden Retriever');
//   myDog.makeSound();  // Outputs: Buddy makes a sound
//   myDog.bark();       // Outputs: Buddy barks
// console.log(myDog)
// const smallDog = new SmallDog('bill', 'dog', 'pitbul', 'red')
//   console.log(smallDog)

//   smallDog.lilBark()
//   smallDog.bark()
//   smallDog.makeSound()


//   const myBird = new Bird('polly', 'bird', 'parrot')
//   console.log(myBird)
//   myBird.fly()
//   myBird.bark()


//   Encapsulation 

class Person {
    #ssn;  // Private property

    constructor(name, ssn) {
      this.name = name;
      this.#ssn = ssn;
    }
  
    getSSN() {
      return this.#ssn;
    }
  }
  
  const john = new Person('John', '123-45-6789');
  console.log(john.getSSN());  // Outputs: 123-45-6789
  console.log(john)


class Test extends Person {
    
    constructor(name, ssn, words){
        super(name, ssn)
      
        this.words = words
    }
}

let ok = new Test("tim", 2222222222, "Hello!")
// console.log(ok)

// Polymorphism

class Animal {
    speak() {
        console.log("The animal makes a sound");
    }

}

class Dog extends Animal {
    speak() {
        console.log("The dog barks");
    }
  
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows");
    }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// animal.speak(); // Output: The animal makes a sound
dog.speak();    // Output: The dog barks
// dog.speak2();    // Output: The dog barks
// cat.speak();    // Output: The cat meows


let hello = "Hello"
hello = "World"

console.log(hello)

// Polymorphism with Interfaces


class Bird {
    fly() {
        console.log("The bird is flying");
    }
}

class Airplane {
    fly() {
        console.log("The airplane is flying");
    }
}

function makeItFly(pokemon) {
    pokemon.fly();
}

const bird = new Bird();
const airplane = new Airplane();

makeItFly(bird);     // Output: The bird is flying
makeItFly(airplane); // Output: The airplane is flying


















// const toyCar = {
//     color: 'red',
//     type: 'racing',
//     drive: function() {
//       console.log('The car is driving');
//     },
//     honk: function() {
//       console.log('The car honks');
//     }
//   };

//   const toyRobot = {
//     height: '30 cm',
//     material: 'plastic',
//     walk: function() {
//       console.log('The robot is walking');
//     },
//     talk: function() {
//       console.log('The robot is talking');
//     }
//   };


//   class Toy {
//     constructor(name, type) {
//       this.name = name;
//       this.type = type;
//     }

//     play() {
//       console.log(`${this.name} is playing`);
//     }
//   }

//   const toy1 = new Toy('Buzz Lightyear', 'Action Figure');
//   const toy2 = new Toy('Barbie', 'Doll');

//   toy1.play(); // Buzz Lightyear is playing
//   console.log(toy1)
//   toy2.play(); // Barbie is playing
//   console.log(toy2)

// class Toy {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     play() {
//         console.log(`${this.name} is playing`);
//     }
// }

// class SuperToy extends Toy {
//     constructor(name, type, superPower) {
//         super(name, type); // Get all the stuff from the Toy class
//         this.superPower = superPower;
//     }

//     useSuperPower() {
//         console.log(`${this.name} uses ${this.superPower}`);
//     }
// }

// const superToy = new SuperToy('Iron Man', 'Action Figure', 'Flying');
// //   superToy.play(); // Iron Man is playing
// //   superToy.useSuperPower(); // Iron Man uses Flying
// //   console.log(superToy)

// let myArr = [1, 2, 3, 4, 5, 6]
// let copy = [...myArr]

// console.log(myArr, copy)

// function copyArr(arr) {
//     let copy = []

//     for (let i = 0; i < arr.length; i++) {

//         copy.push(arr[i])
//     }

//     return copy
// }

// console.log(copyArr([1, 2, 3, 4, 5, 6]))