// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
        <div id="profile" class="profile">
        <img class="profile-pic" src="./${avatar}">
        <div class="summary">
                <h1>${name}, ${age}</h1>
                <h2>${bio}</h2>
            </div>
        </div>`
    }
}


export default Dog