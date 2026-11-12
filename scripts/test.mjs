import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html = await readFile('index.html', 'utf8');
const inline = html.match(/<script>\s*([\s\S]*?)<\/script>/i);
assert.ok(inline, 'inline app script exists');
new vm.Script(inline[1], { filename: 'hydrotrack-inline.js' });
for (const [label, pattern] of [
  ['3 litre default goal', /goal:3000/],
  ['50 ml primary action', /add50/],
  ['30-minute schedule', /t\+=30/],
  ['native local notifications', /HydroTrackLocalNotifications/],
  ['daily progress', /progress/],
  ['undo action', /undo/],
  ['local persistence', /localStorage/],
]) assert.match(html, pattern, label);
console.log('HydroTrack smoke tests passed; inline JavaScript parses successfully.');
