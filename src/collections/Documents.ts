import {CollectionConfig} from "payload";
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Documents: CollectionConfig = {
  slug: 'documents',
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
      name: 'type',
      type: 'radio',
      label: 'Content Type',
      options: ['Text', 'File'],
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        condition: data => data.type === 'Text',
      }
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: data => data.type === 'File',
      }
    },
    {
      name: 'metadata',
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
