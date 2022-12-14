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

        cy.get('a[href*="entry-mobil.php"]').click({ force: true})
        cy.location("pathname").should("include", "/entry-mobil.php");

     });

     it('Test Case 1 - error plat nomor kosong', () => {
        cy.get("input[name=jenis]").type("sedan").type("{enter}");
        cy.on('window:alert', (text) => {
        expect(text).to.contains('plat nomor tidak boleh kosong');
      });
  });

    it('Test Case 2 - error jenis kendaraan kosong', () => {
      cy.get("input[name=plat_nomor]").type("N 1337 T").type("{enter}");
      cy.on('window:alert', (text) => {
        expect(text).to.contains('jenis kendaraan tidak boleh kosong');

      });
  });
    
     it('Test Case 3 - success entry', () => {
            cy.get("input[name=plat_nomor]").type(" 1337 T");
            cy.get("input[name=jenis]").type("motor").type("{enter}");
            cy.location("pathname").should("include", "/mobilaktif.php");
     });

      
    
   })