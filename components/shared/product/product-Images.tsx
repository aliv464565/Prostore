'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const ProductImages = ({ ImageAddress }: { ImageAddress: string[] }) => {
    const [action, setAction] = useState(ImageAddress[0]);
    return (
        <div className="grid gap-3">
            <div className="">
                <Image
                    src={action}
                    alt="Product Image"
                    width={1000}
                    height={1000}
                    className="min-h-[300px] object-cover object-center"
                />
            </div>
            <div className="flex gap-2">
                {ImageAddress.map(item => (
                    <div
                        className={cn(
                            `border-2 cursor-pointer hover:border-orange-200 `,
                            action === item && 'border-amber-500 '
                        )}
                        key={`${item} image`}
                        onClick={() => setAction(item)}
                    >
                        <Image src={item} alt="image" width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
