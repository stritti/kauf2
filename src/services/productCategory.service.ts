import { airtableBase, mapRecord } from './airtable.service'
import type { AirtableRecord, ProductCategory, WithId } from '@/types/models'

const TABLE_NAME = 'ProductCategory'

export const productCategoryService = {
  async getList(): Promise<WithId<ProductCategory>[]> {
    const response = await airtableBase.get<{ records: AirtableRecord<ProductCategory>[] }>(
      `${TABLE_NAME}?view=public`
    )
    return response.data.records.map((record) => mapRecord<ProductCategory>(record))
  }
}