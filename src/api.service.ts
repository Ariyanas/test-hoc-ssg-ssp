import axios from "axios";

const ApiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const ApiMethods = {
  async get(path: string, params = {}) {
    try {
      const response = await ApiInstance.get(path, {
        params,
      });

      if (response.data) {
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const services = {
  getAllPosts() {
    return ApiMethods.get("posts");
  },
};

export default services;
