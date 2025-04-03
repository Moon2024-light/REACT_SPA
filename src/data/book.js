// Importing images for all books
import darkChase from "../assets/images/darkChase.jpg";
import battlefieldHonor from "../assets/images/battlefieldHonor.jpg";
import lastStand from "../assets/images/lastStand.jpg";
import rescueMission from "../assets/images/rescueMission.jpg";
import shadowWarriors from "../assets/images/shadow_warriors.jpg";
import ultimateshowdown from "../assets/images/ultimateshowdown.jpg";
import covertStrike from "../assets/images/covert_Strike.jpg";
import warpath from "../assets/images/celestial_War.jpg"; 
import finalAssault from "../assets/images/final_Assault.jpg";
import urbanConflict from "../assets/images/urban_Conflict.jpg";
import eliteForce from "../assets/images/elite_Force.jpg";
import rogueOps from "../assets/images/rogue_Ops.jpg";

import loveInParis from "../assets/images/romance.book1.jpg";
import foreverYours from "../assets/images/romance.book2.jpg";
import heartsJourney from "../assets/images/romance.book3.png";
import unbreakableBond from "../assets/images/unbreakable_bond.jpg";
import moonlightRomance from "../assets/images/moonlight.romance.jpg";
import lostInLove from "../assets/images/lost_in_love.jpg";
import timelessAffair from "../assets/images/timeless_Affair.jpg";
import secretAdmirer from "../assets/images/secret_Admirer.jpg";
import heartstrings from "../assets/images/heartstrings.jpg";
import sunsetPromises from "../assets/images/sunset_Promises.jpg";
import loveUnscripted from "../assets/images/love_Unscripted.jpg";
import foreverAndAlways from "../assets/images/forever_and_always.jpg";

import secretWhispers from "../assets/images/secret_Whispers.jpg";
import midnightMystery from "../assets/images/midnight_Mystery.jpg";
import vanishingPoint from "../assets/images/vanishingPoint.jpg";
import deadlyPuzzles from "../assets/images/deadlyPuzzles.jpg";
import hiddenTruth from "../assets/images/HiddenTruth.jpg";
import finalClue from "../assets/images/finalClue.jpg";
import unsolvedCase from "../assets/images/unsolved_Case.jpg";
import deepSecrets from "../assets/images/deep_Secrets.jpg";
import crimeLab from "../assets/images/crime_Lab.jpg";
import forgottenFiles from "../assets/images/forgotten_Files.jpg";
import beneathTheSurface from "../assets/images/beneath_The_Surface.jpg";
import coldShadows from "../assets/images/cold_Shadows.jpg";

import enchantedRealm from "../assets/images/Enchanted_Realm.jpg";
import dragonQuest from "../assets/images/dragon_Quest.jpg";
import forbiddenMagic from "../assets/images/forbidden_Magic.jpg";
import mythicalLands from "../assets/images/mythical_Lands.jpg";
import shadowSorcerer from "../assets/images/shadow_Sorcerer.jpg";
import eternalKingdom from "../assets/images/eerie_Echoesternal_Kingdom.jpg";
import wizardLegacy from "../assets/images/wizard_Legacy.jpg";
import celestialWar from "../assets/images/celestial_War.jpg";
import legendaryTales from "../assets/images/legendary_Tales.jpg";
import runestoneChronicles from "../assets/images/runestone_Chronicles.jpg";
import dragonLords from "../assets/images/dragon_Lords.jpg";
import enchantedProphecy from "../assets/images/enchanted_Prophecy.jpg";

import hauntedManor from "../assets/images/haunted_Manor.jpg";
import darkProphecy from "../assets/images/dark_Prophecy.jpg";
import nightmareRealm from "../assets/images/nightmare_Realm.jpg";
import cursedVillage from "../assets/images/cursed_Village.jpg";
import shadowedFigures from "../assets/images/shadowed_Figures.jpg";
import eerieEchoes from "../assets/images/eerie_Echoes.jpg";
import phantomCurse from "../assets/images/phantom_Curse.jpg";
import twistedSouls from "../assets/images/twisted_Souls.jpg";
import abandonedAsylum from "../assets/images/abandoned_Asylum.jpg";
import sinisterWhispers from "../assets/images/sinister_Whispers.jpg";
import lostInTheDark from "../assets/images/lost_in_the_dark.jpg";
import horrorChronicles from "../assets/images/horror_Chronicles.jpg";

