import Axios from "axios";
import { onlineRoot, RootPath } from "./Config";

export const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    Axios.delete(`${root ? onlineRoot : RootPath}/${path}`)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      });
  })
  return promise;
}