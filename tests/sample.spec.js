const { test, expect } = require("@playwright/test");

test("first scenario", async ({ page }) => {
  expect("halo").toBe("halo");
});

test("second test", async ({ page }) => {
  expect("Johanes kristiadi").toContain("kristiadi");
});

test("third scenario", async ({ page }) => {
  expect(5).toEqual(4 + 1);
});
