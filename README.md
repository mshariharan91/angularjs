<p># AngularJS CRUD application</p>
<p>Screenshot : &lt;img src=&quot;https://github.com/mshariharan91/angularjs/blob/master/angularjs-crud.png&quot; /&gt; </p>
<p>Include CSS and JS FILES<br>
</p>
<p>&lt;link rel=&quot;stylesheet&quot; href=&quot;css/bootstrap.css&quot; /&gt;<br>
  &lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery.js&quot;&gt;&lt;/script&gt;<br>
  &lt;script type=&quot;text/javascript&quot; src=&quot;js/angular.js&quot;&gt;&lt;/script&gt; <br>
  &lt;script type=&quot;text/javascript&quot; src=&quot;js/script.js&quot;&gt;&lt;/script&gt;</p>
<p>-----------------------------------------------------------------------------------------------------------</p>
<p>index.html</p>
<p>&nbsp;</p>
<p>&lt;html&gt;<br>
  &lt;head&gt;<br>
  &lt;title&gt;Angularjs - From add and delete&lt;/title&gt;<br>
  &lt;link rel=&quot;stylesheet&quot; href=&quot;css/bootstrap.css&quot; /&gt;<br>
  &lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery.js&quot;&gt;&lt;/script&gt;<br>
  &lt;script type=&quot;text/javascript&quot; src=&quot;js/angular.js&quot;&gt;&lt;/script&gt; <br>
  &lt;script type=&quot;text/javascript&quot; src=&quot;js/script.js&quot;&gt;&lt;/script&gt;<br>
  &lt;/head&gt;<br>
  &lt;body ng-app=&quot;Myapp&quot;&gt;<br>
  &lt;h2&gt;Angularjs from add, edit and delete&lt;/h2&gt;<br>
  &lt;div ng-controller=&quot;Customer&quot; style=&quot;max-width:900px;&quot;&gt;</p>
<p>&lt;!-- Add customer --&gt; <br>
  &lt;form class=&quot;form&quot; ng-submit=&quot;savecustomer(customer)&quot;&gt;<br>
  &lt;!-- ng-submit to post data to addcustomer function --&gt;<br>
  &lt;h3&gt;Add Customer&lt;/h3&gt;<br>
  &lt;p ng-class=&quot;editcustomercls&quot;&gt;ID : {{customer.id}} &lt;input type=&quot;hidden&quot; ng-model=&quot;customer.id&quot; /&gt;&lt;/p&gt;<br>
  &lt;table class=&quot;table-condensed&quot;&gt; <br>
  &lt;tr&gt;&lt;td&gt;&lt;p&gt;Name :&lt;/p&gt;&lt;input type=&quot;text&quot; ng-model=&quot;customer.name&quot; required /&gt;&lt;/td&gt;&lt;/tr&gt;<br>
  &lt;tr&gt;&lt;td&gt;&lt;p&gt;Email :&lt;/p&gt;&lt;input type=&quot;email&quot; ng-model=&quot;customer.email&quot; required /&gt;&lt;/td&gt;&lt;/tr&gt;<br>
  &lt;tr&gt;&lt;td&gt;&lt;p&gt;Phone :&lt;/p&gt;&lt;input type=&quot;tel&quot; ng-model=&quot;customer.phone&quot; required /&gt;&lt;/td&gt;&lt;/tr&gt;<br>
  &lt;tr&gt;&lt;td&gt;&lt;input type=&quot;submit&quot; class=&quot;btn btn-success&quot; value=&quot;Add Customer&quot; ng-class=&quot;addcustomercls&quot;/&gt; &lt;input type=&quot;submit&quot; class=&quot;btn btn-success&quot; value=&quot;Update&quot; ng-class=&quot;editcustomercls&quot; /&gt;&lt;/td&gt;&lt;/tr&gt; <br>
  &lt;/table&gt;<br>
  &lt;/form&gt;</p>
