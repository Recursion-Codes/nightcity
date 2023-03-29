document.getElementById('inputform').onkeydown = function(e){
if(e.keyCode == 13){
		var userinput = inputform.value;
		parseinput(userinput);
		inputform.value="";
		keysound2.currentTime = 0;
		keysound2.play();
		keysound2.volume = .25;
    }
		else{
		keysound.currentTime = 0;
		keysound.volume = .25;
		keysound.play();
		}
    };
function parseinput(){
    username.value="";
    password.value="";
}