class CreateUserPage {
    constructor() {
        this.authToken = 'db0648c924af5f5f5262030572299310b316842f4e7abf26835c22cccf9088c4';
        this.url = 'https://gorest.co.in/public/v2/users';
    }

    createUser(body) {
        return cy.request({
            method: 'POST',
            url: this.url,
            headers: {
                'Authorization': `Bearer ${this.authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
}

export default new CreateUserPage();
