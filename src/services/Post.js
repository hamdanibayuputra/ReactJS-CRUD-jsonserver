import Axios from "axios";
import { onlineRoot, RootPath } from "./Config";

export const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    Axios.post(`${root ? onlineRoot : RootPath}/${path}`, data)
      .then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
  })

  return promise;
}