// Define book categories
const categories = ["Action", "Romantic", "Mystery", "Fantasy", "Horror"];
const books = {
  Action: [
    { title: "The Dark Chase", image: darkChase },
    { title: "Battlefield Honor", image: battlefieldHonor },
    { title: "The Last Stand", image: lastStand },
    { title: "Rescue Mission", image: rescueMission },
    { title: "Shadow Warriors", image: shadowWarriors },
    { title: "ultimateshowdown", image: ultimateshowdown },
    { title: "Covert Strike", image: covertStrike },
    { title: "Warpath", image: warpath },
    { title: "Final Assault", image: finalAssault },
    { title: "Urban Conflict", image: urbanConflict },
    { title: "Elite Force", image: eliteForce },
    { title: "Rogue Ops", image: rogueOps },
  ],
  Romantic: [
    { title: "Love in Paris", image: loveInParis },
    { title: "Forever Yours", image: foreverYours },
    { title: "The Heart's Journey", image: heartsJourney },
    { title: "Unbreakable Bond", image: unbreakableBond },
    { title: "Moonlight Romance", image: moonlightRomance },
    { title: "Lost in Love", image: lostInLove },
    { title: "Timeless Affair", image: timelessAffair },
    { title: "Secret Admirer", image: secretAdmirer },
    { title: "Heartstrings", image: heartstrings },
    { title: "Sunset Promises", image: sunsetPromises },
    { title: "Love Unscripted", image: loveUnscripted },
    { title: "Forever and Always", image: foreverAndAlways },
  ],
  Mystery: [
    { title: "Secret Whispers", image: secretWhispers },
    { title: "Midnight Mystery", image: midnightMystery },
    { title: "Vanishing Point", image: vanishingPoint },
    { title: "Deadly Puzzles", image: deadlyPuzzles },
    { title: "Hidden Truth", image: hiddenTruth },
    { title: "Final Clue", image: finalClue },
    { title: "Unsolved Case", image: unsolvedCase },
    { title: "Deep Secrets", image: deepSecrets },
    { title: "Crime Lab", image: crimeLab },
    { title: "Forgotten Files", image: forgottenFiles },
    { title: "Beneath the Surface", image: beneathTheSurface },
    { title: "Cold Shadows", image: coldShadows },
  ],
  Fantasy: [
    { title: "Enchanted Realm", image: enchantedRealm },
    { title: "Dragon Quest", image: dragonQuest },
    { title: "Forbidden Magic", image: forbiddenMagic },
    { title: "Mythical Lands", image: mythicalLands },
    { title: "Shadow Sorcerer", image: shadowSorcerer },
    { title: "Eternal Kingdom", image: eternalKingdom },
    { title: "Wizard's Legacy", image: wizardLegacy },
    { title: "Celestial War", image: celestialWar },
    { title: "Legendary Tales", image: legendaryTales },
    { title: "Runestone Chronicles", image: runestoneChronicles },
    { title: "Dragon Lords", image: dragonLords },
    { title: "Enchanted Prophecy", image: enchantedProphecy },
  ],
  Horror: [
    { title: "Haunted Manor", image: hauntedManor },
    { title: "Dark Prophecy", image: darkProphecy },
    { title: "Nightmare Realm", image: nightmareRealm },
    { title: "Cursed Village", image: cursedVillage },
    { title: "Shadowed Figures", image: shadowedFigures },
    { title: "Eerie Echoes", image: eerieEchoes },
    { title: "Phantom Curse", image: phantomCurse },
    { title: "Twisted Souls", image: twistedSouls },
    { title: "Abandoned Asylum", image: abandonedAsylum },
    { title: "Sinister Whispers", image: sinisterWhispers },
    { title: "Lost in the Dark", image: lostInTheDark },
    { title: "Horror Chronicles", image: horrorChronicles },
  ],
};

export { books, categories };