<p>&lt;br/&gt;&lt;br/&gt;<br>
  &lt;h2&gt;Customers&lt;/h2&gt;<br>
  &lt;!-- Customer List --&gt;<br>
  &lt;h4&gt;Total : {{customers.length}}&lt;/h4&gt;<br>
  &lt;table class=&quot;table table-bordered&quot;&gt;<br>
  &lt;tr&gt;<br>
  &lt;th&gt;ID&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Email&lt;/th&gt;&lt;th&gt;phone&lt;/th&gt;&lt;th&gt;Action&lt;/th&gt;<br>
  &lt;/tr&gt;</p>
<p>&lt;!-- ng-repeat to list customer from customers object --&gt;<br>
  &lt;tr ng-repeat=&quot;customer in customers&quot;&gt; <br>
  &lt;td ng-bind=&quot;customer.id&quot;&gt;&lt;/td&gt;<br>
  &lt;td ng-bind=&quot;customer.name&quot;&gt;&lt;/td&gt;<br>
  &lt;td ng-bind=&quot;customer.email&quot;&gt;&lt;/td&gt;<br>
  &lt;td ng-bind=&quot;customer.phone&quot;&gt;&lt;/td&gt;<br>
  &lt;td&gt;&lt;a href=&quot;javascript:void(0)&quot; ng-click=&quot;removecustomer(customer)&quot; class=&quot;btn btn-danger&quot;&gt;Delete&lt;/a&gt; / <br>
  &lt;a href=&quot;javascript:void(0)&quot; ng-click=&quot;editcustomer(customer)&quot; class=&quot;btn btn-info&quot;&gt;Edit&lt;/a&gt;&lt;/td&gt;<br>
  &lt;/tr&gt;<br>
  &lt;/table&gt;<br>
  &lt;/div&gt;<br>
  &lt;/body&gt;<br>
  &lt;/html&gt;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>-----------------------------------------------------------------------------------------------------------</p>
<p>script.js file</p>
<p>var myapp = angular.module('Myapp',[]); <br>
  myapp.controller('Customer',function($scope){</p>
<p>$scope.customers = []; // ng object<br>
  $scope.customer = {<br>
  id : '',<br>
  name : '',<br>
  email : '',<br>
  phone : ''<br>
  } ; <br>
  $scope.addcustomercls = []; // ng class<br>
  $scope.editcustomercls = ['ng-hide']; // ng class</p>
<p>$scope.resetcustomerobj = function(){<br>
  $scope.customer = {<br>
  id : '',<br>
  name : '',<br>
  email : '',<br>
  phone : ''<br>
  } ; <br>
  }</p>
<p>// Save customer data into object 'customers'<br>
  $scope.savecustomer = function(customer)<br>
  {<br>
  if(customer.id == '') {<br>
  if($scope.customers.length == 0){<br>
  customer.id = 1;<br>
  }<br>
  else{<br>
  customer.id = $scope.customers.length + 1; <br>
  }<br>
  $scope.customers.push(customer);<br>
  $scope.resetcustomerobj();<br>
  }<br>
  else{<br>
  $.grep($scope.customers, function (e){ <br>
  if (e.id == customer.id){<br>
  e.name = customer.name;<br>
  e.email = customer.email; <br>
  e.phone = customer.phone; <br>
  } <br>
  }); <br>
  $scope.resetcustomerobj();<br>
  $scope.addcustomercls.pop('ng-hide');<br>
  $scope.editcustomercls.push('ng-hide'); <br>
  }<br>
  }</p>
<p>// remove customer data from object 'customers'<br>
  $scope.removecustomer = function(customer){<br>
  var index = $scope.customers.indexOf(customer);<br>
  alert('Delete Customer : '+ customer.name);<br>
  $scope.customers.splice(index,1)<br>
  }</p>
<p>// Bind existing customer data to edit<br>
  $scope.editcustomer = function(customer){<br>
  $scope.customer.id = customer.id;<br>
  $scope.customer.name = customer.name; <br>
  $scope.customer.email = customer.email; <br>
  $scope.customer.phone = customer.phone; </p>
<p>$scope.addcustomercls.push('ng-hide');<br>
  $scope.editcustomercls.pop('ng-hide');<br>
  }</p>
<p>});</p>
<p>-----------------------------------------------------------------------------------------------------------</p>
<p>&nbsp;</p>
<p></p>
