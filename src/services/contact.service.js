import airtableBase from './airtable.service'
const TABLE_NAME = 'ContactMessages'

const contactService = {
  async send (item) {
    const data = {
      fields: item
    }

    // save the record
    const response = await airtableBase.post(`${TABLE_NAME}`, data)
    return {
      id: response.id,
      ...response.fields
    }
  }
}

export default contactService
