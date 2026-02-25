const navbar = document.getElementById('navbarList');

const navbarLinkList = [
    {
        href: "#section_1",
        text: "Pocetna"
    },
    {
        href: "#section_2",
        text: "Nasa prica"
    },
    {
        href: "#section_3",
        text: "Usluge"
    },
    {
        href: "#section_4",
        text: "Cenovnik"
    },
    {
        href: "#section_5",
        text: "Kontakt"
    },
    {
        href: "autor.html",
        text: "O autoru"
    },
    {
        href: "dokumentacija.docx",
        text: "Dokumentacija"
    },
    {
        href: "Sajt.rar",
        text: "Preuzmi zip fajl"
    }
];

navbarLinkList.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('nav-item');

    const a = document.createElement('a');
    a.classList.add('nav-link', 'click-scroll');
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    navbar.appendChild(li);
});

const servicesContainer = document.getElementById("servicesList");

const servicesList = [
    {
        title: "Sisanje",
        price: "$36.00",
        image: "images/services/woman-cutting-hair-man-salon.jpg",
        category: "frizura"
    },
    {
        title: "Stilizovanje brade",
        price: "$25.00",
        image: "images/services/hairdresser-grooming-their-client.jpg",
        category: "brada"
    },
    {
        title: "Brijanje",
        price: "$30.00",
        image: "images/services/hairdresser-grooming-client.jpg",
        category: "brada"
    },
    {
        title: "Sisanje dece",
        price: "$25.00",
        image: "images/services/boy-getting-haircut-salon-front-view.jpg",
        category: "frizura"
    }
];

servicesList.forEach(service => {

    const col = document.createElement("div");
    col.classList.add("col-lg-6", "col-12", "mb-4");

    const thumb = document.createElement("div");
    thumb.classList.add("services-thumb");

    const img = document.createElement("img");
    img.src = service.image;
    img.classList.add("services-image", "img-fluid");
    img.alt = service.title;

    const info = document.createElement("div");
    info.classList.add("services-info", "d-flex", "align-items-end");

    const h4 = document.createElement("h4");
    h4.classList.add("mb-0");
    h4.textContent = service.title;

    const strong = document.createElement("strong");
    strong.classList.add("services-thumb-price");
    strong.textContent = service.price;

    info.appendChild(h4);
    info.appendChild(strong);

    thumb.appendChild(img);
    thumb.appendChild(info);

    col.appendChild(thumb);

    servicesContainer.appendChild(col);
});

const priceContainer = document.getElementById("priceList");

const priceList = [
    { title: "Sisanje", price: "$32.00" },
    { title: "Skracivanje brade", price: "$26.00" },
    { title: "Izbrijavanje glave", price: "$36.00" },
    { title: "Brijanje", price: "$30.00" },
    { title: "Farbanje", price: "$25.00" }
];

priceList.forEach(item => {

    const wrapper = document.createElement("div");
    wrapper.classList.add("price-list-thumb");

    const h6 = document.createElement("h6");
    h6.classList.add("d-flex");

    const textNode = document.createTextNode(item.title);

    const divider = document.createElement("span");
    divider.classList.add("price-list-thumb-divider");

    const strong = document.createElement("strong");
    strong.textContent = item.price;

    h6.appendChild(textNode);
    h6.appendChild(divider);
    h6.appendChild(strong);

    wrapper.appendChild(h6);

    priceContainer.appendChild(wrapper);
});

const telefonRegex = /^(\+)?[0-9]{7,15}$/;
const mailRegex = /^[\w\d._+-]+@[\w\d._+-]+\.[a-zA-Z]{2,}$/;

const imeRegex = /^[A-ZŠĐČĆŽ][a-zšđčćž]+(\s[A-ZŠĐČĆŽ][a-zšđčćž]+)+$/;
const porukaRegex = /\S+/;


let ime = document.getElementById('bb-name');
let telefon = document.querySelector('[name="bb-phone"]');
let mejl = document.getElementById('bb-email');
let poruka = document.getElementById('bb-message');


let radio1 = document.getElementById('sisanje');
let radio2 = document.getElementById('brada');
let radio3 = document.getElementById('sisanjebrada');
let radioerror = document.getElementById('radioerror');

let radnja = document.getElementById('bb-branch');
let radnjaerror = makeError(radnja);

