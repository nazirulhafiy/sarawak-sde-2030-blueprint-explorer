#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { resolve } from 'node:path';

const action = process.argv[2] || 'status';
const port = process.env.PORT || '4174';
const host = '127.0.0.1';
const pidFile = resolve('.local-preview.pid');

function isRunning(pid) {
  if (!pid) return false;
  try {
    process.kill(Number(pid), 0);
    return true;
  } catch {
    return false;
  }
}

function readPid() {
  if (!existsSync(pidFile)) return null;
  return readFileSync(pidFile, 'utf8').trim();
}

function clearPid() {
  if (existsSync(pidFile)) unlinkSync(pidFile);
}

function status() {
  const pid = readPid();
  if (isRunning(pid)) {
    console.log(`Local preview running: http://${host}:${port} (PID ${pid})`);
    return true;
  }
  clearPid();
  console.log('Local preview is not running.');
  return false;
}

if (action === 'status') {
  status();
  process.exit(0);
}

if (action === 'start') {
  const existingPid = readPid();
  if (isRunning(existingPid)) {
    console.log(`Local preview already running: http://${host}:${port} (PID ${existingPid})`);
    process.exit(0);
  }

  const child = spawn('npm', ['run', 'preview', '--', '--host', host, '--port', port], {
    detached: true,
    stdio: 'ignore',
  });
  child.unref();
  writeFileSync(pidFile, String(child.pid));
  console.log(`Local preview starting: http://${host}:${port} (PID ${child.pid})`);
  process.exit(0);
}

if (action === 'stop') {
  const pid = readPid();
  if (!isRunning(pid)) {
    clearPid();
    console.log('Local preview already stopped.');
    process.exit(0);
  }
  process.kill(Number(pid), 'SIGTERM');
  clearPid();
  console.log('Local preview stopped.');
  process.exit(0);
}

console.error(`Unknown action: ${action}`);
console.error('Usage: node scripts/local-preview.mjs start|stop|status');
process.exit(1);
