interface LoginUserTDO {
    email: string;
    password: string;
}
interface CreateUserTDO extends LoginUserTDO {
    name: string;
}
declare class AuthService {
    create({ name, email, password }: CreateUserTDO): Promise<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
    }>;
    login({ email, password }: LoginUserTDO): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
        };
        token: string;
    }>;
}
export { AuthService };
//# sourceMappingURL=AuthService.d.ts.map