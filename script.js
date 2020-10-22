var toughness = 0;
var damage_in = 0;
var defense_points = 0;
var total_protection = 0;
var resistance_level = 0;
var trueDamage = 0;
var criticalDamage = 0;

function DamageCalculator(){
  let damage = 0;
  let defense1 = defensePoints/5;
  let defense2 = defensePoints - (damage_in/(2+(toughness/4)));
  let defense = Math.max(defense1, defense2);
  damage = damage_in*(1-(Math.min(20,defense)/25));
  return damage;
  
}



function AddWeapon(w_damage){
  damage_in = w_damage;
}

function WeaponEnchantCalculator(sharpness_level,power_level){
  if sharpness_level > 0 {
    damage_in += 0.5*sharpness_level+0.5;
  }
  if power_level > 0 {
    damage_in += Math.ceil(damage_in * (0.25*(power_level+1)));
  }
}

function StrenghtCalculator(strenght_level){
  damage_in += strenght_level*3;
}

//Falta Crítico



function AddArmor(tough,defense_p){
  toughness += tough;
  defense_points += defense_p;
}

function ArmorEnchantmentsCalculator(protection_level){
  let total_protection += protection_level*4;
}

function AddResistence(resist_level){
  resistance_level = resist_level;
}



function DamageFinalResults(){
  let damage = DamageCalculator();
  damage -= (damage*(20*resistance_level)/100);
  damage -= damage*(total_protection/100);
  return damage;
}

function GetCritical(){
  damage_in *= 1.5;
}

function main(){
  //vamo la
  trueDamage = DamageFinalResults();
  GetCritical();
  criticalDamage = DamageFinalResults();
  ShowResults();
}


function ShowResults(){
  //finge que existe guys
  //é assim que roda a industria
}

