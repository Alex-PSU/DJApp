const jwt = require('jsonwebtoken');

// Middleware function to authenticate JWT
const authenticateJWT = (req, res, next) => {
  // Retrieve token from Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token

  if (!token) {
    // If there's no token, respond with an error
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify token using the secret key
    const decoded = jwt.verify(token, 'your-secret-key');  // 'your-secret-key' is your JWT secret key

    // Attach decoded user data to the request object (e.g., user ID)
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // If token verification fails (invalid or expired), respond with error
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authenticateJWT;
