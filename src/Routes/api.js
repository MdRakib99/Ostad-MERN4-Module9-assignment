const express = require("express");

const router = express.Router();
//API FOR ADMIN CONTROLLER
const adminController = require("../Controllers/adminController");

router.get("/adminCreate", adminController.create);
router.get("/adminRead", adminController.read);
router.get("/adminDelete", adminController.delete);
router.get("/adminUpdate", adminController.update);

//API FOR POST CONTROLLER

const postController = require("../Controllers/postController");

router.get("/postCreate", postController.create);
router.get("/postRead", postController.read);
router.get("/postDelete", postController.delete);
router.get("/postUpdate", postController.update);

//API FOR SUB ADMIN CONTROLLER

const subAdminController = require("../Controllers/subAdminController");

router.get("/subAdminCreate", subAdminController.create);
router.get("/subAdminRead", subAdminController.read);
router.get("/subAdminDelete", subAdminController.delete);
router.get("/subAdminUpdate", subAdminController.update);

//API FOR USER CONTROLLER
const userController = require("../Controllers/userController");

router.get("/userCreate", userController.create);
router.get("/userRead", userController.read);
router.get("/userDelete", userController.delete);
router.get("/userUpdate", userController.update);

module.exports = router;
