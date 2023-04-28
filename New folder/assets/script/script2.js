import { getAllCategories, deleteCategoryByID, postCategory } from "./httprequests.js";

let companame = document.querySelector("#compname");

let contactname = document.querySelector("#contactname");

let contactTitle = document.querySelector("#contactTitle");

let country = document.querySelector("#country");

let btn3 = document.querySelector("#bbtn")

// postCategory({ companyName: "Code Academy", contactName: "Chinare Aghazada ", contactTitle: "senior devoloper", address: { country: "code academy" } })





btn3.addEventListener("click", async () => {

    var category = {
        companyNamee: companame.value,
        contactNamee: contactname.value,
        contactTitlee: contactTitle.value,
        countryy: country.value,
    };

    await postCategory({ companyName: category.companyNamee, contactName: category.contactNamee, contactTitle:category.contactTitlee, address: { country: category.countryy } });

    window.location.href = "http://127.0.0.1:5500/index.html";

})



