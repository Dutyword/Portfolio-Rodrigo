function destacarMenuSelecionado()
{
	var menu=document.getElementById("menuSelecionado");
	menu.style.backgroundColor="white";
}

function updateDate()
{
	var date=new Date();
	
	var hour=date.getHours();
	
	var minute=date.getMinutes();
	
	switch(minute) 
	{
		case 0:
			minute="00";
			break;
			
		case 1:
			minute="01";
			break;
			
		case 2:
			minute="02";
			break;
			
		case 3:
			minute="03";
			break;
			
		case 4:
			minute="04";
			break;
			
		case 5:
			minute="05";
			break;
			
		case 6:
			minute="06";
			break;
			
		case 7:
			minute="07";
			break;
			
		case 8:
			minute="08";
			break;
			
		case 9:
			minute="09";
			break;
	}
	
	var second=date.getSeconds();
	
	switch(second) 
	{
		case 0:
			second="00";
			break;
			
		case 1:
			second="01";
			break;
			
		case 2:
			second="02";
			break;
			
		case 3:
			second="03";
			break;
			
		case 4:
			second="04";
			break;
			
		case 5:
			second="05";
			break;
			
		case 6:
			second="06";
			break;
			
		case 7:
			second="07";
			break;
			
		case 8:
			second="08";
			break;
			
		case 9:
			second="09";
			break;
	}
	
	var currentTime=hour+":"+minute+":"+second;
	
	document.getElementById("hora").textContent=currentTime;
	
	setTimeout("updateDate()",1000);
	
}

$(".newTab").click
(
	function() 
	{
		alert( "Link abrirá em outra guia!" );
	}
);

destacarMenuSelecionado();

updateDate();
