// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "At a party do you:",
    answer: "Interact with many, including strangers",
    cat: "A",
    options: [
      "Interact with many, including strangers",
      "Interact with a few, known to you"
    ]
  },
    {
    numb: 2,
    question: "Are you more:",
    answer: "Realistic than speculative",
    cat: "B",
    options: [
      "Realistic than speculative",
      "Speculative than realistic"
    ]
  },
    {
    numb: 3,
    question: "Is it worse to:",
    answer: "Have your \"head in the clouds\"",
    cat: "B",
    options: [
      "Have your \"head in the clouds\"",
      "Be \"in a rut\""
    ]
  },
    {
    numb: 4,
    question: "Are you more impressed by:",
    answer: "Principles",
    cat: "C",
    options: [
      "Principles",
      "Emotions"
    ]
  },
    {
    numb: 5,
    question: "Are more drawn toward the:",
    answer: "Convincing",
    cat: "C",
    options: [
      "Convincing",
      "Touching"
    ]
  },
  {
    numb: 6,
    question: "Do you prefer to work:",
    answer: "To deadlines",
    cat: "D",
    options: [
      "To deadlines",
      "Just \"whenever\""
    ]
  },
  {
    numb: 7,
    question: "Do you tend to choose:",
    answer: "Rather carefully",
    cat: "D",
    options: [
      "Rather carefully",
      "Somewhat impulsively"
    ]
  },
  {
    numb: 8,
    question: "At a party do you:",
    answer: "Stay late, with increasing energy",
    cat: "A",
    options: [
      "Stay late, with increasing energy",
      "Leave early with decreased energy"
    ]
  },
    {
    numb: 9,
    question: "Are you more attracted to:",
    answer: "Sensible people",
    cat: "B",
    options: [
      "Sensible people",
      "Imaginative people"
    ]
  },
    {
    numb: 10,
    question: "Are you more interested in:",
    answer: "What is actual",
    cat: "B",
    options: [
      "What is actual",
      "What is possible"
    ]
  },
    {
    numb: 11,
    question: "In judging others are you more swayed by:",
    answer: "Laws than circumstances",
    cat: "C",
    options: [
      "Laws than circumstances",
      "Circumstances than laws"
    ]
  },
    {
    numb: 12,
    question: "In approaching others is your inclination to be somewhat:",
    answer: "Objective",
    cat: "C",
    options: [
      "Objective",
      "Personal"
    ]
  },
  {
    numb: 13,
    question: "Ar you more:",
    answer: "Punctual",
    cat: "D",
    options: [
      "Punctual",
      "Lazy"
    ]
  },
  {
    numb: 14,
    question: "Does it bother you more having things:",
    answer: "Incomplete",
    cat: "D",
    options: [
      "Incomplete",
      "Completed"
    ]
  },
  {
    numb: 15,
    question: "In your social groups do you:",
    answer: "Keep abreast of other’s happenings",
    cat: "A",
    options: [
      "Keep abreast of other’s happenings",
      "Get behind on the news"
    ]
  },
    {
    numb: 16,
    question: "In doing ordinary things are you more likely to:",
    answer: "Do it the usual way",
    cat: "B",
    options: [
      "Do it the usual way",
      "Do it your own way"
    ]
  },
    {
    numb: 17,
    question: "Writers should:",
    answer: "\"Say what they mean and mean what they say\"",
    cat: "B",
    options: [
      "\"Say what they mean and mean what they say\"",
      "Express things more by use of analogy"
    ]
  },
    {
    numb: 18,
    question: "Which appeals to you more:",
    answer: "Consistency of thought",
    cat: "C",
    options: [
      "Consistency of thought",
      "Harmonious human relationships"
    ]
  },
    {
    numb: 19,
    question: "Are you more comfortable in making:",
    answer: "Logical judgments",
    cat: "C",
    options: [
      "Logical judgments",
      "Value judgments"
    ]
  },
  {
    numb: 20,
    question: "Do you want things:",
    answer: "Settled and decided",
    cat: "D",
    options: [
      "Settled and decided",
      "Unsettled and undecided"
    ]
  },
  {
    numb: 21,
    question: "Would you say you are more:",
    answer: "Rather carefully",
    cat: "D",
    options: [
      "Serious and determined",
      "Easy going"
    ]
  },
  {
    numb: 22,
    question: "In phoning do you:",
    answer: "Rarely question that it will all be said",
    cat: "A",
    options: [
      "Rarely question that it will all be said",
      "Rehearse what you’ll say"
    ]
  },
    {
    numb: 23,
    question: "Facts:",
    answer: "\"Speak for themselves\"",
    cat: "B",
    options: [
      "\"Speak for themselves\"",
      "Illustrate principles"
    ]
  },
    {
    numb: 24,
    question: "Are visionaries:",
    answer: "somewhat annoying",
    cat: "B",
    options: [
      "somewhat annoying",
      "rather fascinating"
    ]
  },
    {
    numb: 25,
    question: "Are you more often:",
    answer: "a cool-headed person",
    cat: "C",
    options: [
      "a cool-headed person",
      "a warm-hearted person"
    ]
  },
    {
    numb: 26,
    question: "Is it worse to be:",
    answer: "unjust",
    cat: "C",
    options: [
      "unjust",
      "merciless"
    ]
  },
  {
    numb: 27,
    question: "Should one usually let events occur:",
    answer: "by careful selection and choice",
    cat: "D",
    options: [
      "by careful selection and choice",
      "randomly and by chance"
    ]
  },
  {
    numb: 28,
    question: "Do you feel better about:",
    answer: "having purchased",
    cat: "D",
    options: [
      "having purchased",
      "having the option to buy"
    ]
  },
  {
    numb: 29,
    question: "In company do you:",
    answer: "initiate conversation",
    cat: "A",
    options: [
      "initiate conversation",
      "wait to be approached"
    ]
  },
    {
    numb: 30,
    question: "Common sense is:",
    answer: "rarely questionable",
    cat: "B",
    options: [
      "rarely questionable",
      "frequently questionable"
    ]
  },
    {
    numb: 31,
    question: "Children often do not:",
    answer: "make themselves useful enough",
    cat: "B",
    options: [
      "make themselves useful enough",
      "exercise their fantasy enough"
    ]
  },
    {
    numb: 32,
    question: "In making decisions do you feel more comfortable with:",
    answer: "standards",
    cat: "C",
    options: [
      "standards",
      "feelings"
    ]
  },
    {
    numb: 33,
    question: "Are you more:",
    answer: "firm than gentle",
    cat: "C",
    options: [
      "firm than gentle",
      "gentle than firm"
    ]
  },
  {
    numb: 34,
    question: "Which is more admirable:",
    answer: "the ability to organize and be methodical",
    cat: "D",
    options: [
      "the ability to organize and be methodical",
      "the ability to adapt and make do"
    ]
  },
  {
    numb: 35,
    question: "Do you put more value on:",
    answer: "infinite",
    cat: "D",
    options: [
      "infinite",
      "open-minded"
    ]
  },
  {
    numb: 36,
    question: "Does new and non-routine interaction with others:",
    answer: "stimulate and energize you",
    cat: "A",
    options: [
      "stimulate and energize you",
      "tax your reserves"
    ]
  },
    {
    numb: 37,
    question: "Are you more frequently:",
    answer: "a practical sort of person",
    cat: "B",
    options: [
      "a practical sort of person",
      "a fanciful sort of person"
    ]
  },
    {
    numb: 38,
    question: "Are you more likely to:",
    answer: "see how others are useful",
    cat: "B",
    options: [
      "see how others are useful",
      "see how others see"
    ]
  },
    {
    numb: 39,
    question: "Which is more satisfying:",
    answer: "discuss an issue thoroughly",
    cat: "C",
    options: [
      "discuss an issue thoroughly",
      "to arrive at agreement on an issue"
    ]
  },
    {
    numb: 40,
    question: "Which rules you more:",
    answer: "your head",
    cat: "C",
    options: [
      "your head",
      "your heart"
    ]
  },
  {
    numb: 41,
    question: "Are you more comfortable with work that is:",
    answer: "contracted",
    cat: "D",
    options: [
      "contracted",
      "done on a casual basis"
    ]
  },
  {
    numb: 42,
    question: "Do you tend to look for:",
    answer: "the orderly",
    cat: "D",
    options: [
      "the orderly",
      "whatever turns up"
    ]
  },
  {
    numb: 43,
    question: "Do you prefer:",
    answer: "many friends with brief contact",
    cat: "A",
    options: [
      "many friends with brief contact",
      "a few friends with more lengthy contact"
    ]
  },
    {
    numb: 44,
    question: "Do you go more by:",
    answer: "facts",
    cat: "B",
    options: [
      "facts",
      "principles"
    ]
  },
    {
    numb: 45,
    question: "Are you more interested in:",
    answer: "production and distribution",
    cat: "B",
    options: [
      "production and distribution",
      "design and research"
    ]
  },
    {
    numb: 46,
    question: "Which is more of a compliment:",
    answer: "\"There is a very logical person.\"",
    cat: "C",
    options: [
      "\"There is a very logical person.\"",
      "\"There is a very sentimental person.\""
    ]
  },
    {
    numb: 47,
    question: "Do you value in yourself more that you are:",
    answer: "unwavering",
    cat: "C",
    options: [
      "unwavering",
      "devoted"
    ]
  },
  {
    numb: 48,
    question: "Do you more often prefer the",
    answer: "final and unalterable statement",
    cat: "D",
    options: [
      "final and unalterable statement",
      "tentative and preliminary statement"
    ]
  },
  {
    numb: 49,
    question: "Are you more comfortable:",
    answer: "after a decision",
    cat: "D",
    options: [
      "after a decision",
      "before a decision"
    ]
  },
  {
    numb: 50,
    question: "Do you:",
    answer: "speak easily and at length with strangers",
    cat: "A",
    options: [
      "speak easily and at length with strangers",
      "find little to say to strangers"
    ]
  },
    {
    numb: 51,
    question: "Are you more likely to trust your:",
    answer: "experience",
    cat: "B",
    options: [
      "experience",
      "hunch"
    ]
  },
    {
    numb: 52,
    question: "Do you feel:",
    answer: "more practical than ingenious",
    cat: "B",
    options: [
      "more practical than ingenious",
      "more ingenious than practical"
    ]
  },
    {
    numb: 53,
    question: "Which person is more to be complimented – one of:",
    answer: "clear reason",
    cat: "C",
    options: [
      "clear reason",
      "strong feeling"
    ]
  },
    {
    numb: 54,
    question: "Are you inclined more to be:",
    answer: "fair-minded",
    cat: "C",
    options: [
      "fair-minded",
      "sympathetic"
    ]
  },
  {
    numb: 55,
    question: "Is it preferable mostly to:",
    answer: "make sure things are arranged",
    cat: "D",
    options: [
      "make sure things are arranged",
      "just let things happen"
    ]
  },
  {
    numb: 56,
    question: "In relationships should most things be:",
    answer: "re-negotiable",
    cat: "D",
    options: [
      "re-negotiable",
      "random and circumstantial"
    ]
  },
  {
    numb: 57,
    question: "When the phone rings do you:",
    answer: "hasten to get to it first",
    cat: "A",
    options: [
      "hasten to get to it first",
      "hope someone else will answer"
    ]
  },
    {
    numb: 58,
    question: "Do you prize more in yourself:",
    answer: "a strong sense of reality",
    cat: "B",
    options: [
      "a strong sense of reality",
      "a vivid imagination"
    ]
  },
    {
    numb: 59,
    question: "Are you drawn more to:",
    answer: "fundamentals",
    cat: "B",
    options: [
      "fundamentals",
      "overtones"
    ]
  },
    {
    numb: 60,
    question: "Which seems the greater error:",
    answer: "to be too passionate",
    cat: "C",
    options: [
      "to be too passionate",
      "to be too objective"
    ]
  },
    {
    numb: 61,
    question: "Do you see yourself as basically:",
    answer: "hard-headed",
    cat: "C",
    options: [
      "hard-headed",
      "soft-hearted"
    ]
  },
  {
    numb: 62,
    question: "Which situation appeals to you more:",
    answer: "the structured and scheduled",
    cat: "D",
    options: [
      "the structured and scheduled",
      "the unstructured and unscheduled"
    ]
  },
  {
    numb: 63,
    question: "Are you a person that is more:",
    answer: "routinized than whimsical",
    cat: "D",
    options: [
      "routinized than whimsical",
      "whimsical than routinized"
    ]
  },
  {
    numb: 64,
    question: "Are you more inclined to be:",
    answer: "easy to approach",
    cat: "A",
    options: [
      "easy to approach",
      "somewhat reserved"
    ]
  },
    {
    numb: 65,
    question: "In writings do you prefer:",
    answer: "the more literal",
    cat: "B",
    options: [
      "the more literal",
      "the more figurative"
    ]
  },
    {
    numb: 66,
    question: "Is it harder for you to:",
    answer: "identify with others",
    cat: "B",
    options: [
      "identify with others",
      "utilize others"
    ]
  },
    {
    numb: 67,
    question: "Which do you wish more for yourself:",
    answer: "clarity of reason",
    cat: "C",
    options: [
      "clarity of reason",
      "strength of compassion"
    ]
  },
    {
    numb: 68,
    question: "Which is the greater fault:",
    answer: "being indiscriminate",
    cat: "C",
    options: [
      "being indiscriminate",
      "being critical"
    ]
  },
  {
    numb: 69,
    question: "Do you prefer the:",
    answer: "planned event",
    cat: "D",
    options: [
      "planned event",
      "unplanned event"
    ]
  },
  {
    numb: 70,
    question: "Do you tend to be more:",
    answer: "deliberate than spontaneous",
    cat: "D",
    options: [
      "deliberate than spontaneous",
      "spontaneous than deliberate"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];