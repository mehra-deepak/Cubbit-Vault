import React from 'react';

const About = (props) => {

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

	var about = '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>'

    if(props.lang){
        about = decrypt('fullstack', about)
    }

	return (
		<div>{about}</div>
	);
};

export default About;
