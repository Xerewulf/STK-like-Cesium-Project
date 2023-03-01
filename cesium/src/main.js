var semiMinorAxis = 7000000.0;
var semiMajorAxis = 11000000.0;
let Npos=[];
let Npos1=[];
let positions = [];
let positions1 = [];


var viewer = new Cesium.Viewer("cesiumContainer",{
    imageryProvider: false,
    baseLayerPicker: false,
    geocoder : false
    });
    viewer.imageryLayers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({
    url : Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
    }));

    // const tileset = viewer.scene.primitives.add(
    //     new Cesium.Cesium3DTileset({
    //       url: "http://localhost:8003/example/tileset.json",
    //     })
    //   );

      const entities = viewer.entities;

      // var str;
      // let file = document.getElementById("myFile");
      // file.addEventListener("change", function () {
      // var reader = new FileReader();
      //   reader.onload = function (progressEvent) {
      // console.log(this.result);
      // str = (reader.result).slice;
      //   };
      //  reader.readAsText(this.files[0]);
      //  console.log(str);
      //   });
        
      var str,str1;  
      let someObject = {TimeStart: 'Data',TimeEnds: 'Data', X:"x", Y:'y', Z:'z',X1:"x1",Y1:"y1",Z1:"z1",
CR_R:"CR_R",CT_R:"CT_R",CT_T:"CT_T",CN_R:"CN_R",CN_T:"CN_T",CN_N:"CN_N",CRDOT_R:"CRDOT_R",CRDOT_T:"CRDOT_T",CRDOT_N:"CRDOT_N",CRDOT_RDOT:"CRDOT_RDOT",
CTDOT_R:"CTDOT_R",CTDOT_T:"CTDOT_T",CTDOT_N:"CTDOT_N",CTDOT_RDOT:"CTDOT_RDOT",CTDOT_TDOT:"CTDOT_TDOT",CNDOT_R:"CNDOT_R",CNDOT_T:"CNDOT_T",CNDOT_N:"CNDOT_N",
CNDOT_RDOT:"CNDOT_RDOT",CNDOT_TDOT:"CNDOT_TDOT",CNDOT_NDOT:"CNDOT_NDOT",
CR_R2:"CR_R2",CT_R2:"CT_R2",CT_T2:"CT_T2",CN_R2:"CN_R2",CN_T2:"CN_T2",CN_N2:"CN_N2",CRDOT_R2:"CRDOT_R2",CRDOT_T2:"CRDOT_T2",CRDOT_N2:"CRDOT_N2",CRDOT_RDOT2:"CRDOT_RDOT2",
CTDOT_R2:"CTDOT_R2",CTDOT_T2:"CTDOT_T2",CTDOT_N2:"CTDOT_N2",CTDOT_RDOT2:"CTDOT_RDOT2",CTDOT_TDOT2:"CTDOT_TDOT2",CNDOT_R2:"CNDOT_R2",CNDOT_T2:"CNDOT_T2",CNDOT_N2:"CNDOT_N2",
CNDOT_RDOT2:"CNDOT_RDOT2",CNDOT_TDOT2:"CNDOT_TDOT2",CNDOT_NDOT2:"CNDOT_NDOT2"};
      var file = document.getElementById('myFile');
      var lines =[];
      file.addEventListener('change', function () {
        
          
          var fr = new FileReader();
          fr.onload = function() {
              // By lines
               lines = this.result.split('\n');
              
          }
          fr.onloadend = function() {// buradan inputları alıp gerekli fonksiyonlar çağıralacak ve parametreleri verilecek
              //console.log(lines);

              var myPatternX = new RegExp('(\\w*COMMENT Object1 State Vector\\w*)','gi');
              var myPatternX2 = new RegExp('(\\w*COMMENT Object2 State Vector\\w*)','gi');

              var myPattern = new RegExp('(\\w*COMMENT Object1 OD Parameters\\w*)','gi');
              var myPattern2 = new RegExp('(\\w*COMMENT Object2 OD Parameters\\w*)','gi');

              var myPatternE1 = new RegExp('(\\w*COMMENT Object1 Covariance in the RTN Coordinate Frame\\w*)','gi');
              var myPatternE2 = new RegExp('(\\w*COMMENT Object2 Covariance in the RTN Coordinate Frame\\w*)','gi');

              for(var i = 0; i<lines.length;i++)
              {
                  if (lines[i].match(myPattern))
                  {
                    str = lines[i+1].split(" ");
                    console.log(str[1]);
                    someObject.TimeStart = str[2];
                  }
                  else if(lines[i].match(myPattern2))
                  {
                    str1 = lines[i+1].split(" "); 
                    console.log(str1[1]);
                    someObject.TimeEnds = str1[2];
                  }

                  else if (lines[i].match(myPatternX))
                  {
                    let word = lines[i+1].split(" ");
                    someObject.X = (word[2]);
                    word = lines[i+2].split(" ");
                    someObject.Y = word[2];
                    word = lines[i+3].split(" ");
                    someObject.Z = word[2];
                  }
                  else if (lines[i].match(myPatternX2))
                  {
                    let word2 = lines[i+1].split(" ");
                    someObject.X1 = (word2[2]);
                    word2 = lines[i+2].split(" ");
                    someObject.Y1 = word2[2];
                    word2 = lines[i+3].split(" ");
                    someObject.Z1 = word2[2];
                  }
                  else if (lines[i].match(myPatternE1))
                  {
                    let ell1 = lines[i+1].split(" ");someObject.CR_R    = ell1[2];
                    ell1 = lines[i+2].split(" ");someObject.CT_R        = ell1[2];
                    ell1 = lines[i+3].split(" ");someObject.CT_T        = ell1[2];
                    ell1 = lines[i+4].split(" ");someObject.CN_R        = ell1[2];
                    ell1 = lines[i+5].split(" ");someObject.CN_T        = ell1[2];
                    ell1 = lines[i+6].split(" ");someObject.CN_N        = ell1[2];
                    ell1 = lines[i+7].split(" ");someObject.CRDOT_R     = ell1[2];
                    ell1 = lines[i+8].split(" ");someObject.CRDOT_T     = ell1[2];
                    ell1 = lines[i+9].split(" ");someObject.CRDOT_N     = ell1[2];
                    ell1 = lines[i+10].split(" ");someObject.CRDOT_RDOT = ell1[2];
                    ell1 = lines[i+11].split(" ");someObject.CTDOT_R    = ell1[2];
                    ell1 = lines[i+12].split(" ");someObject.CTDOT_T    = ell1[2];
                    ell1 = lines[i+13].split(" ");someObject.CTDOT_N    = ell1[2];
                    ell1 = lines[i+14].split(" ");someObject.CTDOT_RDOT = ell1[2];
                    ell1 = lines[i+15].split(" ");someObject.CTDOT_TDOT = ell1[2];
                    ell1 = lines[i+16].split(" ");someObject.CNDOT_R    = ell1[2];
                    ell1 = lines[i+17].split(" ");someObject.CNDOT_T    = ell1[2];
                    ell1 = lines[i+18].split(" ");someObject.CNDOT_N    = ell1[2];
                    ell1 = lines[i+19].split(" ");someObject.CNDOT_RDOT = ell1[2];
                    ell1 = lines[i+20].split(" ");someObject.CNDOT_TDOT = ell1[2];
                    ell1 = lines[i+21].split(" ");someObject.CNDOT_NDOT = ell1[2];
                  }
                  else if (lines[i].match(myPatternE2))
                  {
                    let ell2 = lines[i+1].split(" ");someObject.CR_R2 =     ell2[2];
                    ell2 = lines[i+2].split(" ");someObject.CT_R2 =         ell2[2];
                    ell2 = lines[i+3].split(" ");someObject.CT_T2 =         ell2[2];
                    ell2 = lines[i+4].split(" ");someObject.CN_R2 =         ell2[2];
                    ell2 = lines[i+5].split(" ");someObject.CN_T2 =         ell2[2];
                    ell2 = lines[i+6].split(" ");someObject.CN_N2 =         ell2[2];
                    ell2 = lines[i+7].split(" ");someObject.CRDOT_R2 =      ell2[2];
                    ell2 = lines[i+8].split(" ");someObject.CRDOT_T2 =      ell2[2];
                    ell2 = lines[i+9].split(" ");someObject.CRDOT_N2 =      ell2[2];
                    ell2 = lines[i+10].split(" ");someObject.CRDOT_RDOT2 =  ell2[2];
                    ell2 = lines[i+11].split(" ");someObject.CTDOT_R2 =     ell2[2];
                    ell2 = lines[i+12].split(" ");someObject.CTDOT_T2 =     ell2[2];
                    ell2 = lines[i+13].split(" ");someObject.CTDOT_N2 =     ell2[2];
                    ell2 = lines[i+14].split(" ");someObject.CTDOT_RDOT2 =  ell2[2];
                    ell2 = lines[i+15].split(" ");someObject.CTDOT_TDOT2 =  ell2[2];
                    ell2 = lines[i+16].split(" ");someObject.CNDOT_R2 =     ell2[2];
                    ell2 = lines[i+17].split(" ");someObject.CNDOT_T2 =     ell2[2];
                    ell2 = lines[i+18].split(" ");someObject.CNDOT_N2 =     ell2[2];
                    ell2 = lines[i+19].split(" ");someObject.CNDOT_RDOT2 =  ell2[2];
                    ell2 = lines[i+20].split(" ");someObject.CNDOT_TDOT2 =  ell2[2];
                    ell2 = lines[i+21].split(" ");someObject.CNDOT_NDOT2 =  ell2[2];
                  }


                 
              }
              if (someObject.TimeStart>someObject.TimeEnds)
              {
                let temp = someObject.TimeStart;
                someObject.TimeStart = someObject.TimeEnds;
                someObject.TimeEnds = temp;
              }
              console.log(someObject.TimeStart);
              console.log(someObject.TimeEnds);
              collisionTime(someObject.TimeStart,someObject.TimeEnds);

              orbitCreate(semiMinorAxis, semiMajorAxis);

        
              console.log(someObject);
              createEntities(parseFloat(someObject.X), parseFloat(someObject.Y), parseFloat(someObject.Z), parseFloat(someObject.X1), parseFloat(someObject.Y1), parseFloat(someObject.Z1));

              
              //console.log(someObject.CR_R+"//"+someObject.CRDOT_R+"//"+someObject.CRDOT_T+"//"+someObject.CRDOT_R+"//"+someObject.CRDOT_RDOT+"//"+someObject.CRDOT_N+"//"+someObject.CRDOT_T+"//"+someObject.CRDOT_N+"//"+someObject.CT_T);
             //createEll(parseFloat(someObject.CR_R),parseFloat(someObject.CRDOT_R),parseFloat(someObject.CRDOT_T),parseFloat(someObject.CRDOT_R), parseFloat(someObject.CRDOT_RDOT), parseFloat(someObject.CRDOT_N),parseFloat(someObject.CRDOT_T), parseFloat(someObject.CRDOT_N), parseFloat(someObject.CT_T));
             

      
          }
          
          //this = str[1];
          fr.readAsText(file.files[0]);
      });

      


    
        






