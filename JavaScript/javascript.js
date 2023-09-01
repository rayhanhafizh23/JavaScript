let a=2;
let b=3;
let c=4;
let d=5;

let e = ((b+a)*c)/(a*b+a-d);
console.log(e)
// 3+2x4/2x3+2-5

// let x=6;
// let y=5;
// let hasil= x>y;
// if(x>y) {
//     console.log("Benar");
// }

// else {
//     console.log("Salah");
// }

let nilai = 30;
let kkm =80;
let kkmm=nilai>kkm

if(kkmm) {
    console.log("Lulus");
}
else{
    console.log("Tidak Lulus");
}

let bulan = 8;
let tanggal =20;
let zodiak = "Belum Dibuat";

if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="aquarius";
    }
    if(tanggal>19 && tanggal <32){
        zodiak="taurus";
    }
}
if(bulan==2){
    if(tanggal>0 && tanggal<20){
        zodiak="taurus";
    }
    if(tanggal>19 && tanggal<29){
        zodiak="carpicorn";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<20){
        zodiak="carpicorn";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="gemini";
    }
}
if(bulan==4){
    if(tanggal>0 && tanggal<20){
        zodiak="gemini";
    }
    if(tanggal>19 && tanggal<30){
        zodiak="aries";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal<20){
        zodiak="aries";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="libra";
    }
}
if(bulan==6){
    if(tanggal>0 && tanggal<20){
        zodiak="libra";
    }
    if(tanggal>19 && tanggal<30){
        zodiak="cancer";
    }
}
if(bulan==7){
    if(tanggal>0 && tanggal<20){
        zodiak="cancer";
    }
    if(tanggal>19 && tanggal<31){
        zodiak="leo";
    }
}
if(bulan==8){
    if(tanggal>0 && tanggal<20){
        zodiak="leo";
    }
    if(tanggal>19 && tanggal<30){
        zodiak="virgo";
    }
}
if(bulan==9){
    if(tanggal>0 && tanggal<20){
        zodiak="virgo";
    }
    if(tanggal>19 && tanggal<30){
        zodiak="scorpio";
    }
}
if(bulan==10){
    if(tanggal>0 && tanggal<20){
        zodiak="scorpio";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="pisces";
    }
}
if(bulan==11){
    if(tanggal>0 && tanggal<20){
        zodiak="pisces";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="sagitarius";
    }
}
if(bulan==12){
    if(tanggal>0 && tanggal<20){
        zodiak="sagitarius";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="libra";
    }
}
