# AXT-bgSlide

webサイトなどで実行することでページの背景に画像スライドショーを挿入するJavaScript関数です。

## 仕様

script.jsより引用

```js
/**
 * bgSlide(img, interval, fade, zIndex)
 * >>> webページのbody直下に指定した画像を順番に表示する背景要素を追加します。
 * @param {Array} img - 画像名一覧の配列
 * @param {Number} interval - 画像の切り替え間隔(秒)
 * @param {Number} fade - 画像のフェードイン/アウト時間(秒)
 * @param {Number} zIndex - スライドショーを置くz-index
 * @param {String} style - 画像に適用するstyleを記述(画像はbackground-imageなことに注意)
 */
```

## 使用方法

`script.min.js`を読ませて、スライドショーを挿入したいタイミングで`bgSlide`を実行すればOK  
[index.html](https://ayaexptech.github.io/AXT-bgSlide/)も参照してください。

## 規約

Author : 綾急技研(AyaExpTech)  
Licensed by "AeTOS(Type-**06**)"

![license.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2599149/1ff92d15-4ace-6c59-f629-01373db61b02.png)
