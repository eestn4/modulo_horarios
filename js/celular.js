 var valor=1;
 $( document ).ready(function() {
        obtener();
        if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) ) { 
             $("#horarios").on("swipeleft",function(){
                    if (valor == 5) {
                        valor=5;
                    }else{
                        valor=valor+1; 
                        obtener();
                    }  
                });

                 $("#horarios").on("swiperight",function(){
                    if (valor == 1) {
                        valor=1;
                    }else{
                        valor=valor-1;
                        obtener();  
                    }
                        
                });

        }
$(document).on('change','#cursoslist',function(){
    valor=1;
    obtener();
});
});