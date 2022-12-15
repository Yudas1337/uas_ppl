const credentials = {
    username: 'admin',
    password: 'admin'
  };
  
  const loginUsingForm = (credentials) => {
      // Enter username and password in form inputs
      cy.get("input[name=username]").type(credentials.username);
      cy.get("input[name=password]").type(credentials.password).type("{enter}"); // '{enter}' submits the form
  }

  describe('Test Scenario For out vehicles', () => {

    beforeEach('Visit website getparking', () => {
        cy.visit("http://localhost/siparkir/login.php");
        loginUsingForm(credentials)
        cy.location("pathname").should("include", "/home.php");

        cy.get('a[href*="mobilaktif.php"]').click({ force: true})
        cy.location("pathname").should("include", "/mobilaktif.php");

        cy.get('a[href*="keluar-parkir.php?idmobilaktif=17"]').click()
        cy.location("pathname").should("include", "/keluar-parkir.php");

     });

     it('Test Case 1 - kendaraan keluar', () => {
        cy.get("input[id=btnSubmit]").type("{enter}");
        cy.location("pathname").should("include", "/log-parkir.php");
    });
    
   })