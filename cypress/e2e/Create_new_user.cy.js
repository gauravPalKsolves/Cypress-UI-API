/// <reference types = "cypress" />

describe('Read user details', () => {
    it('Fetches user details', () => {
      const authToken = 'db0648c924af5f5f5262030572299310b316842f4e7abf26835c22cccf9088c4';
      const url = 'https://gorest.co.in/public/v2/users';
  
      cy.request({
        method: 'POST',
        url,
        headers: {
          authorization: `Bearer ${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('email');
      });
    });
  });
  