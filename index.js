// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

const dogProfile = new Dog(dogs[0])

document.getElementById("profile").innerHTML = dogProfile.getDogHtml()

