let navToggle = document.querySelector("#nav-toggler");
let sidebarToggle = document.querySelector("#sidebar-toggler");
let sidebar = document.querySelector("#sidebar");
let sidebarContain = document.querySelector("#sidebar-contain");

navToggle.addEventListener("click", () => {
    sidebarContain.classList.add("show")
    sidebar.classList.add("show")
})

sidebarContain.addEventListener("click", () => {
    sidebarContain.classList.remove("show")
    sidebar.classList.remove("show")
})

sidebarToggle.addEventListener("click", () => {
    sidebarContain.classList.remove("show")
    sidebar.classList.remove("show")
})