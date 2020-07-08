const btnLogin = document.getElementById("btn-login")
const alert = document.getElementById("alert")

btnLogin.addEventListener("click", () => {
    let data = {
        mail : document.getElementById("mail").value,
        password : document.getElementById("pass").value
    }

    axios
    .post("/api/login", data)
    .then(res => {
        // xu li
        alert.innerHTML = ""
        if(res.data.err){
            alert.innerHTML = res.data.err
        } else {
            location.href = "/index"
        }

    })
    .catch(err => {
        console.log(err)
    })
})