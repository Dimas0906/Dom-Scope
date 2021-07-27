// get elemen
const inputName = document.getElementById("user");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputPassword = document.getElementById("password");

const submit = document.getElementById("btn");

const showAlert = () => {
  // ambil value
  let name = inputName.value;
  let email = inputEmail.value;
  let phone = inputPhone.value;
  let pass = inputPassword.value;

  // validaso
  if (name && email && phone && pass) {
    confirm(`
            nama: ${name}
            email: ${email}
            phone: ${phone}
            password: ${pass}
        `);
  } else {
    alert(`Data Tidak Valid!`);
  }
};

// pindah
function change() {
  document.location.pathname = "./product.html";
}
