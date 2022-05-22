import aiImg from './image/data-sharing.png';
import bigImg from './image/data-cluster-line.png';
import cloudImg from './image/cloud-database-tree.png';
import mkImg from './image/clipboard-data.png';
import bookImg from './image/book-alt.png';
import urImg from './image/urgent.png';
import allImg from './image/all.png';
const content = [
  {
    // 設備 ID
    id: 1,
    // 設備名稱
    name: '跨領域智慧金融與大數據學程',
    value: 'bigdata',
    icon: bigImg,
  },
  {
    id: 2,
    name: '智慧\n物聯網學程',
    value: 'ai',
    icon: aiImg,
  },
  {
    id: 3,
    name: '智慧雲端商務系統開發學程',
    value: 'cloud',
    icon: cloudImg,
  },
  {
    id: 4,
    name: '創新網路行銷與分析學程',
    value: 'marketing',
    icon: mkImg,
  },
  {
    id: 5,
    name: '智慧商務\n基礎必修',
    value: 'other',
    icon: urImg,
  },
  {
    id: 6,
    name: '一般課程',
    value: 'normal',
    icon: bookImg,
  },
  {
    id: 7,
    name: '所有課程',
    icon: allImg,
  },
];
export default content;
