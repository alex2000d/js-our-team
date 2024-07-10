// creo la mia struttura dati
// creo il mio arrey di oggetti
const our_team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: ' Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]
// mostro il mio arrey di oggetti in console
console.log(our_team);
// recupero il mio elemento dal dom 
let our_teams = document.getElementById('ourteams');
// creo un ciclo for per ciclare il mio arrey e stamparlo in console 
for( let i = 0; i < our_team.length; i++){
    // mostro i miei oggetti contenuti nell'arrey in console
    console.log(our_team[i].nome, our_team[i].ruolo, our_team[i].foto);
    // mostro il mio arrey di oggetti sul dom
    our_teams.innerHTML += `${our_team[i].nome, our_team[i].ruolo, our_team[i].foto} <br>`
}
    



