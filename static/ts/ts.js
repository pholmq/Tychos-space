/*Copyright 2018 Simon Shack, Patrik Holmqvist
The TYCHOSIUM is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*/

//DEFINE TIME CONSTANTS
const yearLength = 365.2425
const earthRotations = 366.2425


const sDay = 1/yearLength;
const sYear = sDay*365
const sMonth = sDay*30;
const sWeek = sDay*7;
const sHour = sDay/24;
const sMinute = sHour/60;
const sSecond = sMinute/60;

// DEFINE STARS
const stars = [
//   {
//     name: "Test Star",
//     ra: "00h00m00.2s", //02h 31m 49.09s
//     dec: "90d00m00.2s", //89Â° 15â² 50.8
//     dist: 15,
//     size: 1,
//     color: 0xffffff,
    
//     starObj: "", 
//   },  
  {
    name: "Polaris",
    ra: "02h31m49.09s", //02h 31m 49.09s
    dec: "89d15m50.8s", //89Â° 15â² 50.8
    dist: 300,
    size: 3,
    color: 0xffffff,
    
    starObj: "", 
  },  
  {
    name: "Vega",
    ra: "18h36m56.33635s", //18h 36m 56.33635
    dec: "38d47m01.2802s", //38Â° 47â² 01.2802
    dist: 300,
    size: 3,
    color: 0xffffff,
  },
  {
    name: "Thuban",
    ra: "14h04m23.3498s", 
    dec: "64d22m33.062s",
    dist: 300,
    size: 3,
    color: 0xffffff,
  },
  {
    name: "Deneb Algedi",
    ra: "21h47m02.44424s", //21h 47m 02.44424s
    dec: "-16d07m38.2335s", //â16Â° 07â² 38.2335â³
    dist: 300,
    size: 3,
    color: 0xffffff,
  },
  {
    name: "Mu Psc",
    ra: "01h30m11.56", //21h 47m 02.44424s
    dec: "06d08m35.9", //â16Â° 07â² 38.2335â³
    dist: 300,
    size: 3,
    color: 0xffffff,
  },
]
//STARS END
//*************************************************************
//DEFINE PLANETS (Stars, Moons and deferents conunt as planets)
//*************************************************************
var earth = {
  name: "Earth",
  size: 4,   
  color: 0x578B7C,
  startPos: 0,    
  speed: -Math.PI*2/25344,
  rotationSpeed: Math.PI*2*earthRotations,
  tilt: -23.439062,
  tiltb: 0.26,
  orbitRadius: 37.8453,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitCenterc: 0,
  
  orbitTilta: 0,
  orbitTiltb: 0,  

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/EarthDay.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
  
  traceLength : sYear * 18,
  traceStep : sDay,
  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};
var moonDef = {
  name: "Moon deferent A",
  size: 0.6 ,
  color: 0x8b8b8b,
  startPos: 226.4,
  speed:0.71015440177343,
  tilt: 0,
  orbitRadius:0.0279352315075,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitCenterc: 0,
  orbitTilta: 0.1,
  orbitTiltb: 0.2,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
  isDeferent: true,
}; 

var moonDefB = {
  name: "Moon deferent B",
  size: 0.6 ,
  color: 0x8b8b8b,
  startPos: -1.8,
  speed:0,
  tilt: 0,
  orbitRadius: 0,
  orbitCentera: -0.38,
  orbitCenterb: 0.22,
  orbitCenterc: 0,
  orbitTilta: 2.3,
  orbitTiltb: 2.6,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
  isDeferent: true,
}; 


