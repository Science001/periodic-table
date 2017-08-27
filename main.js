function main()
{
	console.log("Yes");
	$('#ptable').fadeIn(1000);
	function sendDetails(data){
		$('#ptable').slideToggle();
		$('#display-block').slideToggle();
		$('body').css("background-color","#"+data.cpkHexColor);
		$('body').css("margin-left","20px");
		$('body').css("margin-top","20px");
		$('#esymbol').text(data.symbol);
		$('#group').text(data.groupBlock);
		$('#arad').text(data.atomicRadius);
		$('#phase').text(data.standardState);
		$('#ename').text(data.name);
		$('#irad').text(data.ionRadius);
		$('#mp').text(data.meltingPoint);
		$('#ano').text(data.atomicNumber);
		$('#vrad').text(data.vanDelWaalsRadius);
		$('#bp').text(data.boilingPoint);
		$('#amass').text(data.atomicMass);
		$('#btype').text(data.bondingType);
		$('#density').text(data.density);
		$('#eaff').text(data.electronAffinity);
		$('#ie').text(data.ionizationEnergy);
		$('#eneg').text(data.electronegativity);
		$('#oxst').text(data.oxidationStates);
		$('#discover').text(data.yearDiscovered);
	}
	
	$('.cell').on('click', function(){
		console.log('click');
		//Create request object
		var request = new XMLHttpRequest();
		
		//To-do
		request.onreadystatechange = function(){
			if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
				console.log("Data Request Success");
				var data = request.responseText;
				data = JSON.parse(data);
				console.log(data);
				sendDetails(data);
			}
		};
		
		//Make request
		var $eid = $(this).attr('id');
		request.open('GET','http://localhost/fetch-details?id=' + $eid,true);
		request.send(null);
	});
	
	$('#up').on('click', function(){
		$('#ptable').slideToggle();
		$('#display-block').slideToggle();
		$('body').css("background-color","white");
	});
		
}
$(document).ready(main);
