# HydroTrack

A responsive, installable water-intake tracker built with plain HTML, CSS and JavaScript. No framework, build step, account or API key required.

## Features
- Log water with quick-add buttons or a custom amount.
- Daily goal, progress ring, remaining amount and glass count.
- Undo the latest entry and reset today's log.
- Configurable reminder interval (30, 60, 90 or 120 minutes), quiet hours and daily target.
- Saves data locally in the browser.
- PWA manifest and service worker for installability and offline app-shell caching.

## Deploy with GitHub Pages
1. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
2. Wait for the Pages deployment to finish. The site URL is `https://cr07thegoat2025-cloud.github.io/hydrotrack/`.

## Notifications: important limitation
The current version schedules reminders while the page/app is running and can show browser notifications after permission is granted. Browsers and Android may suspend timers when the app is backgrounded or closed. A service worker cannot run a reliable repeating timer by itself. For dependable reminders while an Android APK is closed, package the site with a wrapper that supports native local notifications and schedule repeating notifications using Android's notification APIs. Web Push also requires a push server and user subscription; it is not included here.

## Privacy
Water logs and settings stay in this browser's local storage. There is no analytics, tracking, account system or external API call.