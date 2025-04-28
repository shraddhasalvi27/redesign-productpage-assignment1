# Project Tasks and Analysis

## Problem Analysis

Initially, after running `npm run dev`, the project started normally, but after some time, the link began redirecting unexpectedly to the default route.

### Actions Taken:
-  Created a new `sharedRoutes.ts` file to manage common routes for both authorized and unauthorized users.
-  Moved homepage and common routes from `routes.config.ts` (protected routes) to `sharedRoutes.ts`.
-  Imported and integrated shared routes into both `authRoute.ts` and `routes.config.ts`.
-  Deleted unnecessary imports to clean up the project.
- In `AllRoutes.tsx`, placed **public routes before protected routes** to ensure correct routing order.
-  Changed the default path in `app.config.ts` from `/hello` to `/`.
-  Verified that the home page is correctly rendered at `/` for both authorized and unauthorized users.

> These changes resolved the unexpected redirect issue and improved the route management structure.

---

## Task 1: Home Page Redesign

### Changes Made:
-  Redesigned the complete Home page structure.
-  Chose a modern, visually appealing color palette.
-  Selected attractive and readable fonts for better typography.
-  Added a background video to the Hero section to make the page more dynamic.
-  Focused on improving the overall UI/UX to make the landing page more engaging.

---

# Summary

- Completed routing fixes (shared routes + default path change).
- Successfully redesigned the Home page with better visuals and user experience.
- Codebase is now cleaner, modular, and easier to maintain.

guidlines to run project locally

1. Clone this repository
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```
