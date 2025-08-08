import { GlobalConfig } from 'payload'

export const Webhooks: GlobalConfig = {
  slug: 'logo-animation-webhooks',
  fields: [
    {
      name: 'createPrompt',
      type: 'text',
    },
    {
      name: 'generateVideo',
      type: 'text',
    },
  ]
}