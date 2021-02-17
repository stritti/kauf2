import airtableBase from './airtable.service'
const TABLE_NAME = 'Supporter'

const supporterService = {
  async getList () {
    const response = await airtableBase.get(`${TABLE_NAME}?view=public%20Supporter`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList
  },
  /*
    This is used for both creating and updating API records
    the default method is POST for creating a new item
  */
  async save (item) {
    let method = 'post'
    let url = `${TABLE_NAME}`
    const id = item.id

    // airtable API needs the data to be placed in fields object
    const data = {
      fields: item
    }

    if (id) {
      // if the item has an id, we're updating an existing item
      method = 'patch'
      url = `${TABLE_NAME}/${id}`

      // must remove id from the data for airtable patch to work
      delete data.fields.id
    }

    // save the record
    const response = await airtableBase[method](url, data)
    return {
      id: response.id,
      ...response.fields
    }
  }
}

export default supporterService
