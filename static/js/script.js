/* Scroll to Top*/
const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
});


/* Leaflet.js map embed */
var map = L.map('leafletmap').setView([40.1828, 29.0663], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([40.18750751770577, 29.12998971054061]).addTo(map)
.bindPopup('Otomat BTU')
.openPopup();

L.marker([41.37599722941076, 33.76516619501857]).addTo(map)
.bindPopup('Otomat Kastamonu');

L.marker([41.42664043424814, 33.770159734556195]).addTo(map)
.bindPopup('protectedtext.com/kastamonu');

L.marker([41.4858532187198, 33.68923871157919]).addTo(map)
.bindPopup('Otomat Mahmutbey');

L.marker([40.99968660156536, 29.38081038291591]).addTo(map)
.bindPopup('Otomat Istanbul 1');

L.marker([41.12963480808039, 29.604402616876868]).addTo(map)
.bindPopup('Otomat Istanbul 2');

L.marker([36.52787204390252, 10.55243286982008]).addTo(map)
.bindPopup('Otomat Tunus, Bou argoub');

L.marker([40.18681621887534, 29.1030216970482]).addTo(map)
.bindPopup('Otomat BTU Yildirim');

L.marker([40.183982420261714, 29.061879425883905]).addTo(map)
.bindPopup('Otomat Ulu Cami');

L.marker([40.187591729673095, 29.05730142072508]).addTo(map)
.bindPopup('Otomat Tophane');
