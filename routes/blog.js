const express = require('express');
const blogController = require ('./../controllers/blogController');
const appConfig = require("./../config/appConfig");
let setRouter = (app) =>{
    let baseUrl = appConfig.apiVersion + '/blogs';

    app.get(baseUrl + '/all', blogController.getAllBlog);

    app.get(baseUrl + '/view/:blogId', blogController.viewByBlogId);

    app.get(baseUrl + '/view/by/author/:author', blogController.viewByAuthor);

    app.get(baseUrl + '/view/by/category/:category', blogController.viewByCategory);

    app.post(baseUrl + '/:blogId/delete', blogController.deleteBlog);

    app.put(baseUrl + '/:blogId/edit', blogController.editBlog);

    app.post(baseUrl + '/create', blogController.createBlog);

    app.get(baseUrl + '/:blogId/count/view', blogController.increaseBlogView);

    app.get("/hello-world", blogController.helloworld);
    app.get("/example", blogController.printexample);
    app.get("/test/route/:search/:secondvalue", blogController._testParams);
    app.get("/test/query", blogController._testquery);
    app.post("/test/bodytest", blogController._testbody);




}//end setRouter Function

module.exports = {
    setRouter: setRouter
};