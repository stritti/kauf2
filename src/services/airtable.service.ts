import axios from 'axios'
import type { AirtableRecord } from '@/types/models'

export const airtableBase = axios.create({
  baseURL: `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE}/`,
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_AIRTABLE_API_KEY,
    'Content-Type': 'application/json'
  }
})

export function mapRecord<T>(record: AirtableRecord<T>): T & { id: string } {
  return { id: record.id, ...record.fields }
}