import { PrismaClient } from '@prisma/client';

const prismaClintSingleton = () => {
    return new PrismaClient();
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClintSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClintSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
