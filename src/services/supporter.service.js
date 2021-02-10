import airtableBase from './airtable.service'
const BASE = 'Supporter'

const supporterService = {
  async getList () {
    const response = await airtableBase.get(`${BASE}?view=public%20Supporter`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList
  }
}

export default supporterService
