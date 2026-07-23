// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

    // Skip middleware for static files, API routes, and Next.js internal files
    const pathname = request.nextUrl.pathname;
    if (
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/api/') ||
        pathname.startsWith('/assets/') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    if (isMaintenanceMode && pathname !== '/maintenance') {
        // Clone the request headers and add our custom flag
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-maintenance-mode', 'true');

        // Return the rewrite with the modified headers
        return NextResponse.rewrite(new URL('/maintenance', request.url), {
            request: {
                headers: requestHeaders,
            },
        });
    }

    return NextResponse.next();
}