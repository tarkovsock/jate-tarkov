import { InventoryItem, InventoryLocation } from './item';

export interface Character {
  _id: string
  aid: string
  savage: string | null
  Info: CharacterInfo

  Customization: {
    [bodyPart: string]: string
  }

  Inventory: CharacterInventory
}

export interface CharacterInfo {
  Nickname: string
  LowerNickname: string
  Side: string
  Voice: string
  Level: number
  Experience: number
  RegistrationDate: number
  GameVersion: string
  AccountType: number
  MemberCategory: string
  SavageLockTime: number
}

export interface CharacterInventory {
  /**
   * One big ass array of item template...templates.
   */
  items: InventoryItem[]

  /**
   * Item ID found in items array which represents the characters equipped items 'container'
   */
  equipment: string

  /**
   * Item ID found in items array which represents the characters stash 'container'
   */
  stash: string

  /**
   * Item ID found in items array which represents the characters quest items 'container'.
   *
   * These are the quest items which may be using during a raid, but will also be lost should the raid be lost.
   */
  questRaidItems: string

  /**
   * Item ID found in items array which represents the characters 'stashed' quest items 'container'.
   *
   * These are the quest items which are 'stashed', and therefor unavaiable during the raid and cannot be lost by
   *  losing the raid.
   */
  questStashItems: string

  /**
   * Character action bar bindings
   */
  fastPanel: any
}


