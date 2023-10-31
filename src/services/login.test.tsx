import { login } from "./login";

describe("login", () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'test@example';
    const mockPassword = '<PASSWORD>';

    it("when login should show alert", () => {
        login(mockEmail, mockPassword);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
    });

    it("shouldn't show message without email", () => {
        login(mockEmail, mockPassword);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    });
});