// setInterval(function () {
// 	orbitCreate(semiMinorAxis, semiMajorAxis);
// }, 2000);




function orbitCreate(semiMinorAxis, semiMajorAxis)
{
  for (let j = 0;j<=18;j++)
  {
    positions = [];
    positions1 = [];

  for (var i = -180; i <= 180; i+=10) 
  {
      var axis = (semiMinorAxis) + Math.cos(i * Math.PI / 180.0) * (semiMajorAxis - semiMinorAxis);
  
      positions.push(Cesium.Cartesian3.fromDegrees(i, 0, axis));
      
  }
  Npos.push(positions);

  for (var i = -180; i <= 180; i+=10) 
  {
      var axis = (semiMinorAxis) + Math.cos(i * Math.PI / 180.0) * (semiMinorAxis-semiMajorAxis);
  
      positions1.push(Cesium.Cartesian3.fromDegrees(i, 0, axis));
      
  }
    Npos1.push(positions1);
  }
  var entity = viewer.entities.add({
    polyline : {
        positions : Npos[5],
        followSurface : true,
        width : 1,
        material : Cesium.Color.BLUE
    }
  });
  
  var entity1 = viewer.entities.add({
    polyline : {
        positions : Npos1[5],
        followSurface : true,
        width : 1,
        material : Cesium.Color.ORANGE
        
    }
  });



}


