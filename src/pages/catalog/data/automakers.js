const mas = [];
const items = document.querySelectorAll('#mark_act ul li');
for (let i = 1; i < items.length; i++) {
  mas.push(items[i].childNodes[0].childNodes[2]?.childNodes[0].textContent);
}

export const autoMakers = [
  'Audi',
  'BMW',
  'Chery',
  'Chevrolet',
  'Chrysler',
  'Citroen',
  'Ford',
  'Honda',
  'Hyundai',
  'Infinity',
  'Jeep',
  'Kia',
  'Lexus',
  'Mazda',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Opel',
  'Renault',
  'Skoda',
  'Subaru',
  'Tesla',
  'Toyota',
  'Volvo',
  'Volkswagen'
];
