
    function isopen() {
    var el = document.getElementById('menu')
    if (el.style.display === "none") {
    el.style.display = "block"
}
else {
    el.style.display = "none";
}
}

    document.getElementById("butn1").addEventListener("click", isopen);


/*-----------------------------------*/
    const Tools = [
        {
            titel: "Class aptent",
            discreption: "Vestibulum venenatis nulla posuere, pellentesque sapien",
            category: "lit",
            class: "./asset//books.svg"
        },
        {
            titel: "Vivamus faucibus",
            discreption: "Morbi pretium vulputate purus, id tincidunt",
            category: "spt",
            class: "./asset//copy.svg"
        },
        {
            titel: "Nullam eget",
            discreption: "Curabitur molestie quam ut molestie",
            category: "spt",
            class: "./asset//file-blank.svg"
        },
        {
            titel: "any",
            discreption: "Lorem ipsum dolor sit amet, consectetur",
            category: "spt",
            class: "./asset//file-bookmark-alt.svg"
        },
        {
            titel: "Nunc gravida",
            discreption: "Pellentesque rutrum ultrices felis, et sollicitudin",
            category: "spt",
            class: "./asset//folder-open.svg"
        },
        {
            titel: "Morbi tincidunt",
            discreption: "Lorem ipsum dolor sit amet, consectetur",
            category: "spt",
            class: "./asset//clipboard-blank.svg"
        },


    ];

    let text = ""
    Tools.forEach((i, index) => {
            text += `
    <div id="item${index}" class="w-72 h-auto bg-gray-200 card-wrapper flex mb-4 ml-2 hover:drop-shadow-2xl opacity-100">
        <div class="  leftItem bg-green-600"></div>
        <div class=" w-full h-full  right-item flex flex-col">
          <div class=" font-bold line md:text-lg flex  ">
            <img id="butn" src="${i.class}" alt=""  class="img mr-1 mt-1 " >

            ${i.titel}
          </div>
          <div class="text-sm  mh font-normal">${i.discreption}</div>
        </div>
      </div>`;
        }
    )

    document.getElementById("items").innerHTML = text

    function deleteFun() {
        document.getElementById("searchBar").value = " ";

        document.getElementById("del").classList.add("dis");
        document.getElementById("drop-down-menu").classList.add("dis");

    }

    function search() {
        const val = document.getElementById("searchBar").value;
        // search oparation
        const result = Tools.filter(
            (i) =>
                i.titel.includes(val) ||
                i.discreption.includes(val) ||
                i.category.includes(val)
        );
        document.getElementById("drop-down-menu").innerHTML = "";
        document.getElementById("drop-down-menu").classList.remove("dis");
        document.getElementById("del").classList.remove("dis");
        //    append to drop down menu.
        result.map((i) =>
            document
                .getElementById("drop-down-menu")
                .insertAdjacentHTML("beforeend", `<li>${i.titel}</li>`)
        );
        //----------------------
        Tools.map((el, index) => {
            el.titel.includes(val) ||
            el.discreption.includes(val) ||
            el.category.includes(val)
                ?
                document
                    .getElementById(`item${index}`)
                    .classList.remove("opacity")
                : document.getElementById(`item${index}`).classList.add("opacity");
        });
    }

    function blurFunc() {
        document.getElementById("drop-down-menu").classList.add("dis");
    }

    document.getElementById("searchBar").addEventListener("keyup", search);
    document.getElementById("searchBar").addEventListener("bulr", blurFunc);
    document.getElementById("del").addEventListener("click", deleteFun);
