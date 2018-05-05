import { Quest } from './quest';

export const QUESTS: Quest[] = [
    {
        id: 1,
        title: 'Test 1',
        endGoalMonth: 2,
        endGoalYear: 2018,
        totalMissions: 3,
        totalSidetracks: 4,
        progress: 1,
        icon: 'test1.png',
        description: 'Test 1 Description',
        totalCampaign: 7
    },

    {
        id: 2,
        title: 'Test 2',
        endGoalMonth: 3,
        endGoalYear: 2019,
        totalMissions: 4,
        totalSidetracks: 5,
        progress: 2,
        icon: 'test2.png',
        description: 'Test 2 Description',
        totalCampaign: 9
    },

    {
        id: 3,
        title: 'Test 3',
        endGoalMonth: 4,
        endGoalYear: 2020,
        totalMissions: 5,
        totalSidetracks: 6,
        progress: 3,
        icon: 'test3.png',
        description: 'Test 3 Description',
        totalCampaign: 11
    },

    {
        id: 4,
        title: 'Test 4',
        endGoalMonth: 5,
        endGoalYear: 2021,
        totalMissions: 6,
        totalSidetracks: 7,
        progress: 4,
        icon: 'test4.png',
        description: 'Test 4 Description',
        totalCampaign: 13
    },
];
