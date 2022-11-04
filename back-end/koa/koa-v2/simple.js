const test = require("ava");
const supertest = require("supertest");
const koa = require("./app");

const app = koa.callback();

// test("my first test", (t) => {
//   t.is(6, 3 + 3);
// });

test.cb("GET /", (t) => {
  supertest(app)
    .get("/")
    .expect(200, (err, res) => {
      t.ifError(err);

      t.regex(res.text, /Hello Koa/, "res.text == Hello koa");

      t.end();
    });
});
