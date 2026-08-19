import { airtableBase, mapRecord } from './airtable.service'
import type { AirtableRecord, Product, WithId } from '@/types/models'

const TABLE_NAME = 'Product'

export const productService = {
  async getList(categoryId: number): Promise<WithId<Product>[]> {
    const filter = encodeURIComponent(`{CategoryId}="${categoryId}"`)
    const response = await airtableBase.get<{ records: AirtableRecord<Product>[] }>(
      `${TABLE_NAME}?view=public&filterByFormula=${filter}`
    )
    return response.data.records.map((record) => mapRecord<Product>(record))
  }
}