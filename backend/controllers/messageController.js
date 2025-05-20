import userModel from "../models/messageModel.js";

export const postMessage = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "You already sent a message. For further assistance, please contact me through my gmail below.",
        });
    }
    const newMessage = new userModel(req.body);
    await newMessage.save();

    res.status(201).json({
      success: true,
      data: newMessage,
      message: "User post created successfully",
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};
