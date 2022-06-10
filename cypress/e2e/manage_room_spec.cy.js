/* eslint-disable no-undef */
describe("Add, edit, delete rooms", () => {
  const testBedroomLabel = "test bedroom";
  beforeEach(() => {
    cy.navigateToRooms();
  });
  afterEach(() => {
    cy.logout();
  });
  it("Adds a new room", () => {
    cy.get("button[name=add-room-button]").click();
    cy.contains("Room type");
    cy.get("select[name=type]").select("bedroom");
    cy.get("input[name=label]").type(testBedroomLabel);
    cy.get("button[type=submit]").click();
    cy.wait(200);
    cy.contains(testBedroomLabel);
  });
});
