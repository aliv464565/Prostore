import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { EllipsisVerticalIcon, ShoppingCart, ShoppingCartIcon, UserIcon } from 'lucide-react';
import ModeToggle from './mode-toggle';
import Link from 'next/link';

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <ModeToggle />
                <Button asChild variant="ghost">
                    <Link href="/cart">
                        <ShoppingCart /> Cart{' '}
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/sign-in">
                        <UserIcon /> Sign In
                    </Link>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild className="align-middle">
                        <Button variant="outline">
                            <EllipsisVerticalIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start p-2">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <ModeToggle />
                        <Button asChild variant="ghost">
                            <Link href="/cart">
                                <ShoppingCartIcon />
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;
