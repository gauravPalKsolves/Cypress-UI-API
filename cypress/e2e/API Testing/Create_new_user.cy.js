import CreateUserPage from '../../Selectors/API Selectors/CreateUserPage';

describe('Create User', () => {
    it('should create a user', () => {
        const email = customerrandomemail(); // Generate a random email
        const user = {
            "name": "Gaurav Singh",
            "email": email, // Used the generated email
            "gender": "female",
            "status": "active"
        };

        CreateUserPage.createUser(user).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('name', user.name);
            expect(response.body).to.have.property('email', user.email);
            expect(response.body.id).to.not.be.null;
        });
    });
});



function customerrandomemail() {
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
    const domain = 'gmail.com'; // Change this to the domain you want
    const email = `${randomUsername}@${domain}`; // Concatenate the random username and domain to generate the email

    return email; // Return the generated email
}
