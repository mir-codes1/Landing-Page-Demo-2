'use client';
import { useRef, useEffect } from 'react';

export default function CardPatternOverlay() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const card = el.closest('.front-3d') as HTMLElement | null;
        if (!card) return;

        function onMove(e: MouseEvent) {
            const rect = card!.getBoundingClientRect();
            card!.style.setProperty('--cx', `${e.clientX - rect.left}px`);
            card!.style.setProperty('--cy', `${e.clientY - rect.top}px`);
        }

        card.addEventListener('mousemove', onMove);
        return () => card.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <div
            ref={ref}
            className="card-pattern-overlay absolute inset-0 rounded-2xl pointer-events-none"
        />
    );
}
