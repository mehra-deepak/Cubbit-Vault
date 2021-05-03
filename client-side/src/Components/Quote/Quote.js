import React from 'react';
const Quote = (props) => {
    function shiftingMessage(mesArray, chipherKey){
        for(var i=0;i<mesArray.length;i++){
            var num = mesArray[i].charCodeAt(0);
            num = num - chipherKey;
            while(num<32){
                num = num + 94;
            }
            mesArray[i] = String.fromCharCode(num)
        }
    }
    
    function decrypt(key, message) {
    
        var chipherKey = 0;
        for(var i = 0; i<key.length; i++){
            chipherKey += key.charCodeAt(i);   
        }
    
        var mesArray = [...message];        
        shiftingMessage(mesArray, chipherKey);
        return mesArray.join("");
    }


	var quote = 'q\'$=6\'.+$=(2=-$5$1=3\'$=24,=.%=3\'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-=\'.6=6$++=3\'$=(-#(5(#4 +2=6.1*=3.&$3\'$1'

    if(props.lang){
        quote = decrypt('fullstack', quote)
    }

	return (
		<div>{quote}</div>
	);
};

export default Quote;
