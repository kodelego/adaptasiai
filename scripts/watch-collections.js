#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const collectionsDir = path.resolve(__dirname, '../src/collections')

console.log('👀 Watching collections directory for changes...')
console.log(`📁 Watching: ${collectionsDir}`)

// Watch for changes in the collections directory
fs.watch(collectionsDir, { recursive: false }, (eventType, filename) => {
  if (filename && filename.endsWith('.ts') && filename !== 'index.ts') {
    console.log(`\n🔄 Detected ${eventType} in ${filename}`)
    
    try {
      // Regenerate the index file
      execSync('node scripts/generate-collections-index.js', { 
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '..')
      })
    } catch (error) {
      console.error('❌ Failed to regenerate collections index:', error.message)
    }
  }
})

console.log('✅ Watcher started. Press Ctrl+C to stop.')

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n👋 Stopping collections watcher...')
  process.exit(0)
})