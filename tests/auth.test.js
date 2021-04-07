const assert = require("assert");
const chai = require("chai");
var chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);

describe("authenticate", () => {
  const user = {
    email: "foo@bar.fr",
  };

  it("should authenticate the user", (done) => {
    chai
      .request(app)
      .post("/api/token")
      .send({ email: user.email })
      .then((res) => {
        assert.strictEqual(res.status, 200);
        done();
      })
      .catch((err) => done(err));
  });
});