//light
var scene = viewer.scene;
var globe = scene.globe;
globe.enableLighting =true;






window.viewer = viewer;
const toolbar = document.querySelector("div.cesium-viewer-toolbar");
const modeButton = document.querySelector("span.cesium-sceneModePicker-wrapper");
const myButton = document.createElement("button");
myButton.classList.add("cesium-button", "cesium-toolbar-button");
myButton.innerHTML = "X";
toolbar.insertBefore(myButton, modeButton);


    //var mainObjPos =entity.position.getValue(viewer.clock.currentTime);

    // let inputTime ='2024-01-05T11:56:04+08';
    // var secondOffset = Cesium.JulianDate.fromIso8601(inputTime);
   

function collisionTime(startTimeInput,stopTimeInput)
{
viewer.clock.startTime = Cesium.JulianDate.fromIso8601(startTimeInput);
viewer.clock.stopTime = Cesium.JulianDate.fromIso8601(stopTimeInput);
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601(startTimeInput);
viewer.clock.multiplier = 1;//1ms
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER;






}
// uydu yalın geçiş bulutu olusuyor



  function createEntities(x,y,z,x1,y1,z1)
  {

    var ellips1 = viewer.entities.add({
    
        position: Cesium.Cartesian3.fromDegrees(90, 0, semiMinorAxis + Math.cos(90 * Math.PI / 180.0) * (semiMinorAxis-semiMajorAxis)),// collision olabilecek yerleri bulup yazacağım
        ellipsoid: {
          radii: new Cesium.Cartesian3(x, y, z),// bu elipsin boyutu ve şekli ile ilgili
          outline: true,
          outlineColor: Cesium.Color.BLUE,
          outlineWidth: 2,
          material: Cesium.Color.fromRandom({ alpha: 0.2 }),
        },
      });
    
      var ellips2 = viewer.entities.add({
          
          position: Cesium.Cartesian3.fromDegrees(90, 0, semiMinorAxis + Math.cos(90 * Math.PI / 180.0) * (semiMinorAxis-semiMajorAxis)),
          ellipsoid: {
            radii: new Cesium.Cartesian3(x1, y1, z1),// bu elipsin boyutu ve şekli ile ilgili
            outline: true,
            outlineColor: Cesium.Color.ORANGE,
            outlineWidth: 2,
            material: Cesium.Color.fromRandom({ alpha: 0.2 }),
          },
        });


        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(90, 0, semiMinorAxis + Math.cos(90 * Math.PI / 180.0) * (semiMinorAxis-semiMajorAxis)+10000),
          });

  }
