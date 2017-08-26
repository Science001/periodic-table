function main()
{
	console.log("Yes");
	$('#display-block').slideToggle();
	
	function sendDetails(data){
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
				$('#ptable').slideToggle();
				$('#display-block').slideToggle();
				$('#display-block').css("background-color","#"+data.cpkHexColor);
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
	});
		
}
$(document).ready(main);