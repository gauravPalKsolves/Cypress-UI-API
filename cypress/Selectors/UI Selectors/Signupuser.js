// Exporting the signupuser class
export class signupuser {
    weblocators = {
        firstname: 'input[placeholder="First Name"]',
        lastname: 'input[placeholder="Last Name"]',
        email: 'input[placeholder="Email"]',
        password: 'input[placeholder="Password"]',
        submit : 'Submit'
    }

    signup(FName, LName, Email, Password) {
        Email = generateRandomEmail();
        cy.visit('/');
        cy.contains('Sign up').click();
        cy.get(this.weblocators.firstname).type(FName);
        cy.get(this.weblocators.lastname).type(LName);
        cy.get(this.weblocators.email).type(Email);
        cy.get(this.weblocators.password).type(Password);
        cy.contains(this.weblocators.submit).click();
    }
}



function generateRandomEmail() {
    // Function to generate a random string of given length
    function generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const randomUsername = generateRandomString(8);
    const domain = '@gmail.com'; // Change this to the domain you want
    const email = `${randomUsername}${domain}`; // Concatenate the random username and domain to generate the email

    return email; // Return the generated email
}
