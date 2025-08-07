#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const collectionsDir = path.resolve(__dirname, '../src/collections')
const indexFile = path.join(collectionsDir, 'index.ts')

/**
 * Generate the collections index file automatically
 */
function generateCollectionsIndex() {
  try {
    // Read all files in the collections directory
    const files = fs.readdirSync(collectionsDir)
    
    // Filter for .ts files (excluding index.ts)
    const collectionFiles = files.filter(file => 
      file.endsWith('.ts') && 
      file !== 'index.ts'
    )
    
    // Sort files to ensure consistent ordering
    collectionFiles.sort()
    
    // Extract collection names (filename without extension)
    const collectionNames = collectionFiles.map(file => 
      path.basename(file, '.ts')
    )
    
    console.log(`🔍 Found ${collectionNames.length} collections:`, collectionNames)
    
    // Generate the index file content
    const indexContent = `// This file is auto-generated. Do not edit manually.
// To add a new collection, create a .ts file in this directory with a named export matching the filename.
// Run 'node scripts/generate-collections-index.js' to regenerate this file.

// Individual collection imports
${collectionNames.map(name => `import { ${name} } from './${name}.js'`).join('\n')}

// Auto-collected array of all collections
export const collections = [
  ${collectionNames.join(',\n  ')},
]

// Re-export individual collections for specific imports
export { ${collectionNames.join(', ')} }
`
    
    // Write the index file
    fs.writeFileSync(indexFile, indexContent, 'utf8')
    
    console.log(`✅ Generated collections index with ${collectionNames.length} collections`)
    console.log(`📝 Updated: ${indexFile}`)
    
  } catch (error) {
    console.error('❌ Failed to generate collections index:', error)
    process.exit(1)
  }
}

// Run the generator
generateCollectionsIndex()