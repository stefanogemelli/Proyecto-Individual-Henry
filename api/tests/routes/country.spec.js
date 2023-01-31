/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const activity = {
  // modificar
  name: "Argentina",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: false }).then(() => Country.create(country))
  );
  describe("GET /countries", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
  describe("GET /countries/ARG", () => {
    it("should get 200", () => agent.get("/countries").expect(200));
  });
  describe("GET /countries/ARGsdf", () => {
    it("should get 204", () => agent.get("/countries/ARGsdf").expect(204));
  });
});
