const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '波特王好帥',
    feedID: 'Realpotterking',
    homepageURL: 'https://www.youtube.com/channel/UCsBP1dmKYfcorJ17kfOUTvg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '養坤二廠保安室',
    feedID: 'baolei9530',
    homepageURL: 'https://www.youtube.com/channel/UCpdaAsWeuUZGLgmjty4XIRg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '蛙家Waja 聊 收納',
    feedID: 'wajatw',
    homepageURL: 'https://www.youtube.com/channel/UChEpXBOkRb9voZ45THsXncg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '時代力量 午餐大時客 精華',
    feedID: 'newpowerparty2015-launch-clipper',
    homepageURL: 'https://www.youtube.com/channel/UC9tMER0Kt99q_zRPeL-mqhQ',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.includes('午餐大時客') && item.title.includes('精華')) }
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '阿淇博士 Dr. Achi',
    feedID: 'HiThisIsAchi',
    homepageURL: 'https://www.youtube.com/channel/UCyYGbBvicdjDvNEehOMEy4A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  // ====== 以上 5 個 ========

  {
    title: '當肉Download 聊 遊戲',
    feedID: 'adoownload',
    homepageURL: 'https://www.youtube.com/channel/UCxr7xxXKpyQ1NKS2vOVjiUg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '司波图 聊 電腦硬體',
    feedID: 'SpotoTsui',
    homepageURL: 'https://www.youtube.com/channel/UCUWUYyNh8KFS7E6-Q0ajBzQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  {
    title: '阿哲[哲週來尬電]',
    feedID: 'linzin-news2',
    homepageURL: 'https://www.youtube.com/channel/UC0oosHZ4k1o-zNT21gg5O7A',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0oosHZ4k1o-zNT21gg5O7A',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('[哲週來尬電') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '叉雞說故事',
    feedID: 'bbqporkchicken',
    homepageURL: 'https://www.youtube.com/channel/UCB3pBfnruGVgbP1r5Ya2CEg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '異色檔案說故事',
    feedID: 'mystery2018',
    homepageURL: 'https://www.youtube.com/channel/UCVwlKAna1gU30r3s9je06lA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  // ====== 以上 10 個 ========

  {
    title: '井川一聊動畫',
    feedID: 'InokawaHajime',
    homepageURL: 'https://www.youtube.com/channel/UCcHVKeT_5Ta-gTa-sgooQxQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '蒼藍鴿聊醫學',
    feedID: 'bluepigeon0810',
    homepageURL: 'https://www.youtube.com/channel/UCUn77_F5A65HViL9OEvIpLw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '四處觀察',
    feedID: 'sichuguancha',
    homepageURL: 'https://www.youtube.com/channel/UC6OeJCR9gHsJPVyNhXfK4tA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '好味營養師品瑄',
    feedID: 'dietitian_pink',
    homepageURL: 'https://www.youtube.com/channel/UCLwFOT4tHGaK9kqXXExhPFQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '瑩真律師',
    feedID: 'LawyerAngela',
    homepageURL: 'https://www.youtube.com/channel/UCLzWMcpNlhHo0c0yOyWksvQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  // ====== 以上 15 個，滿了！！ ========
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'IT咖啡馆',
      feedID: 'it-coffee',
      homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
      ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    },
  ]
}


module.exports = feedList
