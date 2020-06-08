// export default function Calculator(state, actiontype) {
//     const {
//         CodebreakerHist,
//         Codebreakerchecked,
//         CodebreakerTarget,
//         CodemakerHist,
//         Codemakerchecked,
//         CodemakerTarget,
//         isOneplayer,
//         isPlayer1turn,
//         Secret,
//         Turn
//     } = state;

//     switch (actiontype) {
//         case ("beginGame"): {
//             return { Turn: 0 }
//         }
//         case ("updateSecret"): {
//             return { Secret }
//         }
//         case ("updateGamemode"): {
//             return { isOneplayer }
//         }
//         case ("updateCodebreakerTarget"): {
//             return { CodebreakerTarget }
//         }
//         case ("updateCodebreakerChecked"): {
//             return { Codebreakerchecked: [...Codebreakerchecked.slice(0, CodebreakerTarget % 4), ...state.slice(CodebreakerTarget % 4 + 1)] }
//         }
//         case ("updateCodemakerTarget"): {
//             return { CodemakerTarget }
//         }
//         case ("updateCodemakerChecked"): {
//             return { CodebreakerTarget }
//         }
//         case ("rollTurns"): {
//             return { isPlayer1turn: !isPlayer1turn }
//         }
//         case ("rollCodebreakerturn"): {
//             return { CodebreakerHist: [...CodebreakerHist, Codebreakerchecked], Codebreakerchecked =[] }
//         }
//         case ("rollCodemakerturn"): {
//             return { CodemakerHist: [...CodemakerHist, CodemakerHist], CodemakerHist =[] }
//         }
//         case ("tap"): {
//             if (isPlayer1turn) { CodebreakerTarget = num; }
//             else { CodebreakerTarget = num; }
//         }
//         case ("resetGame"): {
//             Codebreakerchecked = [];
//             CodebreakerHist = [];
//             CodebreakerTarget = 0;
//             Codemakerchecked = [];
//             CodemakerHist = [];
//             CodemakerTarget = 0;
//             isOneplayer = true;
//             isPlayer1turn = true;
//             Turn = -1;
//             Secret = [];
//         }
//         case ("returnGamestate"): {
//             const cond = (CodebreakerHist.length > 0) ? CodebreakerHist[CodebreakerHist.length - 1].join("") : "0"

//             return {
//                 isActiveGame: (Turn != -1),
//                 isThereWinner: (cond === Secret.join("")),
//                 isPlayer1Turn: (turn % 2 === 0),
//                 isOneplayer: isOneplayer,
//                 Turn: Turn,
//             }
//         }
//     }

// }