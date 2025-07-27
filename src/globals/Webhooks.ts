import { GlobalConfig } from 'payload'

export const Webhooks: GlobalConfig = {
  slug: 'webhooks',
  fields: [
    {
      name: 'agents',
      type: 'text',
    },
    {
      name: 'companies',
      type: 'text',
    },
    {
      name: 'documents',
      type: 'text',
    },
    {
      name: 'media',
      type: 'text',
    },
    {
      name: 'tools',
      type: 'text',
    },
    {
      name: 'users',
      type: 'text',
    },
  ]
}