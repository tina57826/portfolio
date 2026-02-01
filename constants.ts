import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '新營P/S 69 kV GIS\n新建土建統包工程',
    category: '變電所',
    year: '2025-2026',
    location: '台南新營, 台灣',
    // 補齊職責標籤
    roles: [' 獨立專案', '立面外殼設計', '3D模型製作', '渲染動畫', '服務建議書製作', '基本設計', '法規檢討', '都市設計審議', '建造執造申請', '細部設計'],
    description: '此專案為國家級電力基礎設施，重點在於 GIS 設備房的空間機能與土建結構的精確配合。在統包模式下，需協調多方專業分工，確保高度安全標準與工程進度。',
    imageUrl: 'https://i.postimg.cc/X7hYrvVY/project01_1.jpg',
    gallery: [
    'https://i.postimg.cc/X7hYrvVY/project01_1.jpg0', // 
    'https://i.postimg.cc/28JS15z8/project01_2.jpg', // 
    'https://i.postimg.cc/c4jLvJs1/project01_3.jpg', // 
    'https://i.postimg.cc/nc5hXLHF/project01_4.jpg', // 
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', // 
    'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200'  // 
  ],
    stats: [
      { label: '基地面積', value: '46,432.72 m²' },
      { label: '工程預算', value: '4億5000萬' },
      { label: '樓層高度', value: '2層' },
      { label: '結構形式', value: '鋼筋混凝土、鋼骨構造、預鑄外牆板' }
    ]
  },
  {
    id: 'p2',
    title: '六甲S/Y 新建土建統包工程',
    category: '變電所',
    year: '2025',
    location: '台南六甲, 台灣',
    // 補齊職責標籤
    roles: ['協助專案', '3D環境模型製作'],
    description: '坐落於森林邊緣，此專案強調建築與自然的無縫連接。大面積的落地窗與木質平台將景觀引入室內，創造出靜謐的沉思空間。',
    imageUrl: 'https://i.postimg.cc/Pq22T0jn/001_1_photo_orig.jpg',
    gallery: [
    'https://i.postimg.cc/Pq22T0jn/001_1_photo_orig.jpg', // 
    'https://i.postimg.cc/1z9vxsLm/001_10_photo_orig.jpg', // 
    'https://i.postimg.cc/Dz2xVnty/001_5_photo_orig.jpg', // 
    'https://i.postimg.cc/yNVLqswV/001n_1_photo_orig.jpg', // 
    'https://i.postimg.cc/yNvvs2HB/001n_2_photo_orig.jpg', // 
  ],
    stats: [
      { label: '基地面積', value: '19,987 m²' },
      { label: '工程預算', value: '27.9億' },
      { label: '樓層高度', value: '2層' },
      { label: '結構形式', value: '鋼筋混凝土、鋼骨構造、預鑄外牆板' }
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