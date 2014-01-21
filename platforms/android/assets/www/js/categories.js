var EcwidCategories = {}

EcwidCategories.curCat = 0;

EcwidCategories.categories = {}

EcwidCategories.loadCategories = function(parentId){
	//alert ("called")
	this.categories = EcwidCacheProxy.getData('/categories', this.categories);
	
	$('#ecwid_categories_list').html("");
	// alert (EcwidCategories.categories);
	// console.log(EcwidCacheProxy.getData('/categories'));
	 $("#categoriesTemplate").tmpl(this.categories).appendTo("#ecwid_categories_list");
   //  $('div[data-role=collapsible]').collapsible();         
     $('#ecwid_categories_list').listview('refresh');
     $('div[data-role=collapsible]').collapsible();
}

 