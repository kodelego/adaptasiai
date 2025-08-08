import { buildCustomAfterOperationHook } from '@/hooks/after-operation-hook'
import { CollectionConfig } from 'payload'
import z from 'zod'

export const LogoAnimator: CollectionConfig = {
  slug: 'logo-animations',
  admin: {
    useAsTitle: 'creativeDirection',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'creativeDirection',
      type: 'textarea',
      required: true,
    },
    {
      name: 'dialog',
      type: 'textarea',
      required: false,
    },
    {
      name: 'aspectRatio',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Horizontal',
          value: 'horizontal',
        },
        {
          label: 'Vertical',
          value: 'vertical',
        },
      ],
    },
    {
      name: 'videoModel',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Veo 3',
          value: 'veo3',
        },
        {
          label: 'Veo 3 Fast',
          value: 'veo3_fast',
        },
      ],
    },
    {
      name: 'videoPrompt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
  hooks: {
    afterOperation: [
      buildCustomAfterOperationHook('logo-animation-webhooks', 'createPrompt', z.object({
        logo: z.string(),
        creativeDirection: z.string(),
        dialog: z.string().optional(),
        aspectRatio: z.string(),
        videoModel: z.string(),
        videoPrompt: z.undefined(),
        video: z.undefined(),
      })),
      buildCustomAfterOperationHook('logo-animation-webhooks', 'generateVideo', z.object({
        logo: z.string(),
        creativeDirection: z.string(),
        dialog: z.string().optional(),
        aspectRatio: z.string(),
        videoModel: z.string(),
        videoPrompt: z.string(),
        video: z.undefined(),
      }))
    ],
  },
}
