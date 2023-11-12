const imageController = require("../controllers/image.controller");

module.exports = (app) => {
    app.post("/api/image", imageController.createNewImages);
    app.get("/api/image", imageController.getAllImages);
    app.get("/api/image:id", imageController.getOneImage);
    app.put("/api/image:id", imageController.updatedImage);
    app.delete("/api/image:id", imageController.deleteImage);

};