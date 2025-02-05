import { createClient } from 'next-sanity'


export const client = createClient({
  projectId:"fcszfqqi",
  dataset:"production",
  apiVersion:"2025-02-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
