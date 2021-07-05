var song, fft, fftLin;
var spectrumScale = 1;
var linNum = 40;
var r = 0;
var x = [];
var y = [];
var music_files = ['1.mp3','2.mp3','3.mp3', '4.mp3', '5.mp3','6.mp3','7.mp3','8.mp3','9.mp3','10.mp3'];

//----------------------------------------------------------------
function random_hash() {
  let chars = "0123456789abcdef";
  let result = '0x';
  for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

tokenData = {"hash": "0x9d858b55ef38a95d46bd47efb72929f042ba7cbdd932b13befceda4d0850e9f5"}
//----------------------------------------------------------------

let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let p = [];
for (let j = 0; j < 32; j++) {
     p.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}
let rns = p.map(x => {
     return parseInt(x, 16) % 10;
});

//----------------------------------------------------------------

params_1 = Math.round(rns[7]);

params_2 = 246 + Math.floor((rns[4] + rns[5] + rns[6])/3);
params_3 = 246 + Math.ceil((rns[7] + rns[8] + rns[9])/3);
params_4 = 246 + Math.round((rns[10] + rns[11] + rns[12])/3);

params_5 = 246 + Math.floor((rns[13] + rns[14] + rns[15])/3);
params_6 = 246 + Math.ceil((rns[16] + rns[17] + rns[18])/3);
params_7 = 246 + Math.round((rns[19] + rns[20] + rns[21])/3);

OldValue = (rns[22] + rns[23] + rns[24] + rns[25] + rns[26] + rns[27] + rns[28] +rns[29] + rns[30] + rns[31])/10

OldRange = (10 - 0);  
NewRange = (2 - 0); 
params_8 = (((OldValue - 0) * NewRange) / OldRange);


//----------------------------------------------------------------

//Params - music file
function preload() {
  song = loadSound(music_files[params_1]);
}

function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
  fft = new p5.FFT();
  song.setVolume(1);
  song.loop();
  fft.analyze();
  fftLin = fft.linAverages(linNum);
  for (var i = 0; i< fftLin.length; i++){
    if(i == 0) {
      x[i] = 0;
      y[i] = 0;
    } else {
      x[i] = random(-width/2, width/2);
      y[i] = random(-height/2, height/2);
    }
  }
}

function draw() {
  fft.analyze();
  fftLin = fft.linAverages(linNum);
  noStroke();
  fill(0, 0, 0, 20);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  rotate(radians(r));
  for(var i = 0; i < fftLin.length; i++){
    strokeWeight(3);
    if(i % 2 == 1) {
      stroke(255);
    } else {
      //Params - colour (borders of center circle and some points)
      if(max(params_2,params_3,params_4) == params_2){
        stroke(params_2, 0, 0);
      }
      if(max(params_2,params_3,params_4) == params_3){
        stroke(0, params_3, 0);
      }
      if(max(params_2,params_3,params_4) == params_4){
        stroke(0, 0, params_4);
      }
      
    }
    if(i == 0) {
      //Params - colour (center circle only)
      if(max(params_5,params_6,params_7) == params_5){
        fill(params_6, params_7, 0);
      }
      if(max(params_5,params_6,params_7) == params_6){
        fill(params_5, 0, params_7);
      }
      if(max(params_5,params_6,params_7) == params_7){
        fill(0, params_5, params_6);
      }
      //Params - size
      circle(x[i], y[i], fftLin[i]*spectrumScale*params_8);
    } else {
      noFill();
      point(x[i], y[i]);
      
    }
  }
  r += 0.5;
}