import type { CollectionAfterOperationHook, GlobalSlug } from 'payload'
import { Webhooks } from '@/globals/Webhooks'

const urlRegex = /^(https?):\/\/[^\s\/$.?#].\S*$/i;

export const afterOperationHook: CollectionAfterOperationHook = async ({req, operation, collection, result}) => {
  const global = await req.payload.findGlobal({
    slug: Webhooks.slug as GlobalSlug,
  });
  if (['create', 'delete', 'deleteByID', 'update', 'updateByID'].includes(operation)) {
    const url = (global as unknown as {[key: string]: string})[collection.slug];
    if (urlRegex.test(url)) {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          operation: operation,
          collection: collection.slug,
          result,
        }),
      });
    }
  }
}
