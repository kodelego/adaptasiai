import type { CollectionConfig } from 'payload'
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    useAPIKey: true,
    useSessions: false,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
  ],
  hooks: {
    afterOperation: [afterOperationHook]
  }
}
