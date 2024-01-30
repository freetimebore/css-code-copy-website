
export const formsData2 = [
  {
    name: 'Reactive Form',
    code: `

    <!DOCTYPE html>
<html>
  <head>
    <title>Simple registration form</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <style>
      html, body {
      display: flex;
      justify-content: center;
      height: 100%;
      }
      body, div, h1, form, input, p { 
      padding: 0;
      margin: 0;
      outline: none;
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
      color: #666;
      }
      h1 {
      padding: 10px 0;
      font-size: 32px;
      font-weight: 300;
      text-align: center;
      }
      p {
      font-size: 12px;
      }
      hr {
      color: #a9a9a9;
      opacity: 0.3;
      }
      .main-block {
      max-width: 340px; 
      min-height: 460px; 
      padding: 10px 0;
      margin: auto;
      border-radius: 5px; 
      border: solid 1px #ccc;
      box-shadow: 1px 2px 5px rgba(0,0,0,.31); 
      background: #ebebeb; 
      }
      form {
      margin: 0 30px;
      }
      .account-type, .gender {
      margin: 15px 0;
      }
      input[type=radio] {
      display: none;
      }
      label#icon {
      margin: 0;
      border-radius: 5px 0 0 5px;
      }
      label.radio {
      position: relative;
      display: inline-block;
      padding-top: 4px;
      margin-right: 20px;
      text-indent: 30px;
      overflow: visible;
      cursor: pointer;
      }
      label.radio:before {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #1c87c9;
      }
      label.radio:after {
      content: "";
      position: absolute;
      width: 9px;
      height: 4px;
      top: 8px;
      left: 4px;
      border: 3px solid #fff;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
      opacity: 0;
      }
      input[type=radio]:checked + label:after {
      opacity: 1;
      }
      input[type=text], input[type=password] {
      width: calc(100% - 57px);
      height: 36px;
      margin: 13px 0 0 -5px;
      padding-left: 10px; 
      border-radius: 0 5px 5px 0;
      border: solid 1px #cbc9c9; 
      box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
      background: #fff; 
      }
      input[type=password] {
      margin-bottom: 15px;
      }
      #icon {
      display: inline-block;
      padding: 9.3px 15px;
      box-shadow: 1px 2px 5px rgba(0,0,0,.09); 
      background: #1c87c9;
      color: #fff;
      text-align: center;
      }
      .btn-block {
      margin-top: 10px;
      text-align: center;
      }
      button {
      width: 100%;
      padding: 10px 0;
      margin: 10px auto;
      border-radius: 5px; 
      border: none;
      background: #1c87c9; 
      font-size: 14px;
      font-weight: 600;
      color: #fff;
      }
      button:hover {
      background: #26a9e0;
      }
    </style>
  </head>
  <body>
    <div class="main-block">
      <h1>Registration</h1>
      <form action="/">
        <hr>
        <div class="account-type">
          <input type="radio" value="none" id="radioOne" name="account" checked/>
          <label for="radioOne" class="radio">Personal</label>
          <input type="radio" value="none" id="radioTwo" name="account" />
          <label for="radioTwo" class="radio">Company</label>
        </div>
        <hr>
        <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required/>
        <label id="icon" for="name"><i class="fas fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required/>
        <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
        <input type="password" name="name" id="name" placeholder="Password" required/>
        <hr>
        <div class="gender">
          <input type="radio" value="none" id="male" name="gender" checked/>
          <label for="male" class="radio">Male</label>
          <input type="radio" value="none" id="female" name="gender" />
          <label for="female" class="radio">Female</label>
        </div>
        <hr>
        <div class="btn-block">
          <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p>
          <button type="submit" href="/">Submit</button>
        </div>
      </form>
    </div>
  </body>
</html>
  
      `,


    isCopied: false
  }, {


    name: 'Template-driven Form',
    code: `
    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple login form</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <style>
          html, body {
          display: flex;
          justify-content: center;
          font-family: Roboto, Arial, sans-serif;
          font-size: 15px;
          }
          form {
          border: 5px solid #f1f1f1;
          }
          input[type=text], input[type=password] {
          width: 100%;
          padding: 16px 8px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
          }
          button {
          background-color: #8ebf42;
          color: white;
          padding: 14px 0;
          margin: 10px 0;
          border: none;
          cursor: grabbing;
          width: 100%;
          }
          h1 {
          text-align:center;
          fone-size:18;
          }
          button:hover {
          opacity: 0.8;
          }
          .formcontainer {
          text-align: left;
          margin: 24px 50px 12px;
          }
          .container {
          padding: 16px 0;
          text-align:left;
          }
          span.psw {
          float: right;
          padding-top: 0;
          padding-right: 15px;
          }
          /* Change styles for span on extra small screens */
          @media screen and (max-width: 300px) {
          span.psw {
          display: block;
          float: none;
          }
        </style>
      </head>
      <body>
        <form action="/action_page.php">
          <h1>Login Form</h1>
          <div class="formcontainer">
          <hr/>
          <div class="container">
            <label for="uname"><strong>Username</strong></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
            <label for="psw"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
          </div>
          <button type="submit">Login</button>
          <div class="container" style="background-color: #eee">
            <label style="padding-left: 15px">
            <input type="checkbox"  checked="checked" name="remember"> Remember me
            </label>
            <span class="psw"><a href="#"> Forgot password?</a></span>
          </div>
        </form>
      </body>
    </html>
    `,
    isCopied: false,



    templateData: {}
  }
  ,
  {
    name: 'Dynamic Form using FormBuilder',
    code: `

    <!DOCTYPE html>
<html>
  <title>Simple Sign up from</title>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <style>
      html, body {
      display: flex;
      justify-content: center;
      font-family: Roboto, Arial, sans-serif;
      font-size: 15px;
      }
      form {
      border: 5px solid #f1f1f1;
      }
      input[type=text], input[type=password] {
      width: 100%;
      padding: 16px 8px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
      }
      .icon {
      font-size: 110px;
      display: flex;
      justify-content: center;
      color: #4286f4;
      }
      button {
      background-color: #4286f4;
      color: white;
      padding: 14px 0;
      margin: 10px 0;
      border: none;
      cursor: grab;
      width: 48%;
      }
      h1 {
      text-align:center;
      fone-size:18;
      }
      button:hover {
      opacity: 0.8;
      }
      .formcontainer {
      text-align: center;
      margin: 24px 50px 12px;
      }
      .container {
      padding: 16px 0;
      text-align:left;
      }
      span.psw {
      float: right;
      padding-top: 0;
      padding-right: 15px;
      }
      /* Change styles for span on extra small screens */
      @media screen and (max-width: 300px) {
      span.psw {
      display: block;
      float: none;
      }
    </style>
  </head>
  <body>
    <form action="/action_page.php">
      <h1>SIGN UP</h1>
      <div class="icon">
        <i class="fas fa-user-circle"></i>
      </div>
      <div class="formcontainer">
      <div class="container">
        <label for="uname"><strong>Username</strong></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
        <label for="mail"><strong>E-mail</strong></label>
        <input type="text" placeholder="Enter E-mail" name="mail" required>
        <label for="psw"><strong>Password</strong></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
      </div>
      <button type="submit"><strong>SIGN UP</strong></button>
      <div class="container" style="background-color: #eee">
        <label style="padding-left: 15px">
        <input type="checkbox"  checked="checked" name="remember"> Remember me
        </label>
        <span class="psw"><a href="#">Forgot password?</a></span>
      </div>
    </form>
  </body>
</html>
  
  `,

    isCopied: false
  },
  {
    code: `<!DOCTYPE html>
    <html>
      <head>
        <title>Camp Registration</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
      </head>
      <body>
        <div class="testbox">
          <form>
            <div class="banner" style="position: relative; height: 300px; background-image: url('https://th.bing.com/th?q=Contact+Form+CSS&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'); background-size: cover; display: flex; justify-content: center; align-items: center; text-align: center;">
              <h1 style="position: absolute; margin: 0; font-size: 40px; color: #fff; z-index: 2; line-height: 83px;">Camp Registration</h1>
              <div style="content: ''; background-color: rgba(0, 0, 0, 0.2); position: absolute; width: 100%; height: 100%;"></div>
            </div>
            <br/>
            <fieldset>
              <legend style="font-size: 20px; color: #333;">Participant Information</legend>
              <p style="font-size: 18px; color: #333; margin-bottom: 10px;">Participant 1</p>
              <div class="item" style="position: relative; margin: 10px 0;">
                <label for="fname" style="margin-bottom: 5px; font-size: 16px; color: #666;">First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" style="width: calc(100% - 10px); padding: 8px; border: 1px solid #ccc; border-radius: 3px; font-size: 16px; color: #666;" />
              </div>
              <div class="item" style="position: relative; margin: 10px 0;">
    
     <div class="item">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity" type="text" name="activity" />
              </div>
              <div class="item">
                <label for="fee">Fee ($)<span>*</span></label>
                <input id="fee" type="number" name="fee" />
              </div>
                       <div class="item">
                <label for="bdate">Birth Date <span>*</span></label>
                <input id="bdate" type="date" name="bdate" />
                <i class="fas fa-calendar-alt"></i>
              </div>
     <div class="item">
                 <p>Grade</p>
                <select>
                  <option selected value="" disabled selected></option>
                 <option value="1" >1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                 <option value="4">4th</option>
                 <option value="5">5th</option>
                  <option value="6">6th</option>
                 <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                 <option value="10">10th</option>
                  <option value="11">11th</option>
                 <option value="12">12th</option>
                </select>
              </div>
    <p>Participant 2</p>
      <div class="item">
                <label for="fname"> First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" />
              </div>
              <div class="item">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity" type="text" name="activity" />
              </div>
              <div class="item">
                <label for="fee1">Fee ($)<span>*</span></label>
                <input id="fee1" type="number" name="fee1" />
              </div>
                       <div class="item">
                <label for="bdate">Birth Date <span>*</span></label>
                <input id="bdate" type="date" name="bdate" />
                <i class="fas fa-calendar-alt"></i>
              </div>
     <div class="item">
                 <p>Grade</p>
                <select>
                  <option selected value="" disabled selected></option>
                  <option value="1" >1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                 <option value="4">4th</option>
                 <option value="5">5th</option>
                  <option value="6">6th</option>
                 <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                 <option value="10">10th</option>
                  <option value="11">11th</option>
                 <option value="12">12th</option>
                </select>
              </div>
    <p>Participant 3</p>
      <div class="item">
                <label for="fname"> First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" />
              </div>
              <div class="item">
                <label for="activity">Activity #<span>*</span></label>
                <input id="activity" type="text" name="activity" />
              </div>
              <div class="item">
                <label for="fee2">Fee ($)<span>*</span></label>
                <input id="fee2" type="number" name="fee2" />
              </div>
                            <div class="question">
                <label>City Resident?<br/>(non-city residents add $5.00 for each participant)</label>
                <div class="question-answer">
                  <div>
                    <input type="radio" value="none" id="radio_1" name="city"/>
                    <label for="radio_1" class="radio"><span>Yes - I am a city resident</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="none" id="radio_2" name="city"/>
                    <label for="radio_2" class="radio"><span>No - I am not a city resident</span></label>
                  </div>
                             </div>
              </div>
             <div>
    <span id="result"></span>
              <button type="calc" id="calc"  onclick="calcNumbers()">Calculate</button>
            </div>
                   </fieldset>
            <br/>
            <fieldset>
              <legend>Household / Adult Primary Contact</legend>
               <div class="colums">
              <div class="item">
                <label for="fname"> First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" />
              </div>
              <div class="item">
                <label for="lname"> Last Name<span>*</span></label>
                <input id="lname" type="text" name="lname" />
              </div>
     <div class="item">
                <label for="address1">Address 1<span>*</span></label>
                <input id="address1" type="text"   name="address1" />
              </div>
      <div class="item">
                <label for="address2">Address 2<span>*</span></label>
                <input id="address2" type="text"   name="address2" />
              </div>
      <div class="item">
                <label for="city">City<span>*</span></label>
                <input id="city" type="text"   name="city" />
              </div>
     <div class="item">
                <label for="state">State<span>*</span></label>
                <input id="state" type="text"   name="state" />
              </div>
                                 <div class="item">
                <label for="eaddress">Email Address<span>*</span></label>
                <input id="eaddress" type="text"   name="eaddress" />
              </div>
              <div class="item">
                <label for="phone">Phone<span>*</span></label>
                <input id="phone" type="tel"   name="phone" />
              </div>
              <div class="item">
                <label for="zip">Zip<span>*</span></label>
                <input id="zip" type="text"   name="zip" />
              </div>
                         
                               <div class="question">
                <label>Relationship to Participants:</label>
                <div class="question-answer">
                  <div>
                    <input type="radio" value="none" id="radio_3" name="participants"/>
                    <label for="radio_3" class="radio"><span>Self</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="none" id="radio_4" name="participants"/>
                    <label for="radio_4" class="radio"><span>Mother</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="none" id="radio_5" name="participants"/>
                    <label for="radio_5" class="radio"><span>Father</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="none" id="radio_6" name="participants"/>
                    <label for="radio_6" class="radio"><span>Guardian</span></label>
                  </div>
                  <div>
                    <input  type="radio" value="none" id="radio_7" name="participants"/>
                    <label for="radio_7" class="radio"><span>Other</span></label>
    <input type="text"/>
                  </div>
                </div>
              </div>
     </fieldset>
    <script >
      var a = document.getElementByID("fee").value;
      var b = document.getElementByID("fee1").value;
      var c = document.getElementByID("fee2").value;
      var result = a+b+c;
      function calcNumbers(){
        document.getElementByID("result").innerHTML = result;
      }
    </script>`
  }
  , {
    code: `<!DOCTYPE html>
  <html>
  <head>
    <title>Contact us</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <style>
      * {
        box-sizing: border-box;
      }
    </style>
  </head>
  <body style="min-height: 100vh; padding: 0; margin: 0; font-family: Roboto, Arial, sans-serif; font-size: 14px; color: #666; display: flex; justify-content: center; align-items: center; padding: 20px; background: #5a7233;">
  
    <form action="/" class="decor" style="position: relative; width: 80%; border-radius: 30px; background: #fff;">
      <div class="form-left-decoration" style="content: ''; position: absolute; width: 50px; height: 20px; border-radius: 20px; background: #5a7233; bottom: 60px; left: -30px;"></div>
      <div class="form-right-decoration" style="content: ''; position: absolute; width: 50px; height: 20px; border-radius: 20px; background: #5a7233; top: 60px; right: -30px;"></div>
      <div class="circle" style="position: absolute; bottom: 80px; left: -55px; width: 20px; height: 20px; border-radius: 50%; background: #fff;"></div>
      <div class="form-inner" style="padding: 40px;">
        <h1 style="margin-top: 0; font-weight: 500;">Contact us</h1>
        <input type="text" placeholder="Username" style="display: block; width: 100%; padding: 15px; margin-bottom: 10px; border: none; border-radius: 20px; background: #d0dfe8;">
        <input type="email" placeholder="Email" style="display: block; width: 100%; padding: 15px; margin-bottom: 10px; border: none; border-radius: 20px; background: #d0dfe8;">
        <textarea placeholder="Message..." rows="5" style="display: block; width: 100%; padding: 15px; margin-bottom: 10px; border: none; border-radius: 20px; background: #d0dfe8; resize: none;"></textarea>
        <button type="submit" href="/" style="width: 100%; padding: 10px; margin-top: 20px; border-radius: 20px; border: none; border-bottom: 4px solid #3e4f24; background: #5a7233; font-size: 16px; font-weight: 400; color: #fff;" onmouseover="this.style.background='#3e4f24'" onmouseout="this.style.background='#5a7233'">Submit</button>
      </div>
    </form>
  </body>
  </html>
  `
  }
];
