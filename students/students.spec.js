const server = require("../api/server");
const request = require("supertest");

const prepTestDB = require("../config/helpers");

beforeEach(prepTestDB);

describe("students", () => {
  it("get /students/user/:id", async () => {
    const res = await request(server).get("/students/user/2");
    expect(res.status).toBe(200);

    expect(res.body[5]).toEqual({
      id: 5,
      major: "Astrophysics",
      student: "Buzz Aldrin"
    });
  });

  it("post /students", async () => {
    const res = await request(server)
      .post("/students")
      .send({
        user_id: 2,
        student_name: "Dan Marino",
        major: "Marine Biology"
      });
    expect(res.status).toBe(201);
  });

  it("put /students/:id", async () => {
    const res = await request(server)
      .put("/students/1")
      .send({
        user_id: 2,
        student_name: "Dan Marino",
        major: "Marine Biology"
      });
    expect(res.status).toBe(200);
    expect(res.body).toEqual(1);
  });

  it("delete /students/:id", async () => {
    const res = await request(server).delete("/students/1");
    expect(res.status).toBe(200);
  });
});
