

var GetDadosFormulario = 
{
		init: function()
		{
			GetDadosFormulario.setForm();
		},
		
		setForm: function()
		{
			var form = document.querySelector('form');
			form.addEventListener('submit', function(event)
			{
				var cliente = GetDadosFormulario.getDados(form);
				GetDadosFormulario.saveDados(cliente, form);
				
				event.preventDefault();
			});
		},
		
		
		showMessage: function() {
			var message = document.getElementById("message");
			message.innerHTML = 'Este email j� foi utilizado em outra conta!';
		},
		
		
		showMessageOK: function() {
			var message = document.getElementById("messageOK");
			message.innerHTML = 'Acesse seu e-mail e confirme o cadastro';
		},
		
		
		sendEmail: function(form) {
			var	cliente =
			{
				nome: form.nome.value,
				email: form.email.value,
				senha: form.senha.value
			};
			var ajax = ajaxInit();
			var  url = 'http://www.economy.zz.mu/servletEmail?name=' + cliente.nome + 
				'&email=' + cliente.email + '&password=' + cliente.senha;
			ajax.open('GET', url, true);
			ajax.send();
			
			GetDadosFormulario.clearForm(form);
			GetDadosFormulario.showMessageOK();
			
		},
		
		
		getDados: function(form)
		{
			var
				cliente =
				{
					nome: form.nome.value,
					email: form.email.value,
					senha: form.senha.value
				};
				
			return cliente;
			
		},
		
		saveDados: function(cliente,form)
		{
			var ajax = ajaxInit(),
				url = 'http://www.economy.zz.mu/servletCliente?nome=' + cliente.nome + 
					'&email=' + cliente.email +'&senha=' + cliente.senha;
			ajax.open('GET',url, true);
			ajax.send();
			ajax.onreadystatechange= function() {
				if(ajax.readyState == 4 && ajax.status == 200){
					var confirm = ajax.responseText;
					if(confirm == '1'){
						GetDadosFormulario.sendEmail(form);					
					}
					else{
						GetDadosFormulario.showMessage();
					}
				}
				
			};
		},
		
		clearForm: function(form)
		{
			form.nome.value = "";
			form.email.value = "";
			form.senha.value = "";
 		}
};


GetDadosFormulario.init();