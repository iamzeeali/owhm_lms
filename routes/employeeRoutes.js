const express = require("express");
const authController = require("./../controllers/authController");
const employeeController = require("./../controllers/employeeController");

const router = express.Router();

//Protect all routes after this middleware
router.use(authController.protect);

//Restrict all router after this middleware to admin only

router
  .route("/")
  .get(employeeController.getAllEmployees)
  .post(employeeController.createEmployee);

router
  .route("/:id")
  .get(employeeController.getEmployee)
  .patch(employeeController.updateEmployee)
  .delete(
    authController.restrictTo("super-admin"),
    employeeController.deleteEmployee
  );

module.exports = router;
