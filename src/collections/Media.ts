import type { CollectionConfig } from 'payload'
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
  hooks: {
    afterOperation: [afterOperationHook]
  }
}
