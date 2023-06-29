const $contactForm = $('form#stt_contact');

$contactForm.on('submit', function(e) {
  $("#btn_show").hide();
  $("#spin_show").show();
  e.preventDefault();
  var form_data = $('form#stt_contact').serialize();
  var form_submit_btn = $('form#stt_contact').find('button[type="submit"]');
  form_submit_btn.attr('disabled', 'disabled');
  form_submit_btn.text(form_submit_btn.data('btn_loading'));
  
  
  $.ajax({
    method: 'POST',
    url: $('form#stt_contact').attr('action'),
    dataType: 'json',
    data: form_data,
    success: function(result) {
      form_submit_btn.text(form_submit_btn.data('btn_text'));
      form_submit_btn.removeAttr('disabled', 'disabled');
      $("#spin_show").hide();
      if(result.success == 0 || result.recoutput == 0) {
        $("#btn_show").fadeIn();
        var remsg = result.msg;
        $("#text_show p").html(remsg);
        $("#text_show").fadeIn();
        setTimeout(function() {
          $("#text_show").hide();
        }, 3000);
      }       
      if(result.success == 1) {
        var remsg1 = "<b>Thank You!<b><br>We have received your mail! <br> - xo ST. TROPICA";
        $("#text_show p").html(remsg1);
        $("#text_show").fadeIn();
        setTimeout(function() {
          $("#text_show").hide();
          $("#btn_show").fadeIn();
        }, 3000);
        $('form#stt_contact')[0].reset();
        grecaptcha.reset();
      }
    },
  });
  
  
  
});