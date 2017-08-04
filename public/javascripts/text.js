$(document).ready(function(){
  var type_id=0;
  $("a.attribute-type-name").click(function(e){
	  console.log(e.target.id);
	  type_id=e.target.id;
	  var str=$(e.target).text();
	  $("input#Attribute-Type-Name").val(str);
  });
  
  $("button#add-new-attribute.btn.btn-danger").click(function(e){
	  var data={};
	  var query="insert into [product].[Product Attribute] ([Product Id],[Product Attribute Type Id],[Product Value Text]) values ("+url+","+type_id+",'"+$("input#Attribute-Value").val()+"')";
	  data.title="add-attribute";
	  data.message=query;
	  
	  $.ajax({
		  type:'POST',
		  data:JSON.stringify(data),
		  contentType:'application/json',
		  url:'http://localhost:3000/add-new-attribute',
		  success:function(data){
			console.log(data);
			location.reload();
		  }
	    });
    });
});