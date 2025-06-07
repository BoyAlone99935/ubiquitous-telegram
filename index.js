const sidebarButton = document.querySelector('.sidebar_button');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close');
const blurContent = document.querySelector('.blur_content');

sidebarButton.addEventListener('click', () => {
  sidebar.classList.add('show');
  blurContent.classList.add('blur-effect'); // Use 'blur-effect' instead of '.overlay'
});


closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
  blurContent.classList.remove('blur-effect'); // Use 'blur-effect' instead of '.overlay'
});




document.body.addEventListener('click', (event) => {
  if (sidebar.classList.contains('show') && !sidebar.contains(event.target) && event.target !== sidebarButton) {
    sidebar.classList.remove('show');
    blurContent.classList.remove('blur-effect');
  }
});

