export interface Quest {
  /**
   * ID
   */
  _id: string

  /**
   * Trader who provides this quest
   */
  traderId: string

  location: string

  image: string

  type: string

  min_level: number

  rewards: {
    Started: QuestReward[]
    Success: QuestReward[]
    Fail: QuestReward[]
  }

  conditions: {
    AvailableForStart: QuestCondition[]
    AvailableForFinish: QuestCondition[]
    Fail: QuestCondition[]
  }
}

export interface QuestStatus {
  qid: string
  startTime: number
  status: string
}

export interface QuestReward {}

export interface QuestCondition {}
