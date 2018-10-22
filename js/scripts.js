$(document).ready(function(){
  $("#grocery").submit(function(event){
    event.preventDefault();

  var list=["thing1", "thing2", "thing3", "thing4"];
  var grocerylist=[];

  list.forEach(function(thing){

    var input= $("#" + thing).val().toUpperCase();
    grocerylist.push(input);
    console.log(grocerylist);
  });
  grocerylist.sort();
    grocerylist.forEach(function(grocery){
      // grocerylist.sort();
      // console.log(grocerylist);
      $("#grocery").hide();
      $("#output").append("<li>" + grocery + "</li>");

    });
  });
  });
