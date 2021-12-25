import app from "../../index";
import request from "supertest";
import { UserInfo } from "../../types/UserInfo";

describe("Test getting user info given a username", () => {
  it("should get user info GET /api/:username/skills", (done) => {
    const username = "torrenegra";

    request(app)
      .get(`/api/${username}/skills`)
      .expect(200)
      .then((res) => {
        const userInfo: UserInfo = res.body;

        expect(userInfo.person.publicId).toEqual(username);

        done();
      });
  });
});
