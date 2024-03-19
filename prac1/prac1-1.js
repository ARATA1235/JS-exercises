"use strict";

let height = window.prompt("身長を入力してください");

if ( height === "" || height === null  ){
    window.alert("入力されませんでした")
} 

if (height >= 100) {
    let ticket = window.confirm("プレミアチケットを持っていますか？");
    
    if (ticket === true) {
        window.alert("プレミアシートに乗車可能です");
    } else {
        window.alert("通常シートに乗車可能です");
    }
} else if( height >= 90 ) {
    window.alert("付き添いありで乗車可能です");
} else if( height < 90 && height !== null && height !== "") {
    window.alert("乗車できません");
} else if (height !== null && height !== ""){
    window.alert("半角数字で入力せてください")
}
  
