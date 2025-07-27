import {CollectionConfig} from "payload";
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Tools: CollectionConfig = {
  slug: 'tools',
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
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'method',
          type: 'select',
          options: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
          required: true,
          admin: {
            width: '20%',
          }
        },
        {
          name: 'webhook',
          type: 'text',
          required: true,
          admin: {
            width: '80%',
          }
        },
      ]
    },
    {
      name: 'headers',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'key',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
            }
          ]
        }
      ]
    },
    {
      name: 'query',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'key',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
            }
          ]
        }
      ]
    },
    {
      name: 'body',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'key',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
            }
          ]
        }
      ]
    },
  ],
  hooks: {
    afterOperation: [afterOperationHook]
  }
}