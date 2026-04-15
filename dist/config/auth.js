import env from "./env.js";
const authConfig = {
    jwt: {
        secret: env.jwtSecret,
        expiresIn: env.jwtExpiresIn,
    },
};
export default authConfig;
//# sourceMappingURL=auth.js.map