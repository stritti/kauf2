import airtableBase from './airtable.service'
const TABLE_NAME = 'ProductCategory'

const productCategoryService = {
  async getList (categoryId) {
    const response = await airtableBase.get(`${TABLE_NAME}?view=public`)
    const resultList = response.data.records.map((item) => {
      return {
        id: item.id,
        ...item.fields
      }
    })

    return resultList
  }
}

export default productCategoryService
