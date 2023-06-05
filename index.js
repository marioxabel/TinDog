// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

let dogProfile = new Dog(dogs.shift())

function getNextDog() {
    const nextDogData = new Dog(dogs.shift())
    console.log(nextDogData, dogs.length)
    return nextDogData ? nextDogData : {}
}

const loadNextDog = () => {
    render()
    document.getElementById("reject-btn").disabled = true
    document.getElementById("like-btn").disabled = true
    setTimeout(() => {
        if (dogs.length > 0) {
            dogProfile = getNextDog()
            render()
            document.getElementById("reject-btn").disabled = false
            document.getElementById("like-btn").disabled = false
        }
        else {
            document.getElementById("reject-btn").disabled = true
            document.getElementById("like-btn").disabled = true
            document.getElementById("profile").innerHTML = `
                <h1 class="endScroll">No more hot-dogs</br> in you area :(</h1>`
        }
    },1000)
}

const reject = () => {
    dogProfile.hasBeenSwiped = true
    loadNextDog()
}

const accept = () => {
    dogProfile.hasBeenSwiped = true
    dogProfile.hasBeenLiked = true
    loadNextDog()
}

function render() {
    document.getElementById("profile").innerHTML = dogProfile.getDogHtml()    
}

document.getElementById("reject-btn").addEventListener("click", reject)
document.getElementById("like-btn").addEventListener("click", accept)

render()