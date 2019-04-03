//main function 
function mainFunc(){
	let secondsView = 8000; //set the number that best suits you
	let secondsStop = 2000; //set the number that best suits you
	let sensorDoors = (Math.floor((Math.random() * 100) + 1)==1) ? true : false; // simulate to doors sensors

	//simulate to beers sensors..
	let sensPilsner = Math.floor((Math.random() * -10) + 1); 
	let sensIPA     = Math.floor((Math.random() * -10) + 1); 
	let sensLarger  = Math.floor((Math.random() * -10) + 1); 
	let sensStout   = Math.floor((Math.random() * -10) + 1); 
	let sensWheat   = Math.floor((Math.random() * -10) + 1); 
	let sensPaleAle = Math.floor((Math.random() * -10) + 1); 

	seeBeers(secondsView, secondsStop, sensorDoors,  sensPilsner, sensIPA, sensLarger, sensStout, sensWheat, sensPaleAle); //call seeBers function
}