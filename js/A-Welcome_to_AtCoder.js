var fs = require('fs');
 
const Main = (input)=>{
  // 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	tmp = input[1].split(" ");
	//文字列から10進数に変換するときはparseIntを使います
	var a = parseInt(input[0], 10);
	var b = parseInt(tmp[0], 10);
	var c = parseInt(tmp[1], 10);
	var s = input[2];
	//出力
	console.log(a+b+c+" "+s);
};
 
Main(fs.readFileSync("../txt/A-Welcome_to_AtCoder.txt","utf8"));