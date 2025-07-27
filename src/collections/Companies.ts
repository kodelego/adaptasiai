import { CollectionConfig } from 'payload'
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'domain',
      type: 'text',
      unique: true,
    },
  ],
  hooks: {
    afterOperation: [afterOperationHook]
  }
}