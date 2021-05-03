import React from 'react'

export const Heading = (props) => {

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

    var heading = '`4!!(3=s 4+3'
    if(props.lang){
        heading = decrypt('fullstack', heading)
    }


    return (
        <div>{heading}</div>
    )
}
