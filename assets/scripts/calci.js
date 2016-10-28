$(document).ready(function() {
  $('#calculator .input').click(function (){
    var input;
    if (this.dataset.keyType == "digit") {
    input=this.dataset.digit;
  } else if (this.dataset.keyType == "operator") {
    input=this.dataset.operator;
  }else if (this.dataset.keyType == "delete") {
    $('#preview').html($('#preview').html().slice(0, -1));
  }else if (this.dataset.keyType == "equals") {
    $('#result').html(eval($('#preview').html()));

  }
  if (typeof(input) != 'undefined') {
    $('#preview').html($('#preview').html() + input);
  }

});

$('#calculator #delete').dblclick(function() {
  $('#preview').html(' ');
  $('#result').html(' ');
});

 ['0','1','2','3','4','5','6','7','8','9']. forEach(function(digit){
    $(document).bind('keyup','digit',function() {
      $('#preview').html($('#preview').html() + '0');
    });
   });
 });
