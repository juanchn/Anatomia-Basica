firebase.auth().onAuthStateChanged(function(user) {
  
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Bienvenido estimado : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  function registro(){
    var usuario = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;

    firebase.auth().createUserWithEmailAndPassword(usuario, clave).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    
           // window.alert("registro exitoso");
           limpiarFormulario();
           window.alert("registro exitoso");
        
      });

  }
  function limpiarFormulario() {
   // document.getElementById("Fregistro").reset();
   document.getElementById("correo").value="";
   document.getElementById("clave").value="";
  }