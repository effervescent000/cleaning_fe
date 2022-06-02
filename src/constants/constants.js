import { makeURL } from "../utils/utils";

const rootUrls = {
  ROOT: process.env.REACT_APP_DOMAIN,
  AUTH: "auth",
  ROOMS: "rooms",
};

export const urls = {
  // AUTH urls
  LOGIN: makeURL([rootUrls.ROOT, rootUrls.AUTH, "login"]),
  SIGNUP: makeURL([rootUrls.ROOT, rootUrls.AUTH, "signup"]),
  CHECK: makeURL([rootUrls.ROOT, rootUrls.AUTH, "check"]),
  // OTHER urls
  ROOMS: makeURL([rootUrls.ROOT, rootUrls.ROOMS]),
};
