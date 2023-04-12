it('Create User - POST', () => {

    let body =  {
        "id": 0,
        "username": Cypress.env("username"),
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
      }

      cy.request('POST', '/user', body).as('createUser');
      cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.eq(200);
      });
});