import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { ProductForm } from '@/shared/components/shared/product-form';

export default async function ProductPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        },
                    },
                },
            },
            items: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return <ProductForm product={product} />;
}
