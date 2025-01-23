import User from "../model/user.model.js";

const userLoginCtrl = async (req, res) => {
  try {
  } catch (error) {}
};
const userRegisterCtrl = async (req, res) => {
  try {
    const { name, email, password, phone, address, role } = req.body;
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !address ||
      !role
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
      phone,
      address,
      role,
    });

    if (!newUser) {
      throw new Error("Error while Creating User", error.message);
    }
    return res.status(201).send({
      success: true,
      message: "User created Succesfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error in user registration:", error.message);
    return res.status(500).send({
      success: false,
      message: "Error while registering user",
      error: error.message,
    });
  }
};

export { userLoginCtrl, userRegisterCtrl };
