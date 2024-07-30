import packagejson from "../../package.json";

export default {
  web: {
    name: packagejson.name,
    version: packagejson.version,
  },
  api: {
    baseUrl: "https://ecommerce101-api.onrender.com/api/v1",
    // baseUrl: "http://localhost:3000/api/v1",
  },
};
