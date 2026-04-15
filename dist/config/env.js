const required = ["JWT_SECRET", "JWT_EXPIRES_IN"];
for (const key of required) {
    if (!process.env[key]) {
        throw new Error(`Missing environment variable: ${key}`);
    }
}
const env = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
};
export default env;
//# sourceMappingURL=env.js.map