const proack = {
nom : "Proack",
etat : 100,
force : 85,

//description du personnage
decrire() {
  return `${this.nom} est a ${this.etat}% de vie et a ${this.force}% de force`;
}
};

const lorna = {
nom : "Lorna",
etat : 100,
force : 85,

//description du personnage
decrire() {
  return `${this.nom} est a ${this.etat}% de vie et a ${this.force}% de force`;
}
};

console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Proack est blessé par un coup d'épée de Lorna");
proack.etat = proack.etat - 10;
console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Lorna est blessé par un coup d'épée de Proack");
lorna.etat = lorna.etat - 10;
console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Proack est blessé par un nouveau coup d'épée de Lorna mais se protège avec son bouclier");
proack.etat = proack.etat - 5;
console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Lorna est blessé par un nouveau coup d'épée de Proack mais esquive");
lorna.etat = lorna.etat - 3;
console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Proack est soigné par son peuple");
proack.etat = proack.etat +8;
console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Lorna boit de la potion magique");
lorna.etat = lorna.etat + 10;
console.log(proack.decrire());
console.log(lorna.decrire());

console.log("Grâce à ce combat, Proack et Lorna prennent en force");
lorna.force = lorna.force + 10;
proack.force = proack.force + 10;
console.log(proack.decrire());
console.log(lorna.decrire());

/*console.log(`${proack.nom} est a ${proack.etat}% de vie et a ${proack.force}% de force`);

console.log("Proack est blessé par un piège à loup");
proack.etat = proack.etat - 10;

console.log("Proack utilise sa force pour s'en sortir");
proack.force = proack.force - 3;

console.log(`${proack.nom} est a ${proack.etat}% de vie et a ${proack.force}% de force`);

// description du personnage
function decrire(perso) {
  return `${proack.nom} est a ${proack.etat}% de vie et a ${proack.force}% de force`;
}
console.log(decrire(proack));*/
