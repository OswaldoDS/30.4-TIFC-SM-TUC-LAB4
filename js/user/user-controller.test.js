const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("find user by email: santiago@generation.org from Santiago", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  const foundUser = userController.findByEmail("santiago@generation.org"); //cambiar con otro correo para verificar que los compara
  console.log(user.equalsTo(foundUser));
  // expect(foundUser).toEqual(user); también funciona con esto
  expect(foundUser).toBe(user);
});

test("find user by email: juan@generation.org from Juan", () => {
  let user = new User(1234, "Juan", "santiago@generation.org");
  userController.add(user);
  const foundUser = userController.findByEmail("juan@generation.org"); //cambiar con otro correo para verificar que los compara
  console.log(user.equalsTo(foundUser));
  // expect(foundUser).toEqual(user); también funciona con esto
  expect(foundUser).toBe(user);
});

test("find user by Id: 4321 from Carlo", () => {
  let user = new User(4321, "Carlo", "carlo@generation.org");
  userController.add(user);
  const foundId = userController.findById(4321);
  // console.log(`ID user:${user.getId()}, ID foud: ${foundId ? foundId.getId() : "not found"}`);
  expect(foundId).toEqual(user);
});

test("find user by Id: 5678 from Juan P", () => {
  let user = new User(5678, "Juan P", "juanp@generation.org");
  userController.add(user);
  const foundId = userController.findById(5678);
  // console.log(`ID user:${user.getId()}, ID foud: ${foundId ? foundId.getId() : "not found"}`);
  expect(foundId).toEqual(user);
});
