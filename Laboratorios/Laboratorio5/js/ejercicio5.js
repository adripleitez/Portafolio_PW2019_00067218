function IsPalindrome(unaPalabra){
    var cont=0;

    for(var i=0; i< unaPalabra.length; i++){
        if(unaPalabra[i] === unaPalabra[unaPalabra.length-i-1]){
            cont++;
        }
    }

    if(cont === unaPalabra.length){
        console.log("Es palindrome");
    }else{
        console.log("No es palindrome");
    }
}