it('Create  Order - POST', () => {

    let body =  {
        "id": 0,
        "petId": 0,
        "quantity": 0,
        "shipDate": "2023-04-12T10:12:33.970Z",
        "status": "placed",
        "complete": true
      }

      cy.request('POST', '/store/order', body).as('createOrder');
      cy.get('@createOrder').then(createOrder => {
        expect(createOrder.status).to.eq(200);
      });
});