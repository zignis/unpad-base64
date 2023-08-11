import { unpadBase64 } from "../src";

const padded = "YWJjZA==";
const unpadded = "YWJjZA";

describe("unpadBase64", () => {
  it("removes padding from a base64 string", () => {
    expect(unpadBase64(padded)).toEqual(unpadded);
  });
});
