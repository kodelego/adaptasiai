import { CollectionConfig, CollectionSlug } from 'payload'
import {Tools} from "@/collections/Tools";
import {Documents} from "@/collections/Documents";
import { afterOperationHook } from '@/hooks/after-operation-hook'

export const Agents: CollectionConfig = {
  slug: 'agents',
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
      name: 'first message',
      type: 'textarea',
    },
    {
      name: 'system prompt',
      type: 'richText',
      required: true,
    },
    {
      name: 'tools',
      type: 'relationship',
      relationTo: Tools.slug as CollectionSlug,
      hasMany: true,
    },
    {
      name: 'documents',
      type: "relationship",
      relationTo: Documents.slug as CollectionSlug,
      hasMany: true,
    }
  ],
  hooks: {
    afterOperation: [afterOperationHook]
  }
};