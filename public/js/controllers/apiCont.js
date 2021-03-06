angular.module('linkr')
	.controller('apiCont', function useApiController($scope){
		
		$scope.title = "Linkr API";
		$scope.desc = "";

		$scope.apiUse = [
			{
				"routeTitle": "Find all links",
				"routeDesc": "This allows you to get all the links that are in our database in one call to our api.",
				"exampleCall": "http://linkr.xyz/api/links",
				"exampleResp": '[{"code":0,"link":"https://github.com/CEREBR4L","_id":"579aba9c8218588117acffe9","__v":0},{"code":1,"link":"http://pointless.space/","_id":"579abaac8218588117acffea","__v":0}]'
			},
			{
				"routeTitle": "Find most recent",
				"routeDesc": "This allows you to get the most recent links that are in our database limited to the number you set at the end of the call.",
				"exampleCall": "http://linkr.xyz/api/links/1",
				"exampleResp": '[{"_id":"579f8fd2b1f34f9321fc5987","code":8782,"link":"http://github.com/CEREBR4L/linkr","__v":0}]'
			},
			{
				"routeTitle": "Get new link",
				"routeDesc": "This will allow you to create one new link in our database using a url and it will return the url and short code as well as the new linkr short link.",
				"exampleCall": "http://linkr.xyz/api/new/https://github.com/CEREBR4L",
				"exampleResp": '{"link":"https://github.com/CEREBR4L","code":3,"redirectLink":"http://linkr.xyz/r/3"}'
			}
		];

	});
