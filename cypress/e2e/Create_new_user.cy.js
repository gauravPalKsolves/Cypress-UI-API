/// <reference types = "cypress" />

describe('Read user details', () => {

    it('Fetches user details', () => {
        const authToken = 'db0648c924af5f5f5262030572299310b316842f4e7abf26835c22cccf9088c4';
        const url = 'https://gorest.co.in/public/v2/users';
        const body = {
            "name": "Gaurav Singh",
            "email": "gaurav.singh@yopmail.com",
            "gender": "female",
            "status": "active"
        };

        cy.request({
            method: 'POST',
            url,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', "Gaurav Singh");
            expect(response.body).to.have.property('email', 'gaurav.singh@yopmail.com');
            expect(response.body.id).to.not.be.null
        });
    });
});

