const mongoose = require("mongoose");
const Employee = require("./employee")
const Project = require("./project")

const entrySchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        // max: new Date()
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    hours: {
        type: Number,
        required: true
    },
    workDescription: {
        type: String,
        enum: ["test1", "jbdwdhwkdwodwoqd", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9"],
        required: true
    },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;