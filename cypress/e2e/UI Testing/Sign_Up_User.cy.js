/// <reference types = "cypress" />

import {signupuser} from '../../Selectors/UI Selectors/Signupuser'
const obj1 = new signupuser();


import credentials from '../../fixtures/Signup.json';

describe('Login the user', ()=>{
    it('Login the user', ()=>{
        obj1.signup(credentials.FName, credentials.LName, credentials.Email, credentials.Password)
        cy.contains('Contact List').should('be.visible')
    })
})