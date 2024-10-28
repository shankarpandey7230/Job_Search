import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    // all above should be filled
    if (fullname || email || phoneNumber || password || role) {
      return res.status(400).json({
        message: 'some of the required parameters are not filled',
        success: false,
      });

      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: 'User with this email already exists',
          success: false,
        });
      }
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });
  } catch (error) {}
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
  } catch (error) {}
};
