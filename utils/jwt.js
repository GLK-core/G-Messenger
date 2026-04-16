const jwt = require('jsonwebtoken');

// Function to generate a JWT token
function generateToken(payload, secret, options = {}) {
    return jwt.sign(payload, secret, options);
}

// Function to verify a JWT token
function verifyToken(token, secret) {
    try {
        const decoded = jwt.verify(token, secret);
        return { valid: true, decoded };
    } catch (err) {
        return { valid: false, error: err.message };
    }
}

module.exports = { generateToken, verifyToken };