import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function createPageUrl(page: string): string {
    // normalize page name to path
    if (page.toLowerCase() === 'home') return '/';
    return `/${page.toLowerCase()}`;
}
