
for (let i = 0; i < 5; i++) {
    let str = ''
   for (let j = i; j < 5; j++) {
    str += "*"
   }
   str +='\n'
   console.log(str)
}


const person = {
    name: 'John',
    age: 22,
    married: true,

    speak() {
        console.log('hellooo')
    },
    showMyName() {
        console.log(`My Name is ${this.name}`)
    }
}



person.speak()
person.showMyName()
