// Each node is of the form:
// node_name: {"question": "The question to ask the user"
//           , "answers": [{"answer": "The answer to the question"
//                           , "node": "The node to go to next"
//                           , "treasure": "treasure"} // Optional
//           , ...]}

// treasure keys
var six_pieces_of_iron = "six pieces of iron";
var gold = "gold";
var amethyst_shards = "amethyst shards";
var diamonds = "diamonds";
var bag_of_coins = "bag of coins";
var an_emerald = "an emerald";

// node keys
var beginning = "beginning";
var just_inside_the_cave = "just inside the cave";
var deeper_into_the_cave = "deeper into the cave";
var start_mining_in_the_cave = "start mining in the cave";
var with_the_treasure_chest = "with the treasure_chest";
var arrive_on_phobos = "arrive on phobos";
var starting_to_explore_phobos = "starting to explore phobos";
var go_under_the_diamond_umbrella = "go under the diamond umbrella";
var emerald_city = "emerald city";
var looking_for_emeralds = "looking for emeralds";
var dig_by_the_rock = "dig by the rock";
var dig_by_the_stream = "dig by the stream";
var arrive_in_mario_land = "arrive in mario land";
var explore_mario_land = "explore mario land";
var enter_deep_space = "enter deep space";
var explore_deep_space = "explore deep space";
var enter_deep_deep_space = "enter deep deep space";
var enter_nintendo = "enter nintendo";
var enter_nintendo_game_among_us = "enter nintendo game among us";
var nintendo_game_among_us_do_tasks = "nintendo game among us do tasks";
var nintendo_game_among_us_hide_in_the_corner =
  "nintendo game among us hide in the corner";
var enter_nintendo_game_super_mario = "enter nintendo game super mario";
var nintendo_game_super_mario_finish_the_level =
  "nintendo game super mario finish the level";
var nintendo_game_super_mario_hide_in_the_corner =
  "nintendo game super mario hide in the corner";
var enter_nintendo_game_minecraft = "enter nintendo game minecraft";
var nintendo_game_minecraft_find_a_village =
  "nintendo game minecraft find a village";
var nintendo_game_minecraft_raid_the_village =
  "nintendo game minecraft raid the village";
var nintendo_game_minecraft_find_a_cave = "nintendo game minecraft find a cave";
var nintendo_game_minecraft_farm_sheep = "nintendo game minecraft farm sheep";
var nintendo_game_minecraft_find_chest_1 =
  "nintendo game minecraft find chest 1";
var nintendo_game_minecraft_with_chest_1 =
  "nintendo game minecraft with chest 1";
var nintendo_game_minecraft_opened_chest_2 =
  "nintendo game minecraft opened chest 2";
var nintendo_game_minecraft_find_chest_2 =
  "nintendo game minecraft find chest 2";
var nintendo_game_minecraft_with_chest_2 =
  "nintendo game minecraft with chest 2";
var exit_the_game = "exit the game";

