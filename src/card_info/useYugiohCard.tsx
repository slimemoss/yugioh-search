export interface YugiohCard {
  imageurl: string[],
  url: string,
  text: string,
  name: string,
  atk: string,
  def: string,
  attribute: string,
  monstertype: string,
  level: number,
  releasedate: string,
  cardtype: string[]
}

export const YugiohCardDefault: YugiohCard = {
  imageurl: [""],
  url: "https://www.db.yugioh-card.com/yugiohdb/",
  text: "N/A",
  name: "N/A",
  atk: "N/A",
  def: "N/A",
  attribute: "N/A",
  monstertype: "N/A",
  level: 0,
  releasedate: "N/A",
  cardtype: []
}
