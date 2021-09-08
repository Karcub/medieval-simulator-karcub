const Endings = [
    {
        id: 0,
        stat: 'church',
        threshold: 'lower',
        options: [
            {
                text: 'The church has had enough of your "Renaissance worship of life and nature" nonsense, ' +
                    'so you have been declared a heretic.',
            },
            {
                text: 'Your rebellious attitude reached the ears of the archbishop. The church has excommunicated you.'
            }
        ]
    },
    {
        id: 1,
        stat: 'king',
        threshold: 'lower',
        options: [
            {
                text: 'The king finds your songs boring lately. ' +
                    'He would rather test his cool new torture equipments from the far East on you.',
            },
            {
                text: "The king just couldn't bear to look at your stupid mustache for an additional minute, so he exiled you and your family to the desert."
            }
        ]
    },
    {
        id: 2,
        stat: 'health',
        threshold: 'lower',
        options: [
            {
                text: 'Because of your neglected hygiene, you were among the first victims of the plague. At least you were the first in something,' +
                    'that counts too right?',
            },
            {
                text: "Well you died, that's for sure. Honestly though, what did you expect with such lifestyle?"
            }
        ]
    },
    {
        id: 3,
        stat: 'money',
        threshold: 'lower',
        options: [
            {
                text: 'Being low on money, you ended up as every other musician: starving on a street corner.',
            },
            {
                text: "Your wife couldn't put up with poverty anymore, " +
                    "so she grabbed everything that could be moved and went back to her parents."
            }
        ]
    },
    {
        id: 4,
        stat: 'church',
        threshold: 'upper',
        options: [
            {
                text: "You’ve been writing too many hymns lately for the church. " +
                    "The king is bored with them, so you were sentenced to the guillotine.",
            },
            {
                text: "Seeing the archbishop's special treatment of you, your fellow musicians wanted to teach you a lesson." +
                    "While running from them, you slipped in the chamberpot and left this world not so elegantly."
            }
        ]
    },
    {
        id: 5,
        stat: 'king',
        threshold: 'upper',
        options: [
            {
                text: 'Being too close to the king lately, you lost your touch with the commoners. ' +
                    'You reputation hit rock bottom.',
            },
            {
                text: "Your relationship with the king -and his queen is truly just too good." +
                    " The king caught the two of you in the act and the queen pushed all the blame to you. You were hanged the next morning."
            }
        ]
    },
    {
        id: 6,
        stat: 'health',
        threshold: 'upper',
        options: [
            {
                text: 'People started talking that you are the only one not affected by the plague.' +
                    ' The gossip reached the church and they called a witch-hunt on you.',
            },
            {
                text: '"I knew it was a bad idea to bathe every day..." - ' +
                    'you said with your last breath as you died from being too healthy (how is that even possible?)'
            }
        ]
    },
    {
        id: 7,
        stat: 'money',
        threshold: 'upper',
        options: [
            {
                text: "You accumulated a lot of riches over time. The kingdom's treasury is pretty empty these days," +
                    " so the king decided to 'liberate' you from all your assets.",
            },
            {
                text: "Your eldest son couldn't wait for your death to get his inheritance, " +
                    "so he decided to take action a bit earlier and poisoned you."
            }
        ]
    },
]

export default Endings;