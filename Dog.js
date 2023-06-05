// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <div id="profile" class="profile">
        <img class="profile-pic" src="./${avatar}">
        <img class="badge-like ${hasBeenSwiped && hasBeenLiked ? "" : "hidden"}" src="./images/badge-like.png">
        <img class="badge-nope ${hasBeenSwiped && !hasBeenLiked ? "" : "hidden"}" src="./images/badge-nope.png">
        <div class="summary">
                <h1>${name}, ${age}</h1>
                <h2>${bio}</h2>
            </div>
        </div>`
    }
}


export default Dog