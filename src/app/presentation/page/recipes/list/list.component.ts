import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/domain/data/recipe-data';
import { RecipeDataService } from 'src/app/infrastructure/data/recipe-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  items: RecipeModel[] | undefined;
  items2: RecipeModel[] | undefined;
  constructor(private recipeDataService: RecipeDataService){
    this.items = 
    [
      {
        url: 'http://bit.ly/3gEcn6i',
        name: 'マルゲリータ',
        description: 'トマト・モッツァレラチーズ・バジルを自家製生地にのせ、石窯で焼き上げたシンプルなピザ。',
      },
      {
        url: 'http://bit.ly/3AHtJWv',
        name: 'ココアケーキ',
        description: 'ふんわりと焼き上げたココアケーキに、ブルーベリーとレッドカラントをトッピング。',
      },
      {
        url: 'http://bit.ly/3UnTPFn',
        name: 'チーズステーキサンド',
        description: '甘辛くソテーした牛薄切り肉とチーズを使用した、フィラデルフィアのサンドイッチ。お好みでソースをつけてお召し上がりください。',
      },
      {
        url: 'http://bit.ly/3AOyJJg',
        name: 'レモンパイ',
        description: '甘酸っぱいレモンカードの上にメレンゲをのせ、さっくりと焼き上げたパイ。',
      },
      {
        url: 'http://bit.ly/3gEcNJU',
        name: 'カフェラテ',
        description: '本日のおすすめのコーヒー豆を深煎りし、じっくり淹れたカフェラテ。ミルクはソイミルクに変更可(+￥50)。コーヒー豆の産地は店員にお尋ねください。',
      },
      {
        url: 'http://bit.ly/3gJ5eBw',
        name: '季節の温野菜サラダ',
        description: 'オーブンでグリルした旬の野菜とグリーンリーフのサラダ。ドレッシングは、シーザー、セサミ、ソテードオニオンからお選びいただけます。',
      },
      {
        url: 'http://bit.ly/3u1GuHO',
        name: 'かぼちゃのスープ',
        description: 'バターナッツかぼちゃを使用したなめらかなポタージュスープ。テイクアウトもできます。',
      },
      {
        url: 'http://bit.ly/3tZgUTJ',
        name: 'クリスマスティー',
        description: 'スパイスとオレンジをブレンドした冬季限定のフレーバードティー。ストレートでもミルクティーでもお楽しみいただけます。※12/25までの限定メニュー',
      },
      {
        url: 'http://bit.ly/3FcNpEJ',
        name: 'BLTサンド',
        description: 'アンガス牛100%の直火焼きパティに、北海道産のチェダーチーズをあわせたこだわりのBLTサンド。野菜の産地は店内掲示をご覧ください。',
      },
    ]

    this.items2 = 
    [
      {
        url: 'https://img.cpcdn.com/recipes/7328128/894x1461s/337532a70f718996ca395ac7258b732a?u=42980511&p=1664681474',
        name: 'マルゲリータ',
        description: 'トマト・モッツァレラチーズ・バジルを自家製生地にのせ、石窯で焼き上げたシンプルなピザ。',
      },
      {
        url: 'https://img.cpcdn.com/recipes/7368683/894x1461s/e87f3662698570f42a5e460b250d4df8?u=203887&p=1668574266',
        name: 'ココアケーキ',
        description: 'ふんわりと焼き上げたココアケーキに、ブルーベリーとレッドカラントをトッピング。',
      },
      {
        url: 'https://img.cpcdn.com/recipes/3718445/894x1461s/19d1f297827be7235cb76189575cac0a?u=13587883&p=1456657442',
        name: 'チーズステーキサンド',
        description: '甘辛くソテーした牛薄切り肉とチーズを使用した、フィラデルフィアのサンドイッチ。お好みでソースをつけてお召し上がりください。',
      },
      {
        url: 'https://img.cpcdn.com/recipes/6885743/894x1461s/bb2d473c1a87e2632d88a5911bab9480?u=41134714&p=1627605031',
        name: 'レモンパイ',
        description: '甘酸っぱいレモンカードの上にメレンゲをのせ、さっくりと焼き上げたパイ。',
      },
      {
        url: 'https://img.cpcdn.com/recipes/6928910/894x1461s/b20d23855eb9417b6c582921b8fdcbdd?u=260006&p=1630767418',
        name: 'カフェラテ',
        description: '本日のおすすめのコーヒー豆を深煎りし、じっくり淹れたカフェラテ。ミルクはソイミルクに変更可(+￥50)。コーヒー豆の産地は店員にお尋ねください。',
      },
      {
        url: 'https://img.cpcdn.com/recipes/2442234/894x1461s/b0ccdb8d14eabbfd283d4324af4fef0b?u=7330008&p=1430113754',
        name: '季節の温野菜サラダ',
        description: 'オーブンでグリルした旬の野菜とグリーンリーフのサラダ。ドレッシングは、シーザー、セサミ、ソテードオニオンからお選びいただけます。',
      },
      {
        url: 'https://img.cpcdn.com/recipes/7377514/894x1461s/5f7105ea9f3a92affda153721720ec05?u=43760450&p=1669472286',
        name: 'かぼちゃのスープ',
        description: 'バターナッツかぼちゃを使用したなめらかなポタージュスープ。テイクアウトもできます。',
      },
      {
        url: 'http://bit.ly/3tZgUTJ',
        name: 'クリスマスティー',
        description: 'スパイスとオレンジをブレンドした冬季限定のフレーバードティー。ストレートでもミルクティーでもお楽しみいただけます。※12/25までの限定メニュー',
      },
      {
        url: 'https://img.cpcdn.com/recipes/7321123/894x1461s/d246e89b1b2c7e1e9ed836cbe36b8865?u=6816320&p=1664095772',
        name: 'BLTサンド',
        description: 'アンガス牛100%の直火焼きパティに、北海道産のチェダーチーズをあわせたこだわりのBLTサンド。野菜の産地は店内掲示をご覧ください。',
      },
    ]
  }
}
