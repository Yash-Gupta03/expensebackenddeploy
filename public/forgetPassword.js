async function forgetpassworddata(event){
    event.preventDefault();
    const email = document.getElementById('email').value;

    const res = await axios.post(`http://13.232.122.59:3000/password/forgotpassword`, {email});
    if(res.response == 200){
        alert('Mail sent');
    }
    }