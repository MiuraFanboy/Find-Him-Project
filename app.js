const elves = {
    elf1: {
      name: "Elrond",
      desc: "Wise and powerful High Elf lord, master of Rivendell.",
    },
    elf2: {
      name: "Legolas",
      desc: "Agile Wood Elf archer from the Woodland Realm.",
    },
    elf3: {
      name: "Galadriel",
      desc: "Ancient and majestic Lady of Lothlórien.",
    },
    elf4: {
      name: "Thranduil",
      desc: "Elvenking of the Woodland Realm and father of Legolas.",
    },
    elf5: {
      name: "Tauriel",
      desc: "Skilled captain of the Elven guard, brave and passionate.",
    },
    elf6: {
      name: "Finrod",
      desc: "Noble elf of the First Age, loyal and self-sacrificing.",
    },
    elf7: {
      name: "Glorfindel",
      desc: "Heroic warrior who returned from Valinor to aid Middle-earth.",
    },
    elf8: {
      name: "Arwen",
      desc: "Daughter of Elrond, known for her beauty and courage.",
    },
    elf9: {
      name: "Círdan",
      desc: "Ancient shipwright and guardian of the Grey Havens.",
    },
    elf10: {
      name: "Lúthien",
      desc: "Legendary elf-maiden who defied fate for love.",
    }
};
  

const fullPath = window.location.pathname;
const basePath = fullPath.split('/')[1] || ''; 
const path = fullPath.replace(`/${basePath}/`, '').replace(/\/$/, ''); 
console.log(!!path)

const elf = elves[path];

if (path) {
    if (elf) {
        const storedElves = JSON.parse(localStorage.getItem('elves') || '[]');
        if (!storedElves.includes(path)) {
            storedElves.push(path)
            localStorage.setItem('elves', JSON.stringify(storedElves));
        }
    }
    window.history.replaceState(null, '', `/${basePath}/`); 
}

const selectedElves = JSON.parse(localStorage.getItem('elves') || '[]');
if (selectedElves) {
    const container = document.getElementById('card-container');
    for (let selectedElf of selectedElves) {
        const data = elves[selectedElf];
        if (data) container.innerHTML += `<div class="card"><h1>${data.name}</h1><p>${data.desc}</p></div>`;
    }
}
  