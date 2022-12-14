const credentials = {
    username: "admin",
    password: "admin"
   };

   const loginUsingForm = (credentials) => {
        // Enter username and password in form inputs
        cy.get("input[name=username]").type(credentials.username);
        cy.get("input[name=password]").type(credentials.password).type("{enter}");
        // cy.get("input[class='swal-button swal-button--confirm']").type('{enter}');
   }

   beforeEach('Visit login page', () => {
    cy.visit("https://getparkingsite.000webhostapp.com/login.php");
 });
   
   describe('Test Case For Login', () => {
     it('Test Case 1 - Login Successful', () => {
        loginUsingForm(credentials)
        cy.location("pathname").should("include", "/home.php");
         
     });

     it('Test Case 2 - Incorrect username or password', () => {
        loginUsingForm({
            username : 'admin',
            password : '123456'
        })

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Username dan password salah');
         })
        
        
    });

   })