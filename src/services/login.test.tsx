import { login } from "./login";

describe("login", () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'guilherme.q.maia@gmail.com';
    const mockPassword = '<PASSWORD>';

    it("will show welcome alert if email is valid", async () => {
        const expectedName = 'Guilherme Quirino Maia';
        await login(mockEmail, mockPassword);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${expectedName}!`);
    });

    it("shouldn't show message without email", async () => {
        await login(mockEmail, mockPassword);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    });

    it("will show an error case email is invalid", async () => {
        await login('email@invalido', '123');
        expect(mockAlert).toHaveBeenCalledWith('Email inválido');
    });
});