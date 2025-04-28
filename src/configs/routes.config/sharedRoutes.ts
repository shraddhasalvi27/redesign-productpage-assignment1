// Added Code: Created a new `sharedRoutes.ts` file to centralize routes that are shared between authorized and unauthorized users.
import { lazy } from 'react'
import type { Routes, Route } from '@/@types/routes'

/**
 * These routes are accessible to both authorized and unauthorized users
 * Add routes here that should be visible regardless of authentication status
 */
const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/`, // Changed from '/hello' to '/' to display Home at root route
        // Using type assertion to match the expected component type
        component: lazy(() => import('@/views/Home')) as Route['component'],
        authority: [],
    },
    // Add more shared routes here as needed
]

export default sharedRoutes