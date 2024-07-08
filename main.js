const firebaseConfig = {
    apiKey: "AIzaSyBUGD26u0FrDJ7hCe0ptLcJXKT86jEaFaM",
    authDomain: "punuw-bc184.firebaseapp.com",
    databaseURL: "https://punuw-bc184-default-rtdb.firebaseio.com",
    projectId: "punuw-bc184",
    storageBucket: "punuw-bc184.appspot.com",
    messagingSenderId: "21924192113",
    appId: "1:21924192113:web:af7261fbdfa5780deae0d0"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.database();



let ad = document.querySelector("#ad")
let soyad = document.querySelector("#soyad")
let btn = document.querySelector(".add")
let axtarilan = document.querySelector("#srch")
let srcBtn = document.querySelector(".search")
let studentNm = document.querySelector(".studentName")
let studentSr = document.querySelector(".studentSurname")
btn.onclick = function () {
    let adTxt = ad.value
    let soyadTxt = soyad.value
    db.ref(`/${adTxt}`).set({
        soyad: soyadTxt
    })
}
srcBtn.onclick = function () {
    db.ref(`/${axtarilan.value}`).on("value", function (snapshot) {
        if (snapshot.val() == null) {
            alert("Bele telebe movcud deil")
        }
        else {
            let ordakiMelumatlar = snapshot.val()
            studentNm.innerText = axtarilan.value
            studentSr.innerText = ordakiMelumatlar.soyad
            console.log(ordakiMelumatlar)
        }

    })
}





