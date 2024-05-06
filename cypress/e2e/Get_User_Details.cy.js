/// <reference types = "cypress" />

describe('Read user details', () => {

  it('Fetches user details', () => {
    const authToken = 'db0648c924af5f5f5262030572299310b316842f4e7abf26835c22cccf9088c4';
    const url = 'https://gorest.co.in/public/v2/users/6892004';

    cy.request({
      method: 'GET',
      url,
      headers: {
        authorization: `Bearer ${authToken}`
      }
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eql(6892004)
      expect(response.body).to.have.property('name');
    });
  });

  
  it('Fetches user with invalid end points ', () => {
    const authToken = 'db0648c924af5f5f5262030572299310b316842f4e7abf26835c22cccf9088c4';
    const url = 'https://gorest.co.in/public/v2/users/68';

    cy.request({
      method: 'GET',
      url,
      failOnStatusCode: false,
      headers: {
        authorization: `Bearer ${authToken}`
      }
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(404);
  
    });
  });
});
