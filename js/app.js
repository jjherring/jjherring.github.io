const navbar_toggle = document.getElementById("navigation_toggle")
const navbarItem = document.getElementById("navigation")

navbar_toggle.onclick = function () {
    if (navigation.classList.contains("nav_bar__items-collapse")) {
        navigation.classList.remove("nav_bar__items-collapse")
    } else {
        navigation.classList.add("nav_bar__items-collapse")
    }

}