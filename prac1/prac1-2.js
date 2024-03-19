"use strict";

let station = window.prompt(`目的の駅を入力してください。
1:A駅
2:B駅
3:C駅
`);


switch (station ) {
    case"1":
    window.alert("快速電車が止まります")
    break;
case "2":
    window.alert("快速電車と魚行電車が止まります。")
    break;
case "3":
    window.alert("特急列車が止まります。")
    break;

}