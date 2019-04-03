function seeBeers(secondsView, secondsStopView, sensorBackDoor,  sensorPilsner, sensorIPA, sensorLarger, sensorStout, sensorWheat, sensorPaleAle, callBack){

	let msgAlert = '';

	if (sensorBackDoor==true) { //teste doors sensors
		msgAlert =  '<fieldset><h4 style="color: red; text-align:center;">Warning! The Back Doors Is Open!</h4></fieldset>';
		
	} else {
		//test sensors and concatenate messages
		msgAlert = '<fieldset>';

			if(sensorPilsner > -4 || sensorPilsner < -6){
				msgAlert = msgAlert + '<h7 style="color: red; text-align:left;">Warning! Beer Pilsner ' + sensorPilsner + '&#8451!</h7>';
			}else{
				msgAlert = msgAlert + '<h7 style="color: black; text-align:left;">Beer Pilsner ' + sensorPilsner + '&#8451!</h7>';
			}

			if(sensorIPA > -5 || sensorIPA < -6){
				msgAlert = msgAlert + '<br/><h7 style="color: red; text-align:left;">Warning! Beer IPA ' + sensorIPA + '&#8451!</h7>';				
			}else{
				msgAlert = msgAlert + '<br/><h7 style="color: black; text-align: eft;">Beer IPA ' + sensorIPA + '&#8451!</h7>';
			}

			if(sensorLarger > -4 || sensorLarger < -7){
				msgAlert = msgAlert + '<br/><h7 style="color: red; text-align:left;">Warning! Beer Larger ' + sensorLarger + '&#8451!</h7>';				 
			}else{
	       			msgAlert = msgAlert + '<br/><h7 style="color: black; text-align:left;">Beer Larger ' + sensorLarger + '&#8451!</h7>';	
			}
	
			if(sensorStout > -6 || sensorStout < -8){
 				 msgAlert = msgAlert + '<br/><h7 style="color: red; text-align:left;"> Warning! Beer Stout ' + sensorStout + '&#8451!</h7>';				 
			}else{
				 msgAlert = msgAlert + '<br/><h7 style="color: black; text-align:left;">Beer Stout' + sensorStout + '&#8451!</h7>';
			}

			if(sensorWheat > -3 || sensorWheat < -5){
				msgAlert = msgAlert + '<br/><h7 style="color: red; text-align:left;">Warning! Beer Wheat Bier ' + sensorWheat + '&#8451!</h7>';				
			}else{
				msgAlert = msgAlert + '<br/><h7 style="color: black; text-align:left;">Beer Wheat Bier ' + sensorWheat + '&#8451!</h7>';
			}

			if(sensorPaleAle > -4 || sensorPaleAle < -6){
				msgAlert = msgAlert + '<br/><h7 style="color: red; text-align:left;">Warning! Beer Pale Ale ' + sensorPaleAle + '&#8451!</h7>';
			}else{
				msgAlert = msgAlert + '<br/><h7 style="color: black; text-align:left;">Beer Pale Ale ' + sensorPaleAle + '&#8451!</h7>';
			}			

			msgAlert = msgAlert + '</fieldset>';
		
	}  
 
	//show all messages
	swal({
		title:false,
		html: msgAlert,
		type: '',
		customClass: 'swal-wide',
		showCancelButton: false,
		showConfirmButton:false,
		timer: secondsView,
		onClose: () => { 
				  setTimeout(function(){ mainFunc(); }, secondsStopView); //semi-recursive call to mainFunc
				}	
	      });
	
}