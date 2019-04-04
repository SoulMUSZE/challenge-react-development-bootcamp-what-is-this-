
//Solution 1 : bind()
//------------------------------------------------------------------------------------

class Car {
    constructor(owner) {
        this.brand = 'Tesla'
        this.model = 'Model X'
        this.owner = owner
    }


    doSomethingTwice(action) {
        for (let i = 0; i < 2; i++) {
            action()
        }
    }

    drive() {
        console.log(`${this.owner.name} is driving his ${this.brand}`)
    }
}

const mycar = new Car({
    name: 'Nicholas',
    age: 21,
    gender: 'male'
})

//bind initialized object to drive method
mycar.doSomethingTwice(mycar.drive.bind(mycar)) // Cannot read property 'owner' of undefined

//Solution 2 : Arrow
//------------------------------------------------------------------------------------

class Car {
    constructor(owner) {
        this.brand = 'Tesla'
        this.model = 'Model X'
        this.owner = owner
    }


    doSomethingTwice(action) {
        for (let i = 0; i < 2; i++) {
            action()
        }
    }

    //declare drive method as arrow function
    drive = () => {
        console.log(`${this.owner.name} is driving his ${this.brand}`)
    }
}

const mycar = new Car({
    name: 'Nicholas',
    age: 21,
    gender: 'male'
})

mycar.doSomethingTwice(mycar.drive)