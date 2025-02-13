import AudioBook from "../models/audioBooksModel.js";
import User from "../models/usersModel.js";

const createAudioBook = async (req, res, next) => {
  const { book_name, category, language, description } = req.body;

  try {
    if (!book_name || !category || !language) {
      const err = new Error("book_name, category, language is required");
      err.statusCode = 400;
      return next(err);
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      return next(err);
    }

    // Save Audio_Book to DB
    await AudioBook.create({
      book_name,
      category,
      language,
      description,
      author_first_name: user.first_name,
      author_id: user._id,
    });

    // const audiobook = {
    //   book_name,
    //   category,
    //   language,
    //   author_first_name: user.first_name,
    //   author_id: user._id,
    // };

    res.status(201).json({
      message: "Your Audio Book Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};

const getAudioBooks = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      const err = new Error("User not found");
      err.statusCode = 404;
      return next(err);
    }

    const author_id = user._id;

    const audioBooksList = await AudioBook.find({ author_id });

    res.status(200).json(audioBooksList);
  } catch (error) {
    return next(error);
  }
};

export { createAudioBook, getAudioBooks };
