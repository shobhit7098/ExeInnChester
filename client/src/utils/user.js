// utils/user.js
export const getUserId = () => {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = crypto.randomUUID(); // Or use a simpler fallback
    localStorage.setItem("userId", userId);
  }
  return userId;
};
