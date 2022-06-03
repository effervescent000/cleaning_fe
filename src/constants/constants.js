import camelcase from "camelcase";

import { makeURL } from "../utils/utils";

const rootUrls = {
  ROOT: process.env.REACT_APP_DOMAIN,
  AUTH: "auth",
  ROOMS: "rooms",
  TASKS: "tasks",
};

export const urls = {
  // AUTH urls
  LOGIN: makeURL([rootUrls.ROOT, rootUrls.AUTH, "login"]),
  SIGNUP: makeURL([rootUrls.ROOT, rootUrls.AUTH, "signup"]),
  CHECK: makeURL([rootUrls.ROOT, rootUrls.AUTH, "check"]),
  // OTHER urls
  ROOMS: makeURL([rootUrls.ROOT, rootUrls.ROOMS]),
  TASKS: makeURL([rootUrls.ROOT, rootUrls.TASKS]),
};

const roomTypes = [
  "Bedroom",
  "Bathroom",
  "Den",
  "Dining Room",
  "Garage",
  "Kitchen",
  "Living Room",
  "Other",
];

export const roomTypesKeyValues = roomTypes.map((str) => ({ name: str, value: camelcase(str) }));
