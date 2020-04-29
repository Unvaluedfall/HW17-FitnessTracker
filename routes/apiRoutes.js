var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    console.log(req)
    db.Workout.find({ _id: req.params.id }, {}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, {}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  })
  app.post("/api/workouts", function(req, res) {
    console.log(req)
    db.Workout.create({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
};
