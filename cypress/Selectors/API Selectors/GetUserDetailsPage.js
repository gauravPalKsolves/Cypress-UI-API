class UserDetailsPage {
    constructor() {
        this.authToken = 'db0648c924af5f5f5262030572299310b316842f4e7abf26835c22cccf9088c4';
    }

    fetchUserDetails(userId) {
        const url = `https://gorest.co.in/public/v2/users/${userId}`;
        return cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${this.authToken}`
            }
        });
    }
}

export default new UserDetailsPage();
