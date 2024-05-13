#! /usr/bin/env node
import inquirer from "inquirer";
console.log("****************************ISLAMIC QUIZ APP****************************\n");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Who was the last Prophet of Allah?",
        choices: [
            "Hazrat Adam(A.S)",
            "Hazrat Musa(A.S)",
            "Hazrat Ibrahim(A.S)",
            "Hazrat Mohammad(Peace be upon him)",
        ],
    },
    {
        name: "question_2",
        type: "list",
        message: "How many Holy books are there?",
        choices: ["2", "4", "8", "6"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Zaboor was revealed on which Prophet of Allah?",
        choices: [
            "Hazrat Adam(A.S)",
            "Hazrat Musa(A.S)",
            "Hazrat Dawood(A.S)",
            "Hazrat Mohammad(Peace be upon him)",
        ],
    },
    {
        name: "question_4",
        type: "list",
        message: "Where do Muslims perform Hajj?",
        choices: ["In Makkah", "In Madina", "In Cairo", "In Jerusalem"],
    },
    {
        name: "question_5",
        type: "list",
        message: "How many Surahs are there in Holy Quran?",
        choices: ["150", "187", "114", "123"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "Hazrat Mohammad(Peace be upon him)":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "4":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "Hazrat Dawood(A.S)":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "In Makkah":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "114":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`\nYour score is ${score}\n`);
