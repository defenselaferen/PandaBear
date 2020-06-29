var writeObjectIndex = 0;
let chacheSDIWSB = [];
const passwordHash25 = {
	pass1 : 'snf92er(oscbwq)',
	pass2 : 'ne3iofcgbowkewo',
	pass3 : 'w239eih()DHW@O)',
	pass4 : 't*@Gi1w89usgI@!'
}
function input(obejectLitel){
	if(obejectLitel.mess == null){
		console.error('Please Enter Message To Make Input');
	} else if(obejectLitel.type == null) {
		console.error('Please Enter Type To Make Input');
	}
	if(obejectLitel.type == 'confirm'){
		let result = confirm(obejectLitel.mess);
		return result;
	} else if(obejectLitel.type == 'propmt') {
		let result = propmt(obejectLitel.mess);
		return result;
	} else {
		console.error('I dont know what your mean');
		return false;
	}
}
function Console(obejectLitel){
	if(obejectLitel.mess == null){
		console.error('Please Enter Message To Make Input');
	} else if(obejectLitel.type == null) {
		console.error('Please Enter Type To Make Input');
	}
	if(obejectLitel.type == 'default'){
		console.log(obejectLitel.mess);
		return flase;
	} else if(obejectLitel.type == 'error') {
		console.error(obejectLitel.mess);
		return false;
	} else {
		console.error('I dont know what your mean');
		return false;
	}
}
class SecureObjective{
	constructor(props){
		if(props.pass4 == passwordHash25.pass4){
			console.log('Running Secure ["SUCCESS"]');
			this.final = true;
		} else {
			console.error('Running Secure ["ERROR"]');
			this.final = false;
		}
	}

}
class Write{
	constructor(){
		let result = new SecureObjective({
			pass4 : 't*@Gi1w89usgI@!'
		});
		if(result.final == true){
			this.location = true;
			console.log('Running Write ["SUCCESS"]');
		} else {
			this.location = false;
			console.error('Running Write ["ERROR"]');
		}
	}
	htmlCall(props){
		if(props.qjdbx == 'public'){
			if(props.pass1 == passwordHash25.pass1){
				if(props.pass2 == passwordHash25.pass2){
					if(props.pass3 == passwordHash25.pass3){
						chacheSDIWSB.push(props.htmlId);
						document.write(props.htmlId);
					}
				}
			}
		} else if(props.qjdbx == 'developer') {
			if(props.pass1 == passwordHash25.pass1){
				if(props.pass2 == passwordHash25.pass2){
					if(props.pass3 == passwordHash25.pass3){
						writeObjectIndex++;
						chacheSDIWSB.push(props.htmlId);
						document.write(props.htmlId);
					} else {
						console.error('Running Write ["ERROR"]');
					}
				} else {
					console.error('Running Write ["ERROR"]');
				}
			} else {
				console.error('Running Write ["ERROR"]');
			}
		}
	}
}
function MessageSecure(){
	let result = new Write();
	if(result.location == true){
		return result;
	} else {
		return false;
	}
}
let secureGet = MessageSecure();

function Writes(props, type = 'public'){
	secureGet.htmlCall({
		pass1 : 'snf92er(oscbwq)',
		pass2 : 'ne3iofcgbowkewo',
		pass3 : 'w239eih()DHW@O)',
		qjdbx : type,
		htmlId : props
	});
}
function getIndexWrite(){
	if(writeObjectIndex > 0){
		console.log("You Write : " + writeObjectIndex);
	} else {
		console.log("you Not Make Anything");
	}
}
function showObject(){
	console.log(chacheSDIWSB);
}
