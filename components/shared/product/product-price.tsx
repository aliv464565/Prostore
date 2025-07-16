import { cn } from '@/lib/utils';

const ProductPrice = ({ value, className }: { value: string; className?: string }) => {
    const stringValue = Number(value)?.toFixed(2);
    const [intValue, floatValue] = stringValue.split('.');

    return (
        <p className={cn('text-xs flex  ', className)}>
            $ <span className=" font-bold text-2xl">{floatValue}</span>
            {intValue}
        </p>
    );
};

export default ProductPrice;
