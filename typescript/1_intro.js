var helloWorld = "hello"; // definition
var helloWorld2 = "hello"; // inference
var user_1 = {
    name: "Hayes",
    age: 17,
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var user_2 = new UserAccount("sandro", 2);
function addUser(user) {
    return user;
}
function getUser() {
    return { name: "sandro", age: 4 };
}
// function that accepts both string or number
function getLength(data) {
    // typeof gives you a way to learn the type
    if (typeof data === "number") {
        return data;
    }
    if (typeof data === "string") {
        return data.length;
    }
    return 0;
}
console.log(getLength(1));
console.log(getLength("sandro"));
var object = backpack.value;
backpack.add(23);
var object2 = backpack.value;
console.log(object);
console.log(object2);
