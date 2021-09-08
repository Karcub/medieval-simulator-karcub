const Material = [
    // each card has two options and each option impacts two of the stats (one negatively and one positively)
    // the whole point of the game is to balance the stats longer
    // the impacts of these options to the stats shouldn't be too high else te game will end in seconds
    {
        id: 0,
        used: false,
        theme: 'church',
        text: "You’re playing a gig and you’re performing a lot of rebellious tracks, but the archbishop shows up.",
        options: [
            {
                text: "Continue like nothing happened",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    }
                ]
            },
            {
                text: 'Start playing some nice church music',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 1,
        theme: 'church',
        text: 'You suddenly feel an urge to go find a priest and confess your sins.',
        options: [
            {
                text: 'Where was the church again?',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20,
                    }
                ],
            },
            {
                text: 'Take the whole family',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 30,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20,
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 2,
        theme: 'king',
        text: 'Your King seems to have set his interests upon a daughter of yours.',
        options: [
            {
                text: 'One less mouth to feed',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    },
                    {
                        impactStat: 'money',
                        impactValue: 10
                    }
                ]
            },
            {
                text: 'Shameless old pig!',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 10,
                    },
                    {
                        impactStat: 'king',
                        impactValue: -20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 3,
        theme: 'church',
        text: "My son, I haven’t seen you at my sermons lately.",
        options: [
            {
                text: "Don’t feel like it ",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20,
                    },
                ]
            },
            {
                text: "I’m repenting, Father",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20,
                    },
                ]
            }
        ]
    },
    {
        used: false,
        id: 4,
        theme: 'user',
        text: "Your lute tunes seem to have channelled Hell’s frequencies " +
            "and summoned the Great Goat Devil, Baphomet. He likes your music, so he offers his help.",
        options: [
            {
                text: 'Call an exorcist!',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Why, thanks',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 5,
        theme: 'money',
        text: "You ran out of chickens at the farmer’s market and there’s still a line at your little stand but your back hurts like hell.",
        options: [
            {
                text: 'Go home and come back with another batch of chickens',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: 20
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Just go home and rest',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 6,
        theme: 'king',
        text: "The king is in your village for a visit. Everyone is excited and wants to throw a celebration.",
        options: [
            {
                text: 'Join and contribute, celebrate you king! ',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: -20
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            },
            {
                text: 'Hide and start to dream about regicide',
                impacts: [
                    {
                        impactStat: 'health',
                        impactValue: 20
                    },
                    {
                        impactStat: 'king',
                        impactValue: -30
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 7,
        theme: 'user',
        text: "A knight -whom you squire for- entered a tournament, but suddenly dies.",
        options: [
            {
                text: "Finally, let’s pull ‘A knight's tale’, let’s win this thing",
                impacts: [
                    {
                        impactStat: 'health',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    },
                    {
                        impactStat: 'king',
                        impactValue: -10
                    }
                ]
            },
            {
                text: 'Report the death of your master',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 8,
        theme: 'money',
        text: "The wheat crops are having a hard time since the drought, you have to take action.",
        options: [
            {
                text: 'Do a pagan rain dance which has 100% rate of success',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 30
                    }
                ]
            },
            {
                text: 'Just pray to your simple god and hope for the best',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 9,
        theme: 'king',
        text: "Your band is just about to perform on the King’s birthday feast, but you noticed that your lute is off-key, it needs a restring.",
        options: [
            {
                text: 'Get someone who can do it ASAP',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: -20
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            },
            {
                text: 'Play as if nothing is wrong',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: -20,
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 10,
        theme: 'user',
        text: "Suddenly you see a huge black cat crossing your path, but with any more delay, " +
            "you will be late from the king’s birthday, where you have to perform.",
        options: [
            {
                text: 'Say a quick prayer and continue forward',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            },
            {
                text: 'Turn around and rush back home',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    },
                    {
                        impactStat: 'king',
                        impactValue: -20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 11,
        theme: 'health',
        text: "Your spouse is having plague-like symptoms.",
        options: [
            {
                text: "Let’s get the plague doctor",
                impacts: [
                    {
                        impactStat: 'health',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            },
            {
                text: "Pray like there’s no tomorrow [because your spouse might not have one]",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -30
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 12,
        theme: 'money',
        text: "Your dried salted meat supplies are decreasing.",
        options: [
            {
                text: 'Convert to veganism',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: 20
                    },
                    {
                        impactStat: 'health',
                        impactValue: -30
                    }
                ]
            },
            {
                text: 'Sell some of your children to a nice man with a fez',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: 30,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 13,
        theme: 'money',
        text: "Your daughter shows you her mathematics skills.",
        options: [
            {
                text: 'Give it to a great school',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: -20
                    },
                    {
                        impactStat: 'health',
                        impactValue: 10
                    }
                ]
            },
            {
                text: 'Ask your priest about witchcraft',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactOperator: 'positive',
                        impactValue: 20
                    },
                    {
                        impactStat: 'health',
                        impactOperator: 'negative',
                        impactValue: -10
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 14,
        theme: 'health',
        text: "Your private parts are burning after a mysterious night out.",
        options: [
            {
                text: 'Go to the doctor, he might have some medicine for medieval STDs',
                impacts: [
                    {
                        impactStat: 'health',
                        impactValue: 30,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    },
                    {
                        impactStat: 'church',
                        impactValue: -10
                    }
                ]
            },
            {
                text: "Just confess, there’s nothing you can do",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -30
                    },
                    {
                        impactStat: 'money',
                        impactValue: 10
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 15,
        theme: 'church',
        text: "One of your vocalists sang God’s name with bad emphasis on your concert in your local church.",
        options: [
            {
                text: 'Blackmail him for playing free',
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'church',
                        impactValue: 20
                    }
                ]
            },
            {
                text: "Do nothing, pretend it didn't happen",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 16,
        theme: 'user',
        text: "Your bandmates think that lately you spend too much time in the church for your own good.",
        options: [
            {
                text: 'Leave the heathens and reserve a confession appointment',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactOperator: 'negative',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Have an ale in the tavern',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 17,
        theme: 'church',
        text: "My son, all your songs are about those lewd nymphs ans satyrs.",
        options: [
            {
                text: "Start writing the epic of Zeus's lovelife",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    }
                ]
            },
            {
                text: 'Promise to read the Bible for inspiration in the future',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 18,
        theme: 'money',
        text: "Your daughter is already at the ripe age of 12. She wants to marry the neighbouring farmer's son.",
        options: [
            {
                text: 'Let her then',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 10,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -30
                    }
                ]
            },
            {
                text: "And who's gonna pay for the dowry?!",
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: 30
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 19,
        theme: 'king',
        text: "Your band's vocalist says he saw the princess showing her ankle at the last feast.",
        options: [
            {
                text: "Produce a painting of it or I shan't believe!",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'king',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Tell on her to the king',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 20,
        theme: 'user',
        text: "The vikings are already on the shores! They are raiding the land",
        options: [
            {
                text: 'Start praying and hope for the best',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -30
                    }
                ]
            },
            {
                text: 'Leave your wife as bait and flee',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 30
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 21,
        theme: 'king',
        text: "The plague has killed your local tax collector.",
        options: [
            {
                text: "Take what's left in his house",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 30
                    },
                    {
                        impactStat: 'king',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Report to your superiors',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 22,
        theme: 'king',
        text: "There is a drinking competition on the king's birthday feast. You are close to winning, but is there suddenly three of the queen?...",
        options: [
            {
                text: 'Ha%2ve an()th3er jug!',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'I think I had enough',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 23,
        theme: 'user',
        text: "You are having strange dreams about something like flammable black powder.",
        options: [
            {
                text: 'Write a thesis for the court',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    },
                    {
                        impactStat: 'king',
                        impactValue: 10
                    }
                ]
            },
            {
                text: "Flammable powder? What's next, flying in the sky?!",
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 24,
        theme: 'user',
        text: "It's time for your monthly shower in the rain",
        options: [
            {
                text: 'Put on more perfume',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 10,
                    },
                    {
                        impactStat: 'health',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Alright, alright endure it',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 26,
        theme: 'user',
        text: "There must be a better way of measuring time other than looking at the sun all the time!",
        options: [
            {
                text: 'Dismiss these pagan thoughts ',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            },
            {
                text: 'Write down your theories',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 27,
        theme: 'user',
        text: "Your wife thinks it's time for another baby.",
        options: [
            {
                text: 'Accidentally go on a pilgrimage the next morning',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 10
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            },
            {
                text: "Why not, one out of then isn't a good ratio anyways",
                impacts: [
                    {
                        impactStat: 'money',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'health',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 28,
        theme: 'king',
        text: "Your king is having thoughts of letting women be thought in schools. He asks your opinion.",
        options: [
            {
                text: 'Play it as a joke and quickly inform the archbishop',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'king',
                        impactValue: -10
                    }
                ]
            },
            {
                text: 'Well who knows? There could be worse things',
                impacts: [
                    {
                        impactStat: 'church',
                        impactValue: -10,
                    },
                    {
                        impactStat: 'king',
                        impactValue: 20
                    }
                ]
            }
        ]
    },
    {
        used: false,
        id: 29,
        theme: 'king',
        text: "A foreign ambassador wants you to spy on the kingdom.",
        options: [
            {
                text: 'Tell him all you know',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: -20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: 20
                    }
                ]
            },
            {
                text: 'Be loyal for once in your life',
                impacts: [
                    {
                        impactStat: 'king',
                        impactValue: 20,
                    },
                    {
                        impactStat: 'money',
                        impactValue: -20
                    }
                ]
            }
        ]
    },

]

export default Material;