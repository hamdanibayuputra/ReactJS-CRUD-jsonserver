import Axios from "axios";
import { onlineRoot, RootPath } from "./Config";

export const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    Axios.put(`${root ? onlineRoot : RootPath}/${path}`, data)
      .then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
  })

  return promise;
}