export interface Locale {
  banners: { [id: string]: any }
  enum: []
  error: { [key: string]: string }
  handbook: { [id: string]: string }
  interface: { [key: string]: string }
  locations: { [id: string]: any }
  mail: { [id: string]: string }
  preset: { [id: string]: string }
  quest: { [id: string]: any }
  season: { [id: string]: any}
  templates: { [id: string]: ItemLocaleProps }
  trading: { [id: string]: any }
}

export interface ItemLocaleProps {
  Name: string
  ShortName: string
  Description: string
}
