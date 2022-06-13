import axios from "axios";
import jsCookie from "js-cookie";

class APIService {
  async makeBodylessRequest(endpoint, method) {
    const response = await axios({
      method: method,
      url: endpoint,
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": jsCookie.get("csrf_access_token") },
    });
    return response;
  }

  async makeBodyRequest(endpoint, body, method) {
    const response = await axios({
      method: method,
      url: endpoint,
      data: body,
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": jsCookie.get("csrf_access_token") },
    });
    return response;
  }

  async GET(endpoint, callback, catchCallback = (error) => console.log(error)) {
    this.makeBodylessRequest(endpoint, "get").then(callback).catch(catchCallback);
  }

  async DELETE(endpoint, callback, catchCallback = (error) => console.log(error)) {
    this.makeBodylessRequest(endpoint, "delete").then(callback).catch(catchCallback);
  }

  async POST(endpoint, body, callback, catchCallback = (error) => console.log(error)) {
    this.makeBodyRequest(endpoint, body, "post").then(callback).catch(catchCallback);
  }

  async PUT(endpoint, body, callback, catchCallback = (error) => console.log(error)) {
    this.makeBodyRequest(endpoint, body, "put").then(callback).catch(catchCallback);
  }
}

export default new APIService();
