import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { RecipeModel } from 'src/app/domain/data/recipe-data';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  constructor() { }

  getRecipe(): Observable<RecipeModel[]> {
    let recipes: RecipeModel[] = [
      {
        id: 1,
        url: "http://bit.ly/3gEcn6i",
        name: 'マルゲリータ',
        description: 'トマト・モッツァレラチーズ・バジルを自家製生地にのせ、石窯で焼き上げたシンプルなピザ。',
        group: 'ピザ',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 2,
        url: 'http://bit.ly/3AHtJWv',
        name: 'ココアケーキ',
        description: 'ふんわりと焼き上げたココアケーキに、ブルーベリーとレッドカラントをトッピング。',
        group: 'デザート',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 3,
        url: 'http://bit.ly/3UnTPFn',
        name: 'チーズステーキサンド',
        description: '甘辛くソテーした牛薄切り肉とチーズを使用した、フィラデルフィアのサンドイッチ。お好みでソースをつけてお召し上がりください。',
        group: 'サンドイッチ',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 4,
        url: 'http://bit.ly/3AOyJJg',
        name: 'レモンパイ',
        description: '甘酸っぱいレモンカードの上にメレンゲをのせ、さっくりと焼き上げたパイ。',
        group: 'パイ',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 5,
        url: 'http://bit.ly/3gEcNJU',
        name: 'カフェラテ',
        description: '本日のおすすめのコーヒー豆を深煎りし、じっくり淹れたカフェラテ。ミルクはソイミルクに変更可(+￥50)。コーヒー豆の産地は店員にお尋ねください。',
        group: 'ドリンク',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 6,
        url: 'http://bit.ly/3gJ5eBw',
        name: '季節の温野菜サラダ',
        description: 'オーブンでグリルした旬の野菜とグリーンリーフのサラダ。ドレッシングは、シーザー、セサミ、ソテードオニオンからお選びいただけます。',
        group: 'サラダ',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 7,
        url: 'http://bit.ly/3u1GuHO',
        name: 'かぼちゃのスープ',
        description: 'バターナッツかぼちゃを使用したなめらかなポタージュスープ。テイクアウトもできます。',
        group: 'スープ',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 8,
        url: 'http://bit.ly/3tZgUTJ',
        name: 'クリスマスティー',
        description: 'スパイスとオレンジをブレンドした冬季限定のフレーバードティー。ストレートでもミルクティーでもお楽しみいただけます。※12/25までの限定メニュー',
        group: 'ドリンク',
        evaluation: 4.5,
        rotate: "",
      },
      {
        id: 9,
        url: 'http://bit.ly/3FcNpEJ',
        name: 'BLTサンド',
        description: 'アンガス牛100%の直火焼きパティに、北海道産のチェダーチーズをあわせたこだわりのBLTサンド。野菜の産地は店内掲示をご覧ください。',
        group: 'ハンバーガー',
        evaluation: 4.5,
        rotate: "",
      },
    ];
    return of(recipes);
  }
}
