var SearchHelper = {}


//searchHelper.curSearch = 0;

SearchHelper.results = {}

SearchHelper.search = function(searchPattern){
	//alert (searchPattern)
	this.results = SearchCacheProxy.getData(searchPattern);
	console.log(this.results);
//	$("#SearchTemplate").tmpl(this.results.products).appendTo("#search_results");
// ('#search_results').listview('refresh');
//	alert(this.results);
	//$('#search_results').html("");
	// alert (EcwidCategories.categories);
	// console.log(EcwidCacheProxy.getData('/categories'));
	// $("#categoriesTemplate").tmpl(this.categories).appendTo("#ecwid_categories_list");
   //  $('div[data-role=collapsible]').collapsible();         
   //  $('#ecwid_categories_list').listview('refresh');
   //  $('div[data-role=collapsible]').collapsible();
}

 