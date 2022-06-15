/* eslint-disable no-undef */
describe("Add, edit, delete tasks", () => {
  const task = {
    room: 1,
    label: "test task",
    period: 3,
    comment: "a comment",
  };
  const editedTask = {
    room: 2,
    label: "another task",
    period: 5,
    comment: "a note",
  };
  beforeEach(() => {
    cy.navigateToTasks();
  });
  afterEach(() => {
    cy.logout();
  });
  it("Adds a new task", () => {
    cy.get("[data-cy=add-task]").click();
    cy.contains("Add a task").should("exist");
    cy.get("select[name=room_id]").select(task.room);
    cy.get("input[name=label]").type(task.label);
    cy.get("input[name=points]").first().click();
    cy.get("input[name=period]").type(task.period);
    cy.get("input[name=note]").type(task.comment);
    cy.get("button[type=submit]").click();
    cy.wait(200);
    cy.contains(task.label).should("exist");
    // add more to this test:
    // - open the appropriate edit modal again and confirm this info is all correct
  });
  it("Edits an existing task", () => {
    cy.get("[data-cy=edit]").last().click();
    cy.get("select[name=room_id]").select(editedTask.room);
    cy.get("input[name=label]").type(`{selectAll}{backspace}${editedTask.label}`);
    cy.get("input[name=period]").type(`{selectAll}{backspace}${editedTask.period}`);
    cy.get("input[name=note]").type(`{selectAll}{backspace}${editedTask.comment}`);
    cy.get("button[type=submit]").click();
    cy.wait(200);
    cy.contains(editedTask.label).should("exist");
  });
  it("Deletes an existing task", () => {
    cy.contains(editedTask.label).should("exist");
    cy.get("[data-cy=delete]").last().click();
    cy.wait(200);
    cy.contains(editedTask.label).should("not.exist");
  });
});
