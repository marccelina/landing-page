
function showDropdown(obj){
    var value = obj.id;
    document.getElementById('menu__dropdown--'+ value).style.display = "block";
    document.querySelectorAll("#menu__dropdown > li").style.display = "block";
}

function closeDropdown(obj){
    var value = obj.id;
    document.getElementById('menu__dropdown--'+ value).style.display = "none";
}