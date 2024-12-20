// rankingData.js
export const teamRankings = {
    test: [
        { pos: 1, name: 'India', matches: 35, points: 4500, rating: 128 },
        { pos: 2, name: 'Australia', matches: 30, points: 3800, rating: 127 },
        { pos: 3, name: 'New Zealand', matches: 32, points: 3700, rating: 115 },
        { pos: 4, name: 'England', matches: 28, points: 3400, rating: 121 },
        { pos: 5, name: 'South Africa', matches: 26, points: 3100, rating: 119 },
        { pos: 6, name: 'Pakistan', matches: 25, points: 3000, rating: 115 },
        { pos: 7, name: 'Sri Lanka', matches: 29, points: 3300, rating: 114 },
        { pos: 8, name: 'West Indies', matches: 27, points: 2900, rating: 108 },
        { pos: 9, name: 'Bangladesh', matches: 23, points: 2400, rating: 104 },
        { pos: 10, name: 'Zimbabwe', matches: 20, points: 1800, rating: 90 },
    ],
    odi: [
        { pos: 1, name: 'England', matches: 30, points: 3600, rating: 120 },
        { pos: 2, name: 'New Zealand', matches: 28, points: 3300, rating: 118 },
        { pos: 3, name: 'India', matches: 35, points: 4100, rating: 117 },
        { pos: 4, name: 'Australia', matches: 32, points: 3800, rating: 115 },
        { pos: 5, name: 'Pakistan', matches: 29, points: 3400, rating: 114 },
        { pos: 6, name: 'South Africa', matches: 26, points: 3000, rating: 112 },
        { pos: 7, name: 'Sri Lanka', matches: 28, points: 3100, rating: 111 },
        { pos: 8, name: 'West Indies', matches: 27, points: 2900, rating: 108 },
        { pos: 9, name: 'Bangladesh', matches: 23, points: 2400, rating: 104 },
        { pos: 10, name: 'Afghanistan', matches: 22, points: 2300, rating: 100 },
    ],
    t20i: [
        { pos: 1, name: 'Pakistan', matches: 40, points: 4800, rating: 120 },
        { pos: 2, name: 'India', matches: 35, points: 4200, rating: 119 },
        { pos: 3, name: 'New Zealand', matches: 32, points: 3700, rating: 115 },
        { pos: 4, name: 'England', matches: 28, points: 3400, rating: 121 },
        { pos: 5, name: 'Australia', matches: 30, points: 3600, rating: 118 },
        { pos: 6, name: 'South Africa', matches: 26, points: 3000, rating: 112 },
        { pos: 7, name: 'Sri Lanka', matches: 29, points: 3300, rating: 114 },
        { pos: 8, name: 'West Indies', matches: 27, points: 2900, rating: 108 },
        { pos: 9, name: 'Bangladesh', matches: 23, points: 2400, rating: 104 },
        { pos: 10, name: 'Afghanistan', matches: 22, points: 2300, rating: 100 },
    ],
};

