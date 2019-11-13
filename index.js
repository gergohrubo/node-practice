// function promote(soldier) {
//     switch (soldier.rank) {
//         case 'private':
//             return {
//                 ...soldier,
//                 rank: 'private-1st-class',
//                 salaryUSD: 4250
//             }
//         case 'private-1st-class':
//             return {
//                 ...soldier,
//                 rank: 'specialist',
//                 salaryUSD: 4750
//             }
//         case 'specialist':
//             return {
//                 ...soldier,
//                 rank: 'corporal',
//                 salaryUSD: 5100
//             }
//         case 'corporal':
//             return {
//                 ...soldier,
//                 rank: 'sergeant',
//                 salaryUSD: 5700
//             }
//         default:
//             return soldier
//     }
// }


// const soldier = { firstName: 'Biggs', lastName: 'Darklighter', rank: 'specialist', salaryUSD: 4750 }
// const promotedSoldier = promote(soldier)

// console.log(promotedSoldier)
// console.log('same object?', soldier === promotedSoldier) // output same object? true

// const soldier2 = { firstName: 'Wedge', lastName: 'Antilles', rank: 'private-1st-class', salaryUSD: 4250 }
// const promotedSoldier2 = promote(soldier2)

// console.log(promotedSoldier2)
// console.log('same object?', soldier2 === promotedSoldier2) // output same object? true

function toAmericanGrade(grade) {
    if (grade >= 9) {
        return 'A'
    }
    if (grade >= 8) {
        return 'B'
    }
    if (grade >= 7) {
        return 'C'
    }
    if (grade >= 6) {
        return 'D'
    }
    return 'F'
}

function averageAmericanGrade(grades) {
    const sum = grades.reduce((a,b) => a+b)
    return toAmericanGrade(sum/grades.length)
}

// test
// This array was already declared in the previous section. 
// You might get an error if you run it again.
const grades1 = [9, 5.5, 6, 7.3]
const res = averageAmericanGrade(grades1)
console.log(`average is D? ${'D' == res ? "yes" : `no: ${res}`}`)