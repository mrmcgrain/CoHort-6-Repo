
// Inheritance 
// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     makeSound() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// //   console.log(dog)
// //   console.log(dog.name)
// //   dog.makeSound()

// class Dog extends Animal {
//     constructor(name, type, breed) {
//         super(name, type)
//         this.breed = breed
//     }

//     bark() {
//         console.log("RRROOOWWWFFFFF")
//     }
// }

// const pete = new Animal('Pete', 'Dog')
// // console.log(pete)
// // pete.makeSound() // from Animal constructor
// // pete.bark()


// let fiddo = new Dog("fiddo", "dog", "poodle")
// console.log(fiddo)
// fiddo.makeSound()
// fiddo.bark()

// Encapsulation

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
// console.log(john.getSSN());  // Outputs: 123-45-6789
// console.log(john)

class Student extends Person {
    constructor(name, ssn, grade) {
        super(name, ssn)
        // this.name = name
        // this.ssn = ssn
        this.grade = grade
    }
}

const Andrea = new Student("andrea", "5555555555", 'A')
// console.log(Andrea)
// console.log(Andrea.getSSN())


// Polymorphism - method overriding

class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    // speak() {  // FROM Animal ^^
    //     console.log("The animal makes a sound");
    // }
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
// dog.speak();    // Output: The dog barks
// dog.speak2();    // Output: The dog barks
// cat.speak();    // Output: The cat meows

class Bird {
    constructor(name, type) {

        this.name = name
        this.type = type
    }

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
    console.log(pokemon)
    pokemon.fly();
}

const bird = new Bird("petti", "falcon");
const airplane = new Airplane();

makeItFly(bird);     // Output: The bird is flying
// makeItFly(airplane); // Output: The airplane is flying