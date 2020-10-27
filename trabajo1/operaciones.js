$(document).ready(function(){
    $("#sum").click(function(){
        var n1 = $("#num1").val();
        var n2 = $("#num2").val();

        if (n1==""||n2==""||n1==null||n2==null){
            window.alert("Ingrese numeros");
        }
        else{
            var opera=n1+n2;
            window.alert("el resultado es = "+opera);
        }
    });
    $("#res").click(function(){
        var n1 =$("#num1").val();
        var n2 =$("#num2").val();

        if (n1==""||n2==""||n1==null||n2==null){
            window.alert("Ingrese numeros");
        }
        else{
            var opera=n1-n2;
            window.alert("el resultado es = "+opera);
        }
    });
    $("#div").click(function(){
        var n1 =$("#num1").val();
        var n2 =$("#num2").val();

        if (n1==""||n2==""||n1==null||n2==null){
            window.alert("Ingrese numeros");
        }
        else{
            var opera=n1/n2;
            window.alert("el resultado es = "+opera);
        }
    });
    $("#multi").click(function(){
        var n1 =$("#num1").val();
        var n2 =$("#num2").val();

        if (n1==""||n2==""||n1==null||n2==null){
            window.alert("Ingrese numeros");
        }
        else{
            var opera=n1*n2;
            window.alert("el resultado es = "+opera);
        }
    });
});
