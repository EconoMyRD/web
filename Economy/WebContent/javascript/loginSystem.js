var loginSystem = {
	
	init: function(){
		loginSystem.setForm();
	},
	
	setForm: function() {
		var form = document.getElementById('loginSystem');
		form.addEventListener('submit', function(event){
			loginSystem.getCredentials(form);
			event.preventDefault();		
		});		
	},
	
	getCredentials: function(form) {
		var email = form.user.value,
			password = form.password.value;
		
		loginSystem.sendCredentials(email, password);
	},
	
	sendCredentials: function(email,password) {
		var ajax = ajaxInit(),
			url = 'http://www.economy.zz.mu/login?email=' + email + '&password=' + password;
		ajax.open('GET', url, true);
		ajax.send();
		ajax.onreadystatechange = function() {
			if(ajax.readyState==4 && ajax.status==200){
				var active = ajax.responseText;
				
				loginSystem.verifyActive(active);					
			}
		};
	},
	
	
	verifyActive: function(active) {
		
		var message = document.getElementById("messageLogin");
		message.innerHTML = '';
		if(active == '0'){
			message.innerHTML ='Usu�rio n�o cadastrado';
		}
		else if(active == '1'){
			message.innerHTML='Usu�rio ainda n�o confirmado. Verifique seu email.';
		}
		else if(active == '2'){
			message.innerHTML = 'Senha incorreta';
		}
		else{
			window.location.href= 'http://www.economy.zz.mu/html/indexGerencial.html';
		}
	}
	
};

loginSystem.init();