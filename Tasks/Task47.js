function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

//Исправленно
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert( user.ref().name ); // John