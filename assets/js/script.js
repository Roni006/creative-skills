const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function () {
    // Remove active class from all
    menuItems.forEach(link => link.classList.remove('active'));
    // Add active class to clicked one
    this.classList.add('active');
  });
});
