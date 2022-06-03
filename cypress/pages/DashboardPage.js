class DashboardPage {
  elements = {
    welcomeMessage: () => cy.contains(".alert-message", "Welcome back!"),
    subHeadingMessage: () =>
      cy.contains(
        "h6",
        " Start creating and sharing content today with CloudApp"
      ),
    mainMenu: () => cy.get("#main-menu"),
    signOutLink: () => cy.get("a[data-testid=dropdown-link-sign_out]"),
    settingsLink: () => cy.get("a[data-testid=dropdown-link-settings]"),
    sideBarSection: () => cy.get("[data-testid=dashboard-sidebar]"),
  };

  clickOnDashboardMenu() {
    this.elements.mainMenu().should("be.visible").click();
  }

  clickOnSignOut() {
    this.elements.signOutLink().should("be.visible").click();
  }

  clickOnSettings() {
    this.elements.settingsLink().should("be.visible").click();
  }

  clickOnCloseModal() {
    this.elements.closeIcon().should("be.visible").click();
  }

  closeModal() {
    cy.get("body").then(($body) => {
      if ($body.find(".modal-dialog-centered .modal-content").length) {
        cy.get(".modal-dialog-centered header").type("{esc}");
      } else {
        assert.isOk("Everything", "Everything is OK");
      }
    });
  }
}

module.exports = new DashboardPage();