var moon = {
  name: "Moon",
  size: 1,
  color: 0x8b8b8b,
  startPos: 260.9,
  speed: 83.28525,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 10,
  orbitCentera: 0.8,
  orbitCenterb: -0.81,
  orbitCenterc: -0.07,
  orbitTilta: -1.8,
  orbitTiltb: -2.6, 

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Moon.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
  
  traceLength : sYear * 18,
  traceStep : sDay,
  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var sunDef = {
  name: "Sun deferent",
  size: 2 ,
  color: 0xFEAA0D,
  startPos: 0,
  speed:0,
  tilt: 0,
  orbitRadius: 0,
  orbitCentera: 1.4,
  orbitCenterb: 0,
  orbitCenterc: 0,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
  isDeferent: true,
};

var sun = {
  name: "Sun",
  size: 5,    
  //color: 0xFEAA0D,
  color: 0xFFFF00,
  startPos: 0.1,    
  speed: Math.PI*2,
  rotationSpeed: 83.995,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: 1.6,
  orbitCenterb: -0.79,
  orbitCenterc: 0,
  orbitTilta: 0.25,
  orbitTiltb: 0,  
  // textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Sun.jpg',
  // textureTransparency: 0.5,
  visible: true,
  emissive: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceLength : sYear * 25000,
  traceStep : sYear*10,
  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var mercuryDef = {
  name: "Mercury def A",
  size: 0.7,
  color: 0x868485,
  startPos: 0,
  speed: Math.PI*2,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: -9,
  orbitCenterb: 1.1,
  orbitCenterc: -0.1,
  orbitTilta: 0.6,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
  isDeferent: true,
};

var mercuryDefB = {
  name: "Mercury def B",
  size: 0.7,
  color: 0x868485,
  startPos: 17.3,
  speed: -6.283185307179586,
  tilt: 0,
  orbitRadius: 0,
  orbitCentera: 0,
  orbitCenterb: 0.4,
  orbitCenterc: 0,
  orbitTilta: -1.5,
  orbitTiltb: 0.6,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: false,
  isDeferent: true,
};

var mercury = {
  name: "Mercury",
  size: 1.4,
  color: 0x868485,
  startPos:-164.7,
  speed: 26.087623,
  tilt: 0,
  orbitRadius: 38.710225,
  orbitCentera:1.2,
  orbitCenterb: -1.2,
  orbitCenterc: 0,
  orbitTilta: 4,
  orbitTiltb: 1.3, 

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Mercury.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceLength : sYear * 14,
  traceStep : sDay,
  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};


var venusDef = {
  name: "Venus deferent A",
  size: 2,
  color: 0xA57C1B,
  startPos: 0,
  speed: Math.PI*2,
  tilt: 0,
  orbitRadius: 100,
  orbitCentera: 1.66,
  orbitCenterb: -0.15,
  orbitCenterc: 0,
  orbitTilta: 0,
  orbitTiltb: -0.15,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
  isDeferent: true,
};

var venusDefB = {
  name: "Venus deferent B",
  size: 2,
  color: 0xA57C1B,
  startPos: 13,
  speed: -6.283185307179586,
  tilt: 0,
  orbitRadius: 0,
  orbitCentera: 0,
  orbitCenterb: -0.15,
  orbitCenterc: 0.2,
  orbitTilta: 0,
  orbitTiltb: 0.3,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
  isDeferent: true,
};

var venus = {
  name: "Venus",
  size: 3.9,
  color: 0xA57C1B,
  startPos:-20.7,
  speed: 10.2133116,
  //10.213454 - twoPI
  // speed: 10.213454,
  //speed: 41197.22326*twoPI/TGY,
  tilt: 0,
  orbitRadius: 72.327789,
  orbitCentera: 0,
  orbitCenterb: -0.15,
  orbitCenterc: 0.15,
  orbitTilta: 3.4,
  orbitTiltb: 0,
  traceLength : sYear *16,
  traceStep : sWeek,

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/VenusAtmosphere.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var marsDef = {
  name: "Mars E deferent",
  size: 2,
  color: 0x008000,
  startPos: 0.45,
  speed: Math.PI*2,
  tilt: 0,
  orbitRadius: 100 ,
  orbitCentera: 12,
  orbitCenterb: -20.5,
  orbitCenterc: -0.5,
  orbitTilta: -1.45,
  orbitTiltb: 0.5,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
}; 

var marsSunDef = {
  name: "Mars S deferent",
  size: 2,
  color: 0xFEAA0D,
  startPos: -99.85,
  speed: 0.39823005468039635,
  tilt: 0,
  orbitRadius: 7.44385 ,
  orbitCentera: -0.2,
  orbitCenterb: -0.7,
  orbitCenterc: 0,
  orbitTilta: -0.1,
  orbitTiltb: -0.29,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
}; 

var mars = {
  name: "Mars",
  size: 2.12,
  color: 0xFF0000,
  startPos: 104.2,
  //speed: 3.34,
  speed: -3.3406209,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 152.677,
  orbitCentera: 0.2,
  orbitCenterb: -1.5,
  orbitCenterc: 0,
  orbitTilta:-0.4,
  orbitTiltb: -2.2,
  traceLength : sYear * 44,
  traceStep : sWeek, 

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Mars.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var phobos = {
  name: "Phobos",
  size: 0.5,   
  color: 0x8b8b8b,
  startPos: 122,    
  speed: 6986.5,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 5,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitCenterc: 0,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var deimos = {
  name: "Deimos",
  size: 0.5,   
  color: 0x8b8b8b,
  startPos: 0,    
  speed: 1802,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 10,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitCenterc: 0,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
};

var jupiterDef = {
  name: "Jupiter deferent",
  size: 1,   
  color: 0xCDC2B2,
  startPos: 11.5,    
  speed:-6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,

  orbitRadius: 15,
  orbitCentera: 11,
  orbitCenterb: -6,
  orbitCenterc: 0,
  orbitTilta: 0.18,
  orbitTiltb: -0.5,
  
  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
};


var jupiter = {
  name: "Jupiter",
  size: 7.5,   
  color: 0xCDC2B2,
  startPos: 29.7,    
  speed:0.52995,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 520.4,
  orbitCentera: -46,
  orbitCenterb: -39,
  orbitCenterc: 0,
  orbitTilta: 0.6,
  orbitTiltb: -0.45,
  traceLength : sYear * 18,
  traceStep : sWeek,
  
  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Jupiter.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};
var saturnusDef = {
  name: "Saturn deferent",
  size: 1,   
  color: 0xA79662,
  startPos: 175.2,    
  speed: -6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 20,
  orbitCentera: -22,
  orbitCenterb: 11,
  orbitCenterc: 0.5,
  orbitTilta: 0.45,
  orbitTiltb: -0.4,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
};

var saturnus = {
  name: "Saturn",
  size: 6.5,   
  color: 0xA79662,
  startPos: 219,    
  speed: 0.2135,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 958.2,
  orbitCentera: 68,
  orbitCenterb: 20,
  orbitCenterc: 0,
  orbitTilta: -1.7,
  orbitTiltb: 0.7,
  traceLength : sYear * 45,
  traceStep : sWeek,

  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Saturn.jpg',
  ringUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/saturn-rings.png',
  ringSize: 10,
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var uranusDef = {
  name: "Uranus deferent",
  size: 1,   
  color: 0xD2F9FA,
  startPos: 108.5,    
  speed: -6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 20
  ,
  orbitCentera: -11,
  orbitCenterb: 11,
  orbitCenterc: 0,
  orbitTilta: 0.7,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
};


var uranus = {
  name: "Uranus",
  size: 7.5,   
  //color: 0xCDC2B2,
  color: 0xD2F9FA,
  //2B383A
  startPos: 384.6,    
  speed:0.0747998,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 1920.13568,
  orbitCentera: 60,
  orbitCenterb: -22,
  orbitCenterc: 0,
  orbitTilta: -0.5,
  orbitTiltb: -0.45,
  traceLength : sYear * 18,
  traceStep : sWeek,
  
  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Uranus.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,
  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var neptuneDef = {
  name: "Neptune deferent",
  size: 1,   
  color: 0x5E93F1,
  startPos: 175.2,    
  speed: -6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 20
  ,
  orbitCentera: 0,
  orbitCenterb: 0,
  orbitCenterc: 0,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
};


var neptune = {
  name: "Neptune",
  size: 7.5,   
  color: 0x5E93F1,
  startPos: 329.3,    
  speed:0.0380799,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 3004.72,
  orbitCentera: 0,
  orbitCenterb: 20,
  orbitCenterc: 0,
  orbitTilta: -1.5,
  orbitTiltb: 1.15,
  traceLength : sYear * 18,
  traceStep : sWeek,
  
  textureUrl: 'https://raw.githubusercontent.com/pholmq/tsnova-resources/master/Neptune.jpg',
  visible: true,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

var halleysDef = {
  name: "Halleys deferent",
  size: 1,   
  color: 0xA57C1B,
  startPos: 192,    
  speed: -6.283185307179586,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 20
  ,
  orbitCentera: -7,
  orbitCenterb: 3,
  orbitCenterc: 12,
  orbitTilta: 0,
  orbitTiltb: 0,

  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  isDeferent: true,
};


var halleys = {
  name: "Halleys",
  size: 2,   
  color: 0x00FF00,
  planetColor: 0xFFFFFF,
  startPos: 75.25,    
  speed:-0.08301,
  rotationSpeed: 0,
  tilt: 0,
  orbitRadius: 1674.5,
  orbitCentera: -1524,
  orbitCenterb: -230,
  orbitCenterc: -509,
  orbitTilta: 7,
  orbitTiltb: 18.41,
  traceLength : sYear * 90,
  traceStep : sWeek,
  
  visible: false,
  containerObj:"",
  orbitObj:"",
  planetObj:"",
  pivotObj:"",
  axisHelper: true,

  traceOn: false,
  traceLine: false,
  traceStartPos : 0,
  traceCurrPos : 0,
  traceArrIndex : 0,
};

//*************************************************************
//GLOBAL and GUI SETTINGS
//*************************************************************
var o = {
  'ambientLight' : 2,
  'sunLight' : 2,
  'Run' : false,
  '1 second equals' : sWeek,
  'speedFact' : sWeek,
  'speed' : 1,
  'Step forward' : function() {
    if (o.speedFact === sYear) {
      o.pos = dateToDays(addYears(o.Date, 1))*sDay + timeToPos(o.Time)
    } else {
      o.pos += o.speedFact
    }
  },

  'Step backward' : function() {
    if (o.speedFact === sYear) {
      o.pos = dateToDays(addYears(o.Date, -1))*sDay + timeToPos(o.Time)
    } else {
      o.pos -= o.speedFact
    }
  },
  'Reset' : function() {o.pos = 0; controls.reset()},
    'Save settings' : function() {
    let subset, fText = "[";
    planets.forEach(obj => {
      subset = (({ name, size, startPos, speed, rotationSpeed, 
                  tilt, tiltb, orbitRadius, orbitCentera, orbitCenterb,
                  orbitCenterc, orbitTilta, orbitTiltb
                 }) => ({ name, size, startPos, speed, rotationSpeed, 
                         tilt, tiltb, orbitRadius, orbitCentera, orbitCenterb,
                         orbitCenterc, orbitTilta, orbitTiltb
                        }))(obj);
      fText +=  "\n" + JSON.stringify(subset, null, 2) + ","
      // obj.ra = "";
      // obj.dec = "";
      // obj.dist = "";      
    });
    fText = fText.substring(0, fText.length - 1);
    fText +="]";
    const blob = new Blob([fText], {type: "text/plain;charset=utf-8"});
    const d = new Date().toUTCString(); 

    const fileName = "TS Settings " + d + ".txt"
    saveAs(blob, fileName);
  },
  'Load settings' : function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
      let file = e.target.files[0]; 
      var reader = new FileReader();
      reader.readAsText(file,'UTF-8');

      // here we tell the reader what to do when it's done reading...
      reader.onload = readerEvent => {
        let content = readerEvent.target.result; // this is the content!
        let jsonObj = JSON.parse(content);
        planets.forEach(obj => {
          let newVals = jsonObj.find(obj2 => {
            return obj.name === obj2.name
          });
          Object.assign(obj, newVals);
          updatePlanet(obj);
          initTrace(obj);
        });

      }
    }
    input.click();
  }, 
  pos : 0,
  'Position' : "", // Dat.GUI var for pos
  'Date' : "",
  'cSphereSize' : 1,
  'Stars' : false,
  'Star distance' : 1,
  'Axis helpers' : false,
  'Shadows' : false,
  'Orbits' : true,
  'Time' : "00:00:00",
  'Zoom' : 0,
  'worldCamX' : '0',
  'worldCamY' : '0',
  'worldCamZ' : '0',

  'Day' : "",
  'julianDay' : "",  
  'Line trace' : true,
  'Earth camera' : false,
  'Camera Lat': 0,
  'Camera Long': 0,
  'Field of view': 50,
  'Polar line': false,
  'polarLineLength': 1,
  'Camera helper' : false,
  'Performance' : false,
  'camX' : 0,
  'camY' : 0,
  'camZ' : 0,
  'Size' : 1,
  'traceSize' : 1,
//  traceStartPos : 0,
  traceLength : sYear * 18,
  traceStep : sDay,
  traceCurrPos : 0,
  traceArrIndex : 0,
  Lines : true,

  "moonElongation":0.01,
  "mercuryElongation":0.01,
  "venusElongation":0.01,
  "marsElongation":0.01,
  "jupiterElongation":0.01,
  "saturnElongation":0.01,
  
  "Info text": false,
}

const planets = [earth, moonDef, moonDefB, moon, sunDef, sun, mercuryDef, mercuryDefB, mercury, venusDef, venusDefB, venus, marsDef, marsSunDef, mars, phobos, deimos, jupiterDef, jupiter, saturnusDef, saturnus, uranusDef, uranus, neptuneDef, neptune, halleysDef, halleys]

const tracePlanets = [moon, sun, mars, venus, mercury, jupiter, saturnus, uranus, neptune, halleys]






const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

document.body.appendChild(renderer.domElement);

// INIT XRING GEOMETRY AND CROSS ORIGIN TEXTURE LOADING
initXRingGeometry();
THREE.ImageUtils.crossOrigin = '';


//*************************************************************
//CREATE AND CONFIGURE PLANETS
//*************************************************************
createPlanet(earth);
createPlanet(moonDef);
createPlanet(moonDefB);
createPlanet(moon);
moon.planetObj.rotation.y = Math.PI //quick fix so that the Moon texture is turned towards Earth
createPlanet(sunDef);
createPlanet(sun);
createPlanet(venusDef);
createPlanet(venusDefB);
createPlanet(venus);
createPlanet(mercuryDef);
createPlanet(mercuryDefB);
createPlanet(mercury);
createPlanet(marsDef);
createPlanet(marsSunDef);
createPlanet(mars);
createPlanet(phobos);
createPlanet(deimos);
createPlanet(jupiterDef);
createPlanet(jupiter);
createPlanet(saturnusDef);
createPlanet(saturnus);
createPlanet(uranusDef);
createPlanet(uranus);
createPlanet(neptuneDef);
createPlanet(neptune);
createPlanet(halleysDef);
createPlanet(halleys);


earth.pivotObj.add(sunDef.containerObj);
sunDef.pivotObj.add(sun.containerObj);

earth.pivotObj.add(moonDef.containerObj);
moonDef.pivotObj.add(moonDefB.containerObj);
moonDefB.pivotObj.add(moon.containerObj);

earth.pivotObj.add(venusDef.containerObj);
venusDef.pivotObj.add(venusDefB.containerObj);
venusDefB.pivotObj.add(venus.containerObj);

earth.pivotObj.add(mercuryDef.containerObj);
mercuryDef.pivotObj.add(mercuryDefB.containerObj);
mercuryDefB.pivotObj.add(mercury.containerObj);

earth.pivotObj.add(marsDef.containerObj);
marsDef.pivotObj.add(marsSunDef.containerObj);
marsSunDef.pivotObj.add(mars.containerObj);

mars.pivotObj.add(phobos.containerObj);
mars.pivotObj.add(deimos.containerObj);

sun.pivotObj.add(jupiter.containerObj);
sun.pivotObj.add(saturnus.containerObj);

sun.pivotObj.add(jupiterDef.containerObj);
jupiterDef.pivotObj.add(jupiter.containerObj)
sun.pivotObj.add(saturnusDef.containerObj);
saturnusDef.pivotObj.add(saturnus.containerObj);

sun.pivotObj.add(uranusDef.containerObj);
uranusDef.pivotObj.add(uranus.containerObj);

sun.pivotObj.add(neptuneDef.containerObj);
neptuneDef.pivotObj.add(neptune.containerObj);

sun.pivotObj.add(halleysDef.containerObj);
halleysDef.pivotObj.add(halleys.containerObj);

earth.containerObj.rotation.y = Math.PI/2;
//END CREATE AND CONFIGURE PLANETS
//*************************************************************
//CREATE VALUE HOLDERS FOR Right Ascension, Declination and Distance
//*************************************************************
  planets.forEach(obj => {
    obj.ra = "";
    obj.dec = "";
    obj.dist = "";      
})

function createEarthPolarLine() {
  const material = new THREE.LineBasicMaterial({
    color: 0xffffff
  });
  const geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0,100,0)
  );
  const line = new THREE.Line( geometry, material );
  line.visible = o['Polar line']
  return line
}
const polarLine = createEarthPolarLine();
earth.rotationAxis.add(polarLine);
//*************************************************************
//CREATTE CELESTIAL SPHERE AND ECLIPTIC GRID
//*************************************************************
const celestialSphere = createCelestialSphere(100)
earth.rotationAxis.add(celestialSphere);
// celestialSphere.wireFrameObj.visible = false;
celestialSphere.visible = false;
const csLookAtObj = new THREE.Object3D();
celestialSphere.add(csLookAtObj)
// const cAxisHelper = new THREE.AxesHelper(100)
// celestialSphere.add(cAxisHelper)


const plane = new THREE.GridHelper(1100, 30, 0x008800, 0x000088);
earth.pivotObj.add(plane);
plane.visible = false

//*************************************************************
//CREATE BACKGOUND STARFIELD AND INDIVIDUAL STARS
//*************************************************************
createStarfield()
const csContainer = new THREE.Object3D();
scene.updateMatrixWorld() 
csContainer.applyMatrix( earth.rotationAxis.matrixWorld )
// earth.rotationAxis.add(csContainer);
// 		// child.applyMatrix( parent.matrixWorld );
// scene.updateMatrixWorld() 
// THREE.SceneUtils.detach( csContainer, earth.rotationAxis, scene );
scene.add(csContainer)
scene.updateMatrixWorld() 

stars.forEach(obj => {
  const pivot = new THREE.Object3D();
  // pivot.rotation.y = raToRadians(obj.ra)  
  // pivot.rotation.z = decToRadians(obj.dec)
  pivot.rotation.y = raToRad(obj.ra) - Math.PI/2  
  pivot.rotation.z = decToRad(obj.dec)
  const star = new THREE.Mesh(
    new THREE.SphereBufferGeometry(obj.size, 20, 20),
    new THREE.MeshBasicMaterial({color: 'white'})
  );
  star.position.x = obj.dist;
  const nameTag = makeTextSprite( ' ' + obj.name + ' ' )
   // makeTextSprite( message, parameters )
  star.add(nameTag)
  obj.starObj = star;
  pivot.add(star)
  csContainer.add(pivot);
})
//*************************************************************
//CREATE CAMERAS AND LIGHT
//*************************************************************
const camera = new THREE.PerspectiveCamera(15, window.innerWidth/window.innerHeight, 0.1, 10000000);
//earth.pivotObj.add(camera);
camera.position.set(0, 2500, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));
//camera.lookAt(earth.planetObj);

//EARTH CAMERA
const camPivotX = new THREE.Object3D();
const camPivotY = new THREE.Object3D();

earth.planetObj.add(camPivotY);
camPivotY.add(camPivotX);

const cameraMount = new THREE.Object3D();
camPivotX.add(cameraMount);

//const planetCamera = new THREE.PerspectiveCamera( 1000, 1600/800, 0.0001, 2000 );
const planetCamera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.001, 100000);
cameraMount.add(planetCamera)

cameraMount.position.z = -earth.size - 0.002
const cameraHelper = new THREE.CameraHelper( planetCamera );
scene.add( cameraHelper );
const axisHelper = new THREE.AxesHelper(10)
planetCamera.add(axisHelper)


// o['Camera helper'] = true


function updatePlanetCam() {
    camPivotX.rotation.x = o['Camera Lat'] + Math.PI/2
    camPivotY.rotation.y = o['Camera Long'] + Math.PI/2
    planetCamera.fov = o['Field of view']
    planetCamera.updateProjectionMatrix ()

}


window.addEventListener('keydown', function(event) {
  let rotSpeed = 0.1;
  switch (event.key) {
    case "ArrowLeft" :
    case "a" :
      //planetCamera.rotateY( -rotSpeed );
      cameraMount.rotateZ( -rotSpeed );
      break;
    case "ArrowRight":
    case "d" :
      //planetCamera.rotateY( -rotSpeed );
      cameraMount.rotateZ( rotSpeed );
      break;
    case "ArrowUp":
    case "w" :
      planetCamera.rotateX( rotSpeed );
      break;
    case "ArrowDown":
    case "s" :
      planetCamera.rotateX( -rotSpeed );
      break;
    case "q" :
      planetCamera.rotateZ( rotSpeed );
      break;
    case "e" :
      planetCamera.rotateZ( -rotSpeed );
      break;
  }
});



function showHideCameraHelper () {
  axisHelper.visible = o['Camera helper']
  cameraHelper.visible = o['Camera helper']
}



const ambientLight = new THREE.AmbientLight( 0x404040, o.ambientLight ); // soft white light
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const light = new THREE.PointLight( 0xffffff, o.sunLight, 0 );
light.castShadow = true;
// light.position.set( 50, 50, 50 );
sun.pivotObj.add( light );
moon.planetObj.castShadow = true;
earth.planetObj.receiveShadow = true;
light.shadow.camera.far = 50000
light.shadow.mapSize.width = 2560;  // 2560 4096 512 default 
light.shadow.mapSize.height = 2560; // 512 default
light.shadow.radius = 2;
// const axesHelper = new THREE.AxesHelper( 20 );
//scene.add(axesHelper);

//*************************************************************
//CREATE SETTINGGS AND SETUP GUI
//*************************************************************
setupGUI()
function setupGUI() {

  var gui = new dat.GUI();
  //var gui = new dat.GUI( { autoPlace: false } );
  gui.domElement.id = 'gui';
  gui.add(o, 'Date').listen().onFinishChange(() => {
    if (isValidDate(o.Date)) {
      o.pos = sDay * dateToDays(o.Date) + timeToPos(o.Time);
    }
  });
  
  gui.add(o, 'Time').name('Time (UTC)').listen().onFinishChange(function() {
    if (isValidTime(o.Time)) {
      o.pos = sDay * dateToDays(o.Date) + timeToPos(o.Time);
    } 
  });
  
  gui.add(o, 'julianDay').name('Julian day').listen().onFinishChange(() => {
    if (isNumeric(o.julianDay)) {
      o.Day = o.julianDay - 2451717;
      o.pos = sDay * o.Day + timeToPos(o.Time);
    }
  });

  // gui.add(o, 'Day').listen().onFinishChange(() => {
  //   if (isNumeric(o.Day)) {
  //     o.pos = sDay * o.Day + timeToPos(o.Time);
  //   }
  // });


  let ctrlFolder = gui.addFolder('Controls')
  ctrlFolder.add(o, 'Run').listen();
  ctrlFolder.add(o, '1 second equals', 
                 { '1 second': sSecond, '1 minute': sMinute, 
                  '1 hour': sHour, '1 day': sDay, '1 week': sWeek, 
                  '1 month': sMonth,  '1 year': sYear,}).onFinishChange(function() {
    o.speedFact = Number(o['1 second equals']);
  });
  ctrlFolder.add(o, 'speed', -4, 4).step(0.5).name('Forward/Backw.');
  ctrlFolder.add(o, 'Step forward' );
  ctrlFolder.add(o, 'Step backward' );
  ctrlFolder.add(o, 'Reset' );
  ctrlFolder.open()

  let folderCamera = gui.addFolder('Camera') 
    folderCamera.add(o, 'worldCamX').name('Camera X').listen().onFinishChange(function() {
    if (isNumeric(o.worldCamX)) { camera.position.x = o.worldCamX }
  });
  folderCamera.add(o, 'worldCamY').name('Camera Y').listen().onFinishChange(function() {
    if (isNumeric(o.worldCamY)) { camera.position.y = o.worldCamY }
  });
  folderCamera.add(o, 'worldCamZ').name('Camera Z').listen().onFinishChange(function() {
    if (isNumeric(o.worldCamZ)) { camera.position.z = o.worldCamZ }
  });

let folderCam = folderCamera.addFolder('Earth cam (experimental) Move w arrows')
folderCam.add(o, 'Earth camera')
  o['Camera Lat'] = 0.01
  o['Camera Long'] = 0.01
  folderCam.add(o, 'Camera Lat', 0.00, Math.PI).listen()
  folderCam.add(o, 'Camera Long', 0.00, Math.PI*2).listen()
  o['Camera Lat'] = 0.67
  o['Camera Long'] = 0
  folderCam.add(o, 'Field of view', 0, 100).listen()
  folderCam.add(o, 'Camera helper').onFinishChange(() => {
    showHideCameraHelper()
  });  
  
  let folderT = gui.addFolder('Trace')
  folderT.add(o, 'traceSize', 0.1, 2).name('Size').onChange(()=>{changeTraceScale()})

  folderT.add(o, 'Lines').onFinishChange(()=>{
    tracePlanets.forEach(obj => {
      setTraceMaterial(obj)
    });
  });

  tracePlanets.forEach(obj => {
    folderT.add(obj, 'traceOn').name(obj.name).onFinishChange(()=>{initTrace(obj)})
  });
  // folderT.open();

  
  let posFolder = gui.addFolder('Positions')
  let posPlFolder
  tracePlanets.forEach(obj => {
    posPlFolder = posFolder.addFolder(obj.name)
    posPlFolder.add(obj, 'ra').listen().name('RA')
    posPlFolder.add(obj, 'dec').listen().name('Dec')
    if (obj.name === "Moon") {
      posPlFolder.add(obj, 'dist').listen().name('Kilometers')
    } else {
      posPlFolder.add(obj, 'dist').listen().name('AU Distance')
    }
    posPlFolder.open()
  })

  
  

  let folderElongations=gui.addFolder("Elongations");
  folderElongations.add(o,"moonElongation").min(0.0).max(180.0).listen().name("Moon")
  folderElongations.add(o,"mercuryElongation").min(0.0).max(180.0).listen().name("Mercury")
  folderElongations.add(o,"venusElongation").min(0.0).max(180.0).listen().name("Venus")
  folderElongations.add(o,"marsElongation").min(0.0).max(180.0).listen().name("Mars")
  folderElongations.add(o,"jupiterElongation").min(0.0).max(180.0).listen().name("Jupiter")
  folderElongations.add(o,"saturnElongation").min(0.0).max(180.0).listen().name("Saturn")  
  
  function changeSphereScale() {
      celestialSphere.scale.x = o.cSphereSize
      celestialSphere.scale.y = o.cSphereSize
      celestialSphere.scale.z = o.cSphereSize
    
  }
  
  let folderO = gui.addFolder('Objects')
  folderO.add(plane, 'visible').name('Ecliptic grid')
  folderO.add(celestialSphere, 'visible').name('Celestial sphere')
    folderO.add(o, 'cSphereSize', 0.1, 2).step(0.1).name('Sphere size').onChange(()=>{changeSphereScale()})

  folderO.add(o, 'Polar line').onFinishChange(()=>{
    polarLine.visible = o['Polar line']
  });
  folderO.add(o, 'polarLineLength', 0.1, 10).name('Line length').onChange(()=>{
      // polarLine.scale.x = o.polarLineLength
      polarLine.scale.y = o.polarLineLength
  });

  // 'polarLineLength': 1,
  
  folderO.add(o, 'Axis helpers' ).onFinishChange(()=>{
      showHideAxisHelpers();
    });
  folderO.add(o, 'Stars' ).onFinishChange(()=>{
    showHideStars();
  });
  folderO.add(o, 'Star distance', 0.1, 5).onChange(() => {
    setStarDistance();
  });

  folderO.add(o, 'Orbits' ).onFinishChange(()=>{
    showHideOrbits();
  });
  folderO.add(o, 'Info text' ).onFinishChange(()=>{
    showHideInfoText();
  });
  folderO.add(o, 'Performance').onFinishChange(() => {
    if (o.Performance) {stats.dom.style.visibility = 'visible'} 
    else {stats.dom.style.visibility = 'hidden'}
  });

  function changePlanetScale(){
    planets.forEach(obj => {
      obj.planetObj.scale.x = o.Size
      obj.planetObj.scale.y = o.Size
      obj.planetObj.scale.z = o.Size
    });  
  }
  
  let folderPlanets = gui.addFolder('Planets');
  // folderPlanets.open();
  folderPlanets.add(o, 'Size', 0.1, 2).onChange(()=>{changePlanetScale()})
  planets.forEach(obj => {
    if (!obj.isDeferent) {
      folderPlanets.add(obj, 'visible').name(obj.name).onFinishChange(()=>{
        showHideObject(obj);
      });
    }
  })
  let folderDef = folderPlanets.addFolder('Deferents');
  planets.forEach(obj => {
    if (obj.isDeferent) {
      folderDef.add(obj, 'visible').name(obj.name).onFinishChange(()=>{
        showHideObject(obj);
      });
    }
  })
  function changeTraceScale(){
    tracePlanets.forEach(obj => {
      if (obj.traceLine) {
        obj.traceLine.material.size = obj.size*10 * o.traceSize
      }
    });  
  }
  
  function changeLight() {
    ambientLight.intensity = o.ambientLight
    light.intensity = o.sunLight
  }
  
  let sFolder = gui.addFolder('Settings')
  const lightFolder = sFolder.addFolder("Light")
  //lightFolder.open();
  lightFolder.add(o, 'ambientLight', 0.1, 4).name('Amb. light').onChange(()=>{changeLight()})
  lightFolder.add(o, 'sunLight', 0.1, 4).name('Sunlight').onChange(()=>{changeLight()})
  lightFolder.add(o, 'Shadows' )
  sFolder.add(o, 'Save settings' )
  sFolder.add(o, 'Load settings' )



  let oFolder 
  planets.forEach(obj => {
    oFolder = sFolder.addFolder(obj.name)
    addSetting(obj, 'startPos', 'Start Position', oFolder)
    addSetting(obj, 'speed', 'Speed', oFolder)
    addSetting(obj, 'orbitCentera', 'Orbit center A', oFolder)
    addSetting(obj, 'orbitCenterb', 'Orbit center B', oFolder)
    addSetting(obj, 'orbitCenterc', 'Orbit center C', oFolder)
    addSetting(obj, 'orbitTilta', 'Orbit tilt A', oFolder)
    addSetting(obj, 'orbitTiltb', 'Orbit tilt B', oFolder)
    addSetting(obj, 'tilt', 'Planet tilt A', oFolder)
    if (obj.hasOwnProperty('tiltb')) {
      addSetting(obj, 'tiltb', 'Planet tilt B', oFolder)      
    }
    if (obj.settingsVisible) {
      oFolder.open()
    }
  })

  function addSetting(obj, attrib, name, folder) {
    obj[name] = obj[attrib].toString()
    folder.add(obj, name).listen().onFinishChange(()=>{
      if (isNumeric(obj[name])) {
        obj[attrib] = Number(obj[name])
        obj[name] = obj[attrib].toString()
        updatePlanet(obj)
        initTrace(obj)
      } else {
        obj[name] = obj[attrib].toString()
      }
    })
  }

}  


const stats = new Stats()
document.body.appendChild( stats.dom )
if (!o.Perfomance) stats.dom.style.visibility = 'hidden';

// stats.dom.container.style.visibility = 'hidden';
const clock = new THREE.Clock(); 

window.addEventListener('resize', onWindowResize, false);
onWindowResize();


// window.addEventListener('resize', onWindowResize, false);
// onWindowResize();

// var orbit;
var pause = true;

// const controls = new THREE.OrbitControls(planetCamera, renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableKeys = false



planets.forEach(obj => {
  showHideObject(obj)
});
showHideAxisHelpers();
showHideStars();
showHideCameraHelper();
showHideInfoText();

o.pos = 0
let currPos 
let tlapsed = 0;
renderer.render(scene, camera);//renderer needs to be called otherwise the position are wrong
const centerPos = new THREE.Vector3(0,0,0); 
//*************************************************************
//THE RENDER LOOP
//*************************************************************
function render() {
  requestAnimationFrame(render);
  stats.update();
  controls.update();
  let delta = clock.getDelta();
  tlapsed += delta
  if (tlapsed > 0.05) {
    tlapsed = 0;
    o['Position'] = o.pos
    o.Day = posToDays(o.pos);
    o.julianDay = o.Day + 2451717;
    o.Date = daysToDate(o.Day)
    o.Time = posToTime(o.pos)
    o.worldCamX = Math.round(camera.position.x)
    o.worldCamY = Math.round(camera.position.y)
    o.worldCamZ = Math.round(camera.position.z)
    renderer.shadowMap.enabled = o['Shadows'];


  }
  if (o.Run) {
    o.pos += Number(o.speedFact) * o.speed * delta;
  }
  //tracePlanet(mars, o.pos);  
  // lineTrace(o.pos);
  trace(o.pos);
  moveModel(o.pos);
  updateElongations();
  updatePositions();
  updatePlanetCam();
  if (o['Earth camera']) {
    renderer.render(scene, planetCamera);

  } else {
    renderer.render(scene, camera);

  }
}
render();
//*************************************************************
//END RENDER LOOP
//*************************************************************

function updatePositions() {
  scene.updateMatrixWorld() //No effect(?)


  const csPos = new THREE.Vector3();
  celestialSphere.getWorldPosition(csPos);

  const sphericalPos = new THREE.Spherical();

  tracePlanets.forEach(obj => {    
    const planetPos = new THREE.Vector3();
    const lookAtDir = new THREE.Vector3(0,0,1);
    obj.planetObj.getWorldPosition(planetPos)
    csLookAtObj.lookAt(planetPos)
    lookAtDir.applyQuaternion(csLookAtObj.quaternion);
    lookAtDir.setLength(csPos.distanceTo(planetPos))
    sphericalPos.setFromVector3(lookAtDir)
    obj.ra = radToRa(sphericalPos.theta)
    obj.dec = radToDec(sphericalPos.phi)
    if (obj.name === "Moon") {
      obj.dist = (sphericalPos.radius/100 * 149597871/39.2078).toFixed(2)
    } else {
      obj.dist = (sphericalPos.radius/100).toFixed(8)
    }
  });
  

  
}

function drawSunLine(){
  const csPos = new THREE.Vector3();
  celestialSphere.getWorldPosition(csPos);
  const lookAtDir = new THREE.Vector3(0,0,1);
  const planetPos = new THREE.Vector3();

  const sphericalPos = new THREE.Spherical();
  
  sun.planetObj.getWorldPosition(planetPos)
  csLookAtObj.lookAt(planetPos)
  lookAtDir.applyQuaternion(csLookAtObj.quaternion);
  lookAtDir.setLength(csPos.distanceTo(planetPos))
  
  
  sphericalPos.setFromVector3(lookAtDir)

  
  var material = new THREE.LineBasicMaterial({
    color: 0x0000ff
  });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(0,0,0),
    new THREE.Vector3().setFromSpherical(sphericalPos)
  );

  var line = new THREE.Line( geometry, material );
  celestialSphere.add( line );
  
  console.log(sphericalPos.theta)
  
  sphericalPos.theta = sun.ra 
  sphericalPos.phi =  sun.dec
  sphericalPos.radius = sun.dist

  
  var material2 = new THREE.LineBasicMaterial({
    color: 0xff0000
  });

  var geometry2 = new THREE.Geometry();
  geometry2.vertices.push(
    new THREE.Vector3(0,0,0),
    new THREE.Vector3().setFromSpherical(sphericalPos)
  );

  var line2 = new THREE.Line( geometry2, material2 );
  celestialSphere.add( line2 );
  
  
  
}


function trace(pos) {
  tracePlanets.forEach(obj => {
    tracePlanet(obj, pos)
  });
  // tracePlanet(mars, pos)
}

  function initTrace(obj) {
    obj.traceStartPos = obj.traceCurrPos = o.pos; 
    obj.traceArrIndex = 0;
  }

function setTraceMaterial(obj) {
  let lineMaterial 
  let lineGeometry
  if (!obj.traceLine) {
    lineMaterial = new THREE.PointsMaterial( { 
      color: obj.color,                                          
      size: obj.size*10,
      //sizeAttenuation: false,
      transparent: true,
      opacity: 0.7,
      alphaTest : 0.5,
      map: new THREE.TextureLoader().load( "https://raw.githubusercontent.com/pholmq/tsnova-resources/master/disc.png" ),
      
    } )
            
    lineGeometry = new THREE.Geometry()
    obj.traceLine = new THREE.Points( lineGeometry, lineMaterial )
    obj.traceLine.sortParticles = true;
    obj.traceLine.geometry.vertices.length = (obj.traceLength/obj.traceStep).toFixed()
  } else {
    scene.remove(obj.traceLine)
    lineMaterial = obj.traceLine.material 
    lineGeometry = obj.traceLine.geometry

  }  
  if (o.Lines) {
    obj.traceLine = new THREE.Line( lineGeometry, lineMaterial )    
  } else {
    obj.traceLine = new THREE.Points( lineGeometry, lineMaterial )    
    
  }
  scene.add(obj.traceLine)
}


function tracePlanet(obj, pos) {
  let update = false;
  if (!obj.traceOn) { obj.traceLine.visible = false; return;}
  if (pos < obj.traceStartPos) {initTrace(obj); update = true}
  if (pos < obj.traceCurrPos) {obj.traceCurrPos = obj.traceStartPos; obj.traceArrIndex = 0; update = true}
  if (obj.traceCurrPos + obj.traceStep > pos && !update) return;

  let firstRun = false
  if (obj.traceArrIndex === 0) firstRun = true;
  
  if (!obj.traceLine) {
    setTraceMaterial(obj)
  }    
  let nextPos = obj.traceCurrPos
  let vertArray = obj.traceLine.geometry.vertices
  while(nextPos < pos) {
    moveModel(nextPos);
    earth.containerObj.updateMatrixWorld();
    let epos = new THREE.Vector3(); 
    obj.planetObj.getWorldPosition(epos); //NEEDS to be a new vector every time! (declared inside the loop)
    if (obj.traceArrIndex < vertArray.length) {
      vertArray[obj.traceArrIndex] = epos;    
      obj.traceArrIndex ++
    } else {
      for(let i = 0; i < vertArray.length-1; i++) {
        vertArray[i] = vertArray[i+1]
      }
      vertArray[vertArray.length-1] = epos;          
    }
    nextPos += obj.traceStep
  }
  if (firstRun) {
    //We need to pad the vertices array 
    let index = obj.traceArrIndex;
    while (index < obj.traceLine.geometry.vertices.length) {
      obj.traceLine.geometry.vertices[index ++] = 0;    
    }    
  }  
  obj.traceLine.geometry.verticesNeedUpdate = true;
  obj.traceCurrPos = nextPos - obj.traceStep;
  obj.traceLine.visible = true;
}


function moveModel(pos){
  planets.forEach(obj => {
    obj.orbitObj.rotation.y = obj.speed * pos - obj.startPos * (Math.PI/180)
    if (obj.rotationSpeed) {
      obj.planetObj.rotation.y = obj.rotationSpeed * pos 
    }
  })
}

function onWindowResize() {
  if (o['Earth camera']) {
    planetCamera.aspect = window.innerWidth / window.innerHeight;
    planetCamera.updateProjectionMatrix();
  } else {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

  }
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function addPolarGridHelper(inplanet) {
  var polarGridHelper = new THREE.PolarGridHelper( 10, 16, 8, 64, 0x0000ff, 0x808080 );
  inplanet.add(polarGridHelper);
}

function posToDays(pos) {
  pos += sHour*12 //Hack to set the clock to tweleve for pos 0
	return Math.floor(pos/sDay)
}

function posToTime(pos) {
  pos += sHour*12 //Hack to set the clock to tweleve for pos 0
	let days = pos/sDay - Math.floor(pos/sDay)
  let hours = Math.floor(days*24);
  let minutes = Math.floor((days*24 - hours) * 60);
  let seconds = Math.floor(((days*24 - hours) * 60 - minutes) * 60);

	let hh = ("0" + hours).slice(-2);
  let mm = ("0" + minutes).slice(-2);
  let ss = ("0" + seconds).slice(-2);

return hh + ":" + mm +":" + ss
}

function timeToPos(value) {
  let aTime = value.split(":");
  let pos = aTime[0] * sHour + aTime[1] * sMinute + aTime[2] * sSecond
  return pos-= sHour*12 //Hack to set the clock to tweleve for pos 0
}

//console.log(raToRadians("00:00:60"))
function raToRadians(rightAscension) {
  const time = rightAscension.split(":");
  const deg = (Number(time[0]) + time[1]/60 + time[2]/3600)*15;
  //console.log(deg)
  return deg * (Math.PI/180);
}

function radiansToRa(radians) {
  const raDec = radians * 12/Math.PI
  const hours = Math.floor(raDec);
  const minutes = raDec % 1 
}


//console.log(decToRadians("360:00:00"))
function decToRadians(declination) {
  const time = declination.split(":");
  const deg = Number(time[0]) + time[1]/60 + time[2]/3600;
  //console.log(deg)
  return deg * (Math.PI/180);
}

function raToRad(ra) {
  const hours = ra.split('h')[0];
  const minutes = ra.split('h')[1].split('m')[0]
  const seconds = ra.split('h')[1].split('m')[1].split('s')[0]
  return hours*Math.PI/12 + minutes*(Math.PI/(12*60)) + seconds*(Math.PI/(12*3600))
}

function decToRad(dec) {
  const degrees = dec.split('d')[0];
  const minutes = dec.split('d')[1].split('m')[0]
  const seconds = dec.split('d')[1].split('m')[1].split('s')[0]
  return degrees*Math.PI/180 + minutes*(Math.PI/(180*60)) + seconds*(Math.PI/(180*3600))
}

function radToRa(rad){
  if ( rad < 0 ) {rad = rad + Math.PI*2}
  const raDec = rad * 12/Math.PI
  const hours = Math.floor(raDec);
  const minutesSeconds = (raDec - hours) * 60
  const minutes = Math.floor((raDec - hours) * 60)
  const seconds = (minutesSeconds - minutes) * 60
  return leadZero(hours) + "h" + leadZero(minutes) + "m" + leadZero(seconds.toFixed(0)) + "s"
  }

function radToDec(rad){
  if (rad <= 0) {
    rad = rad + Math.PI/2
  } else {
    rad = Math.PI/2 - rad
  }
  var degDec = rad * 180/Math.PI
  var degreesSign=""

  if(degDec<0)
  {
    degDec*=-1.0
    degreesSign="-"
  }

  const degrees = Math.floor(degDec);
  const minutesSeconds = (degDec - degrees) * 60
  const minutes = Math.floor((degDec - degrees) * 60)
  const seconds = (minutesSeconds - minutes) * 60
  return leadZero(degreesSign+degrees, true) + "\xB0" + leadZero(minutes) + "\'" + leadZero(seconds.toFixed(0)) + "\""
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function leadZero(n, plus){
    let sign;
    n < 0 ? sign = "-": sign = "";
    if (sign === "" && plus) {
      sign = "+"
    }
    n = Math.abs(n);
    return n > 9 ? sign + n: sign + "0" + n;
}


function isValidTime(value) {
  //check input
  let aTime = value.split(":");
  if (aTime.length > 3) {
    //Only hh:mm:ss
    return false;
  }
  //Check with regex that we only have numbers and a valid time
  if (!/^\d+$/.test(aTime[0]) || aTime[0].length != 2 ) return false;
  if (aTime[0] > 24) return false;
  if (!/^\d+$/.test(aTime[1]) || aTime[1].length != 2 ) return false;
  if (aTime[1] > 59) return false;
  if (!/^\d+$/.test(aTime[2]) || aTime[2].length != 2 ) return false;
  if (aTime[2] > 59) return false;

  return true;
}

function isValidDate(value) {
  //check input
  let aDate = value.split("-");
  if (aDate.length > 3) {
    //Assume we have a minus sign first
    aDate.shift();
  }
  if (aDate.length > 3) {
  	//Only year-month-day allowed
    return false;
  }
  //Check with regex that we only have numbers and a (probably) valid date
  if (!/^\d+$/.test(aDate[0]) || aDate[0].length > 5 ) {
    return false;
  }
  if (!/^\d+$/.test(aDate[1]) || aDate[1].length != 2 ) {
    return false;
  }
  if (aDate[1] > 12 || aDate[1] < 1) {
    return false;  
  }
  if (!/^\d+$/.test(aDate[2]) || aDate[2].length != 2 ) {
    return false;
  }
  if (aDate[2] > 31 || aDate[2] < 1) {
    return false;  
  }
  if (Number(aDate[0]) === 0) return false; //Year 0 is not allowed
  if (Number(aDate[0]) === 1582 && Number(aDate[1]) === 10 ) {
    if (aDate[2] > 4 && aDate[2] < 15) return false; //Day 5-14, oct 1582 are not dates
  } 
  
  return true;
}

//console.log(dateToDays("2000-06-20"))

function dateToDays(sDate) {
  //Calculates the number of days passed since 2000-06-21 for a date. Positive or negative
  //Taken from https://alcor.concordia.ca/~gpkatch/gdate-algorithm.html
  let aDate = sDate.split("-");
  let y,m,d;
  if (aDate.length > 3) {
    //We had a minus sign first (a BC date)
    y = -Number(aDate[1]); m = Number(aDate[2]); d = Number(aDate[3]);

  } else {
    y = Number(aDate[0]); m = Number(aDate[1]); d = Number(aDate[2]);
  };
  
  if (y < 1582) return julianDateToDays(sDate);
  if (y === 1582 && m < 10) return julianDateToDays(sDate);
  if (y === 1582 && m === 10 && d < 15)  return julianDateToDays(sDate);
  
  m = (m + 9) % 12;
  y = y - Math.floor(m/10);
  return 365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((m*306 + 5)/10) + ( d - 1 ) - 730597;
};

function julianDateToDays(sDate) {
  //Calculates the number of days passed since 2000-06-21 for a date. Positive or negative
  //Taken from https://alcor.concordia.ca/~gpkatch/gdate-algorithm.html
  let aDate = sDate.split("-");
  let y,m,d, jd;
  if (aDate.length > 3) {
    //We had a minus sign first (a BC date)
    y = -Number(aDate[1]); m = Number(aDate[2]); d = Number(aDate[3]);

  } else {
    y = Number(aDate[0]); m = Number(aDate[1]); d = Number(aDate[2]);
  };
  
  if (y < 0 ) y += 1;
  //if (y === -1) y -= 1;
  
  if (m < 3) {
  	m += 12;
    y -= 1;
  }
  //Math.trunc(x) 
  jd =  Math.trunc(365.25*(y + 4716)) + Math.trunc(30.6001*(m + 1)) + d - 1524
  
  return jd - 2451717;
};

function addYears(sDate, year) {
  let aDate = sDate.split("-");
  let y, date;
  if (aDate.length > 3) {
    //We had a minus sign first = a BC date
    y = -Number(aDate[1])
    date = (y + year) + "-" + aDate[2] + "-" + aDate[3];
  } else {
    y = Number(aDate[0])
    date = (y + year) + "-" + aDate[1] + "-" + aDate[2];
  };
  return date
}

//console.log(daysToDate(0))

function daysToDate(g) {
  if (g < -152556) return julianCalDayToDate(g); //Julian dates earlier than 1582-10-15
  g += 730597;
  let y = Math.floor((10000*g + 14780)/3652425);
  let ddd = g - (365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400));
  if (ddd < 0) {
    y = y - 1
    ddd = g - (365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400));
  };
  let mi = Math.floor((100*ddd + 52)/3060);
  let mm = (mi + 2)%12 + 1
  y = y + Math.floor((mi + 2)/12);
  let dd = ddd - Math.floor((mi*306 + 5)/10) + 1
  
  mm = ("0" + mm).slice(-2);
  dd = ("0" + dd).slice(-2);
  
  return y + "-" + mm + "-" + dd;
};

function julianCalDayToDate(g) {
  var jDay = g + 2451717 //+ 10;
  var z = Math.floor(jDay - 1721116.5);
  var r = jDay - 1721116.5 - z;
  var year = Math.floor((z - 0.25) / 365.25);
  var c = z - Math.floor(365.25 * year);
  var month = Math.trunc((5 * c + 456) / 153);
  var day = c - Math.trunc((153 * month - 457) / 5) + r - 0.5;
  if (month > 12) {
  	year = year + 1;
    month = month -12;
  }
  month = ("0" + month).slice(-2);
  day = ("0" + day).slice(-2);
  if (year <= 0) year -= 1;
  return year + "-" + month + "-" + day
};

//Returns the angle from the sun to targetPlanet as viewed from earth using the cosine rule.
function getElongationFromSun(targetPlanet)
{
  var sunPosition=new THREE.Vector3();
  var earthPosition=new THREE.Vector3();
  var targetPlanetPosition=new THREE.Vector3();
  sun.planetObj.getWorldPosition(sunPosition);
  earth.planetObj.getWorldPosition(earthPosition);
  targetPlanet.planetObj.getWorldPosition(targetPlanetPosition);

  var earthSunDistance=earthPosition.distanceTo(sunPosition);
  var earthTargetPlanetDistance=earthPosition.distanceTo(targetPlanetPosition);
  var sunTargetPlanetDistance=sunPosition.distanceTo(targetPlanetPosition);
	
  var numerator=(Math.pow(earthSunDistance,2)+Math.pow(earthTargetPlanetDistance,2))-Math.pow(sunTargetPlanetDistance,2);
  var denominator=2.0*earthSunDistance*earthTargetPlanetDistance;
  elongationRadians=Math.acos(numerator/denominator);
  return (180.0*elongationRadians)/Math.PI;
};

function updateElongations()
{
  o["moonElongation"]=getElongationFromSun(moon);
  o["mercuryElongation"]=getElongationFromSun(mercury);
  o["venusElongation"]=getElongationFromSun(venus);
  o["marsElongation"]=getElongationFromSun(mars);
  o["jupiterElongation"]=getElongationFromSun(jupiter);
  o["saturnElongation"]=getElongationFromSun(saturnus);
};


//CREATE PLANETS

function createPlanet (pd) { //pd = Planet Data
  var orbitContainer = new THREE.Object3D();
  orbitContainer.rotation.x = pd.orbitTilta * (Math.PI/180);
  orbitContainer.rotation.z = pd.orbitTiltb * (Math.PI/180);
  orbitContainer.position.x = pd.orbitCentera;
  orbitContainer.position.z = pd.orbitCenterb;
  orbitContainer.position.y = pd.orbitCenterc;
  
  var orbit = new THREE.Object3D();
  var geometry = new THREE.CircleGeometry(pd.orbitRadius, 100);
  geometry.vertices.shift();
  
  var line = new THREE.LineLoop( geometry, new THREE.LineBasicMaterial({color: pd.color, transparent: true, opacity : 0.4} ));
  line.rotation.x = Math.PI/2;
  orbit.add(line);

  var planetMesh
  if (pd.emissive) {
    planetMesh = new THREE.MeshPhongMaterial({color: pd.color, emissive: pd.color, emissiveIntensity: 2});
  } else {
    if (pd.planetColor) { //Halleys
      planetMesh = new THREE.MeshPhongMaterial({color: pd.planetColor, emissive: pd.planetColor, emissiveIntensity: 2});
    } else {
      planetMesh = new THREE.MeshPhongMaterial({color: pd.color});
    }
  }
  
  if (pd.textureUrl) {
    const texture = new THREE.TextureLoader().load(pd.textureUrl)
    if (pd.textureTransparency) {
      planetMesh = new THREE.MeshPhongMaterial({ map: texture, bumpScale: 0.05, specular: new THREE.Color('#190909'), transparent: true, opacity: pd.textureTransparency, });

    } else {
      planetMesh = new THREE.MeshPhongMaterial({ map: texture, bumpScale: 0.05, specular: new THREE.Color('#190909') });
    }

  }

  var planet = new THREE.Mesh(
    new THREE.SphereBufferGeometry(pd.size, 80, 80), planetMesh);

  var pivot = new THREE.Object3D();
  pivot.position.set(pd.orbitRadius, 0.0, 0.0);
  orbit.add(pivot);

  var rotationAxis = new THREE.Object3D();
  rotationAxis.position.set(pd.orbitRadius, 0.0, 0.0);
  rotationAxis.rotation.z = pd.tilt * (Math.PI/180)
  if (pd.tiltb) {
    rotationAxis.rotation.x = pd.tiltb * (Math.PI/180)
  }

  if (pd.ringUrl) {
    const ring = createRings(pd.ringSize, 32, pd.ringUrl)
    rotationAxis.add(ring);
    pd.ringObj = ring;
  }
  
  rotationAxis.add(planet);
  orbit.add(rotationAxis);
  orbitContainer.add(orbit);

  if (pd.axisHelper) {
    pd.axisHelper = new THREE.AxesHelper(pd.size*3)
    planet.add(pd.axisHelper);
  }  
  pd.containerObj = orbitContainer;
  pd.orbitObj = orbit;
  pd.orbitLineObj = line;
  pd.planetObj = planet;
  pd.planetMesh = planetMesh;
  pd.pivotObj = pivot;
  pd.rotationAxis = rotationAxis;
  scene.add(orbitContainer);
}

function updatePlanet (pd) { 
  pd.containerObj.rotation.x = pd.orbitTilta * (Math.PI/180);
  pd.containerObj.rotation.z = pd.orbitTiltb * (Math.PI/180);
  pd.containerObj.position.x = pd.orbitCentera;
  pd.containerObj.position.z = pd.orbitCenterb;
  pd.containerObj.position.y = pd.orbitCenterc;
  pd.rotationAxis.rotation.z = pd.tilt * (Math.PI/180)
  if (pd.hasOwnProperty('tiltb')) {
    pd.rotationAxis.rotation.x = pd.tiltb * (Math.PI/180)
  }

}

function createCelestialSphere(radius) {
  const geometry1 = new THREE.SphereBufferGeometry( radius, 40, 40 );
  const material1 = new THREE.MeshNormalMaterial( { transparent: true, wireframe: false, opacity: 0 , depthWrite: false} );
  const mesh1 = new THREE.Mesh( geometry1, material1 );
  const edgesGeometry = new THREE.EdgesGeometry( geometry1 );
  const wireframe = new THREE.LineSegments( edgesGeometry, new THREE.LineBasicMaterial( { color: 0x666666, transparent: true, opacity: 0.3 } ) );
  wireframe.add(new THREE.PolarGridHelper( radius, 4, 1, 60, 0x0000ff, 0x0000ff ));

  mesh1.add( wireframe );
  mesh1.wireFrameObj = wireframe;
  return mesh1;
}

  function showHideObject(obj) {
    obj.orbitLineObj.visible = obj.visible;
    obj.planetMesh.visible = obj.visible;
    if (obj.axisHelper) {
      if (obj.visible) {
        obj.axisHelper.visible = o['Axis helpers']
      } else {
        obj.axisHelper.visible = obj.visible;                       
      }
    }  
    if (obj.ringUrl) {
    obj.ringObj.visible = obj.visible;
  }
}

function showHideAxisHelpers() {
  planets.forEach(obj => {
    if (obj.axisHelper) {
      obj.axisHelper.visible = o['Axis helpers'];
    }  
  });
}

function showHideOrbits() {
  planets.forEach(obj => {
    if (obj.orbitLineObj && !obj.isDeferent) {
      obj.orbitLineObj.visible = o['Orbits'];
    }  
  });
}



function showHideStars() {
  stars.forEach(obj => {
    obj.starObj.visible = o.Stars
  })
};

function showHideInfoText() {
    var x = document.getElementById("info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};



function randomPointInSphere( radius ) {
  const v = new THREE.Vector3();

  const x = THREE.Math.randFloat( -1, 1 );
  const y = THREE.Math.randFloat( -1, 1 );
  const z = THREE.Math.randFloat( -1, 1 );
  const normalizationFactor = 1 / Math.sqrt( x * x + y * y + z * z );

  v.x = x * normalizationFactor * radius;
  v.y = y * normalizationFactor * radius;
  v.z = z * normalizationFactor * radius;

  return v;
}

function createStarfield() {  
  const geometry = new THREE.BufferGeometry();
  var positions = [];

  for (var i = 0; i < 100000; i ++ ) {

    var vertex = randomPointInSphere( 1000000 );
    positions.push( vertex.x, vertex.y, vertex.z );

  }

  geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );

  material = new THREE.PointsMaterial( { color: 0x888888, size: 0.05, sizeAttenuation: false} );
  //material = new THREE.PointsMaterial( { color: 0xffffff, size: 0.01 } );
  particles = new THREE.Points(geometry, material);
  scene.add( particles );
}

function setStarDistance() {
  stars.forEach(obj => {
    obj.starObj.position.x = obj.dist * o['Star distance'];
  })

}



function createRings(radius, segments, textureUrl) { 
  return new THREE.Mesh(new THREE.XRingGeometry(1.2 * radius, 2 * radius, 2 * segments, 5, 0, Math.PI * 2), new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(textureUrl), side: THREE.DoubleSide, transparent: true, opacity: 0.6 })); 
}

