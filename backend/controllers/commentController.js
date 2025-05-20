import commentModel from "../models/commentModel.js";

export const postComment = async (req, res) => {
  const { name, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).json({
      success: false,
      message: "Please fill all fields to post a comment",
    });
  }
  try {
    const newComment = new commentModel(req.body);
    await newComment.save();
    res.status(201).json({
      success: true,
      data: newComment,
      message: "Comment created successfully",
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

export const getComment = async (req, res) => {
  try {
    const comments = await commentModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      //   data: comments.map((val) => ({
      //     name: val.name,
      //     comment: val.comment,
      //   })),
      comments,
      message: "Comments fetched successfully",
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};
