var myapp = angular.module('Myapp',[]); 
myapp.controller('Customer',function($scope){

$scope.customers = []; // ng object
 $scope.customer = {
     id : '',
     name : '',
     email : '',
     phone : ''
 } ;    
$scope.addcustomercls = []; // ng class
$scope.editcustomercls = ['ng-hide']; // ng class

$scope.resetcustomerobj = function(){
    $scope.customer = {
     id : '',
     name : '',
     email : '',
     phone : ''
 } ; 
}

// Save customer data into object 'customers'
$scope.savecustomer = function(customer)
{
    if(customer.id == '') {
    if($scope.customers.length == 0){
        customer.id = 1;
    }
    else{
     customer.id = $scope.customers.length + 1;               
    }
    $scope.customers.push(customer);
    $scope.resetcustomerobj();
    }
    else{
       $.grep($scope.customers, function (e){ 
        if (e.id == customer.id){
            e.name = customer.name;
            e.email = customer.email;  
            e.phone = customer.phone;  
        }  
    });  
    $scope.resetcustomerobj();
    $scope.addcustomercls.pop('ng-hide');
    $scope.editcustomercls.push('ng-hide'); 
    }
}

// remove customer data from object 'customers'
$scope.removecustomer = function(customer){
    var index = $scope.customers.indexOf(customer);
    alert('Delete Customer : '+ customer.name);
    $scope.customers.splice(index,1)
}

// Bind existing customer data to edit
$scope.editcustomer = function(customer){
    $scope.customer.id = customer.id;
    $scope.customer.name = customer.name;  
    $scope.customer.email = customer.email;  
    $scope.customer.phone = customer.phone; 

    $scope.addcustomercls.push('ng-hide');
    $scope.editcustomercls.pop('ng-hide');
}

});