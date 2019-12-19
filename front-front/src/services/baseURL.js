const isProduction = process.env.NODE_ENV === "production";
export const base_url = isProduction
  ? "http://orgasmo.herokuapp.com"
  : "http://localhost:3000";
