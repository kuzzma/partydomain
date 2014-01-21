
function UploadToDev(imageURI){

var options = new FileUploadOptions();
         options.fileKey="file";
         options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
         options.mimeType="image/jpeg";

         var params = {};
         params.value1 = "test";
         params.value2 = "param";

         options.params = params;

         var ft = new FileTransfer();
         ft.upload(imageURI, encodeURI("http://dev.qtmsoft.com/~kuzma/upload.php"), win, fail, options);
         
}

function win(r) {
	alert('File uploaded: ' + r.response);
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}

function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 20,
      destinationType: destinationType.FILE_URI });

  }
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 20, 
      destinationType: destinationType.FILE_URI,
      sourceType: source });
  }

  // Called if something bad happens.
  // 
  function onFail(message) {
    alert('Failed because: ' + message);
  }

  function gotFS(fileSystem) {
      fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
  }

  function gotFS2(fileSystem) {
      fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry2, fail);
  }
  function gotFileEntry(fileEntry) {
      fileEntry.createWriter(gotFileWriter, fail);
  }
  function gotFileEntry2(fileEntry) {
	  fileEntry.file(gotFileReader, fail);
}
  function gotFileReader(file) {
	  var reader = new FileReader();
      reader.onloadend = function(evt) {
          console.log("Read as text");
          console.log(evt.target.result+'erter');
      };
      reader.readAsText(file);
  }
  
  function gotFileWriter(writer) {
	  writer.onwrite = function(evt) {
          console.log("write success");
      };
      writer.write("some sample text");
      // contents of file now 'some sample text'
      writer.truncate(11);
      // contents of file now 'some sample'
      writer.seek(4);
      // contents of file still 'some sample' but file pointer is after the 'e' in 'some'
      writer.write(" different text");
      // contents of file now 'some different text'
  }
  
  function saveFile(){
	  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	  
  }
  
  function restoreFile(){
	  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS2, fail);
	  
  }
  
 
  function getOrders(parentId){
	  var httpOptions = {
      trustAll: true
  };
  var params = {
      parent: parentId,
      type: 'post'// note this is a GET request post refers to the facebook wall posts
  };
  var ecwid_store_id = localStorage.getItem("ecwid_store_id");
  var apiUrl = 'https://app.ecwid.com/api/v1/'+ecwid_store_id+'/orders?secure_auth_key=6gng3JFVDSZK&from_date=2008-01-01&to_date=2014-02-01';
 //alert(apiUrl);
  window.plugins.HttpRequest.execute(apiUrl,'get', params, httpOptions,
          function(response) {

              var code = response.code;
              var message = response.message;
              var body = response.body;
              var data = $.parseJSON(body);
              var lists = '';
             // alert (data.count +'  ' +data.total);
              
              $("#orderTemplate").tmpl(data.orders).appendTo("#ecwid_orders_list");
                  $('div[data-role=collapsible]').collapsible();         
                  $('#ecwid_orders_list').listview('refresh');
                  $('div[data-role=collapsible]').collapsible();
               
              return;
          },
          function(response) {
        
              var code = response.code;
              var message = response.message;
              var body = response.body;

              alert('Request : ' + message + ' code ' + code + body);
          });
}
  function getProducts(catId){
	  var httpOptions = {
          trustAll: true
  };
  var params = {
      category: catId,
      type: 'post'// note this is a GET request post refers to the facebook wall posts
  };
  var ecwid_store_id = localStorage.getItem("ecwid_store_id");
  var apiUrl = 'http://app.ecwid.com/api/v1/'+ecwid_store_id+'/products';
//alert (apiUrl+ '   getEP');
  window.plugins.HttpRequest.execute(apiUrl,'get', params, httpOptions,
          function(response) {

              var code = response.code;
              var message = response.message;
              var body = response.body;
              var data = $.parseJSON(body);
              var lists = '';
              
              //alert (data.count+'  '+data.total+ '234');
              
              for (var i=0, len=data.length; i < len; i++) {
                  console.log(data[i].name);
                  lists += '<li><a href="acura.html"><img src="'+data[i].smallThumbnailUrl+'" style="max-width: 100px;"/><h1>'
                  +data[i].name+'</h1><p>Short description</p><p>'+data[i].price+'</p></a></li>';
                  //localStorage.setItem("cat"+data[i].id, data[i].name);
              }
              $("#ecwid_products_list").html(lists);
              $('#ecwid_products_list').listview('refresh');
              //$('#textarea22').html(JSON.stringify(body));
              return;
          },
          function(response) {
        
              var code = response.code;
              var message = response.message;
              var body = response.body;

              alert('Request : ' + message + ' code ' + code + body);
          });
}
  

  
  function changeCat(newcat){
	  currentCategory=newcat;
	  callEcwid(currentCategory);
  }
  
  function saveOrderStatus(orderId){
	  if (confirm('Change payment status of order #'+ orderId)) {
		  var httpOptions = {
			      trustAll: true
			  };
			  var params = {
				  new_payment_status: $("#paymentStatus-select").val(),
				  new_fulfillment_status : $("#fulfillmentStatus-select").val(),
			      type: 'post'// note this is a GET request post refers to the facebook wall posts
			  };
			  var ecwid_store_id = localStorage.getItem("ecwid_store_id");
			  //var newOrderStatus = '&new_payment_status='+$("#paymentStatus-select").val()+'&new_fulfillment_status='+$("#fulfillmentStatus-select").val();
			  var apiUrl = 'https://app.ecwid.com/api/v1/'+ecwid_store_id+'/orders?secure_auth_key=6gng3JFVDSZK&order='+orderId;
			 //alert(apiUrl);
			  window.plugins.HttpRequest.execute(apiUrl,'post', params, httpOptions,
			          function(response) {

			              var code = response.code;
			              var message = response.message;
			              var body = response.body;
			             
			            
			          },
			          function(response) {
			        
			              var code = response.code;
			              var message = response.message;
			              var body = response.body;

			              alert('Request : ' + message + ' code ' + code + body);
			          });
		  

	  
    //alert("yes "+ orderId);
	  } else {
    alert("cansel")
  }

	  
	  
	  
  }