/* eslint-disable no-undef */
describe("Add, edit, delete rooms", () => {
  const testBedroomLabel = "test bedroom";
  const editedRoomLabel = "test bathroom";
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
  it("Edits an existing room", () => {
    cy.get("[data-cy=edit]").last().click();
    cy.get("select[name=type]").select("bathroom");
    cy.get("input[name=label]").type(`{selectAll}{backspace}${editedRoomLabel}`);
    cy.get("button[type=submit]").click();
    cy.wait(200);
    cy.contains(editedRoomLabel);
  });
  it("Deletes an existing room", () => {
    cy.contains(editedRoomLabel).should("exist");
    cy.get("[data-cy=delete]").last().click();
    cy.wait(200);
    cy.contains(editedRoomLabel).should("not.exist");
  });
});
