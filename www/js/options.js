var EcwidOptions = {}

 EcwidOptions.options = {
 	storeId   : {value		 : 214236, 
 		         name		 : "Ecwid store ID",
 		         description : "Enter here your Ecwid store ID",
 		         controlName : "ecwid_store_id"
 	},
 	secretKey : {value		 : "6gng3JFVDSZK",
 		         name 		 : "Ecwid API Secret Key",
 		         description : "Enter here your Ecwid secret key",
 		         controlName : "ecwid_secret_key" 
 	}
 }


 EcwidOptions.saveOptions = function(){
     for (var opp in this.options){
     	 this.options[opp].value= $("#"+this.options[opp].controlName).val();
     }
 }

 EcwidOptions.restoreOptions = function(){
         for (var opp in this.options){
         	$("#"+this.options[opp].controlName).val(this.options[opp].value);
         }
 }    

 EcwidOptions.saveOptionsToLocalStorage = function(){
         for (var opp in this.options){
         	localStorage.setItem(this.options[opp].controlName, this.options[opp].value);
         }
 }
 
 EcwidOptions.restoreOptionsFromLocalStorage = function(){
             for (var opp in this.options){
             	this.options[opp].value=localStorage.getItem(this.options[opp].controlName);
             }

 }
  
   
/*
 EcwidOptions.ecwidProfile = {
		 storeName : "Ecwid Demo Store",
		  storeUrl : "http://www.ecwid.com/demo-frontend.html",
		  mobileUrl : "http://mdemo.ecwid.com",
		  weightUnit : "POUND",
		  weightGroupSeparator : " ",
		  weightDecimalSeparator : ".",
		  currency : "USD",
		  currencyPrefix : "$",
		  currencySuffix : "",
		  currencyGroupSeparator : " ",
		  currencyDecimalSeparator : ".",
		  groupSeparator : " ",
		  decimalSeparator : ".",
		  numericPrecision : 2,
		  closed : false
 };
   	this.getEcwidProfile = function (storeId){
   		
   		var httpOptions = {
            trustAll: true
        };
   		
        var params = {
            //parent: parentId,
            type: 'post'// note this is a GET request post refers to the facebook wall posts
        };
        alert (this.storeId+ '   getEP');
        //var ecwid_store_id = localStorage.getItem("ecwid_store_id");
        var apiUrl = 'http://app.ecwid.com/api/v1/'+storeId+'/profile';
        window.plugins.HttpRequest.execute(apiUrl,'get', params, httpOptions,
            function(response) {
                var code = response.code;
                var message = response.message;
                var body = response.body;
                
                             
             //that.ecwidProfile= body;
             //   resp = $.parseJSON(body);
           //    tthat.ecwidProfile.storeName= resp.storeName;
           // 	alert ("konstruktor123123123123");
            },
            function(response) {
          
                var code = response.code;
                var message = response.message;
                var body = response.body;

                alert('Request : ' + message + ' code ' + code + body);
        });
        
        return resp;
   	};
 
*/ 
 
   	

