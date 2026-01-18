import axios from 'axios'

const airtableBase = axios.create({
  baseURL: `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE}/`,
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_AIRTABLE_API_KEY,
    'Content-Type': 'application/json'
  }
})

export default airtableBase