export const playerRankings = {
    men: {
        test: {
            batting: [
                { pos: 1, name: 'Babar Azam', matches: 80, points: 930, rating: 920 },
                { pos: 2, name: 'Virat Kohli', matches: 85, points: 910, rating: 905 },
                { pos: 3, name: 'Rohit Sharma', matches: 90, points: 900, rating: 900 },
                { pos: 4, name: 'Kane Williamson', matches: 75, points: 880, rating: 885 },
                { pos: 5, name: 'Steve Smith', matches: 70, points: 870, rating: 875 },
                { pos: 6, name: 'Shubman Gill', matches: 55, points: 860, rating: 865 },
                { pos: 7, name: 'David Warner', matches: 85, points: 850, rating: 855 },
                { pos: 8, name: 'Rishabh Pant', matches: 65, points: 840, rating: 845 },
                { pos: 9, name: 'Fakhar Zaman', matches: 70, points: 830, rating: 835 },
                { pos: 10, name: 'Ruturaj Gaikwad', matches: 60, points: 820, rating: 825 },
            ],
            bowling: [
                { pos: 1, name: 'Pat Cummins', matches: 75, points: 895, rating: 900 },
                { pos: 2, name: 'Kagiso Rabada', matches: 70, points: 880, rating: 885 },
                { pos: 3, name: 'Jasprit Bumrah', matches: 65, points: 870, rating: 875 },
                { pos: 4, name: 'Trent Boult', matches: 60, points: 860, rating: 865 },
                { pos: 5, name: 'Rashid Khan', matches: 55, points: 850, rating: 855 },
                { pos: 6, name: 'Yuzvendra Chahal', matches: 55, points: 840, rating: 845 },
                { pos: 7, name: 'Mitchell Starc', matches: 60, points: 830, rating: 835 },
                { pos: 8, name: 'Shaheen Afridi', matches: 65, points: 820, rating: 825 },
                { pos: 9, name: 'Mohammed Shami', matches: 50, points: 810, rating: 815 },
                { pos: 10, name: 'Chris Woakes', matches: 55, points: 800, rating: 805 },
            ],
            // All-rounder category...
            AllRounder: [
                { pos: 1, name: 'Ben Stokes', matches: 70, points: 880, rating: 875 },
                { pos: 2, name: 'Jason Holder', matches: 65, points: 860, rating: 855 },
                { pos: 3, name: 'Mohammad Nabi', matches: 60, points: 850, rating: 845 },
                { pos: 4, name: 'Shakib Al Hasan', matches: 65, points: 840, rating: 835 },
                { pos: 5, name: 'Ravindra Jadeja', matches: 60, points: 830, rating: 825 },
                { pos: 6, name: 'Kyle Jamieson', matches: 55, points: 820, rating: 815 },
                { pos: 7, name: 'Chris Woakes', matches: 50, points: 810, rating: 805 },
                { pos: 8, name: 'Marsh', matches: 45, points: 800, rating: 795 },
                { pos: 9, name: 'Andile Phehlukwayo', matches: 50, points: 790, rating: 785 },
                { pos: 10, name: 'Hardik Pandya', matches: 55, points: 780, rating: 775 },
            ],
        },
     
        // ODI 
        odi: {
            batting: [
                { pos: 1, name: 'Babar Azam', matches: 80, points: 930, rating: 920 },
                { pos: 2, name: 'Virat Kohli', matches: 85, points: 910, rating: 905 },
                { pos: 3, name: 'Rohit Sharma', matches: 90, points: 900, rating: 900 },
                { pos: 4, name: 'Kane Williamson', matches: 75, points: 880, rating: 885 },
                { pos: 5, name: 'Steve Smith', matches: 70, points: 870, rating: 875 },
                { pos: 6, name: 'Shubman Gill', matches: 55, points: 860, rating: 865 },
                { pos: 7, name: 'David Warner', matches: 85, points: 850, rating: 855 },
                { pos: 8, name: 'Rishabh Pant', matches: 65, points: 840, rating: 845 },
                { pos: 9, name: 'Fakhar Zaman', matches: 70, points: 830, rating: 835 },
                { pos: 10, name: 'Ruturaj Gaikwad', matches: 60, points: 820, rating: 825 },
            ],
            bowling: [
                { pos: 1, name: 'Pat Cummins', matches: 75, points: 895, rating: 900 },
                { pos: 2, name: 'Kagiso Rabada', matches: 70, points: 880, rating: 885 },
                { pos: 3, name: 'Jasprit Bumrah', matches: 65, points: 870, rating: 875 },
                { pos: 4, name: 'Trent Boult', matches: 60, points: 860, rating: 865 },
                { pos: 5, name: 'Rashid Khan', matches: 55, points: 850, rating: 855 },
                { pos: 6, name: 'Yuzvendra Chahal', matches: 55, points: 840, rating: 845 },
                { pos: 7, name: 'Mitchell Starc', matches: 60, points: 830, rating: 835 },
                { pos: 8, name: 'Shaheen Afridi', matches: 65, points: 820, rating: 825 },
                { pos: 9, name: 'Mohammed Shami', matches: 50, points: 810, rating: 815 },
                { pos: 10, name: 'Chris Woakes', matches: 55, points: 800, rating: 805 },
            ],
            // All-rounder category...
            AllRounder: [
                { pos: 1, name: 'Ben Stokes', matches: 70, points: 880, rating: 875 },
                { pos: 2, name: 'Jason Holder', matches: 65, points: 860, rating: 855 },
                { pos: 3, name: 'Mohammad Nabi', matches: 60, points: 850, rating: 845 },
                { pos: 4, name: 'Shakib Al Hasan', matches: 65, points: 840, rating: 835 },
                { pos: 5, name: 'Ravindra Jadeja', matches: 60, points: 830, rating: 825 },
                { pos: 6, name: 'Kyle Jamieson', matches: 55, points: 820, rating: 815 },
                { pos: 7, name: 'Chris Woakes', matches: 50, points: 810, rating: 805 },
                { pos: 8, name: 'Marsh', matches: 45, points: 800, rating: 795 },
                { pos: 9, name: 'Andile Phehlukwayo', matches: 50, points: 790, rating: 785 },
                { pos: 10, name: 'Hardik Pandya', matches: 55, points: 780, rating: 775 },
            ],
        },
        // t20 
        t20: {
            batting: [
                { pos: 1, name: 'Babar Azam', matches: 80, points: 930, rating: 920 },
                { pos: 2, name: 'Virat Kohli', matches: 85, points: 910, rating: 905 },
                { pos: 3, name: 'Rohit Sharma', matches: 90, points: 900, rating: 900 },
                { pos: 4, name: 'Kane Williamson', matches: 75, points: 880, rating: 885 },
                { pos: 5, name: 'Steve Smith', matches: 70, points: 870, rating: 875 },
                { pos: 6, name: 'Shubman Gill', matches: 55, points: 860, rating: 865 },
                { pos: 7, name: 'David Warner', matches: 85, points: 850, rating: 855 },
                { pos: 8, name: 'Rishabh Pant', matches: 65, points: 840, rating: 845 },
                { pos: 9, name: 'Fakhar Zaman', matches: 70, points: 830, rating: 835 },
                { pos: 10, name: 'Ruturaj Gaikwad', matches: 60, points: 820, rating: 825 },
            ],
            bowling: [
                { pos: 1, name: 'Pat Cummins', matches: 75, points: 895, rating: 900 },
                { pos: 2, name: 'Kagiso Rabada', matches: 70, points: 880, rating: 885 },
                { pos: 3, name: 'Jasprit Bumrah', matches: 65, points: 870, rating: 875 },
                { pos: 4, name: 'Trent Boult', matches: 60, points: 860, rating: 865 },
                { pos: 5, name: 'Rashid Khan', matches: 55, points: 850, rating: 855 },
                { pos: 6, name: 'Yuzvendra Chahal', matches: 55, points: 840, rating: 845 },
                { pos: 7, name: 'Mitchell Starc', matches: 60, points: 830, rating: 835 },
                { pos: 8, name: 'Shaheen Afridi', matches: 65, points: 820, rating: 825 },
                { pos: 9, name: 'Mohammed Shami', matches: 50, points: 810, rating: 815 },
                { pos: 10, name: 'Chris Woakes', matches: 55, points: 800, rating: 805 },
            ],
            // All-rounder category...
         
                AllRounder: [
                    { pos: 1, name: 'Ben Stokes', matches: 70, points: 880, rating: 875 },
                    { pos: 2, name: 'Jason Holder', matches: 65, points: 860, rating: 855 },
                    { pos: 3, name: 'Mohammad Nabi', matches: 60, points: 850, rating: 845 },
                    { pos: 4, name: 'Shakib Al Hasan', matches: 65, points: 840, rating: 835 },
                    { pos: 5, name: 'Ravindra Jadeja', matches: 60, points: 830, rating: 825 },
                    { pos: 6, name: 'Kyle Jamieson', matches: 55, points: 820, rating: 815 },
                    { pos: 7, name: 'Chris Woakes', matches: 50, points: 810, rating: 805 },
                    { pos: 8, name: 'Marsh', matches: 45, points: 800, rating: 795 },
                    { pos: 9, name: 'Andile Phehlukwayo', matches: 50, points: 790, rating: 785 },
                    { pos: 10, name: 'Hardik Pandya', matches: 55, points: 780, rating: 775 },
                ],
        },
    },
    women: {
        // Similar structure for women players...
        odi: {
            batting: [
                { pos: 1, name: 'Mithali Raj', matches: 12, points: 850, rating: 900 },
                { pos: 2, name: 'Ellyse Perry', matches: 10, points: 830, rating: 890 },
                { pos: 3, name: 'Tammy Beaumont', matches: 15, points: 810, rating: 875 },
                { pos: 4, name: 'Smriti Mandhana', matches: 14, points: 800, rating: 860 },
                { pos: 5, name: 'Meg Lanning', matches: 11, points: 780, rating: 850 },
                { pos: 6, name: 'Heather Knight', matches: 13, points: 770, rating: 845 },
                { pos: 7, name: 'Sarah Taylor', matches: 16, points: 760, rating: 840 },
                { pos: 8, name: 'Nida Dar', matches: 12, points: 750, rating: 835 },
                { pos: 9, name: 'Amy Satterthwaite', matches: 14, points: 740, rating: 825 },
                { pos: 10, name: 'Danielle Wyatt', matches: 13, points: 730, rating: 820 },
            ],
            bowling: [
                { pos: 1, name: 'Ellyse Perry', matches: 15, points: 895, rating: 900 },
                { pos: 2, name: 'Jhulan Goswami', matches: 12, points: 850, rating: 880 },
                { pos: 3, name: 'Sophie Ecclestone', matches: 14, points: 830, rating: 860 },
                { pos: 4, name: 'Poonam Yadav', matches: 11, points: 810, rating: 840 },
                { pos: 5, name: 'Shabnim Ismail', matches: 13, points: 800, rating: 830 },
                { pos: 6, name: 'Jess Jonassen', matches: 10, points: 780, rating: 820 },
                { pos: 7, name: 'Anya Shrubsole', matches: 12, points: 770, rating: 810 },
                { pos: 8, name: 'Renuka Singh', matches: 9, points: 760, rating: 805 },
                { pos: 9, name: 'Megan Schutt', matches: 11, points: 750, rating: 800 },
                { pos: 10, name: 'Katherine Brunt', matches: 14, points: 740, rating: 795 },
            ],
            // All-rounder category...
            AllRounder: [
                { pos: 1, name: 'Ellyse Perry', matches: 15, points: 850, rating: 890 },
                { pos: 2, name: 'Deepti Sharma', matches: 12, points: 820, rating: 870 },
                { pos: 3, name: 'Nida Dar', matches: 14, points: 800, rating: 855 },
                { pos: 4, name: 'Hayley Matthews', matches: 10, points: 780, rating: 840 },
                { pos: 5, name: 'Sophie Devine', matches: 11, points: 760, rating: 825 },
                { pos: 6, name: 'Chamari Atapattu', matches: 13, points: 740, rating: 815 },
                { pos: 7, name: 'Shakera Selman', matches: 12, points: 730, rating: 810 },
                { pos: 8, name: 'Danielle Wyatt', matches: 14, points: 720, rating: 805 },
                { pos: 9, name: 'Amy Satterthwaite', matches: 11, points: 710, rating: 800 },
                { pos: 10, name: 'Megan Schutt', matches: 10, points: 700, rating: 795 },
            ],
        },
        // t20 
        t20: {
            batting: [
                { pos: 1, name: 'Mithali Raj', matches: 12, points: 850, rating: 900 },
                { pos: 2, name: 'Ellyse Perry', matches: 10, points: 830, rating: 890 },
                { pos: 3, name: 'Tammy Beaumont', matches: 15, points: 810, rating: 875 },
                { pos: 4, name: 'Smriti Mandhana', matches: 14, points: 800, rating: 860 },
                { pos: 5, name: 'Meg Lanning', matches: 11, points: 780, rating: 850 },
                { pos: 6, name: 'Heather Knight', matches: 13, points: 770, rating: 845 },
                { pos: 7, name: 'Sarah Taylor', matches: 16, points: 760, rating: 840 },
                { pos: 8, name: 'Nida Dar', matches: 12, points: 750, rating: 835 },
                { pos: 9, name: 'Amy Satterthwaite', matches: 14, points: 740, rating: 825 },
                { pos: 10, name: 'Danielle Wyatt', matches: 13, points: 730, rating: 820 },
            ],
            bowling: [
                { pos: 1, name: 'Ellyse Perry', matches: 15, points: 895, rating: 900 },
                { pos: 2, name: 'Jhulan Goswami', matches: 12, points: 850, rating: 880 },
                { pos: 3, name: 'Sophie Ecclestone', matches: 14, points: 830, rating: 860 },
                { pos: 4, name: 'Poonam Yadav', matches: 11, points: 810, rating: 840 },
                { pos: 5, name: 'Shabnim Ismail', matches: 13, points: 800, rating: 830 },
                { pos: 6, name: 'Jess Jonassen', matches: 10, points: 780, rating: 820 },
                { pos: 7, name: 'Anya Shrubsole', matches: 12, points: 770, rating: 810 },
                { pos: 8, name: 'Renuka Singh', matches: 9, points: 760, rating: 805 },
                { pos: 9, name: 'Megan Schutt', matches: 11, points: 750, rating: 800 },
                { pos: 10, name: 'Katherine Brunt', matches: 14, points: 740, rating: 795 },
            ],
            // All-rounder category...
            AllRounder: [
                { pos: 1, name: 'Ellyse Perry', matches: 15, points: 850, rating: 890 },
                { pos: 2, name: 'Deepti Sharma', matches: 12, points: 820, rating: 870 },
                { pos: 3, name: 'Nida Dar', matches: 14, points: 800, rating: 855 },
                { pos: 4, name: 'Hayley Matthews', matches: 10, points: 780, rating: 840 },
                { pos: 5, name: 'Sophie Devine', matches: 11, points: 760, rating: 825 },
                { pos: 6, name: 'Chamari Atapattu', matches: 13, points: 740, rating: 815 },
                { pos: 7, name: 'Shakera Selman', matches: 12, points: 730, rating: 810 },
                { pos: 8, name: 'Danielle Wyatt', matches: 14, points: 720, rating: 805 },
                { pos: 9, name: 'Amy Satterthwaite', matches: 11, points: 710, rating: 800 },
                { pos: 10, name: 'Megan Schutt', matches: 10, points: 700, rating: 795 },
            ],
        },
    },

};
