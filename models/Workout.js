const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: () => new Date()
        },
        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Exercise Type Is Required"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Exercise Name Is Required"
                },
                duration: {
                    type: Number,
                    required: "Exercise Duration Needs To Be In Minutes"
                },
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
    
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;