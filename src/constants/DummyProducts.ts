import { ProductType } from '../types';

const dummyData: ProductType[] = [
  {
    id: 'id1',
    name: 'ケーキセット',
    price: '$58.00',
    description:
      'SNS・テレビで話題の豆を使った上品な味わいのコーヒーとチーズケーキのセットです。上質な午後のティータイムのお供にいかがでしょうか？おひとりさまでも食べやすいお手頃サイズです。',
    url: `${process.env.PUBLIC_URL}/images/cake.jpg`,
    rating: 4,
  },
  {
    id: 'id2',
    name: '和菓子セット',
    price: '$24.00',
    description:
      '最高級ブランドの季節の和菓子をお届け。しっとりした優しい甘さのおはぎの12個セットです。商品は注文から3日以内に発送されます。',
    url: `${process.env.PUBLIC_URL}/images/wagashi.jpg`,
    rating: 4,
  },
  {
    id: 'id3',
    name: 'フルーツ盛り合わせ',
    price: '$48.00',
    description:
      '厳選された旬の果物の詰め合わせセットです。糖度が非常に高いフルーツのみをお届けします。大切な人への贈り物としてもいかがでしょうか？注文をいただいてから2日以内に発送します。',
    url: `${process.env.PUBLIC_URL}/images/fruit.jpg`,
    rating: 5,
  },
  {
    id: 'id4',
    name: 'ワインセット',
    price: '$24.00',
    description:
      '専門店の人気ワインをお届けします。今ならワイングラスもセットでお届け。',
    url: `${process.env.PUBLIC_URL}/images/wine.jpg`,
    rating: 3,
  },
  {
    id: 'id5',
    name: '新鮮野菜セット',
    price: '$24.00',
    description:
      '旬の新鮮野菜10種以上のセットです。中身は季節によって変わります。お客様により新鮮な野菜を届けるため、注文から3日以内に生産者から直接発送されます。',
    url: `${process.env.PUBLIC_URL}/images/vegetable.jpg`,
    rating: 5,
  },
];

export default dummyData;
