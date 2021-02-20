import airtableBase from './airtable.service'
const TABLE_NAME = 'Product'

const productService = {
  async getList (categoryId) {
    const filter = encodeURIComponent(`{CategoryId}="${categoryId}"`)
    const response = await airtableBase.get(`${TABLE_NAME}?view=public&filterByFormula=${filter}`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList
  }
}

export default productService
