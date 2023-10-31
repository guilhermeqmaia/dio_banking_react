const account = {
    email: "guilherme.q.maia@gmail.com",
    password: "senha@123",
    name: "Guilherme Quirino Maia"
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account);
    }, 3000);
});