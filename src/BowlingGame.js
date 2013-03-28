//
/*(When scoring "X" indicates a strike, "/" indicates a spare, "-" indicates a miss)*/

var bowlingGame = function(rolls) {

var turns = rolls.replace(/(\/|[0-9-][0-9-]|X)/g,"$1;").split(";").filter(function(item){ return item!=='';});;
var module={};

var goBackTurn = function(turns, total, nextOne, nextSecond ){
if(turns.length===0){ return total};
var current = turns[turns.length-1],
    currentValue=0,
    newTotal = total,
	firstRow =0,
	secondRow =0;
	
switch(current[0]){
	case 'X' : firstRow=10; break;
	case '-' : firstRow=0; break;
	default: firstRow= +current[0];
}


if(current[1]){
	switch(current[1]){
		case '/' : secondRow=10-firstRow; break;
		case '-' : secondRow=0; break;
		default: secondRow= +current[1];
	}
}

newTotal += firstRow + secondRow ;
if(turns.length<10){
	if((firstRow+secondRow)===10){
		newTotal+=nextOne;
	}
	if((firstRow)===10){
	newTotal+=nextSecond;
	}
}
return goBackTurn(turns.slice(0, turns.length-1), newTotal, firstRow , current[1] ? secondRow :nextOne );
}

module.score=function(){
	return goBackTurn(turns, 0, 0 ,0);
};

return module;

}