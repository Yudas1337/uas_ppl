

const credentials = {
    username: 'admin',
    password: 'admin'
  };
  
  const loginUsingForm = (credentials) => {
      // Enter username and password in form inputs
      cy.get("input[name=username]").type(credentials.username);
      cy.get("input[name=password]").type(credentials.password).type("{enter}"); // '{enter}' submits the form
  
  }
  
  describe('Test Scenario For vehicles', () => {

    beforeEach('Visit website getparking', () => {
        cy.visit("https://getparkingsite.000webhostapp.com/login.php");
        loginUsingForm(credentials)
        cy.location("pathname").should("include", "/home.php");
     });
     
   
     it('Test Case 1 - visit list of vehicles', () => {
          cy.get('a[href*="mobilaktif.php"]').click({ force: true})
        cy.location("pathname").should("include", "/mobilaktif.php");

     });
    
   })