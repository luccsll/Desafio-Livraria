const required = ["JWT_SECRET", "JWT_EXPIRES_IN"] as const;

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
}

const env = {
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN as string,
};

export default env;
