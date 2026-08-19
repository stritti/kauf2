import { airtableBase, mapRecord } from './airtable.service'
import type { AirtableRecord, Supporter, WithId } from '@/types/models'

const TABLE_NAME = 'Supporter'

export const supporterService = {
  async getList(): Promise<WithId<Supporter>[]> {
    const response = await airtableBase.get<{ records: AirtableRecord<Supporter>[] }>(
      `${TABLE_NAME}?view=public%20Supporter`
    )
    return response.data.records.map((record) => mapRecord<Supporter>(record))
  },

  async getSupporter(supporterId: string): Promise<Supporter> {
    const response = await airtableBase.get(`${TABLE_NAME}/${supporterId}`)
    return response.data.fields as Supporter
  },

  // Creates (POST) when the item has no id, updates (PATCH) when it has one.
  async save(item: Supporter): Promise<WithId<Supporter>> {
    const { id, ...fields } = item as Supporter & { id?: string }
    const data = { fields }
    const response = id
      ? await airtableBase.patch(`${TABLE_NAME}/${id}`, data)
      : await airtableBase.post(`${TABLE_NAME}`, data)
    return mapRecord<Supporter>(response.data)
  }
}