function createEll(CR_R,CRDOT_R,CRDOT_T,CRDOT_R, CRDOT_RDOT, CRDOT_N,CRDOT_T, CRDOT_N, CT_T)
{

  var covarianceMatrix = [[Number(CR_R), Number(CRDOT_R), Number(CRDOT_T)],
                          [Number(CRDOT_R), Number(CRDOT_RDOT), Number(CRDOT_N)],
                          [Number(CRDOT_T), Number(CRDOT_N), Number(CT_T)]
];

;


var center = Cesium.Cartesian3.fromDegrees(0.0, 0.0,0.0);
var semiMajorAxis = Math.sqrt(covarianceMatrix[0][0]);
var semiMinorAxis = Math.sqrt(covarianceMatrix[2][2]);
var orientation = Cesium.Matrix3.fromQuaternion(Cesium.Quaternion.IDENTITY);

var ellipsoid = new Cesium.Ellipsoid(semiMajorAxis, semiMinorAxis, orientation);

var instance = new Cesium.GeometryInstance({
  geometry : ellipsoid,
  modelMatrix : Cesium.Matrix4.fromTranslation(center)
});

var ellipsoidPrimitive = new Cesium.Primitive({
  geometryInstances : instance,
  appearance : new Cesium.EllipsoidSurfaceAppearance({
      material : Cesium.Material.fromType('Color', {
          color : Cesium.Color.RED
      })
  })
});

viewer.entities.add(ellipsoidPrimitive);
}
