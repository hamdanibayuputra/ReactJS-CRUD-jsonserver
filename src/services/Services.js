import { Post } from "./Post";
import { Get } from "./Get";
import { Put } from "./Put";
import { Delete } from "./Delete";

// POST
const postFormBlog = (data) => Post(`posts`, false, data);

// PUT  
const updateFormBlog = (data, id) => Put(`posts/${id}`, false, data);

// GET
const getFormBlog = () => Get("posts?_sort=id&_order=desc", false);

// DELETE
const deleteFormBlog = (id) => Delete(`posts/${id}`, false);

// CONTOH onlineRoot
const getComment = () => Get("comments", true);

const API = {
  getFormBlog, 
  getComment, 
  postFormBlog, 
  updateFormBlog,
  deleteFormBlog
}

export default API;