import axios from "axios";
import { URL } from "../shared/url";

const instance = axios.create({
    baseURL: URL,
    timeout: 1000
  });

  const ReqApi = (config) => {
   return instance.request(config)
  };

  export const GetRequest = (path) => {
    return ReqApi({
        method : "GET",
        url : path,
    });
  };

  export const PostRequest = (path, data) => {
    return ReqApi({
        method : "POST",
        url : path,
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
    });
  };

  export const DeleteRequest = (path, id) => {
    return ReqApi ({
      method : "DELETE",
      url : path + id
    });
  };

  export const PutRequest = (path, data) => {
    return ReqApi({
      method : "PUT",
      url : path + data.id,
      data : JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
  };