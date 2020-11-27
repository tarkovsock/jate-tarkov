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

/**
 * Describes traders ability to repair items.
 */
export interface TraderRepair {
  availability: boolean
  quality: string
  excluded_id_list: string[]
  excluded_category: string[]
  currency: string
  currency_coefficient: number
  price_rate: number
}

/**
 * Describes traders ability to provide insurance.
 */
export interface TraderInsurance {
  availability: boolean
  min_payment: number
  min_return_hour: number
  max_return_hour: number
  max_storage_time: 24
  excluded_category: string[]
}

/**
 * Describes current loyalty status
 */
export interface TraderLoyalty {
  currentLevel: number
  currentStanding: number
  currentSalesSum: number

  loyaltyLevels?: {
    [level: string]: TraderLoyaltyLevel
  }

  display: boolean
}

/**
 * Describes requirements for unlocking a trader loyalty level.
 */
export interface TraderLoyaltyLevel {
  /**
   * Minimum player level required
   */
  minLevel: number

  /**
   * Minimum amount of currency transferred between trader (buy/sell)
   *
   * @todo Is this in roubles or the currency which the trader actually uses
   */
  minSalesSum: number

  /**
   * Minimum standing/reputation with trader required
   */
  minStanding: number
}
