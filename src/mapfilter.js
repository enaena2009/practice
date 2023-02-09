//mapやfilterを使った配列の処理

//配列の編集
const nameArr = ["星野", "保倉", "井上"];
for (let index = 0; index < nameArr.length; index++) {
  // console.log(nameArr[index]);
}

//mapを使った処理の場合
const nameArr2 = nameArr.map((name) => {
  return name;
});
// console.log(nameArr2);
//for文えお使わなくても新しい配列にデータを入れることが出来る
//mapんｐ中で、アロー関数を使い、配列のデータを順番に出力する
//mapの使い方は、配列をループさせる時や新しい配列を作るとき

//filter
//条件に一致した時だけ出力する
const numArr = [1, 2, 3, 4, 5];
//配列の中の奇数だけ出力
const newNumArray = numArr.filter((num) => {
  return num % 2 !== 0;
});
// console.log(newNumArray);

//----------------------------------------------------
//mapを使った練習
//1番目は～～　2番目は～～
const nameArr3 = nameArr.map((name, index) => {
  return `${index + 1}番目は${name}です。`;
});
console.log(nameArr3);

const newNameArray = nameArr.map((name) => {
  if (name === "星野") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArray);
