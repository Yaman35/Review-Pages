// Objects in Array
const leaders = [
  {
    id: 1,
    name: 'Joe Biden',
    country: 'United States of America',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/800px-Joe_Biden_presidential_portrait.jpg',
    text: 'The president of the United States  is the head of state and head of government of the United States of America. The president directs the executive branch of the federal government and is the commander-in-chief of the United States Armed Forces.'
  },
  {
    id: 2,
    name: 'Emmanuel Macron',
    country: 'France',
    img: 'https://images.unian.net/photos/2018_11/1541375337-4498.JPG?0.05295446116713287',
    text: 'The president of France, officially the president of the French Republic (French: Président de la République française), is the head of state and head of executive of France, as well as the commander-in-chief of the French Armed Forces. As the presidency is the supreme magistracy of the country, the officeholder is the holder of the highest office in France.'
  },
  {
    id: 3,
    name: 'Frank-Walter Steinmeier',
    country: 'Germany',
    img: 'https://www.americanacademy.de/wp-content/uploads/2019/01/Steinmeier-Frank-Walter.jpg',
    text: 'Frank-Walter Steinmeier (born 5 January 1956) is a German politician serving as President of Germany since 19 March 2017. He was previously Minister of Foreign Affairs from 2005 to 2009 and again from 2013 to 2017, as well as Vice-Chancellor of Germany from 2007 to 2009. Steinmeier was chairman-in-office of the Organization for Security and Co-operation in Europe (OSCE) in 2016.'
  },
  {
    id: 4,
    name: 'Sergio Mattarella',
    country: 'Italy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Presidente_Sergio_Mattarella.jpg/800px-Presidente_Sergio_Mattarella.jpg',
    text: "The president of Italy, officially denoted as President of the Italian Republic (Italian: Presidente della Repubblica Italiana) is the head of state of Italy. In that role, the officeholder represents national unity, guarantees that Italian politics comply with the Constitution of Italy and is the head of the Italian Armed Forces. The president's term of office lasts for seven years. The current holder is former Constitutional Judge Sergio Mattarella, who was elected on 31 January 2015."
  },
  {
    id: 5,
    name: 'Fumio Kishida',
    country: 'Japan',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Fumio_Kishida_20211004.jpg',
    text: 'The prime minister of Japan, is the head of government of Japan, the chief executive of the National Cabinet and the commander-in-chief of the Japan Self-Defense Forces; he is appointed by the Emperor of Japan after being designated by the National Diet and must enjoy the confidence of the House of Representatives to remain in office. He is the head of the Cabinet and appoints and dismisses the other ministers of state. The literal translation of the Japanese name for the office is Minister for the Comprehensive Administration of (or the Presidency over) the Cabinet.'
  },
  {
    id: 6,
    name: 'Boris Johnson',
    country: 'United Kingdom',
    img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/5D26/production/_121264832_976_hi071601228.jpg',
    text: 'The prime minister of the United Kingdom is the head of government in the United Kingdom. The prime minister chairs the Cabinet and selects its ministers, and advises the sovereign on the exercise of much of the royal prerogative. As modern prime ministers hold office by virtue of their ability to command the confidence of the House of Commons, they typically sit as a member of Parliament and lead the largest party or a coalition in the House of Commons.'
  },
  {
    id: 7,
    name: 'Justin Trudeau',
    country: 'Canada',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Trudeau_visit_White_House_for_USMCA_%28cropped%29.jpg',
    text: 'Justin Pierre James Trudeau PC MP (born December 25, 1971), is a Canadian politician who is the 23rd and current prime minister of Canada since November 2015 and the leader of the Liberal Party since 2013. Trudeau is the second-youngest prime minister in Canadian history after Joe Clark; he is also the first to be the child or other relative of a previous holder of the post, as the eldest son of Pierre Trudeau.'
  }
];

// Get the Elements

const img = document.getElementById('person-img');
const president = document.getElementById('president');
const country = document.getElementById('country');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// The first object of the array will be shown when the page loads

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {   // Sayfa yuklendiginde calismasi istenen fonksiyon
  const item = leaders[currentItem];
  img.src = item.img;
  president.textContent = item.name;
  country.textContent = item.country;
  info.textContent = item.text;
});

// The informations of the relevant object will be shown
function showPerson(person) {
  const item = leaders[person];
  img.src = item.img;
  president.textContent = item.name;
  country.textContent = item.country;
  info.textContent = item.text;
}

// Show the next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > leaders.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Show the previous person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = leaders.length - 1;
  }
  showPerson(currentItem);
});

// Show the random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * leaders.length);
  showPerson(currentItem);
});
