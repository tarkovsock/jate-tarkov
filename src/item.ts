import { ItemLocaleProps } from './locale';

export interface ItemTemplate {
  _id: string
  _parent: string
  _name: string
  _type: string
  _props: ItemProps
}

export interface ItemProps extends ItemLocaleProps {
  Weight: number
  BackgroundColor: string
  Width: number
  Height: number
  StackMaxSize: number
  CreditsPrice: number
  StackObjectsCount: number
  LootExperience: number
  ExamineExperience: number
}

export interface InventoryItem {
  _id: string
  _tpl: string
  parentId: string
  slotId: string
  location: InventoryLocation

  /**
   * Update values to be applied to item._props
   */
  upd: any
}

export interface InventoryLocation {
  x: number
  y: number
  r: string
  isSearched: boolean
}

export enum WeaponFireType {
  Single = 'single',
  Burst = 'burst',
  Fullauto = 'fullauto'
}

export enum ArmorMaterial {
  UHMWPE,
  Aramid,
  Combined,
  Titan,
  Aluminium,
  ArmoredSteel,
  Creramic,
  Glass,
}
