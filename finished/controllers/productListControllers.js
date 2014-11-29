angular.module("sportsStore")
<<<<<<< HEAD
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter, 
        productListActiveClass, productListPageCount, cart) {

        var selectedCategory = null;

        $scope.selectedSize = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        $scope.addProductToCart = function (product) {
            cart.addProduct(product.id, product.name, product.price);
        }
});
=======
	.controller("productListCtrl", function($scope, $filter){

		var selectedCategory = null;

		$scope.selectedCategory = function(newCategory){
			selectedCategory = newCategory;
		}

		$scope.categoryFilterFn = function(product){
			return selectedCategory == null ||
				product.category == selectedCategory;
		}
	});
>>>>>>> 2bfa7b7f42ffac1bdca28ec493eafc73fa445ae0
