//pb bonus + ajouter random // points et bonus
//class persos + constructor et propriétés
class Perso {
  constructor(nom, etat, force) {
    this.nom = nom;
    this.etat = etat;
    this.force = force;
    this.expe = 0;
  }
  //Attaques
  attaquer(cible) {
    if (this.etat > 0) {
    const degats = this.force;
    console.log(
      `${this.nom} attaque ${ cible.nom} et lui inflige ${degats}% de dégâts`
    );//si etat vivant : force perso = degats cible
    cible.etat -= degats;
    if (cible.etat > 0) {
      console.log(`${cible.nom} a encore ${cible.etat}% de vie`);
      const XP = 10;
      this.expe += XP;
    } // si encore vivant : quantité vie as attaque+nouvelle expe
    else {
      cible.etat = 0;
      console.log(
        `${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience`
      );  // si etat : 0 = mort
    }
  } else {
      console.log(
        `${this.nom} est mort.e`
      );// si etat : 0 avant combat = mort
    }
  }
 // méthode affichage etat perso
  decrire() {
    return `${this.nom} est à ${this.etat}% de vie et a ${this.force}% de force.
    ${this.nom} possède ${this.expe} points d'expérience`;
  }
}
console.log(`Un combat va commencer...`);
//alert(`Un combat va commencer...`);

//instanciation
const proack = new Perso("Proack", 100, 52);
console.log(proack.decrire());
//alert(proack.decrire());

const lorna = new Perso("Lorna", 100, 53);
console.log(`Une Gorgone arrive : elle s'appelle ${lorna.nom}`);
console.log(lorna.decrire());
//alert(`Une Gorgone arrive : elle s'appelle ${lorna.nom}`);
//alert(lorna.decrire());

//coups
lorna.attaquer(proack);
proack.attaquer(lorna);

//nouvel etat persos
console.log(proack.decrire());
//alert(proack.decrire());
console.log(lorna.decrire());
//alert(lorna.decrire());

//prototype (spe JS) = lien/référence vers objet


/*const proack = {
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

// fonction description du personnage
decrire() {
  return `${this.nom} est a ${this.etat}% de vie et a ${this.force}% de force`;
}
};

//interactions
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

console.log(`${proack.nom} est a ${proack.etat}% de vie et a ${proack.force}% de force`);

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
