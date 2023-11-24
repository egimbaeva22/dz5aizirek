
//1 задание

const numbers = [17, 2, 45, 8, 11, 6, 4, 111, 9, 12, 33, 55, 17, 8, 45, 9]
const results = []
for (let i = 0; i < numbers.length; i++){
    if (results.indexOf(numbers[i]) === -1) {
        results.push(numbers[i]);
    }
}
console.log(results)

//2
const bookNames = ['Домой,ужинать и в постель', 'Нежнее нежного лицо твоё', 'Лилия долины' , 'Унесённые ветром' , 'Музей нежности']

const sortBooks = (books) => {
    let booksWithY = books.filter(book => book.toLowerCase().includes("у"))
    const booksWithoutY = books.filter(book => !book.toLowerCase().includes("у"))

    booksWithY = booksWithY.map(book => "Книга с буквой \"у\": " + book)
    const allBookNames = booksWithY.concat(booksWithoutY)
    for (let i = 0; i < allBookNames.length; i++) {
        console.log(allBookNames[i])
    }
}
sortBooks(bookNames)

//задание 3

const users = [
    {name: "Said" , age: 58},
    {name: "Amanda" , age: 18},
    {name: "Mehron" , age: 27},
    {name: "Arsen" , age: 19},
    {name: "Zamira" , age: 40},
    {name: "Sultan" , age: 20},
    {name: "Kubat" , age: 25},
    {name: "Aidana" , age: 17}

]
function ages(users){
    const yongestUser = users.reduce((minimum,user) => (user.age < minimum.age ? user : minimum ))
    const oldestUser = users.reduce((maximum,user) => (user.age > maximum.age ? user : maximum))
    const diffrenceAge = Math.abs(oldestUser.age - yongestUser.age)
    console.log(`человек ${oldestUser.name} старше ${yongestUser.name} на ${diffrenceAge} лет`)
}
ages(users)