'use strict';

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

/**
 * Validates a password.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password is valid, false otherwise.
 */
function validatePassword(password) {
    if (password.length < 8) return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
}

/**
 * Validates a username.
 * @param {string} username - The username to validate.
 * @returns {boolean} True if the username is valid, false otherwise.
 */
function validateUsername(username) {
    const re = /^[a-zA-Z0-9_]{3,16}$/;
    return re.test(username);
}

module.exports = { validateEmail, validatePassword, validateUsername };