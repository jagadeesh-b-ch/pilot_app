var appTheme;
(function(){
  appTheme = angular.module("appTheme", ['ngMaterial']);
  appTheme.controller("homeControl", homeControl);
  homeControl.$inject = [];
  function homeControl(){
    hmeCtrl = this;
    hmeCtrl.name = "Jagadeesh Babu Chitta";
  }
})();
