var menuButton = document.getElementById('menuButton');
var menu = document.getElementById('menu');
var menuX = document.getElementById('menuX');
menuButton.onclick = function() {
    menu.className = 'menu-active';
}

// 点击菜单右上角的x，将menu的class设置为menu，这样菜单就能隐藏了
menuX.onclick = function() {
    menu.className = 'menu';
}