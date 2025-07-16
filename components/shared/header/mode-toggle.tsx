'use client';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuCheckboxItem,
    DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { MoonIcon, SunIcon, SunMoon, TvMinimalIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// import { DivideCircleIcon, MoonIcon, SunIcon } from 'lucide-react';

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    // setTheme('light');
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    {theme === 'system' ? (
                        <SunMoon />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <DropdownMenuCheckboxItem
                        checked={theme === 'light'}
                        onClick={() => setTheme('light')}
                    >
                        <SunIcon />
                        <DropdownMenuShortcut>light</DropdownMenuShortcut>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuCheckboxItem
                        checked={theme === 'dark'}
                        onClick={() => setTheme('dark')}
                    >
                        <MoonIcon />

                        <DropdownMenuShortcut>dark</DropdownMenuShortcut>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <DropdownMenuCheckboxItem
                        checked={theme === 'system'}
                        onClick={() => setTheme('system')}
                    >
                        <TvMinimalIcon />
                        <DropdownMenuShortcut>system</DropdownMenuShortcut>
                    </DropdownMenuCheckboxItem>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;
