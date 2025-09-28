// const status = require("../../../../../pages/api/v1/status/index.js");

test("GET to /api/v1/status should return 200 status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status"); 
  
  expect(response.status).toBe(200);
})