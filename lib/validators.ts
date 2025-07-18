import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';
const currency = z
    .string()
    .refine(
        value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
        'Price must have exactly two decimal places'
    );
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    brand: z.string().min(3, 'Brand must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have at least one image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
    rating: z.string(),
});

export const signInFormSchema = z.object({
    email: z.string().email('Invalid Email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});
