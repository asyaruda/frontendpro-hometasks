/*const name = prompt('What is your name?')
console.log

if (name === null || name === '') {
  alert('Hello, noname! How are you?')
} 
else {
  alert('Hello ' + name + '! How are you?')
}*/

/*const name = prompt('What is your name?')

if (name === null && name === '') {
  alert('Hello, noname! How are you?')
}

 else {
  alert("Привіт, " + name + "! Як справи?")
}*/

const input = prompt('Hi friend, what is your name?')

if (input.trim()) {
  alert('Nice to meet you, ' + input.trim() + '! How are you?')
}

else {
  alert('Error')
}