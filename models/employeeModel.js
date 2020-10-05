const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: [true, "Please enter an employee ID"],
  },
  type: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please enter an employee name"],
  },
  department: {
    type: String,
    required: [true, "Please enter department"],
  },
  section: {
    type: String,
  },
  position: {
    type: String,
  },
  grade: {
    type: String,
  },

  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// employeeSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: "company",
//     select: "companyName"
//   });

//   next();
// });

employeeSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

module.exports = Activity = mongoose.model("Employee", employeeSchema);
