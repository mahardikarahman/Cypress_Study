describe('Mix Testing', () => {
    it('Create User - POST', () => {

        let body =  {
            "id": 0,
            "username": Cypress.env("username"),
            "firstName": "string",
            "lastName": "string",
            "email": "string",
            "password": Cypress.env("password"),
            "phone": "string",
            "userStatus": 0
          }
    
          cy.request('POST', '/user', body).as('createUser');
          cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200);
          });
    });

    const login_User = {
        method : 'GET',
        url : '/user/login',
        qs : {
            username : Cypress.env("username"),
            password : Cypress.env("password")
        }
    }
    it('get login - GET', () => {
        cy.request(login_User).as('loginUser');
        cy.get('@loginUser').then(login => {
            expect(login.status).to.equal(200);
        })
    })
})