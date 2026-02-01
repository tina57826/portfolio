import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '新營P/S 69 kV GIS 新建土建統包工程',
    category: '變電所',
    year: '2025-2026',
    location: '台南, 台灣',
    // 補齊職責標籤
    roles: ['土建統包', '施工管理', '設計圖說核對'],
    description: '此專案為國家級電力基礎設施，重點在於 GIS 設備房的空間機能與土建結構的精確配合。在統包模式下，需協調多方專業分工，確保高度安全標準與工程進度。',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600607687940-c52af096999c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800'
    ],
    stats: [
      { label: '基地面積', value: '46432.72 m²' },
      { label: '工程預算', value: '4億5000萬' },
      { label: '樓層高度', value: '2層' },
      { label: '結構形式', value: '鋼筋混凝土、鋼骨構造、預鑄外牆板' }
    ]
  },
  {
    id: 'p2',
    title: '森之隱居',
    category: '休閒別墅',
    year: '2022',
    location: '宜蘭, 台灣',
    // 補齊職責標籤
    roles: ['建築設計', '細部構造設計', '材料選型'],
    description: '坐落於森林邊緣，此專案強調建築與自然的無縫連接。大面積的落地窗與木質平台將景觀引入室內，創造出靜謐的沉思空間。',
    imageUrl: 'https://images.unsplash.com/photo-1449156001131-afb1446c3268?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
    ],
    stats: [
      { label: '基地面積', value: '1200 m²' },
      { label: '建蔽率', value: '15%' },
      { label: '材料', value: '雪松木, 鋼構' }
    ]
  },
  {
    id: 'p3',
    title: '垂直律動',
    category: '商業空間',
    year: '2024',
    location: '台中, 台灣',
    // 補齊職責標籤
    roles: ['立面外殼設計', '室內動線規劃'],
    description: '重新定義城市狹窄基地的商辦空間。透過垂直的格柵與交錯的露台，為室內提供自然通風與遮陽，同時形成獨特的城市立面。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    stats: [
      { label: '基地面積', value: '280 m²' },
      { label: '使用類別', value: '共享辦公室' }
    ]
  }
];