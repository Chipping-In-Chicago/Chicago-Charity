const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');

const secret = 'your-secret-key';

const signToken = (user) => {
  const payload = { id: user._id, email: user.email };
  return jwt.sign(payload, secret, { expiresIn: '1h' }); 
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (err) {
    throw new AuthenticationError('Invalid or expired token');
  }
};

const authMiddleware = async (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];

    if (token) {
      try {
        const user = await User.findById(verifyToken(token).id);
        return { user };
      } catch (err) {
        throw new AuthenticationError('Invalid or expired token');
      }
    }

    throw new AuthenticationError('Authentication token must be in the format "Bearer [token]"');
  }

  throw new AuthenticationError('Authorization header must be provided');
};

module.exports = { signToken, verifyToken, authMiddleware };
