let information = [
  {
    title: 'About',
    text: 'Lorem Ipsumsdadasd',
    imageUrl: '/src/lakeunion.jpg'
  },
  {
    title: 'Technologies',
    text: 'Blah..',
    imageUrl: '/src/cherries.jpg'
  },
  {
    title: 'Education',
    text: 'sdfasf sdfasdf',
    imageUrl: '/src/cherries.jpg'
  }
];

let aboutButton = document.querySelector('.about-next-button');
let aboutTextContainer = document.querySelector('.about-text');
let aboutImage = document.querySelector('.about-image');

let infoIndex = 0;

function initAboutSection() {
  aboutTextContainer.innerHTML = '<h1>' + information[infoIndex].title + '</h1>' + '<p>' + information[infoIndex].text + '</p>';
  aboutImage.style.backgroundImage = 'url(' + information[infoIndex].imageUrl + ')';
}

aboutButton.addEventListener('click', function() {
  if (infoIndex > 2) infoIndex = 0;
  aboutTextContainer.innerHTML = '<h1>' + information[infoIndex].title + '</h1>' + '<p>' + information[infoIndex].text + '</p>';
  aboutImage.style.backgroundImage = 'url(' + information[infoIndex].imageUrl + ')';
  infoIndex++;
});

initAboutSection();
