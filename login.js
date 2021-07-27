// ambil elemen dari html
const username = document.getElementById("un");
const password = document.getElementById("pass");
const login = document.getElementById("submit");

const submitForm = () => {
  // ambil value elemen
  let un = username.value;
  let pass = password.value;
  let message = "";

  //   validasi
  if (un && pass) {
    message = `
            Username : ${un}
            password : ${pass}
        `;
    alert(message);
    document.location.pathname = "./form.html";
  } else {
    message = `Data tidak valid!`;
    alert(message);
  }
};

login.addEventListener("click", submitForm);
