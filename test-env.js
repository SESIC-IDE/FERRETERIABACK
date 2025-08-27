import dotenv from "dotenv";
dotenv.config();

console.log("DB_USER:", JSON.stringify(process.env.DB_USER));
console.log("DB_HOST:", JSON.stringify(process.env.DB_HOST));
console.log("DB_NAME:", JSON.stringify(process.env.DB_NAME));
console.log("DB_PASS:", JSON.stringify(process.env.DB_PASS));
console.log("DB_PORT:", JSON.stringify(process.env.DB_PORT));
console.log("PORT:", JSON.stringify(process.env.PORT));
