const sidebarButton = document.getElementById("sidebar-button");
let isVisible = true;
sidebarButton.addEventListener("click", sidebarHandler);

function sidebarHandler(){
    if(isVisible === true){
        sidebarClose();
        isVisible = false;
    } else {
        sidebarOpen();
        isVisible = true;
    }
}

function sidebarOpen(){
    const sidebar = document.querySelector(".sidebar");
    // sidebar.style.width = "100%";
    sidebar.style.display = "block";
}

function sidebarClose(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}