export var game_nodes = {
  beginning: {
    question_preface:
      "You are at the beginning of the game...all roads lead from here.",
    answers: [
      {
        answer: "Enter a nearby cave",
        node: just_inside_the_cave,
      },
      { answer: "Take a gondola ride to Emerald City", node: emerald_city },
      { answer: "Hop into Nintendo world", node: enter_nintendo },
    ],
  },
  just_inside_the_cave: {
    question_preface: "You are just inside the entrance to the cave.",
    answers: [
      { answer: "Go deeper into the cave", node: deeper_into_the_cave },
      { answer: "Start mining", node: start_mining_in_the_cave },
      { answer: "Hyper jump to phobos", node: arrive_on_phobos },
    ],
  },
  deeper_into_the_cave: {
    question_preface: "You are at the end of the cave.",
    answers: [
      { answer: "Go back", node: just_inside_the_cave },
      { answer: "Start mining", node: start_mining_in_the_cave },
    ],
  },
  start_mining_in_the_cave: {
    question_preface: "You found a treasure chest!",
    answers: [
      { answer: "Open it", node: with_the_treasure_chest, treasure: gold },
      { answer: "Leave it", node: with_the_treasure_chest },
    ],
  },
  with_the_treasure_chest: {
    question_preface: "You are with the treasure chest.",
    answers: [
      { answer: "Go back to the beginning of the game", node: beginning },
      {
        answer: "Go back to the start of the cave",
        node: just_inside_the_cave,
      },
      { answer: "Exit the game", node: exit_the_game },
    ],
  },
  arrive_on_phobos: {
    question_preface: "You are on phobos.",
    answers: [
      { answer: "Explore phobos", node: starting_to_explore_phobos },
      { answer: "Go into deep space", node: enter_deep_space },
      { answer: "Go back to the beginning", node: beginning },
      { answer: "Go back to the cave", node: just_inside_the_cave },
      { answer: "Go to Mario Land", node: arrive_in_mario_land },
    ],
  },
  starting_to_explore_phobos: {
    question_preface: "It's raining diamonds!",
    answers: [
      {
        answer: "Collect some diamonds",
        node: go_under_the_diamond_umbrella,
        treasure: diamonds,
      },
      {
        answer: "Don't collect any diamonds",
        node: go_under_the_diamond_umbrella,
      },
    ],
  },
  go_under_the_diamond_umbrella: {
    question_preface: "You are under the diamond umbrella.",
    answers: [
      { answer: "Go back to the beginning", node: "beginning" },
      { answer: "Exit the game", node: exit_the_game },
    ],
  },
  emerald_city: {
    question_preface: "You are in the emerald city.",
    answers: [
      { answer: "Go back to the beginning", node: beginning },
      { answer: "Look for some emeralds", node: looking_for_emeralds },
    ],
  },
  looking_for_emeralds: {
    question_preface: "You are looking for emeralds.",
    answers: [
      {
        answer: "Dig by the rock",
        node: dig_by_the_rock,
        treasure: an_emerald,
      },
      { answer: "Dig by the stream", node: dig_by_the_stream },
    ],
  },
  dig_by_the_rock: {
    question_preface: "You found an emerald!",
    answers: [
      { answer: "Go back to emerald city", node: emerald_city },
      { answer: "Go back to the beginning", node: beginning },
    ],
  },
  dig_by_the_stream: {
    question_preface:
      "Nothing here. Do you want to dig by the rock or go back to the beginning?",
    answers: [
      { answer: "dig by the rock", node: dig_by_the_rock },
      { answer: "go back to the beginning", node: beginning },
    ],
  },
  arrive_in_mario_land: {
    question_preface: "You are in Mario Land.",
    answers: [
      { answer: "Explore Mario Land", node: explore_mario_land },
      { answer: "Go back to phobos", node: arrive_on_phobos },
    ],
  },
  explore_mario_land: {
    question_preface: "You are exploring Mario Land and find a bag of coins.",
    answers: [
      {
        answer: "Pick up the bag of coins",
        node: explore_mario_land,
        treasure: bag_of_coins,
      },
      { answer: "Hyperlink to the cave", node: just_inside_the_cave },
    ],
  },
  enter_deep_space: {
    question_preface: "You are in deep space.",
    answers: [
      { answer: "Go back to the beginning", node: beginning },
      { answer: "Explore deep space", node: explore_deep_space },
      { answer: "Go deeper into space", node: enter_deep_deep_space },
    ],
  },
  explore_deep_space: {
    question_preface:
      "You are exploring deep space and notice shards of amethyst floating around!",
    answers: [
      {
        answer: "Collect the shards of amethyst",
        node: explore_deep_space,
        treasure: amethyst_shards,
      },
      { answer: "Go back to the beginning", node: beginning },
      { answer: "Go deeper into space", node: enter_deep_deep_space },
    ],
  },
  enter_deep_deep_space: {
    question_preface:
      "Unfortunately you have encountered a black whole and died!",
    answers: [],
  },
  enter_nintendo: {
    question_preface: "You are in Nintendo.",
    answers: [
      { answer: "Among Us", node: enter_nintendo_game_among_us },
      { answer: "Minecraft", node: enter_nintendo_game_minecraft },
      { answer: "Super Mario", node: enter_nintendo_game_super_mario },
    ],
  },
  enter_nintendo_game_among_us: {
    question_preface: "You are in the game Among Us.",
    answers: [
      { answer: "Get your tasks done", node: nintendo_game_among_us_do_tasks },
      {
        answer: "Hide in the corner",
        node: nintendo_game_among_us_hide_in_the_corner,
      },
    ],
  },
  nintendo_game_among_us_do_tasks: {
    question_preface:
      "Unfortunately an imposter found you and stabbed you with a knife...you died!",
    answers: [],
  },
  nintendo_game_among_us_hide_in_the_corner: {
    question_preface:
      "Unfortunately hiding in the corner was a bad idea because that's where the imposter was and they shot you...you died!",
    answers: [],
  },
  enter_nintendo_game_super_mario: {
    question_preface: "You are in the game Among Us.",
    answers: [
      {
        answer: "Finish the level",
        node: nintendo_game_super_mario_finish_the_level,
      },
      {
        answer: "Hide in the corner",
        node: nintendo_game_among_us_hide_in_the_corner,
      },
    ],
  },
  nintendo_game_super_mario_finish_the_level: {
    question_preface:
      "You were doing but then, unfortunately, you fell into a void and died!",
    answers: [],
  },
  nintendo_game_super_mario_hide_in_the_corner: {
    question_preface: "Times up and, unfortunately, you died!",
    answers: [],
  },
  enter_nintendo_game_minecraft: {
    question_preface: "You are in the game Minecraft.",
    answers: [
      {
        answer: "Find a village",
        node: nintendo_game_minecraft_find_a_village,
      },
      { answer: "Find a cave", node: nintendo_game_minecraft_find_a_cave },
    ],
  },
  nintendo_game_minecraft_find_a_cave: {
    question_preface:
      "Unfortunately while walking through the cave with your pick axe and skeleton shot you with a bow and arrow. You died!",
    answers: [],
  },
  nintendo_game_minecraft_find_a_village: {
    question_preface: "You have entered a minecraft village.",
    answers: [
      {
        answer: "Raid the village",
        node: nintendo_game_minecraft_raid_the_village,
      },
      { answer: "Farm sheep", node: nintendo_game_minecraft_farm_sheep },
    ],
  },
  nintendo_game_minecraft_farm_sheep: {
    question_preface:
      "Unfortunately, while walking around at night, a zombie attacked you and ate your brain. You died!",
    answers: [],
  },
  nintendo_game_minecraft_raid_the_village: {
    question_preface: "While raiding the village you found a chest!",
    answers: [
      {
        answer: "Open the chest",
        node: nintendo_game_minecraft_with_chest_1,
        treasure: six_pieces_of_iron,
      },
      { answer: "Leave it", node: nintendo_game_minecraft_with_chest_1 },
    ],
  },
  nintendo_game_minecraft_with_chest_1: {
    question_preface: "You are with this chest.",
    answers: [
      {
        answer: "Find another chest",
        node: nintendo_game_minecraft_find_chest_2,
      },
      { answer: "Go back to the beginning", node: beginning },
    ],
  },
  nintendo_game_minecraft_find_chest_2: {
    question_preface: "While raiding the village you found another chest!",
    answers: [
      {
        answer: "Open the chest",
        node: nintendo_game_minecraft_opened_chest_2,
      },
      { answer: "Leave it", node: nintendo_game_minecraft_with_chest_2 },
    ],
  },
  nintendo_game_minecraft_opened_chest_2: {
    question_preface: "This will teach you to be greedy, you died!",
    answers: [],
  },
  nintendo_game_minecraft_with_chest_2: {
    question_preface: "You are with this second chest.",
    answers: [
      { answer: "Go back to the beginning", node: beginning },
      { answer: "Hyper jump to phobos", node: arrive_on_phobos },
    ],
  },
  exit_the_game: { question_preface: "Sorry to see you go.", answers: [] },
};

export var beginningNode = game_nodes.beginning;

export var winning_treasure = [
  six_pieces_of_iron,
  gold,
  amethyst_shards,
  diamonds,
  bag_of_coins,
  an_emerald,
];

export var treasure = [];

// This is for diagnostic purposes only.
// A way to show how to traverse the game_nodes data structure without actually running the game.
export function logGameNodes() {
  console.log("************************************");
  console.log(" Iterate through the data structure ");
  console.log("************************************");
  for (let [key, node] of Object.entries(game_nodes)) {
    console.log(`node key: ${key}`);
    console.log(`question preface: ${node.question_preface}`);
    console.log(`   There are ${node.answers.length} possible answers:`);
    node.answers.forEach(logAnswerItem);
  }
}

function logAnswerItem(answerItem) {
  console.log(`      answer: ${answerItem.answer}`);
  console.log(`         destination node: ${answerItem.node}`);
  console.log(`         optional treasure: ${answerItem.treasure}`);
}

// Uncomment this line to run the diagnostic function.
// logGameNodes();
