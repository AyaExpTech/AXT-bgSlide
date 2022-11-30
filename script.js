/**
 * bgSlide(img, interval, fade, zIndex)
 * >>> webページのbody直下に指定した画像を順番に表示する背景要素を追加します。
 * @param {Array} img - 画像名一覧の配列
 * @param {Number} interval - 画像の切り替え間隔(秒)
 * @param {Number} fade - 画像のフェードイン/アウト時間(秒)
 * @param {Number} zIndex - スライドショーを置くz-index(-10くらいを推奨)
 * @param {String} style - 画像に適用するstyleを記述(画像はbackground-imageなことに注意)
 */

var bgSlide = (img, interval, fade, zIndex, style) => {
    /* すでに挿入済みのタグがある場合、それを削除する */
    var uniqueID = `bgSlide`; //bgSlideという文字列をHTMLの何かしらの要素のIDで使っている場合はここを変更
    if (document.getElementById(`${uniqueID}`) instanceof Element) {
        document.getElementById(`${uniqueID}`).remove();
    }
    if (document.getElementById(`${uniqueID}-style`) instanceof Element) {
        document.getElementById(`${uniqueID}-style`).remove();
    }
    /* body直下の最初に必要分のHTMLを入れる */
    var insertHTML = `<div id="${uniqueID}" style="width:100%;height:100%;position:fixed;z-index:${zIndex};">`;
    insertHTML += `<div style="width:100%;height:100%;left:0;top:0;position:fixed;background-size:cover;opacity:0;z-index:${zIndex - 2};"></div>`.repeat(img.length);
    insertHTML += `</div>`;
    document.body.innerHTML = insertHTML + document.body.innerHTML;
    /* 背景写真が一周するまでの時間を計算 */
    var time = img.length * interval;
    var styleTag = document.createElement('style');
    styleTag.id = `${uniqueID}-style`;
    /* styleタグに適用するkeyframeを記述 */
    styleTag.innerText += `@keyframes ${uniqueID}-axt {0% {opacity: 0;} ${(fade / time) * 100}% {opacity: 1;} ${(interval / time) * 100}% {opacity: 1;} ${(interval / time + fade / time) * 100}% {opacity: 0;} 100% {opacity: 0;}}`;
    /* keyframeの適用部分はforループで可能 */
    for (let index = 0; index < img.length; index++) {
        styleTag.innerText += `div#${uniqueID} > :nth-child(${index + 1}) { animation: ${uniqueID}-axt ${time}s linear ${index * interval}s infinite; background-image: url(${img[index]});${style}}`;
    }
    /* HTMLに作ったstyleTagを差し込む */
    document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', styleTag);
}