interface DescriptionObject {
  [key: string]: string;
}

export const skillDescriptions: { [key: string]: string[] } = {
  authority: [
    'Intimidate the public. Assert yourself.',
    'Cool for: Leaders, Experts of Psychological Warfare, Respect-Junkies',
    'Authority urges you to assert and reassert your dominance over those around you. It enables you to understand the power dynamics of groups of thugs, know how far you can push a perpetrator, and how to establish control of situations.',
    'At high levels, Authority demands respect; even a perceived slight could send you into knee-breaking mode. With low Authority, however, you’re forever in awkward situations – like when you suffer psychological breakdowns after you yell at teenagers and they laugh at you.',
  ],
  composure: [
    'Straighten your back. Keep your poker face.',
    'Cool for: Card Players, Military Fetishists, Cool People',
    'Composure wants you to not crack: or, at least, it wants you to not crack in front of other people. It enables you to put up a strong front. It keeps your emotions hidden from the world and helps you to read the body language of others – to sense the cracks in their own composure. As well, it keeps you looking good while you do it. You’ll rock that disco outfit a lot more if you don’t slouch.',
    'At high levels, Composure makes you tuck your gut in and maintain a stern expression. Even lying in bed late night when no one else can see you, you’ll have to keep it up. You’ll never be able to stop. With low Composure, though, you’ll always be the first to crack. Every cop’s got a point when all that fear and rage comes spilling out – and the ones who unleash it doesn’t stay on the force much longer. Perhaps worse still, you won’t even make the ranks of the Fashion Police.',
  ],
  conceptualization: [
    'Understand creativity. See Art in the world.',
    'Cool for: Creatives, Psychedelic Fanciers, Critics.',
    'Conceptualization has a special role it wants you to play in this world – not the role of cop, but of Art Cop. It enables you to make fresh associations, to delve into world-concepts from Jan Kaarp’s postmodernist karperie, to Revachol’s arabesque architectural style dideridada, and even the concept of HARDCORE – and then, importantly, to add your own contribution to these works.',
    'At high levels, Conceptualization makes you go big – perhaps too big. It is ostentatious, demanding grand displays. Why live life when you can throw yourself into a live volcano? At low levels, however, you will be unable to see the world in a creative light. You’ll be unable to contribute to conversations in an art gallery. Only boring people will invite you to their dust parties.',
  ],
  drama: [
    'Play the actor. Lie and detect lies.',
    'Cool for: Undercover Cops, Thespians of the Stage, Psychopaths',
    'Drama urges you to treat the world as a stage – and on it, to perform. It will enable you to lie, to concoct the most elaborate and wonderful stories; to take on ingenious personas and perform acts of stagecraft in an entertaining amalgam of fourberie and deceit! As well, it enables you to see through would-be actors and their false antics. If they lie, you’ll know. Immediately.',
    'At high levels, Drama may render you an insufferable thespian – one prone to hysterics and bouts of paranoia; for to know the world is a stage is to know that Truth is a Vanity. However, with low Drama you cannot lie – or discern when others lie. And a cop who can’t do either is a cop who’s soon going to be lying six feet under.',
  ],
  electrochemistry: [
    'Go to party planet. Love and be loved by drugs.',
    'Cool for: High-Fliers, Party Enthusiasts, Cops who need Lightning',
    'Electrochemistry is the animal within you, the beast longing to be unleashed to indulge and enjoy. It enables you to take drugs with fewer negative side-effects. It also enables you to better investigate lurid matters – if you need to understand a chemical breakdown, or talk to someone blasted out of their mind, or understand sexual dynamics, Electrochemistry is there to guide you.',
    'At high levels, Electrochemistry makes you a man of unrestrained pleasure – an unrepentant Lothario who leers at people with a bottle of speed and a plastic bendy straw in either hand. But with a low Electrochemistry, you’ll be too innocent to be effective. Without a working knowledge of drugs and sex, the city will be difficult to understand.',
  ],
  empathy: [
    'Understand others. Work your mirror neurons.',
    'Cool for: Judges of Character, Interviewers, Interrogators',
    'Empathy breaks into the souls of others and forces you to feel what’s inside. It enables you to notice social cues others may miss: perhaps a hidden sadness you could coax out a little more, a strange joy from someone who should be bereaved, or a hidden resentment that could return to harm you later.',
    'At high levels, Empathy really puts you in other people’s shoes. You’ll cry for their sorrows, punch walls to relieve their angers, and be an even more unstable cop. With low Empathy, however, you’ll be an ungainly beast unable to talk to anyone without upsetting them.',
  ],
  encyclopedia: [
    'Call upon all your knowledge. Produce fascinating trivia.',
    'Cool for: Thinkers, Historians, Trivia Freaks',
    'Encyclopedia makes you a know-it-all, turning your mind into a database of facts. It enables you to draw on these facts innately, offering a wealth of background knowledge to all things related and unrelated to your case. Who knows when the history of cigarette brands will provide the breakthrough you need to arrest a murderer – or when knowledge of pre-Revolutionary guns might save a life?',
    'At high levels, Encyclopedia shares this wealth of knowledge to an almost overwhelming degree – while it may give you crucial breakthroughs, it more often will clutter your mind with useless tidbits. With low levels of Encyclopedia, though, you’ll be forced to work with only the clues in front of you. Without any background knowledge, copping is going to be tough stuff.',
  ],
  endurance: [
    'Take the blows. Don’t let the world kill you.',
    'Cool for: Fighters who can take a hit, Lookouts who don’t sleep, Human Batteries',
    'Endurance is your metabolism and circulatory system. It improves your Health – one of the two health pools in the game. It enables to survive being a cop. Who cares if you can’t aim a gun, if you can take a few bullets? Why be afraid of drugs that hurt your health if you’re a very, very healthy man?',
    'At high levels, Endurance enables you to take a few knocks to the head, enjoy a greater quantity of drugs, and shake off a few cardiac arrests – it makes you a powerful man, who looks down on the weaklings who can’t keep up. However, cops with low Endurance are likely to struggle. The body is frail already, and the flesh of a cop will often be tested. And if it doesn’t pass, it dies.',
  ],
  espritDeCorps: [
    'Connect to Station 41. Understand cop culture.',
    'Cool for: Cops, Cop-Aficionados, Pretend-Cops',
    'Esprit de Corps is the very spirit of policing: the cop-geist. It enables you to understand your blue-souled sisters and brothers – not only by picking up subtle signals from your partner, but by witnessing flash-sideways scenes as they play out in your precinct.',
    'At high levels, you’ll be the very heart of the police force: not only willing and able but obliged to take a bullet for your partner. However, without Esprit de Corps you’ll be flying blind, unable to understand discreet remarks colleagues make in high-stakes situations; remarks that might just save your life.',
  ],
  halfLight: [
    'Let the body take control. Threaten people.',
    'Cool for: High-Strung Investigators, Shoot-Now-Ask-Questions-Later Cops, Surprise Haters',
    'Half Light is your fight-or-flight response. It enables you to sense the way situations are about to turn. It injects palpable fear into your heart – fear that urges you act before it’s too late to act ever again; fear that makes you frighten others. It is the aggression that lets you squeeze every last drop of information out of a witness.',
    'At high levels, Half Light makes you ultra-attuned to the world. It is perpetual fear – of your own shadow, of someone else’s name or scent. You’ll be ready, always, to pounce and physically interrogate passersby. At low levels, however, you’ll find your survival instinct is lacking. And your methods are limp-wristed. Those who respect violence will not respect you.',
  ],
  handEyeCoordination: [
    'Ready? Aim and fire.',
    'Cool for: Trick-Shooters, Snipers, Jugglers',
    'Hand/Eye Coordination loves the interaction between you and things that fly in the air. It enables you to catch coins from mob bosses, shoot straight, and understand firearms intimately. Want to know the precise make and mark of a pistol? Hand/Eye Coordination’s got you. Want to shoot someone with it? Ditto.',
    'At high levels, Hand/Eye Coordination makes you deadly – supposing you’ve a weapon in your hand. But once you do, Hand/Eye Coordination will compel you to take the shot – even if it’s not the best approach. At low levels, however, you’ll be even more of a disaster in waiting. Because when the guns go off – and they always do – you’ll probably hit the wrong target.',
  ],
  inlandEmpire: [
    'Hunches and gut feelings. Dreams in waking life.',
    'Cool for: Dreamers, Para-Natural Investigators, Mental Creators',
    'Inland Empire is the unfiltered wellspring of imagination, emotion, and foreboding. It enables you to grope your way through invisible dimensions of reality, gaining insight into that which sight can’t see. What’s really going on? What do these enigmatic riddles mean for the world-fate?',
    'At high levels, Inland Empire animates the inanimate. You’ll have conversations with your clothing, conversations that may change the course of the investigation if you’re not thrown in the loony bin first. With low Inland Empire, however, you’ll be void of imagination – and character. And then how will you shape the cosmos?',
  ],
  interfacing: [
    'Master machines. Pick locks and pockets.',
    'Cool for: Machinists, Tinkerers, Instrument Players',
    'Interfacing wants you to connect to machines: to use and improve them, because that makes you a better human organism. It enables you to understand interactions with machines – be that how to repair the motor of a Kineema motor carriage, how to analyze the way a suspect used a pen, or how to re-figure electrical circuits. It even lets you steal keys off a keyring without being noticed.',
    'At high levels, Interfacing will isolate you from society – why bother with people when you can talk to machines? And why bother with things like money when you can just pocket that display sandwich? At low levels, however, you will have a crucial part of the world cut off from you. People use machines to commit crimes all the time – if you can’t understand how a crime was accomplished, how can you solve it?',
  ],
  logic: [
    'Wield raw intellectual power. Deduce the world.',
    'Cool for: Analysts, Pure Rationalists, Obviously Logicians.',
    'Logic urges you to analyze the living daylights out of the case. It enables you to piece evidence together, detect inconsistencies in statements, and impress everyone with your astonishing conclusions. It’s the bread and butter of many a detective.',
    'At high levels, Logic will be able to solve even the most complicated puzzle. You will be very proud and thus susceptible to intellectual flattery; for those blinded by their own brilliance often miss important clues. With low levels of Logic, you’re going to have a hard time solving even the simplest puzzles. Even if you find the pieces, good luck putting them together.',
  ],
  painThreshold: [
    'Shrug off the pain. They’ll have to hurt you more.',
    'Cool for: Unstoppable Fighters, Guys who don’t die, Masochists',
    'Pain Threshold ignores damage so you can push on, bloodied and crawling, to the bitterest end. It enables you to negate damage you would otherwise take. Even mental pain – heartache and loneliness. In fact, these things can become a thrill you seek out and perversely revel in.',
    'At high levels, Pain Threshold turns in on itself in seriously unhealthy way, with full-on self-destructive behavior. With a low Pain Threshold, however, you will suffer too easily. Even a slap from a teenager will make you whine and complain.',
  ],
  perception: [
    'See, hear and smell everything. Let no detail go unnoticed.',
    'Cool for: Fine Detail Detectives, Sensualists, Urban Scavengers',
    'Perception wants you to be open to the world – with eyes, ears, and nose working at full capacity. It enables you to take in what others don’t notice. The little wad of bills hid away in the sugar bowl; the odor of a perp, hiding beneath the floor boards; the gulp of a suspect, after claiming they’ve nothing to hide.',
    'At high levels, Perception takes in every final detail of the physical world – enough to overwhelm all but the strongest mind. However, with low levels, you are going to miss out on everything. After all, you can’t arrest what you can’t see, hear, or smell.',
  ],
  physicalInstrument: [
    'Flex powerful muscles. Enjoy healthy organs.',
    'Cool for: Muscle Men, Bare Knuckle Brawlers, Gym Teachers',
    'Physical Instrument is not only your muscles and your skeleton – it is your ability to use them effectively. It enables you to do push-ups, sit-ups, knock-out punches, and 360-degree spin-kicks. It’s a one size fits all solution to thriving and surviving in a physical world.',
    'At high levels, Physical Instrument breaks doors, chains, and bones, and it makes you laugh at the namby-pansies who can’t. You’ll be manned-up, encouraging others to curl iron until they’re manned-up too. At low levels, however, you’ll have a hard time arresting anyone who isn’t infirm or already dead. Indeed, engaging in physical confrontations could leave you in either state.',
  ],
  reactionSpeed: [
    'The quickest to react. An untouchable man.',
    'Cool for: Shot-Dodgers, Thinkers on their Feet, Pinball-Heads',
    'Reaction Speed is the agility of your body and mind. It is instinct. It enables you to dodge punches, knives, bullets. Also suckers punches of the verbal kind. You’ll be more streetwise, never lost for words or lacking a witty comeback. Your mental alacrity lets you connect little details on the fly, working in tandem with your Intellect skills.',
    'At high levels, Reaction Speed makes your twitch-reflex freakishly good. However, when your body acts before your mind, innocent situations can turn bad fast. You’re high strung, overly alert. At low levels, though, you won’t be the one shooting first – which probably means you won’t be shooting at all.',
  ],
  rhetoric: [
    'Practice the art of persuasion. Enjoy rigorous intellectual discourse.',
    'Cool for: Ideologues, Conversationalists, Would-Be-Politicians',
    'Rhetoric urges you to debate, make intellectual discourse, nitpick – and win. It enables you to break down arguments and hear what people are really saying. You’ll spot fallacies as soon as they’re used – what exactly did the waiter leave out of their testimony? What was the dancer trying to divert you from? Was that double entendre intended, or did you just get an accidental lead?',
    'At high levels, Rhetoric will make you an impressive political beast – one whose beliefs are impenetrable. Which is to say, one whose mind will not change; one who will calcify. With low Rhetoric, though, you’ll have a hard time of shooting down any argument. Nailing people to their testimonies will be nigh impossible.',
  ],
  savoirFaire: [
    'Sneak under their noses. Stun with immense panache.',
    'Cool for: Acrobats, Thieves, Unbearable Show-Offs',
    'Savoir Faire urges you to be better than you are: it urges you to be disco. Slip by others in Samaran boxing style, then tumble out the back with unexpected acrobatics. It enables you to move silent footsteps, to groove to a good beat, and to lift useful evidence off perps without them noticing. It also makes you a cooler cop, whose athletic flair will certainly impress the citizenry.',
    'At high levels, Savoir Faire will make you the King of Cool – which is as much to say, the most stylish douchebag in Revachol. Nobody will see you until you’re ready to be seen; and then, they’ll get the full treatment, whether they want it or not. At low levels, however, you’ll be a bumbling, feckless cop unable to catch pair of keys thrown by your partner without losing an eye.',
  ],
  shivers: [
    'Raise the hair on your neck. Tune in to the city.',
    'Cool for: City Lovers, The Wisest of the Street Wise, The Genuinely Supra-Natural',
    'Shivers come when the temperature drops and you become more keenly aware of your surroundings. It enables you to hear the city itself, to truly belong to the streets. It is a supra-natural ability; old wrongs play out in present time, scenes across the city happen in front of you. But who is speaking to you?',
    'At high levels, Shivers may make you seem mad to the outside world – as you listen to the city, you don’t listen to others. Your superiors may begin to worry. With a low Shivers, though you will seldom hear the city speaking to you – and if you cannot hear it, how can you ever save it?',
  ],
  suggestion: [
    'Charm men and women. Play the puppet-master.',
    'Cool for: Diplomats, Charmers, Sociopaths',
    'Suggestion urges a soft-power approach. If people think they want what you want, you’ve already won. This skill enables you to implant ideas into the minds of others. You can make the citizens like you more. You can make gangsters turn on each other, too; many crime-rings have been broken by just a little doubt, after all.',
    'At high levels, Suggestion makes you affable to everyone and more resistant to their charms in turn. But all that schmoozing and oozing charm will make you slimy. And you’ll know it, even if no one else does. With low levels of Suggestion, though, you’ll have difficulty getting any kind of rapport with others. You’ll be alone, both during the day and at night.',
  ],
  visualCalculus: [
    'Reconstruct crime scenes. Make laws of physics work for the Law.',
    'Cool for: Forensics Scientists, Tactical Fighters, Math-Minded People',
    'Visual Calculus verses you not only in the laws of the state, but the laws of nature. It enables you to create virtual crime-scene models in your mind’s eye. You’ll see how a bullet shattered the glass and from that trace its trajectory with mathematical precision. You’ll also count so many footprints – and at a glance discern shoe size and design; as well as the height, weight, and gender of the one who wore them.',
    'At high levels, Visual Calculus makes the world reveal its secrets to you – but you may be so absorbed by your mind-diorama, you don’t notice as crooks steal your pants. However, at low levels, your mind’s eye will be blind. Reconstructing crime scenes will be difficult without outside help.',
  ],
  volition: [
    'Hold yourself together. Keep your Morale up.',
    'Cool for: Sane People, Well-Adjusted Cops, The Non-Suicidal',
    'Volition urges you to be a good guy – to others and to yourself. It enables you to resist temptation: be it in a bottle, between a pair of legs, or at the end of an iron barrel which promises oblivion. Volition gives you the will to finish the investigation, improving your Morale – one of the two health pools in the game.',
    'At high levels, Volition makes you hyper-sane. When you’re about to get funky, it keeps you normal. It’s a bit of a party-pooper. At low levels, however, you’ll have little Morale. Without it, you’ll be a profoundly unstable cop, falling apart at the seams as you make irreversible mistakes.',
  ],
};
