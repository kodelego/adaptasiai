import type { CollectionAfterOperationHook, GlobalSlug } from 'payload'
import { Webhooks } from '@/globals/Webhooks'
import { z } from 'zod'

const urlRegex = /^(https?):\/\/[^\s\/$.?#].\S*$/i;

export const afterOperationHook: CollectionAfterOperationHook = async ({ req, operation, collection, result }) => {
  const global = await req.payload.findGlobal({
    slug: Webhooks.slug as GlobalSlug,
  });
  if (['create', 'delete', 'deleteByID', 'update', 'updateByID'].includes(operation)) {
    const url = (global as unknown as { [key: string]: string })[collection.slug];
    if (urlRegex.test(url)) {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          operation: operation,
          collection: collection.slug,
          result,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}

export const buildCustomAfterOperationHook = (
  globalSlug: GlobalSlug,
  fieldName: string,
  validationSchema: z.ZodObject,
): CollectionAfterOperationHook => {
  return async ({ req, operation, collection, result }) => {
    if (!['create', 'delete', 'deleteByID', 'update', 'updateByID', 'findByID'].includes(operation)) return;
    if (!validationSchema.safeParse(result).success) return;
    const global = await req.payload.findGlobal({
      slug: globalSlug,
    });
    const url = (global as unknown as { [key: string]: string })[fieldName];
    if (urlRegex.test(url)) {
      console.log(`${fieldName.toLowerCase()}:\nPOST ${url}`);
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          operation: operation,
          collection: collection.slug,
          result,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}