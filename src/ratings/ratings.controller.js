const ratings = require("../data/ratings-data");

function list(req, res) {
  res.json({ data: rating });
}

function starExists(req, res, next) {
  const { ratingId } = req.params;
  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));
  if (foundRating) {
    res.locals.rating = foundRating;
    return next();
  }
  next({
    status: 404,
    message: `rating id not found: ${ratingId}`,
  });
}

function noteExists(req, res, next) {
  const { noteId } = req.params;
  const foundRating = ratings.find(
    (rating) => rating.noteId === Number(noteId)
  );
  if (foundRating) {
    res.locals.rating = foundRating;
    return next();
  }
  next({
    status: 404,
    message: `Note id not found: ${noteId}`,
  });
}

function read(req, res) {
  // const noteId = Number(req.params.noteId);
  // const foundNote = notes.find((note) => (note.id = noteId));
  res.json({ data: res.locals.rating });
}

module.exports = {
  list,
  read: [noteExists, starExists, read],
};
