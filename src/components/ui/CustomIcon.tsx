// src/components/ui/CustomIcon.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

interface CustomIconProps extends Omit<LucideProps, 'ref'> {
    src: string;
}

export function CustomIcon({ src, className, size = 24, ...props }: CustomIconProps) {
    // Extract only the props that are valid for a div element to prevent TS/React DOM warnings
    const { color, strokeWidth, absoluteStrokeWidth, fill, stroke, strokeLinecap, strokeLinejoin, ...rest } = props as any;

    return (
        <div
            className={cn("bg-current inline-block shrink-0", className)}
            style={{
                width: size,
                height: size,
                maskImage: `url(${src})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${src})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                ...rest.style,
            }}
            {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        />
    );
}
