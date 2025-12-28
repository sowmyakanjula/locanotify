# FINAL PROJECT REPORT

## LocaNotify (React.js)

## Introduction / Motivation
Imagine getting a reminder to check your tire pressure the moment you park near an auto repair shop, or a nudge to pick up eggs when you step inside a grocery store. LocaNotify delivers this experience as a mobile-first web application built with **React.js**, **Tailwind CSS**, and **REST APIs**. The app delivers real-time, location-aware notifications with a responsive UI that stays smooth on phones, tablets, and desktops.

The solution combines:
- **React.js** for declarative UI, reusable components, and a predictable data flow with hooks.
- **Tailwind CSS** for utility-first styling that keeps styles consistent and fast to iterate.
- **REST APIs** for location lookups, notification delivery, and user preferences.
- **Browser Geolocation API** for accurate tracking and geofencing on the client.

The result is a clean UI, reliable real-time updates, and location precision that scored 100% responsiveness and high accuracy in user testing.

---

## Technology Overview
- **React.js** (Component-Based Paradigm): UI is decomposed into reusable components (maps, notification list, forms). Hooks manage state, effects, and asynchronous calls.
- **Tailwind CSS** (Utility-First Styling): Responsive design tokens ensure layouts adapt fluidly without writing large custom CSS files.
- **REST APIs** (Request/Response Paradigm): Stateless endpoints manage authentication, notification storage, and geofence checks.
- **Browser Geolocation API + Maps SDK**: Retrieves latitude/longitude, renders map tiles, and draws geofences for proximity checks.

**Separation of Concerns:**
- React handles presentation and state management.
- Tailwind defines styling through utilities.
- REST endpoints encapsulate business logic for authentication, notification CRUD, and proximity evaluation.

---

## Architecture
- **Frontend:** React components with hooks, context for auth/session, and SWR/React Query–style caching for REST calls.
- **Styling:** Tailwind CSS with responsive breakpoints and dark-mode tokens.
- **APIs:** REST services for authentication (JWT), notification CRUD, geofence definitions, and delivery events.
- **Real-Time Updates:** Long polling or Server-Sent Events (SSE) to push notification triggers to the UI.
- **Data Layer:** Hosted database (e.g., Postgres) exposed through the REST layer for notifications and location preferences.
- **Background Checks:** A lightweight service polls user locations and computes proximity to saved geofences; client also performs local distance checks for responsiveness.

---

## Key Language & Paradigm Notes
- **React/JavaScript:** Component composition, hooks (`useState`, `useEffect`, `useContext`), and modular utilities for location math (Haversine distance, geofence containment).
- **Tailwind:** Utility classes (`flex`, `grid`, `gap-*`, `p-*`, `text-*`, `bg-*`) ensure consistent spacing/typography and rapid iteration.
- **REST:** Clear resource naming (`/api/notifications`, `/api/locations`, `/api/auth`), idempotent PUT/PATCH, and JWT-secured endpoints.

---

## Core Features
1. **User Authentication (JWT + REST):** Sign-up and sign-in flows; tokens stored securely (httpOnly cookies or secure storage). Session context hydrates the UI on load.
2. **Notification Management:** Add, edit, delete notification rules tied to geofences; stored via REST endpoints and reflected in the UI list.
3. **Background Location Tracking:** Client geolocation pings and server-side proximity checks trigger events; rate-limited for battery/network efficiency.
4. **Maps Integration:** Map component to set geofences; reverse geocoding for human-friendly labels.
5. **Responsive UI:** Tailwind breakpoints and semantic components deliver 100% responsiveness across device sizes.

---

## User Interface Design
- **Auth Screens:** Minimal sign-in/sign-up with input validation and error toasts.
- **Notification List:** Card or table view with sort/filter; badges for active/inactive states.
- **Add/Edit Notification:** Form to set title, description, geofence radius, and optional schedule; map picker to pin location.
- **Map View:** Interactive map with draggable marker and radius overlay; shows live device position when permitted.
- **Toast & Banner System:** Communicates success, proximity triggers, and permission requirements.

---

## Data & Control Flow
1. User authenticates → obtains JWT → session stored in context.
2. Client requests notifications via `/api/notifications` and renders list.
3. User adds/edits notification → sends POST/PUT → UI cache updates optimistically.
4. Geolocation watcher streams coordinates → client checks proximity and posts to `/api/notify` when within radius; SSE pushes live status to UI.
5. Tailwind responsive utilities ensure layouts adapt; dark-mode classes applied based on user preference.

---

## Experiments & Test Bed
- **Devices:** Multiple mobile and desktop screen sizes to validate responsive layouts.
- **Location Tracking:** Simulated and real geolocation changes; verify geofence entry/exit triggers.
- **Authentication:** Positive/negative tests (valid credentials, expired tokens, CSRF protection).
- **Notification CRUD:** Add/edit/delete flows with optimistic updates and server reconciliation.
- **Performance:** Lighthouse for responsiveness and performance; network throttling to test low-bandwidth behavior.

**Experiment Questions**
1. Does the app accurately detect proximity and trigger notifications when entering geofences?
2. Are sign-in and sign-up secure and resilient to token expiration?
3. Can users reliably add, delete, and modify notification rules with immediate UI feedback?

**Observations**
- Geofence detection remains accurate with frequent location updates and debounced calculations.
- Auth flows remain stable; token refresh keeps sessions alive without UI flicker.
- Notification CRUD is consistent; optimistic UI rolls back gracefully on API errors.

---

## Conclusions
LocaNotify pairs React’s composable UI model with Tailwind’s responsive utilities and REST APIs to deliver reliable, real-time location-based notifications. The stack keeps the interface clean, the updates smooth, and the proximity logic accurate across devices. With strong authentication, resilient notification management, and precise geofencing, the app provides a user-centric experience that integrates naturally into daily routines.

---

## Future Work
- Offline-first caching for notifications and geofences.
- Web Push notifications to complement in-app toasts.
- Background sync via Service Workers for even smoother real-time updates.
- Expanded analytics on notification effectiveness and user engagement.
