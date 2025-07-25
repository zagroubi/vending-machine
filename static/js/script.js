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

L.marker([40.18681621887534, 29.1030216970482]).addTo(map)
.bindPopup('Otomat BTU Yildirim');

L.marker([40.183982420261714, 29.061879425883905]).addTo(map)
.bindPopup('Otomat Ulu Cami');

L.marker([40.187591729673095, 29.05730142072508]).addTo(map)
.bindPopup('Otomat Tophane');