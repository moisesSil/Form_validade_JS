function validar(){
  // create the variables
  var name = Form_Dados.user.value;
  var pass = Form_Dados.pass_one.value;
  var pass2 = Form_Dados.pass2.value;

  //now create validation, user if 

  if (name === ""){
    alert("field name is required");
    
    Form_Dados.user.focus()
    return false;
  }

  if(pass ===""){
    alert("field pass is required");
    Form_Dados.pass_one.focus()
    return false
  }
  if(pass2 !=pass){
    alert("is password is not correct"); 
    Form_Dados.pass2.focus()
    return false
  }








}