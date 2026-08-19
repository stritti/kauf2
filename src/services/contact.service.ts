import { airtableBase, mapRecord } from './airtable.service'
import type { ContactMessage, WithId } from '@/types/models'

const TABLE_NAME = 'ContactMessages'

export const contactService = {
  async send(item: ContactMessage): Promise<WithId<ContactMessage>> {
    const response = await airtableBase.post(`${TABLE_NAME}`, { fields: item })
    return mapRecord<ContactMessage>(response.data)
  }
}