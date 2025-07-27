import type { CollectionConfig } from 'payload'
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  hooks: {
    afterOperation: [afterOperationHook]
  }
}
