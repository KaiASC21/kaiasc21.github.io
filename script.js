let header = document.querySelector("#head");
header.innerHTML = "<a href='index.html'><h1>Kai Caothien</h1></a>";

let contact = document.querySelector("#contact");

let links = {
    linkedin: "LinkedIn",
    GitHub: "https://github.com/KaiASC21",
    Email: "Email"
}

let linksarray = [links];
for (let i = 0; i<linksarray.length; i++) {
    let link = linksarray[i];
    let unordered_list = document.createElement("ul");

    let item1 = document.createElement("li");
    item1.innerHTML = "LinkedIn: " + links.linkedin;
    unordered_list.appendChild(item1);

    let item2 = document.createElement("li");
    item2.innerHTML = "GitHub: " + links.GitHub;
    unordered_list.appendChild(item2);

    let item3 = document.createElement("li");
    item3.innerHTML = "Email: " + links.Email;
    unordered_list.appendChild(item3);

    contact.appendChild(unordered_list);
}