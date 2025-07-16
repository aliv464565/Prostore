import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import ProductPrice from './product-price';
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Card className="w-full ">
            <CardHeader className="p-0 items-center ">
                <Link href={`/product/${product.slug}`} />
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    height={300}
                    width={300}
                    priority
                />
            </CardHeader>
            <CardContent className=" grid gap-3 mt-auto">
                <span className="text-xs">{product.brand}</span>
                <h4>{product.name}</h4>
                <div className=" flex-between  justify-between">
                    <span>{product.rating} Stars</span>
                    {product.stock > 0 ? (
                        <ProductPrice value={product.price} className="text-emerald-500" />
                    ) : (
                        <span className="text-destructive">Out Of Stock</span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
