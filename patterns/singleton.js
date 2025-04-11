const singleton = (function () {
  let instance;

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  return {
    getInstance: function (name, age) {
      if (!instance) {
        instance = new User(name, age);
      }
      return instance;
    },
  };
})();

const user1 = singleton.getInstance("John", 20);
const user2 = singleton.getInstance("Perry", 30);

console.log(user1 === user2);
