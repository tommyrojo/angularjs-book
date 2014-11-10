<<<<<<< HEAD
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .success(function(data){
                $scope.data.products = data;
            })
            .error(function(error){
                $scope.data.error = error;
            });
=======
﻿angular.module("sportsStore")
.controller("sportsStoreCtrl", function ($scope) {

    $scope.data = {
        products: [
            {
                name: "Product #1", description: "A product",
                category: "Category #1", price: 100
            },
            {
                name: "Product #2", description: "A product",
                category: "Category #1", price: 110
            },
            {
                name: "Product #3", description: "A product",
                category: "Category #2", price: 210
            },
            {
                name: "Product #4", description: "A product",
                category: "Category #3", price: 202
            }]
    };
>>>>>>> 2bfa7b7f42ffac1bdca28ec493eafc73fa445ae0
});