let datum = document.getElementById('bb-date');
let datumerror = makeError(datum);

let successMessage = document.getElementById("formSuccess");


let dugmeforma = document.querySelector('#bb-booking-form button[type="submit"]');


function makeError(el) {
  const s = document.createElement('small');
  s.className = 'text-danger';
  el.parentNode.appendChild(s);
  return s;
}

let imeerror = makeError(ime);
let telefonerror = makeError(telefon);
let mejlerror = makeError(mejl);
let porukaerror = makeError(poruka);


dugmeforma.addEventListener('click', function (e) {
  e.preventDefault();


  if (!imeRegex.test(ime.value.trim())) {
    imeerror.textContent = "Unesite ispravno ime i prezime (npr. Marko Markovic).";
  } else {
    imeerror.textContent = "";
  }

  
  if (!mailRegex.test(mejl.value.trim())) {
    mejlerror.textContent = "Unesite ispravnu e-mail adresu.";
  } else {
    mejlerror.textContent = "";
  }

  
  if (!telefonRegex.test(telefon.value.trim())) {
    telefonerror.textContent = "Unesite ispravan broj telefona (7-15 cifara, opcionalno +).";
  } else {
    telefonerror.textContent = "";
  }

 
  if (radio1.checked || radio2.checked || radio3.checked) {
    radioerror.textContent = "";
  } else {
    radioerror.textContent = "Izaberite uslugu.";
  }

  if (radnja.value === "") {
    radnjaerror.textContent = "Molimo izaberite radnju.";
  } else {
    radnjaerror.textContent = "";
  }

  if (datum.value === "") {
    datumerror.textContent = "Izaberite datum.";
    } else {
      const today = new Date();
      const selectedDate = new Date(datum.value);

    
      today.setHours(0,0,0,0);

    if (selectedDate < today) {
      datumerror.textContent = "Datum ne može biti u prošlosti.";
    } else {
      datumerror.textContent = "";
    }
}

 
  if (!porukaRegex.test(poruka.value.trim())) {
    porukaerror.textContent = "Unesite napomenu.";
  } else {
    porukaerror.textContent = "";
  }

 
  const uredu =
    imeRegex.test(ime.value.trim()) &&
    mailRegex.test(mejl.value.trim()) &&
    telefonRegex.test(telefon.value.trim()) &&
    (radio1.checked || radio2.checked || radio3.checked) &&
    (radnja.value !== "") && datum.value !== "" &&
    new Date(datum.value) >= new Date().setHours(0,0,0,0)
    porukaRegex.test(poruka.value.trim());

  if (uredu) {
    successMessage.textContent = "Uspešno ste zakazali termin!";
    document.getElementById("bb-booking-form").reset();
} else {
    successMessage.textContent = "";
}
});

document.querySelectorAll(".team-name").forEach(name => {
  name.addEventListener("click", () => {
    const teamInfo = name.closest(".team-info");
    teamInfo.classList.toggle("open");
  });
});

const servicesContainers = document.getElementById("servicesList");
const filterSelect = document.getElementById("serviceFilter");

function displayServices(filteredServices) {
    servicesContainers.innerHTML = "";

    filteredServices.forEach(service => {

        const col = document.createElement("div");
        col.classList.add("col-lg-6", "col-12", "mb-4");

        col.innerHTML = `
            <div class="services-thumb">
                <img src="${service.image}" class="services-image img-fluid">
                <div class="services-info d-flex align-items-end">
                    <h4 class="mb-0">${service.title}</h4>
                    <strong class="services-thumb-price">${service.price}</strong>
                </div>
            </div>
        `;

        servicesContainers.appendChild(col);
    });
}

filterSelect.addEventListener("change", function() {

    const selected = this.value;

    if (selected === "all") {
        displayServices(servicesList);
    } else {
        const filtered = servicesList.filter(service => 
            service.category === selected
        );
        displayServices(filtered);
    }

});

displayServices(servicesList);

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stats-number");
  const statsWrap = document.querySelector(".stats-wrap");

  if (!counters.length || !statsWrap) return;

  const duration = 1200; 

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-target"), 10);
    if (isNaN(target)) return;

    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      el.textContent = value + "+";

      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target + "+";
    }

    requestAnimationFrame(update);
  }

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counters.forEach(animateCounter);
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(statsWrap);
});