import './style/main.scss'

class Hello {
    constructor(props) {
        this.name = props
    }
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

const hello = new Hello("Foo Bar");

hello.greet();