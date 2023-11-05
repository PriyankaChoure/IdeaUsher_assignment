const router = require("express").Router();
const postController = require("../controllers/post.controller");
/**
 * create new post
 * url - server:8082/backend/post/
 *
 *
 * Request Body -
 * {
 *  "title": "Nodejs - as Backend",
 *  "desc": "Node js is a javascript runtime"
 * }
 *
 * Response -
 *  {"_id":"644e37d3a17dc5255cb5f6a3","title":"Nodejs - as Backend","desc":"Node js is a javascript runtime","createdAt":"2023-04-30T09:41:39.631Z","updatedAt":"2023-04-30T09:41:39.631Z","__v":0}
 */
router.post("/", postController.addPost);

/**
 *  get post by search keyword
 * url - server:8082/backend/post/:keyword
 *header details -
 * key - token
 * value - Bearer tokenKey
 * request body -
 * {
 *  id: "64454824e245e16ad87c67c7"
 * } 
 *
 * response -
 {
    "_id": "644e3bad4750b966ac76f8ff",
    "title": "Silk Saree",
    "desc": "Material will be silk",
    "createdAt": "2023-04-30T09:58:05.919Z",
    "updatedAt": "2023-04-30T09:58:05.919Z",
    "__v": 0
}
    
 */
router.get("/:keyword", postController.getPostById);

/**
 * *  get all post details with given filter,sorting, and pagination
 * url - server:8082/backend/post/
 *header details -
 * key - token
 * value - Bearer tokenKey
 * Response Key -
 *
 [
    {
        "_id": "644e3bad4750b966ac76f8ff",
        "title": "Silk Saree",
        "desc": "Material will be silk",
        "createdAt": "2023-04-30T09:58:05.919Z",
        "updatedAt": "2023-04-30T09:58:05.919Z",
        "__v": 0
    }
]
 */
router.get("/", postController.getAllPost);

module.exports = router;
