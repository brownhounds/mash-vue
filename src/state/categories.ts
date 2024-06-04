export const Categories = {
    MASH: 0,
    LIFE_PARTNER: 1,
    NUMBER_OF_KIDS: 2,
    JOB: 3,
    PET: 4,
    CAR: 5,
    LOCATION: 6,
} as const;

export type CategoriesType = (typeof Categories)[keyof typeof Categories];

const categoryMap = [
    'MASH',
    'Life Partner',
    'Number Of Kids',
    'Job',
    'Pet',
    'Car',
    'Location',
];

export const getCategoryDescription = (category: CategoriesType): string => {
    return categoryMap[category];
};

export const categoriesInitialValues = {
    [Categories.MASH]: ['Mansion', 'Apartment', 'Shack', 'House'],
    [Categories.LIFE_PARTNER]: [
        'Taylor Swift',
        'Chris Hemsworth',
        'Elon Musk',
        'An alien from Mars who only speaks in riddles',
    ],
    [Categories.NUMBER_OF_KIDS]: [
        '0 (DINK: Double Income, No Kids)',
        '2.5 (like the average statistical family)',
        '8 (starting your own baseball team)',
        '100 (you now live in a shoe)',
    ],
    [Categories.JOB]: [
        'Rock star',
        'Astronaut',
        'Secret Agent',
        'Professional napper for mattress testing company',
    ],
    [Categories.PET]: [
        'Golden Retriever',
        'Bengal Cat',
        'Miniature Pig',
        'A pet rock with abandonment issues',
    ],
    [Categories.CAR]: [
        'Tesla Model S',
        'Ferrari',
        'Vintage VW Beetle',
        'A unicycle with a broken wheel',
    ],
    [Categories.LOCATION]: [
        'Paris, France',
        'New York City, USA',
        'Tokyo, Japan',
        'An igloo in the middle of Antarctica',
    ],
};
