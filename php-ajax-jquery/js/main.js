$(document).ready(function(){ 
  //Check Username availability
  		$('#name').blur(function(){

  			var username = $(this).val();
  			$.ajax({
  				url:"check/checkuser.php",
  				method:"POST",
  				data:{name:username},
  				dataType:"text",
  				success:function(data){
  					$('#result').html(data);
  				}
  			});
  		});
  //  Autocomplete textbox...
  $('#skill').keyup(function(){
        var skill = $(this).val();
        if (skill != "") {
          $.ajax({
            url:"check/checkskill.php",
            method:"POST",
            data:{skill:skill},
            
            success:function(data){
              $('#status').fadeIn();
              $('#status').html(data);
            }  
        });
        }
    });

    $(document).on('click', 'li', function(){
      $('#skill').val($(this).text());
       $('#status').fadeOut();
    });
    //show password 

    $("#showpassword").on('click', function(){
      var pass = $("#password");
      var fieldtype = pass.attr('type');
      if (fieldtype == 'password') {
        pass.attr('type', 'text');
        $(this).text('Hide Password');
      }else{
         pass.attr('type', 'password');
        $(this).text('Show Password');
      }
 });

// auto refresh div content
  $("#autosubmit").click(function(){
      var content = $("#body").val();
      if ($.trim(content) != '') {
          $.ajax({
            url:"check/checkrefresh.php",
            method:"POST",
            data:{body:content},
            dataType:"text",
            
            success:function(data){
              $("#body").val("");
            }  
        });
          return false;
      }
  });

  setInterval(function(){
    $("#autostatus").load("check/getrefresh.php").fadeIn("slow");
  }, 1000);


  //live data search 

  $("#livesearch").keyup(function(){
    var live = $(this).val();
      if (live != "") {
          $.ajax({
            url:"check/livesearch.php",
            method:"POST",
            data:{search:live},
            dataType:"text",
            
            success:function(data){
              $('#statuslive').html(data);
            }  
        });
        }else{
          $('#statuslive').html("");
        }
  });


  //auto save data
    function autoSave(){
      var content = $("#content").val();
      var contentid = $("#contentid").val();
        if (content != "") {
          $.ajax({
            url:"check/autosave.php",
            method:"POST",
            data:{content:content, contentid:contentid},
            dataType:"text",
            
            success:function(data){
              if (data != '') {
                  $('#contentid').val(data);
              }
              $('#statussave').text("Content Save as Draft..");
              setInterval(function(){
                $('#statussave').text("");
              }, 1000);
            }  
        });
        }
    }


    setInterval(function(){
                autoSave();
              }, 10000);


});//main


