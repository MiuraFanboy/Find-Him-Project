const elves = {
  elf1: {
    id: 1,
    name: "Elrond",
    desc: "Wise and powerful High Elf lord, master of Rivendell.",
    image: "images/elf_1.jpg",
  },
  elf2: {
    id: 2,
    name: "Legolas",
    desc: "Agile Wood Elf archer from the Woodland Realm.",
    image: "images/elf_2.jpg",
  },
  elf3: {
    id: 3,
    name: "Galadriel",
    desc: "Ancient and majestic Lady of Lothlórien.",
    image: "images/elf_3.jpg",
  },
  elf4: {
    id: 4,
    name: "Thranduil",
    desc: "Elvenking of the Woodland Realm and father of Legolas.",
    image: "images/elf_4.jpg",
  },
  elf5: {
    id: 5,
    name: "Tauriel",
    desc: "Skilled captain of the Elven guard, brave and passionate.",
    image: "images/elf_5.jpg",
  },
  elf6: {
    id: 6,
    name: "Finrod",
    desc: "Noble elf of the First Age, loyal and self-sacrificing.",
    image: "images/elf_6.jpg",
  },
  elf7: {
    id: 7,
    name: "Glorfindel",
    desc: "Heroic warrior who returned from Valinor to aid Middle-earth.",
    image: "images/elf_7.jpg",
  },
  elf8: {
    id: 8,
    name: "Arwen",
    desc: "Daughter of Elrond, known for her beauty and courage.",
    image: "images/elf_8.jpg",
  },
  elf9: {
    id: 9,
    name: "Círdan",
    desc: "Ancient shipwright and guardian of the Grey Havens.",
    image: "images/elf_9.jpg",
  },
  elf10: {
    id: 10,
    name: "Lúthien",
    desc: "Legendary elf-maiden who defied fate for love.",
    image: "images/elf_10.jpg",
  },
  elf11: {
    id: 11,
    name: "Test",
    desc: "Legendary elf-tested who defied fate for love.",
    image: "images/elf_11.jpg",
  },
  elf12: {
    id: 12,
    name: "Test2",
    desc: "Legendary elf-tested 2 times who defied fate for love.",
    image: "images/elf_12.jpg",
  },
};

  

const fullPath = window.location.pathname;
const basePath = fullPath.split('/')[1] || ''; 
const path = fullPath.replace(`/${basePath}/`, '').replace(/\/$/, '');
console.log(path);

const elf = elves[path];

if (path) {
    if (elf) {
        const storedElves = JSON.parse(localStorage.getItem('elves') || '[]');
        if (!storedElves.includes(path)) {
            storedElves.push(path);
            localStorage.setItem('elves', JSON.stringify(storedElves));
        }
    }
    else if (path === "clear") {
      localStorage.clear();
    }
    window.history.replaceState(null, '', `/${basePath}/`); 
}

const selectedElves = JSON.parse(localStorage.getItem('elves') || '[]');
const container = document.getElementById('card-container');
for (let i = 0; i < Object.keys(elves).length; i++) {
  const key = `elf${i + 1}`;
  if (selectedElves.includes(key)) {
    const data = elves[key];
    if (data) container.innerHTML += `<div class="card"><img width="100%" src="images/elf_${i+1}.jpg"></div>`;
  }else {
    container.innerHTML += `<div class="card"><img width="100%" src="images/cover.jpg"></div>`
  }
}

  