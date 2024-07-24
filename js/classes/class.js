class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

let animal = new Animal("Leo", "Lion");

animal.speak()