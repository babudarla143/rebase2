<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      background-image: url('C:\\Users\\harib\\Downloads\\bec.png');
      background-size: cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
      height: 600px;
      position: relative; 
    }
    .background-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.1); 
    }
    .container {
      width: 350px;
      height: 350px;
      margin: 150px auto 0; 
      padding: 20px;
      border-radius: 30px;
      background-color: rgba(99, 103, 109, 0.7); 
    }
    .labels {
      margin-top: 20px;
      display: block;
      font-size: 20px;
      margin-left: 20px;
    }
    input {
      width: 250px;
      height: 15px;
      border-radius: 10px;
      padding: 10px 20px;
      margin-top: 20px;
      margin-left: 20px;
      background-color: rgb(133, 133, 237);
    }
    .menu-icon {
      display: inline-block;
      cursor: pointer;
      margin-top: 20px;
      margin-right: 20px;
    }
    .menu-icon span {
      display: block;
      width: 30px;
      height: 4px;
      background-color: #000000;
      margin-bottom: 5px;
      margin-right: 0; /* Removed unnecessary margin */
      transition: all 0.3s ease;
    }
    .label_contect {
      background-color: rgba(145, 13, 13, 1);
      text-align: right;
      padding: 10px 20px;
    }
    .menus {
      display: inline-block;
      margin-left: 20px;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
    }
    .entry{
      width: auto;
      height: auto;
      margin-top: 70px;
      margin-left: 30px 0;
    }
    .buttons{
      width: 120px;
      height: 30px;
      margin-left: 30px;
      margin-top: 30px;
      background-color: rgb(133, 133, 237);
      justify-content: space-between;
      border-radius: 10px;
    }
    .registrationForm{
      width: 350px;
      height: 350px;
      margin: 150px auto 0; 
      padding: 20px;
      border-radius: 30px;
      background-color: rgba(99, 103, 109, 0.7); 
    }
    .registration-form {
      display: none;
    }

    .registration-form.show button {
      display: block;
    }
  </style>
</head>
<body>
  <div class="background-overlay">
    <div class="label_contect">
      <label for="menu-toggle" class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <a href="#" class="menus">About</a>
      <a href="#" class="menus">Account</a>
      <a href="#" class="menus">MyEarns</a>
    </div>
    <div class="container">
      <div class="entry"></div>
      <label for="username" class="labels">Username:</label>
      <input type="text">
      <label for="password" class="labels">Password:</label>
      <input type="password" id="password">  <br>
      <button type="submit" class="buttons" onclick="showRegistration()">register here</button>
      <button type="submit" class="buttons">submit</button>
    </div>
    <div id="registrationForm" class="registrationForm" style="display: none;">
      <h2>Registration</h2>
      <form action="#">  <label for="newUsername">New Username:</label>
        <input type="text" id="newUsername">
        <label for="newPassword">New Password:</label>
        <input type="password" id="newPassword">
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  <script>
    function showRegistration() {
      var registrationForm = document.getElementById("registrationForm");
      registrationForm.classList.toggle("show");
    }
  </script>
</body>
</html>

        
