// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Agents } from '@/collections/Agents'
import { Tools } from '@/collections/Tools'
import { Documents } from '@/collections/Documents'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { Companies } from '@/collections/Companies'
import { Webhooks } from '@/globals/Webhooks'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Agents, Tools, Documents, Users, Media, Companies],
  globals: [Webhooks],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: 'noreply@adaptasiai.com',
    defaultFromName: 'AdaptasiAI',
    transportOptions: {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    }
  }),
})
