import { mkdir, copyFile } from 'node:fs/promises';
import { build } from 'esbuild';
await mkdir('www', { recursive: true });
for (const file of ['index.html','manifest.webmanifest','sw.js','icon.svg']) await copyFile(file, 'www/' + file);
await build({ entryPoints: ['native-bridge.js'], bundle: true, format: 'iife', platform: 'browser', target: ['es2020'], outfile: 'www/native-bridge.js' });
console.log('HydroTrack web assets built in www/');
