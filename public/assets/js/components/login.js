window.onload = function () {
  if (window.jQuery) {
    // jQuery is loaded
    console.log("Yeah!ff");
    $("#account-login").click(async () => {
      const email = $("#login-email").val();
      const password = $("#login-password").val();
      if (!validateEmail(email) || !CheckPassword(password)) {
        setBottomBorderRed($("#login-email"));
        setBottomBorderRed($("#login-password"));
        window.alert("wrong password or email");
      } else {
        setBottomBorderNormal($("#login-email"));
        setBottomBorderNormal($("#login-password"));
      }
      const body = {
        email,
        password,
      };
      const res = await POST("http://localhost:5050/log-in", body);
      window.localStorage.setItem('ProServUserToken', res.token);
      const token = window.localStorage.getItem('ProServUserToken');
      console.log(res.token);
      console.log(token);
    });

    $("#signUpBtn").click(async () => {
      const email = $("#signUp-email").val();
      const fullname = $("#signUp-fullName").val();
      const password = $("#signUp-password").val();
      const rePassword = $("#signUp-re-password").val();
      if (fullname.length < 3) {
        setBottomBorderRed($("#signUp-fullName"));
      } else {
        setBottomBorderNormal($("#signUp-fullName"));
      }
      if (!validateEmail(email)) {
        setBottomBorderRed($("#signUp-email"));
      } else {
        setBottomBorderNormal($("#signUp-email"));
      }

      if (password == rePassword) {
        setBottomBorderNormal($("#signUp-password"));
        setBottomBorderNormal($("#signUp-re-password"));
        if (!CheckPassword(password)) {
          setBottomBorderRed($("#signUp-password"));
          setBottomBorderRed($("#signUp-re-password"));
        } else {
          setBottomBorderNormal($("#signUp-password"));
          setBottomBorderNormal($("#signUp-re-password"));
        }
      } else {
        setBottomBorderRed($("#signUp-password"));
        setBottomBorderRed($("#signUp-re-password"));
    
      }
      const body  = {
        email,
        fullname ,
        password 
    }
    const res = await POST("http://localhost:5050/sign-up", body);
    console.log(res);
    });
  } else {
    // jQuery is not loaded
    console.log("Doesn't Work");
  }
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function CheckPassword(inputtxt) {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (inputtxt.match(passw)) {
    return true;
  } else {
    return false;
  }
}

const setBottomBorderRed = (elem) => {
  elem.css("border-bottom-color", "red");
};
const setBottomBorderNormal = (elem) => {
  elem.css("border-bottom-color", "rgb(179, 179, 179)");
};
