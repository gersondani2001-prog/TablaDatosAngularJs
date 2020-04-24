/*codigo de javaScript*/ 


// *******************************************************************

/*
    codigo de javaScript
*/ 
console.log("Ejecutando js.")

// *******************************************************************

/*
    codigo de angular js
*/ 

var app = angular.module("app",[]);
app.controller("appCtrl",function($scope, $rootScope){

    console.log("Ejecutando Angular js");
    $scope.arreglo = [
        {
          nom:"Gerson",
          edad:18,
          direc:"5ta Avenida",
          pais: "Guatemala",
          tel: 12457896
        },
        {
          nom:"Daniel",
          edad:18,
          direc:"3ra Calle",
          pais: "España",
          tel: 28240000
        },{
          nom:"Boche",
          edad:18,
          direc:"10 Calle",
          pais: "Portugal",
          tel: 21213030
        }
      ];
    

});

// *******************************************************************

/*
    codigo de angular js
*/ 

$(document).ready(function(){

    console.log("Ejecutando Jquery js");

});

// funcion principal de jquery 


// *******************************************************************






















