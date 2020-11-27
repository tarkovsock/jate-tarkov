export interface Trader {
  _id: string

  /**
   * Should trader be active in game
   */
  working: boolean

  /**
   * Trader Name
   */
  name: string

  /**
   * Trader Surname
   */
  surname: string

  /**
   * Trader Nickname
   */
  nickname: string

  repair: TraderRepair

  insurance: TraderInsurance

  loyalty: TraderLoyalty
}

export interface TraderAssort {}

export interface TraderRepair {
  availability: boolean
  quality: string
  excluded_id_list: string[]
  excluded_category: string[]
  currency: string
  currency_coefficient: number
  price_rate: number
}

export interface TraderInsurance {
  availability: boolean
  min_payment: number
  min_return_hour: number
  max_return_hour: number
  max_storage_time: 24
  excluded_category: string[]
}

export interface TraderLoyalty {
  currentLevel: number
  currentStanding: number
  currentSalesSum: number
  display: boolean
}
