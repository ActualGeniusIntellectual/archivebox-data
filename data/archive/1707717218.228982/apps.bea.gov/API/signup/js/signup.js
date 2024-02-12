$(function () {
    signup.init();
});
var signup = new function(){
	"use strict";
    const obj = this;
    this.application_URLPath = '/api/data/';
    this.key = "";
    this.init = function () {
        $("#resetcaptcha").click(function(){
            obj.ResetCaptcha();
            obj.CheckErrorMessage()
        }).click();
    }
    this.ResetCaptcha = function(){
        $("#captchaDiv").empty();
        $.ajax({
            url: obj.application_URLPath + 'signup/GetCaptcha',
            type: 'GET',
            success: function (data) {
                let r = $.parseJSON(data);
                obj.key = r.key;
                var image = new Image();
                image.src = `data:image/png;base64,${r.img}`;
                $("#captchaDiv").append(image);
            },
            error: function (data) {
                modals.Info('error', 'Request failed. Please try again later. ');
            },
            complete: function (data) {
                //alert('complete');
            }
        });
    }
    this.ShowError = function(msg) {
		$("#error-message").text(msg);
		$("#errmsg").addClass("errmsg")
		$("#errmsg").fadeIn('slow');
	}
	this.ValidateForm = function() {
		$("#errmsg").removeClass("errmsg")
		$("#errmsg").fadeOut('slow');

		/*var org_val=document.forms["reqform"]["org"].value;
		var email_val=document.forms["reqform"]["email"].value;
		var terms_val=document.forms["reqform"]["terms"].value;*/

		var captcha_val=$("#captchatxt").val();
		var org_val=$("#org").val();
		var email_val=$("#email").val();
		var terms_val=$("#terms:checked").val();

		var email_patt = /[a-z0-9!#$%&'*+//=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+//=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

		if (captcha_val.length < 1) {
			obj.ShowError("Please enter captcha text.");
			return false;
		}
		
		if (org_val.length < 1) {
			obj.ShowError("Please provide your name or organization name.");
			return false;
		}

		if (!email_patt.test(email_val)) {
			obj.ShowError("Please check that you typed your email address correctly.");
			return false;
		}

		if (terms_val != "1") {
			obj.ShowError("You must agree to the Terms of Service to continue.");
			return false;
		}

		//dataString = 'org='+ org_val + '&email=' + email_val + '&terms=' + terms_val + '&captcha=' + captcha_val ;  

		
        var formData = new FormData();
        formData.append('org', org_val);
        formData.append('email', email_val);
        formData.append('terms', terms_val);
        formData.append('captcha', captcha_val);
        formData.append('key', obj.key);

		$.ajax({  
			type: "POST",  
            url: obj.application_URLPath + 'signup/Register', 
			cache: false,
            data: formData,
            processData: false, // tell jQuery not to process the data
            contentType: false, // tell jQuery not to set contentType
			success: function(data) 
			{  
				let dataObj = $.parseJSON(data);
				if(dataObj.Status == 'Success')
				{
					$('#success-message').empty().html(dataObj.Message);  
					$('#requestForm').fadeOut('slow');
                    $('#successMessage').fadeIn('slow'); 
				}
				else{
					obj.ShowError(dataObj.Error.Description);
					obj.ResetCaptcha();
				}
			},
			complete: function(jqXHR, textStatus)
			{

			}
		});  
		return false; 
	}
	this.CheckErrorMessage = function() {
		var s = window.location.search;

		$("#errmsg").fadeOut('slow');

		if (s == '?message=missing-arguments') {
			obj.ShowError("Please provide an organization name and email address");
		} else if (s == '?message=email-address-too-long') {
			obj.ShowError("Your email address is too long;  Please provide a different one");

		} else if (s == '?message=org-name-too-long') {
			obj.ShowError("Your organization name is too long;  Please provide a shorter one");

		} else if (s == '?message=need-terms') {
			obj.ShowError("Please click the checkbox and agree to the terms of service");
		}
	}

};
