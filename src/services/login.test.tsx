import { login } from "./login";

describe("login", () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;

    it("when login should show alert", () => {
        login();
        expect(mockAlert).toHaveBeenCalledWith("Bem vindo!")
    });
});