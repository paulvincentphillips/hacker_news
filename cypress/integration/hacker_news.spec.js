describe("renders the top posts page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#pageTitle").should("exist");
    cy.get("#topPostsBtn").should("exist");
    cy.get("#newPostsBtn").should("exist");
    cy.get(".previous").should("exist");
    cy.get(".next").should("exist");
  });
});

describe("renders the new posts page", () => {
  it("renders correctly", () => {
    cy.visit("/newposts");
    cy.get("#pageTitle").should("exist");
    cy.get("#topPostsBtn").should("exist");
    cy.get("#newPostsBtn").should("exist");
    cy.get(".previous").should("exist");
    cy.get(".next").should("exist");
  });
});

describe("navigate to new posts and back", () => {
  it("navigates correctly", () => {
    cy.visit("/");
    cy.get("#newPostsBtn").click();
    cy.url().should("contain", "/newposts");
    cy.get("#topPostsBtn").click();
    cy.url().should("equal", "http://localhost:3000/");
  });
});

describe("number of elements in top posts list should equal 20", () => {
  it("equals 20", () => {
    cy.visit("/");
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
  });
});

describe("number of elements in new post list should equal 20", () => {
  it("equals 20", () => {
    cy.visit("/newposts");
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
  });
});

describe("number of pages in top posts should equal 25", () => {
  it("equals 25", () => {
    cy.visit("/");
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find("li").eq(7).should('have.text', '25');
  });
});

describe("number of pages in new posts should equal 25", () => {
  it("equals 25", () => {
    cy.visit("/newposts");
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find("li").eq(7).should('have.text', '25');
  });
});

describe("newslist rows in top posts contain title and info", () => {
  it("has title and info", () => {
    cy.visit("/");
    cy.get("#gridContainer").find(".newsItemTitle").should("exist");
    cy.get("#gridContainer").find(".newsItemInfo").should("exist");
  });
});

describe("newslist rows in new posts contain title and info", () => {
  it("has title and info", () => {
    cy.visit("/newposts");
    cy.get("#gridContainer").find(".newsItemTitle").should("exist");
    cy.get("#gridContainer").find(".newsItemInfo").should("exist");
  });
});

describe("in top posts, click next on pagination, click previous, jump to page last page, go back to first page", () => {
  it("navigates correctly", () => {
    cy.visit("/");
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find(".next").click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find(".previous").click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find("li").eq(7).click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find("li").eq(1).click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
  });
});

describe("in new posts, click next on pagination, click previous, jump to page last page, go back to first page", () => {
  it("navigates correctly on new posts", () => {
    cy.visit("/newposts");
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find(".next").click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find(".previous").click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find("li").eq(7).click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
    cy.get("ul").find("li").eq(1).click();
    cy.get("#gridContainer").find(".newsItemTitle").should("have.length", 20);
  });
});

