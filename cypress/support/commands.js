/* eslint-disable no-undef */
Cypress.Commands.add("login", (username, password) => {
  cy.contains("Auth").click();
  cy.contains("Login").click();
  cy.get("input[name=username]").type(username);
  cy.get("input[name=password]").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("logout", () => {
  cy.contains("Auth").click();
  cy.contains("Logout").click();
});

Cypress.Commands.add("navigateToRooms", () => {
  const user = { username: "test_user", password: "ilovebutts" };
  cy.visit(`http://127.0.0.1:3000`);
  cy.login(user.username, user.password);
  cy.contains("Rooms").click();
});

Cypress.Commands.add("navigateToTasks", () => {
  const user = { username: "test_user", password: "ilovebutts" };
  cy.visit(`http://127.0.0.1:3000`);
  cy.login(user.username, user.password);
  cy.contains("Tasks").click();
});
