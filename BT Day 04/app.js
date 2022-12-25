var num = prompt("Nhập vào một số");
num = parseInt(num);

if (num % 2 == 0 && num >= 4 && num <= 20){
    if (num == 4){
    console.log(num);
    }
    else if (num >= 4 && num <= 20){
        for (var i = 4; i <= num; i ++){
            console.log(i);
            i = i + 1;
        }
    }
}
var str = "";
for (var j = 0; j < 5; j++) {
    str += "1";
    console.log(str);
}