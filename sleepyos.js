// SleepyOS 💤
// Codédex

const os = require('os');

// Constants for time conversion
const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7; // 7 days in seconds

// Get system uptime in seconds
const uptimeInSeconds = os.uptime();

// Convert uptime to hours, minutes, and seconds
const hours = Math.floor(uptimeInSeconds / 3600);
const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
const seconds = Math.floor(uptimeInSeconds % 60);

// Create a friendly message from the computer's point of view
const uptimeMessage = `Hiiiii! I've been awake for ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;

// Display the message to the user
console.log(uptimeMessage);

// Check if the system has been awake for more than a week
if (uptimeInSeconds > SECONDS_IN_A_WEEK) {
  console.log('Woah, I\'ve been awake for more than a week...I\'m sleeeeepy, can you please let me rest? 🥱💤');
} else {
  console.log('Beep beep! 🏎️💨 I\'ve been awake for less than a week! Still unbothered. moisturized. happy. in my lane. focused. flourishing.😌');
}
