var SearchCacheProxy = {}
SearchCacheProxy.apiUrl = 'https://cloudsearch.x-cart.com/api/v1/search';
SearchCacheProxy.apiKey = '0a33b78e31d323fed4bc7a97c44c7a27';
SearchCacheProxy.cache = {}
SearchCacheProxy.results = {}

SearchCacheProxy.getData = function(request1) {
	var apiUrl = this.apiUrl+"?jsoncallback=?";
	//console.log(apiUrl);
	$.getJSON( apiUrl, {apiKey: this.apiKey, q: request1 } )
	  .success(function( json ) {
		  this.results=json.products;
		//  $.each(json.products, function (i, val)  {
		//	  console.log( "JSON Data: " + json.products );
		  var items11 = json.products;
		  console.log( "JSON Data: " + items11 );
		  
		  //var source   = $("#searchTemplate").html();
		  //var template = Handlebars.compile(source);
		 // $('search_results').append(template(items11));
		  var source   = $("#some-template").html();
		  var template = Handlebars.compile(source);
		  var data = json;
		  data.lang=  {
			    'lbl_showing_results_for': 'Showing results for',
			    'lbl_see_details': 'See details',
			    'lbl_see_more_results_for': 'See more results for',
			    'lbl_suggestions': 'Suggestions',
			    'lbl_products': 'Products',
			    'lbl_categories': 'Categories',
			    'lbl_manufacturers': 'Manufacturers',
			    'lbl_pages': 'Pages'
			  };
		//  data.suggestions= JSON.stringify(json.suggestions);
		  $("#aaaa").html(template(data));
		  //$("#searchTemplate").tmpl(items1).appendTo("#search_results");
		  
		 // document.getElementById("search_results").innerHTML = template(items11);
		  $('#search_results').listview();
		  //$('#search_results').html("");

//	  });
	  })
	  .done(function( data ) {
	  //  console.log( "JSON Data: " );
		 
	  })
	  .fail(function( jqxhr, textStatus, error ) {
	    var err = textStatus + ", " + error;
	    console.log( "Request Failed: " + err );
	});
//	$.getJSON( apiUrl, {apiKey: this.apiKey, q: request1} , function(json){
	//	console.log( json )
//	});
	return this.results;

}

			 