function initXRingGeometry() {
  /**
 * @author Kaleb Murphy
 * Modified uvs.push on line no. 42.
 */
  
 //This allows textures to be added to a disc in a way that makes planetary ring look nice
  THREE.XRingGeometry = function ( innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength ) {

    THREE.Geometry.call( this );

    this.type = 'XRingGeometry';

    this.parameters = {
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      thetaSegments: thetaSegments,
      phiSegments: phiSegments,
      thetaStart: thetaStart,
      thetaLength: thetaLength
    };

    innerRadius = innerRadius || 0;
    outerRadius = outerRadius || 50;

    thetaStart = thetaStart !== undefined ? thetaStart : 0;
    thetaLength = thetaLength !== undefined ? thetaLength : Math.PI * 2;

    thetaSegments = thetaSegments !== undefined ? Math.max( 3, thetaSegments ) : 8;
    phiSegments = phiSegments !== undefined ? Math.max( 1, phiSegments ) : 8;

    var i, o, uvs = [], radius = innerRadius, radiusStep = ( ( outerRadius - innerRadius ) / phiSegments );

    for ( i = 0; i < phiSegments + 1; i ++ ) { // concentric circles inside ring

      for ( o = 0; o < thetaSegments + 1; o ++ ) { // number of segments per circle

        var vertex = new THREE.Vector3();
        var segment = thetaStart + o / thetaSegments * thetaLength;
        vertex.x = radius * Math.cos( segment );
        vertex.z = radius * Math.sin( segment );

        this.vertices.push( vertex );
        // uvs.push( new THREE.Vector2( ( vertex.x / outerRadius + 1 ) / 2, ( vertex.y / outerRadius + 1 ) / 2 ) );
        uvs.push( new THREE.Vector2( o / thetaSegments, i / phiSegments ) );
      }

      radius += radiusStep;

    }

    var n = new THREE.Vector3( 1, 0, 0 );

    for ( i = 0; i < phiSegments; i ++ ) { // concentric circles inside ring

      var thetaSegment = i * (thetaSegments + 1);

      for ( o = 0; o < thetaSegments ; o ++ ) { // number of segments per circle

        var segment = o + thetaSegment;

        var v1 = segment;
        var v2 = segment + thetaSegments + 1;
        var v3 = segment + thetaSegments + 2;

        this.faces.push( new THREE.Face3( v1, v2, v3, [ n.clone(), n.clone(), n.clone() ] ) );
        this.faceVertexUvs[ 0 ].push( [ uvs[ v1 ].clone(), uvs[ v2 ].clone(), uvs[ v3 ].clone() ]);

        v1 = segment;
        v2 = segment + thetaSegments + 2;
        v3 = segment + 1;

        this.faces.push( new THREE.Face3( v1, v2, v3, [ n.clone(), n.clone(), n.clone() ] ) );
        this.faceVertexUvs[ 0 ].push( [ uvs[ v1 ].clone(), uvs[ v2 ].clone(), uvs[ v3 ].clone() ]);

      }
    }

    this.computeFaceNormals();

    this.boundingSphere = new THREE.Sphere( new THREE.Vector3(), radius );

  };

  THREE.XRingGeometry.prototype = Object.create( THREE.Geometry.prototype );
  THREE.XRingGeometry.prototype.constructor = THREE.XRingGeometry;

}

