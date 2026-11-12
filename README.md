# HydroTrack

HydroTrack is a lightweight water-intake tracker with an Android APK build.

## App features
- Default daily target: **3,000 ml (3 litres)**, adjustable in settings.
- One-tap **+50 ml** logging, quick-add 250/500 ml and custom amounts.
- Progress ring, remaining amount, entry count, recent entries, undo and daily reset.
- Configurable reminder window and vibration setting.
- Native Android local notifications scheduled every 30 minutes, repeating daily, using Capacitor Local Notifications.
- Local-only storage; no account or analytics.

## Build the Android app locally
Requires Node 20+, JDK 21 and Android SDK.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```
APK output: `android/app/build/outputs/apk/debug/app-debug.apk`.

## GitHub APK releases
Every push to `main` (and manual workflow run) triggers the Android build. GitHub Actions attaches the installable debug APK to a GitHub Release. This is a debug-signed APK for testing/distribution; a production release should be signed with a private keystore and GitHub Actions secrets.

## Notification notes
The Android build uses the Capacitor Local Notifications plugin. Android may ask for notification permission; users must allow it. Android battery optimization, manufacturer background limits, Do Not Disturb and exact-alarm policies can affect delivery. Test reminders on the target devices before relying on them. Browser/PWA reminders cannot guarantee delivery while the browser is closed.

## Health note
3 litres is the app's default tracking target, not a universal medical recommendation. Individual fluid needs vary; users should adjust their target as appropriate.
