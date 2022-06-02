import { makeURL } from "../utils/utils";

const rootUrls = {
  ROOT: process.env.REACT_APP_DOMAIN,
  AUTH: "auth",
};

export const urls = {
  // AUTH urls
  LOGIN: makeURL([rootUrls.ROOT, rootUrls.AUTH, "login"]),
  SIGNUP: makeURL([rootUrls.ROOT, rootUrls.AUTH, "signup"]),
  CHECK: makeURL([rootUrls.ROOT, rootUrls.AUTH, "check"]),
};
