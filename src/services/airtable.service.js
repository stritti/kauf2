import axios from 'axios'

const airtableBase = axios.create({
  baseURL: `https://api.airtable.com/v0/${process.env.VUE_APP_AIRTABLE_BASE}/`,
  headers: {
    Authorization: 'Bearer ' + process.env.VUE_APP_AIRTABLE_API_KEY,
    'Content-Type': 'application/json'
  }
})

export default airtableBase
