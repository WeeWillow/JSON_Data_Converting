const cards = [
    {
        name: "Amalia",
        cost: {
            plain: 1,
            swamp: 1,
        },
        type: {
            supertype: "Legendary Creature",
            subtype: "Vampire Scout",
        },
        power: 2,
        toughness: 2,
    },
    {
        name: "Big Bertha",
        cost: {
            grass: 3,
            milk: 2,
        },
        type: {
            supertype: "Legendary Creature",
            subtype: "Elder Cow",
        },
        power: 5,
        toughness: 6,
    },
]

const cardsJSON = JSON.stringify(cards)
const cardsObjectFromJSON = JSON.parse(cardsJSON)

console.log(cards);
console.log('cardsJSON:', cardsJSON)
console.log('cardsObjectFromJSON:', cardsObjectFromJSON)