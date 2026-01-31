
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '光影之境',
    category: '住宅建築',
    year: '2023',
    location: '台北, 台灣',
    description: '這是一個探索自然光線與混凝土結構互動的私人住宅專案。通過精確的切口與天井設計，室內空間隨時間推移展現出豐富的光影表情。',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600607687940-c52af096999c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800'
    ],
    stats: [
      { label: '基地面積', value: '450 m²' },
      { label: '樓層高度', value: '3層' },
      { label: '結構形式', value: '清水混凝土' }
    ]
  },
  {
    id: 'p2',
    title: '森之隱居',
    category: '休閒別墅',
    year: '2022',
    location: '宜蘭, 台灣',
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
    description: '重新定義城市狹窄基地的商辦空間。透過垂直的格柵與交錯的露台，為室內提供自然通風與遮陽，同時形成獨特的城市立面。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    gallery: [],
    stats: [
      { label: '基地面積', value: '280 m²' },
      { label: '使用類別', value: '共享辦公室' }
    ]
  }
];
