import { getAllCategories, deleteCategoryByID, postCategory } from "./httprequests.js";






let table = document.querySelector(".suppliers");
getAllCategories().then(data => {
    data.forEach(category => {

        let tabler = document.createElement("tr");

        let tableh = document.createElement("th");
        tableh.setAttribute("scope", "row");
        tableh.innerText = category.id;

        let tabled1 = document.createElement("td");
        tabled1.innerText = category.contactName;

        let tabled2 = document.createElement("td");
        tabled2.innerText = category.contactTitle;

        let tabled3 = document.createElement("td");
        tabled3.innerText = category?.address?.country;


        let tabled4 = document.createElement("td");


        let editbtn = document.createElement("button");
        editbtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`

        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = `<i class="fa-solid fa-trash"></i>`


        tabled4.append(editbtn, deletebtn);
        tabler.append(tableh, tabled1, tabled2, tabled3, tabled4);

        table.append(tabler);


        deletebtn.addEventListener("click", (e) => {

            deleteCategoryByID(category.id);
            e.target.parentElement.parentElement.parentElement.remove()



        })


        editbtn.addEventListener("click", (e) => {
            
            console.log(e.target.parentElement.parentElement.parentElement);
           // window.location.href = "http://127.0.0.1:5500/create.html";
          



        })


    })
})




