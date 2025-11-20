//singleton
//Object.create

//object literals

const mySym = Symbol("mySym")


const Jsuser = {
    name: "abc",
    "full name": "abc def",
    [mySym]: "myKey1",
    age: 1,
    location: "xyz",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

//console.log(Jsuser.email)
//console.log(Jsuser["email"])
//console.log(Jsuser["full name"])
//console.log(Jsuser[mySym])

Jsuser.email = "newemail@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email = "anotheremail@gmail.com"
//console.log(Jsuser)

Jsuser.greeting = function() {
    console.log("hello Jsuser");
}
Jsuser.greeting2 = function() {
    console.log(`hello JS user, ${this.name}`);
}

//Jsuser.greeting()
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());