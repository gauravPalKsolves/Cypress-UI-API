import GetUserDetailsPage from '../../Selectors/API Selectors/GetUserDetailsPage';

describe('User Details', () => {
    it('should fetch user details', () => {
        const userId = 6892004;

        GetUserDetailsPage.fetchUserDetails(userId).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.eql(userId);
            expect(response.body).to.have.property('name');
        });
    });

    it('should handle invalid endpoints', () => {
        const invalidUserId = 68;

        GetUserDetailsPage.fetchUserDetails(invalidUserId).then((response) => {
            expect(response.status).to.equal(404);
        });
    });
});
