import { isEmail, isEmpty, passwordConfirmed, isPassword } from "./utils";

describe("Testing Utils Functions", () => {
  test("Email is Valid", () => {
    expect(isEmail("mariam@gmail.com")).toBeTruthy();
  });
  test("Email is InValid", () => {
    expect(isEmail("marigil.co")).toBeFalsy();
  });
  test("Name is Valid", () => {
    expect(isEmpty("mariam")).toBeFalsy();
  });
  test("Name is InValid", () => {
    expect(isEmpty("")).toBeTruthy();
  });
  test("Password is InValid Less Than 8 Characters", () => {
    expect(isPassword("mari")).toBeFalsy();
  });
  test("Password is InValid Empty", () => {
    expect(isPassword("")).toBeFalsy();
  });
  test("Password is Valid", () => {
    expect(isPassword("asdfghjkk")).toBeTruthy();
  });
  test("Retyped Password is Valid", () => {
    expect(passwordConfirmed("asdfghjkk", "asdfghjkk")).toBeTruthy();
  });
  test("Retyped Password is InValid", () => {
    expect(passwordConfirmed("asdfghjkkd", "asdfghjkk")).toBeFalsy();
  });
});
