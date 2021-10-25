/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0. */

let footballTeams = [
    {
        name: 'Inter F.C',
        goals: 0,
        fouls: 0,
    },
    {
        name: ' A.C Milan',
        goals: 0,
        fouls: 0,
    },
    {
        name: 'Juventus F.C',
        goals: 0,
        fouls: 0,
    },
    {
        name: 'S.S Lazio',
        goals: 0,
        fouls: 0,
    },
]

for (let index = 0; index < footballTeams.length; index++) {
    const team = footballTeams[index];
    team.goals = getRandomnumber(10, 50)
    team.fouls = getRandomnumber(10, 30)


}

function getRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (const key in footballTeams) {
    const element = footballTeams[key];

}

/* 
Usando la destrutturazione ,creare un nuovo array i cui elementi contengono solo nomi e falli subiti e stampare tutto in console.
 */
let teamFouls = []
for (const key in footballTeams) {
    const team = footballTeams[key];

    let { name, fouls } = team

    teamFouls = [
        name, fouls
    ]
    console.log(teamFouls);
}
