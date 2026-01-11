# LocaNotify

LocaNotify is a mobile-first, location-aware web application that delivers real-time
notifications based on where a user is (for example, reminders when they enter a store
or pass nearby a location). It combines a React.js UI with Tailwind CSS styling and a
REST API backend to manage authentication, notification rules, and geofence checks.

## What it does
- Authenticates users with JWT-backed sign-in/sign-up flows.
- Lets users create, edit, and delete location-based notification rules tied to geofences.
- Tracks location (with permission) and triggers alerts when the user enters or exits
  defined areas.
- Presents a responsive UI optimized for phones, tablets, and desktops.

## Tech stack
- **React.js** for component-driven UI and state management.
- **Tailwind CSS** for responsive, utility-first styling.
- **REST APIs** for notification CRUD, authentication, and proximity evaluation.
- **Browser Geolocation API** (and a maps SDK) for location tracking and geofencing.