function makeTextSprite( message, parameters )
{
  if ( parameters === undefined ) parameters = {};

  var fontface = parameters.hasOwnProperty("fontface") ? 
      parameters["fontface"] : "Arial";

  var fontsize = parameters.hasOwnProperty("fontsize") ? 
      parameters["fontsize"] : 18;

  var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
      parameters["borderThickness"] : 4;

  var borderColor = parameters.hasOwnProperty("borderColor") ?
      parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };

  var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
      parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };
  //var spriteAlignment = parameters.hasOwnProperty("alignment") ?
  //	parameters["alignment"] : THREE.SpriteAlignment.topLeft;
  // var spriteAlignment = THREE.SpriteAlignment.topLeft;

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = "Bold " + fontsize + "px " + fontface;

  // get size data (height depends only on font size)
  var metrics = context.measureText( message );
  var textWidth = metrics.width;

  // background color
  context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
    + backgroundColor.b + "," + backgroundColor.a + ")";
  // border color
  context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
    + borderColor.b + "," + borderColor.a + ")";
  context.lineWidth = borderThickness;
  roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
  // 1.4 is extra height factor for text below baseline: g,j,p,q.

  // text color
  context.fillStyle = "rgba(0, 0, 0, 1.0)";
  context.fillText( message, borderThickness, fontsize + borderThickness);

  // canvas contents will be used for a texture
  var texture = new THREE.Texture(canvas) 
  texture.needsUpdate = true;
  var spriteMaterial = new THREE.SpriteMaterial( 
    // { map: texture, useScreenCoordinates: false, alignment: spriteAlignment } );
    { map: texture, useScreenCoordinates: false } );
  var sprite = new THREE.Sprite( spriteMaterial );
  sprite.scale.set(100,50,1.0);
  return sprite;	
}

function roundRect(ctx, x, y, w, h, r) 
{
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
	ctx.stroke();   
}
