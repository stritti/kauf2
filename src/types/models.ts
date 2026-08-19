export interface AirtableAttachment {
  url: string
  thumbnails?: {
    large?: { url: string }
  }
}

export interface AirtableRecord<T> {
  id: string
  fields: T
}

export interface Product {
  Name: string
  CategoryId: number
}

export interface ProductCategory {
  Name: string
  CategoryId: number
}

export interface Supporter {
  Name: string
  Street?: string
  Zip?: string | number
  City?: string
  Website?: string
  Logo?: AirtableAttachment[]
  'Contact Name'?: string
  Email?: string
  Status?: string
}

export interface ContactMessage {
  Name: string
  Email: string
  Notes?: string
}

export type WithId<T> = T & { id: string }