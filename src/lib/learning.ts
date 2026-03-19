import { Interest } from './interests'

export interface LearningInsight {
  id: string
  interest: Interest
  title: string
  body: string
  actionTip: string
  source?: string
}

export const INSIGHTS: LearningInsight[] = [
  // fitness
  {
    id: 'f1',
    interest: 'fitness',
    title: 'The 1% Daily Improvement Principle',
    body: 'Improving by just 1% every day results in being 37 times better by the end of a year — a counterintuitive truth most people dismiss because early progress is invisible. The aggregation of marginal gains creates extraordinary results over time. The key insight is that identity matters more than the outcome: when you see yourself as someone who shows up daily, even poorly, the compound effect takes care of the rest. Most people overestimate what they can do in a week and drastically underestimate what they can do in a year. You don\'t need to train hard every day — you need to train consistently. The system is always more powerful than the goal.',
    actionTip: 'Do 5 minutes of movement right now — even if it seems laughably small.',
    source: 'James Clear, Atomic Habits',
  },
  {
    id: 'f2',
    interest: 'fitness',
    title: 'Why Motivation is the Wrong Target',
    body: 'Most people wait to feel motivated before they act — but neuroscience shows the relationship works in reverse: action precedes motivation, not the other way around. When you skip training on a day you don\'t feel like it, you reinforce the identity of someone who depends on mood to perform. When you show up anyway — even badly, even for 10 minutes — your brain updates its self-model. This identity accumulation is what separates people who consistently show up from those who rely on inspiration. The uncomfortable truth is that the feeling of motivation arrives after you start, not before. Motivation is unreliable fuel. Identity is infrastructure.',
    actionTip: 'Put on your workout clothes right now. The action follows.',
  },
  {
    id: 'f3',
    interest: 'fitness',
    title: 'Recovery IS the Training',
    body: '70% of fitness gains happen outside the gym, during rest and recovery. Sleep deprivation reduces muscle protein synthesis by up to 40%, meaning you can train hard and still regress if you\'re not sleeping enough. The physiological adaptations — muscle growth, cardiovascular improvement, fat metabolism — all require adequate recovery to complete. Chronic sleep restriction under 7 hours increases injury risk by 60% and reduces the cognitive sharpness needed to train with good form. The body doesn\'t improve during stress — it improves during recovery from stress. Sleep is the free supplement that most people are deficient in, and no training protocol can compensate for it.',
    actionTip: 'Set a "go to sleep" alarm tonight, not just a wake-up alarm.',
    source: 'Matthew Walker, Why We Sleep',
  },
  // yoga
  {
    id: 'y1',
    interest: 'yoga',
    title: 'Yoga is Not About Flexibility',
    body: 'One of the most persistent misconceptions about yoga is that it requires — or primarily develops — flexibility. What yoga actually trains is the relationship between your nervous system and the present moment. A regular practice reduces inflammatory markers in the body by 30-40%, and this happens even in sessions as short as 10 minutes. The transformation isn\'t about touching your toes; it\'s about creating a pause between stimulus and response — the space where conscious choice lives. People who practice yoga regularly don\'t just bend more easily — they react less automatically to stress, irritation, and overwhelm. The flexibility is a pleasant side effect of something much more significant.',
    actionTip: 'Take 3 slow deep breaths right now. That is already yoga.',
  },
  {
    id: 'y2',
    interest: 'yoga',
    title: 'Two Incompatible Nervous System States',
    body: 'Your nervous system has two primary modes: the sympathetic ("fight or flight") and the parasympathetic ("rest and digest"). Endless scrolling and constant notifications keep you in sympathetic activation — your system interprets novelty and urgency as low-level threats, releasing continuous small doses of cortisol. Yoga and breathwork directly activate the parasympathetic system, reducing heart rate, lowering blood pressure, and resetting your stress response. Research shows that 10 minutes of conscious breathing practice can neutralize the physiological effects of several hours of digital overstimulation. The two systems are neurologically incompatible. You cannot scroll your way into calm — but you can breathe your way there in under 10 minutes.',
    actionTip: 'Lie on the floor for 2 minutes. Do nothing at all.',
  },
  {
    id: 'y3',
    interest: 'yoga',
    title: '10 Minutes Daily Beats 1 Hour Twice a Week',
    body: 'The most common yoga mistake is waiting for enough time for a "proper" session. Studies on autonomic nervous system regulation show that 10 minutes of daily practice produces measurably better outcomes than a 60-minute session twice a week — the body needs regularity more than duration. Consistency rewires the default stress response; single long sessions produce temporary relief but don\'t create lasting neural change. A "bad" 10-minute practice done daily for 30 days will transform your stress baseline more than monthly retreats ever could. The mind doesn\'t distinguish perfection from imperfection — it only distinguishes regularity from absence. The perfect session that never happens is worth nothing.',
    actionTip: 'Pick a fixed time this week for 10 minutes of yoga. Morning or night — just pick one.',
  },
  // coffee
  {
    id: 'co1',
    interest: 'coffee',
    title: 'Why Timing Your Coffee Changes Everything',
    body: 'Most people drink coffee first thing in the morning, but this is biochemically counterproductive. Cortisol — your body\'s natural stimulant — peaks in the first 30-45 minutes after waking, creating alertness you\'re overriding with caffeine. By delaying your first coffee 90-120 minutes after waking, you let cortisol do its job and then use caffeine precisely when your energy naturally begins to dip. The practical result: the caffeine effect is 30-40% stronger, the afternoon crash is significantly reduced, and your tolerance builds more slowly. Andrew Huberman has documented this protocol and reports elimination of afternoon energy crashes for most practitioners. The adjustment takes about a week to feel normal — and then you wonder why you ever did it differently.',
    actionTip: 'Tomorrow, wait 90 minutes before your first coffee. Notice the difference.',
    source: 'Andrew Huberman, Huberman Lab',
  },
  {
    id: 'co2',
    interest: 'coffee',
    title: 'Ritual vs. Dependency',
    body: 'There is a meaningful difference between a coffee ritual and a caffeine dependency. A dependency is characterized by needing coffee to function — you feel foggy, irritable, or headachy without it. A ritual is intentional: the process of grinding beans, heating water to temperature, the smell, the quiet before the day begins. Research on mindful consumption shows that people who engage fully in preparing a drink report significantly higher satisfaction than those who consume the same drink while distracted. The cup tastes better when you\'re actually present for it. The best coffee you\'ve ever had was probably prepared with attention and consumed without a screen in your hand. Dependency is automated. Ritual is chosen.',
    actionTip: 'Prepare your next coffee without your phone. Just the process, nothing else.',
  },
  {
    id: 'co3',
    interest: 'coffee',
    title: 'Coffee as a Tool for Real Connection',
    body: 'For most of human history, sharing coffee or tea with others was a primary vehicle for honest conversation and social bonding. "Let\'s get coffee" remains the lowest-friction social invitation because it\'s time-limited, informal, and requires no special occasion. Studies in social neuroscience show that in-person conversations over shared drinks increase oxytocin levels more than digital communication — including voice calls and video. The ritual creates a container for presence. Using coffee intentionally as a connection practice — rather than just a performance-enhancing habit consumed alone while staring at a screen — dramatically multiplies its value. The best café near you is already waiting for you to use it differently.',
    actionTip: 'Invite someone for coffee this week with no specific agenda. Just the conversation.',
  },
  // books
  {
    id: 'b1',
    interest: 'books',
    title: 'The Compound Effect of 20 Pages a Day',
    body: 'Reading 20 pages a day takes approximately 25 minutes and compounds to 18-24 books per year. The average person reports not having time to read while spending 2+ hours daily on social media — the time exists; the priority doesn\'t. The critical difference between books and social media isn\'t just content quality: it\'s the cognitive demand. Reading requires building and maintaining a mental model across hundreds of pages, exercising working memory and narrative comprehension in ways that scrollable feeds never do. A book on your couch is infinitely more likely to be opened than one on a shelf. The barrier to reading is rarely lack of time — it\'s the friction of starting, and that is entirely environmental.',
    actionTip: 'Move your current book to the couch right now. Not the shelf — the couch.',
  },
  {
    id: 'b2',
    interest: 'books',
    title: 'How to Actually Remember What You Read',
    body: 'The Ebbinghaus Forgetting Curve shows we forget 80% of new information within 24 hours without active review. Reading more slowly or re-reading the same passage are both ineffective strategies — they don\'t interrupt the forgetting process. The single most effective technique is retrieval practice: close the book and try to recall what you just read in your own words. This act of effortful retrieval, even when imperfect and incomplete, creates memory consolidation that passive re-reading cannot. Applied to books: after every 10-15 pages, pause and summarize in 2-3 sentences before continuing. This adds 5 minutes per hour of reading and doubles retention. The goal isn\'t reading more books — it\'s remembering what you read.',
    actionTip: 'After your next 10 pages, close the book and summarize in 3 sentences.',
    source: 'Hermann Ebbinghaus, Spacing Effect research',
  },
  {
    id: 'b3',
    interest: 'books',
    title: 'Why Difficult Books Make You Smarter',
    body: 'Neuroscience research confirms that reading cognitively demanding texts — dense non-fiction, complex fiction, philosophy — measurably increases white matter density in the brain over time, specifically in areas associated with language processing and abstract reasoning. Social media has the opposite effect: it trains fragmented attention, reducing the capacity to sustain focus on a single topic for longer than a few seconds. The "difficulty" of reading a challenging text is not a bug — it is the mechanism of the benefit. The brain grows by encountering resistance, not by processing comfortable bite-sized content. Reading something that makes you work is neurologically more beneficial than reading the same number of words of easy content. The friction is the feature.',
    actionTip: 'Find the hardest book you own. Read 5 pages. Stop there. Notice what it demands.',
  },
  // music
  {
    id: 'mu1',
    interest: 'music',
    title: 'Playing an Instrument is Full-Brain Training',
    body: 'Learning to play a musical instrument is one of the very few activities that simultaneously activates both hemispheres of the brain — coordinating motor control, auditory processing, emotional regulation, and mathematical pattern recognition all at once. A landmark UCLA study found that even 15 minutes of daily instrumental practice begins to physically alter the structure of the auditory cortex within weeks. You don\'t need to be a musician to benefit; the neural effects begin from your very first attempt at deliberate practice on any instrument. What separates people who play from those who want to is not talent — it\'s the decision to start making sounds with intention. Talent is largely a myth perpetuated by people who started late and compared themselves to those who started young.',
    actionTip: 'Pick up any instrument you own and play one thing — anything — for 3 minutes.',
  },
  {
    id: 'mu2',
    interest: 'music',
    title: 'Active vs. Passive Listening',
    body: 'Most people listen to music as background — ambient sound that reduces the discomfort of silence without demanding attention. Active listening is categorically different: following the melody line, identifying individual instruments, anticipating harmonic changes, tracking rhythmic patterns. This engaged mode activates entirely different regions of the brain, including the prefrontal cortex and hippocampus. Research on musicians and trained listeners shows that active engagement with music trains auditory discrimination and emotional intelligence in ways that passive listening simply cannot. Critically, this isn\'t limited to classical music or trained musicians — actively engaging with any genre you enjoy produces the same benefits. Listening with full attention is a form of meditation that most people have never tried.',
    actionTip: 'Listen to one song with headphones, eyes closed, doing nothing else. Follow the melody.',
  },
  {
    id: 'mu3',
    interest: 'music',
    title: 'Creating vs. Consuming',
    body: 'There is a categorical difference between listening to music and making music — even imperfect, amateur, unpolished music. Recording a musical idea, however rough, activates circuits of creativity, self-expression, and agency that passive consumption permanently suppresses. The fear of producing "bad" music is precisely what keeps most adults from creating — but the neurological benefits of creation are independent of quality. Research on creative output shows that the act of making something — any output — increases psychological wellbeing and sense of agency in ways that consuming the same content never does. The difference between a musician and a listener isn\'t skill level or natural talent. It is a single, repeatable decision: to produce instead of just receive.',
    actionTip: 'Hum a melody and record 30 seconds on your phone. Don\'t judge it — just make it.',
  },
  // art
  {
    id: 'ar1',
    interest: 'art',
    title: 'Drawing is the Practice of Seeing',
    body: 'Artist Betty Edwards argues, convincingly, that most people stopped drawing not because they lacked talent but because they developed verbal thinking at the expense of visual thinking. Drawing requires switching from the brain\'s left-hemisphere language mode — which categorizes, labels, and simplifies — to the right-hemisphere visual mode, which processes what is actually present in front of you. This shift is the mechanism behind why drawing slows the mind: you cannot draw what you think is there; you must draw what you actually see. For this reason, drawing is one of the best mindfulness practices available — it demands present-moment perception in a way that meditation instruction often fails to communicate. You don\'t need talent. You need to slow down enough to actually look.',
    actionTip: 'Draw your hand with your other hand. Right now. No erasing.',
    source: 'Betty Edwards, Drawing on the Right Side of the Brain',
  },
  {
    id: 'ar2',
    interest: 'art',
    title: 'The Professional Practice of Making Bad Work',
    body: 'Professional artists distinguish themselves not by avoiding bad work, but by producing it deliberately and without emotional charge. The fear of an ugly result is the primary creative block — more powerful than lack of technique, time, or materials. Ira Glass described the "taste gap": your taste in good work develops faster than your ability to create it, and the discomfort between them causes most people to quit. The deliberate practice of creating fast, disposable, imperfect work — timed sketches, rough drafts, throwaway pieces — discharges the perfectionism response and liberates the creative output that careful revision suppresses. Quantity of output is the path to quality, not the alternative to it. The way to make better art is to make more art, most of it bad.',
    actionTip: 'Make a 60-second drawing. Deliberately fast, deliberately imperfect. Keep it.',
  },
  {
    id: 'ar3',
    interest: 'art',
    title: 'Art as Measurable Stress Relief',
    body: 'A 2016 study in the Art Therapy Journal found that 45 minutes of expressive art-making reduced cortisol levels by 75% in participants — regardless of their artistic skill level, regardless of what medium they used, and regardless of whether the outcome was aesthetically pleasing. The mechanism is not about art quality — it\'s about the state of absorbed, sensory engagement that creation produces. In this state, the brain\'s default mode network (responsible for rumination and self-referential worry) goes offline, and the task-positive network takes over. This is the same neurological state as meditation, flow, and deep play. The therapeutic benefit of art requires no therapist, studio, or prior skill. It requires a pen, paper, and the decision to make something with your hands.',
    actionTip: 'Doodle on a piece of paper for 3 minutes while thinking about something that\'s bothering you.',
    source: 'Kaimal et al., Art Therapy Journal, 2016',
  },
  // food
  {
    id: 'fo1',
    interest: 'food',
    title: 'Eating Without a Screen',
    body: 'Eating in front of a screen increases caloric intake by 25-30% and significantly reduces post-meal satisfaction — meaning you eat more and enjoy it less at the same time. The mechanism is attentional: your brain needs to process the sensory experience of eating — flavor, texture, smell, chewing, satiety signals — to properly register that a meal occurred and to generate satisfaction. When attention is directed to a screen, this processing is incomplete, leaving you feeling hungry again sooner and craving the dopamine the food didn\'t fully deliver. A meal eaten with full attention is not just more satisfying — it is a genuine pause in a day of continuous digital stimulation. The table is one of the last legitimate offline spaces. Defend it.',
    actionTip: 'Your next meal — no phone. Just the food and wherever you are.',
  },
  {
    id: 'fo2',
    interest: 'food',
    title: 'Cooking is an Intelligence Workout',
    body: 'Ordering food is passive consumption. Cooking is active cognitive engagement: it requires spatial reasoning to navigate the kitchen, working memory to track multiple timelines, creative problem-solving to improvise with available ingredients, and fine motor coordination for knife work and timing. It also engages all five senses simultaneously — something that most screen-dominated modern activities fail to do. Research on older adults consistently shows that people who cook regularly maintain sharper cognitive function than those who don\'t, independent of other lifestyle factors. Beyond neuroscience: people who cook report greater self-efficacy, a better relationship with food, and more satisfaction from meals than those who consistently rely on delivery. The kitchen is one of the best available gyms for the mind.',
    actionTip: 'Cook something simple this week with what you already have at home. Resist the delivery app.',
  },
  {
    id: 'fo3',
    interest: 'food',
    title: 'The Case for Seasonal and Local Food',
    body: 'Food produced locally reaches you within 1-4 days of harvest, compared to imported produce that averages 2-3 weeks from field to shelf. During that window, nutritional density degrades significantly — vitamin C in spinach, for example, drops by 50% within a week of harvest. Beyond nutrition, buying local creates a direct relationship with producers: you know where your food comes from, how it was grown, and who grew it. This relationship with food origin is the opposite of unconscious consumption — it transforms eating from an automatic act into a considered one. Seasonal eating also forces menu creativity, reducing the monotony that drives unhealthy convenience choices. The farmers market isn\'t a luxury — it\'s a different relationship with what sustains you.',
    actionTip: 'At your next grocery shop, choose one product with a local or regional origin label.',
  },
  // hiking
  {
    id: 'h1',
    interest: 'hiking',
    title: "Nature's Cortisol Reset",
    body: 'A study published in Frontiers in Psychology found that just 20 minutes spent in a natural environment reduces cortisol levels by 21% and adrenaline by 28% — and crucially, the effect begins within the first 10 minutes and does not require physical exertion to trigger. Simply sitting in a park, walking slowly through trees, or standing near water produces measurable neuroendocrine changes that stress management techniques often struggle to match. The urban environment — with its noise, visual complexity, ambient urgency, and constant social evaluation — maintains a low-level stress activation that most people don\'t notice until it\'s removed. Nature provides the absence of these triggers, and that absence alone is therapeutic. You don\'t need a trail, mountain, or special equipment.',
    actionTip: 'Walk somewhere you would normally drive. Go through a park or green space if you can.',
    source: 'Hunter et al., Frontiers in Psychology, 2019',
  },
  {
    id: 'h2',
    interest: 'hiking',
    title: 'The Creative Walk',
    body: 'Most walks are purposeful: you are going somewhere. Purpose activates the brain\'s task-positive network — the goal-oriented, analytical mode that processes information linearly and systematically. Walking without a fixed destination activates the default mode network instead — the brain\'s wandering mode, where autobiographical memory, imagination, future planning, and creative connection-making occur. This is the neurological state behind sudden insight, unexpected solutions to problems you\'ve been stuck on, or creative ideas that seem to arrive while walking. Einstein, Darwin, and Beethoven all took daily destination-free walks as deliberate creative practice. The best ideas don\'t come from trying harder. They come from strategic suspension of effort — giving the unconscious mind the space it needs to process.',
    actionTip: 'Take a 20-minute walk with no destination and no podcast. Let your mind wander.',
  },
  {
    id: 'h3',
    interest: 'hiking',
    title: 'Altitude Resets Perspective',
    body: 'There is a documented cognitive shift that occurs when you physically rise above your normal visual horizon — when you can see a city from above, or a valley from a ridge. This isn\'t metaphor: the experience of visible distance and spatial scale activates brain regions associated with long-term planning and perspective-taking, while simultaneously reducing the subjective urgency of immediate problems. Mountaineers and hikers consistently report that elevation physically changes their relationship to problems that felt overwhelming at ground level. The neurological mechanism involves suppression of amygdala hyperactivation when the field of view expands beyond the immediate environment. Even a city viewpoint or a tall building works. Wide views change the emotional weight of problems. You cannot think small thoughts on a mountaintop.',
    actionTip: 'Plan a walk with elevation this week. One hour is enough to feel the shift.',
  },
  // wellness
  {
    id: 'we1',
    interest: 'wellness',
    title: 'Sleep is the Foundation, Not the Reward',
    body: 'Every other wellness practice — exercise, nutrition, meditation, cold showers, supplements — has its effectiveness reduced by 40-60% when you\'re sleeping less than 7 hours per night. Sleep is not the prize you earn after productive work; it is the biological foundation without which nothing else functions at full capacity. During sleep, the brain consolidates memories, the immune system performs critical maintenance, growth hormone peaks, and the glymphatic system clears metabolic waste including amyloid proteins associated with cognitive decline. One night of inadequate sleep impairs cognitive performance equivalently to being legally drunk. The most important productivity decision you make every day is what time you go to sleep.',
    actionTip: 'Set a "sleep now" reminder in your calendar. Treat it like a meeting you cannot skip.',
    source: 'Matthew Walker, Why We Sleep',
  },
  {
    id: 'we2',
    interest: 'wellness',
    title: 'The Self-Care Paradox',
    body: 'Modern culture conflates self-care with immediate pleasure: a bath, a Netflix binge, a takeaway, an extra hour of scrolling "to decompress." Genuine self-care is frequently the opposite — what makes you feel better tomorrow, not tonight. Sleep before midnight rather than after. Movement when you don\'t feel like it. A difficult conversation instead of avoidance. Time in nature instead of another screen session. The critical diagnostic question is: is this something I\'ll feel genuinely better from having done, or something that provides brief relief while postponing the underlying condition? Comfort and restoration are different things. Much of what modern culture calls self-care is sophisticated procrastination with a wellness aesthetic.',
    actionTip: 'Name one thing that genuinely restores you but that you keep postponing. Do it today.',
  },
  {
    id: 'we3',
    interest: 'wellness',
    title: 'Stress as a Navigation Signal',
    body: 'Stress is not the enemy — it is information. The right question in the face of chronic stress is not "how do I reduce this?" but "what is this telling me about the gap between where I am and where I need to be?" Persistent, low-grade stress typically signals misalignment: between values and daily actions, between what you say matters and what you actually spend your time on. This reframe transforms stress from something to manage into something to interpret and act upon. The practices that "reduce stress" — exercise, meditation, social connection — work partly by improving your capacity to hear the signal clearly, so you can act on the information rather than suppress it. Stress that is acted upon dissipates. Stress that is numbed accumulates.',
    actionTip: 'Write 3 sentences about what stressed you this week. Look for the repeating pattern.',
  },
  // photography
  {
    id: 'ph1',
    interest: 'photography',
    title: 'Photography is 99% Observation',
    body: 'The great photographers consistently describe their practice as primarily one of observation rather than capture — the camera is the last step in a long process of seeing. Henri Cartier-Bresson called it "training the eye": the practice of moving through the world with heightened visual attention, noticing light, composition, and decisive moments before the camera is ever raised. This attentional shift — from passive looking to active seeing — is the most valuable thing photography teaches, and it\'s available to you without ever pressing a shutter. Training your photographic eye is identical to training selective attention: the capacity to perceive what is actually present, rather than what you assume or expect to be there. Most of us have never truly looked at anything this carefully.',
    actionTip: 'Leave the house without your camera. Identify 5 things you would photograph. Don\'t photograph them.',
  },
  {
    id: 'ph2',
    interest: 'photography',
    title: 'Constraints Create Better Work',
    body: 'Study after study on creative production shows that photographers working with minimal equipment consistently produce more creative, interesting work than those with unlimited gear. The reason is counterintuitive: constraints eliminate choices, forcing creative problem-solving. With one lens, you must move your body differently. With only natural light, you must understand light deeply. With a limited number of exposures, you must be selective about what deserves capture. The phone camera you already own is sufficient for extraordinary work — the barrier is never technical. The mindset shift is from "I need better equipment" to "I need better vision." The best photographer in any group is the one who pays the most attention, not the one with the most expensive bag.',
    actionTip: 'Take 10 photos this week using only natural light. No artificial light, no flash.',
  },
  {
    id: 'ph3',
    interest: 'photography',
    title: 'Photography and the Memory Problem',
    body: 'Photographing a moment with intention strengthens the memory. But research on cognitive offloading shows that excessive photography paradoxically weakens experience and recall — when your brain delegates memory storage to the camera, it stops processing and encoding the moment itself. A 2013 Linda Henkel study found that participants who photographed objects remembered significantly fewer details about them than those who simply observed. The practical implication: 1-3 photographs per meaningful moment, then put the phone away. This preserves the memory-strengthening benefit of intentional capture while preventing the experience-erasure effect of continuous documentation. The goal is to witness the moment, not to extract content from it. Be there first. Photograph second.',
    actionTip: 'At your next meaningful moment, take 2 photos maximum. Then put the phone away.',
  },
  // events
  {
    id: 'ev1',
    interest: 'events',
    title: 'Why Experiences Make You Happier Than Things',
    body: 'Cornell psychologist Thomas Gilovich\'s decades of research have conclusively shown that people derive more lasting happiness from experiential purchases than from material ones — and the anticipation of upcoming experiences provides a sustained happiness boost that the anticipation of buying things doesn\'t match. Having something planned creates what psychologists call "prospective joy": the present-moment wellbeing that comes from knowing something meaningful is coming. Material purchases provide a brief hedonic spike that fades quickly. Experiences, by contrast, become part of your narrative identity — they are things that happened to you, not things you own. The research is unambiguous: money spent on doing things returns more wellbeing per euro than money spent on having things.',
    actionTip: 'Put one event or experience in your calendar for the next two weeks. Anything.',
    source: 'Gilovich et al., Journal of Personality and Social Psychology',
  },
  {
    id: 'ev2',
    interest: 'events',
    title: 'Community is the Most Underrated Health Variable',
    body: 'Social isolation is as harmful to physical health as smoking 15 cigarettes per day — a finding replicated across multiple decades of research that consistently surprises people who have internalized individualism as the default value. Events, when attended with social intention rather than passive consumption, are one of the most efficient mechanisms for building and maintaining the community bonds that predict health and longevity. The critical variable isn\'t how many people you\'re around — it\'s whether you\'re engaging or just observing. The difference between someone who attends a workshop and talks to people versus someone who goes to a concert staring at their phone is not scale; it\'s the quality of social engagement. Go to the event. Talk to someone.',
    actionTip: 'Attend your next event without your phone in your hand for the first hour.',
    source: 'Holt-Lunstad et al., PLOS Medicine, 2015',
  },
  {
    id: 'ev3',
    interest: 'events',
    title: 'The Joy of Missing Out',
    body: 'FOMO — Fear of Missing Out — is largely an artifact of social media that shows you a curated highlight reel of every interesting thing happening without you. In the pre-digital world, you simply didn\'t know about events you weren\'t at, and your life felt complete. JOMO — Joy of Missing Out — is the intentional counterpoint: the deep satisfaction of choosing where you are, saying no to what doesn\'t genuinely excite you, and saying yes to depth over breadth. Research on decision fatigue shows that having too many social options is itself exhausting; selective, committed presence consistently produces more meaningful experiences than dispersed, obligatory attendance. A calendar full of things you genuinely chose is a fundamentally different life than one full of things you just said yes to.',
    actionTip: 'This week, decline one invitation that doesn\'t genuinely excite you. Without guilt.',
  },
  // cooking
  {
    id: 'ck1',
    interest: 'cooking',
    title: 'Cooking is Meditation in Disguise',
    body: 'Cooking is one of the few activities in modern life that simultaneously engages all five senses: the sound of oil in the pan, the smell of garlic, the color changes that signal temperature, the texture of dough, the real-time taste adjustments. This full-sensory engagement produces what psychologists call absorbed attention — a state neurologically indistinguishable from meditation, characterized by present-moment focus and suppression of the default mode network (the ruminating, self-referential mind). Unlike formal meditation, which many people find difficult to sustain, cooking provides a concrete task that naturally anchors attention. The difference between cooking and ordering food is not just nutritional or financial — it\'s the difference between being present and being passively served.',
    actionTip: 'Cook your next meal with music but no phone. Let the cooking itself be the focus.',
  },
  {
    id: 'ck2',
    interest: 'cooking',
    title: 'The Mise en Place Principle',
    body: '"Mise en place" is French for "everything in its place" — the professional kitchen principle of preparing all ingredients before cooking begins: chopped, measured, portioned, and ready. Studies on kitchen workflow show this preparation phase reduces cooking stress by 60% and improves outcomes significantly. The deeper principle generalizes far beyond cooking: the quality of any task improves dramatically when preparation precedes execution, rather than happening simultaneously with it. Context-switching between preparation and execution introduces errors, increases cognitive load, and reduces the quality of both. The chef who cooks well prepares more thoroughly and improvises less — not because they lack creativity, but because preparation creates the space in which creativity can function freely.',
    actionTip: 'Before cooking today, prepare all your ingredients first. Notice how different the process feels.',
  },
  {
    id: 'ck3',
    interest: 'cooking',
    title: 'The Neuroscience of Shared Meals',
    body: 'Evolutionary anthropologist Robin Dunbar\'s research shows that sharing food is one of the most powerful social bonding mechanisms available to humans — more effective at building trust and deepening relationships than most other common social activities. The act of preparing and sharing food activates the endorphin system through multiple pathways: physical warmth, shared sensory experience, the reciprocity of nourishment, and the time commitment of mutual presence. Research consistently shows that people who eat together regularly report higher relationship satisfaction, lower rates of depression, and greater social resilience than those who eat alone or separately. The dinner table is not an obligation or a chore. It is one of the best relationship technologies ever invented.',
    actionTip: 'Invite someone to dinner this week. Cook something simple together or for them.',
  },
  // tech
  {
    id: 'te1',
    interest: 'tech',
    title: 'The Productivity Tool Paradox',
    body: 'Despite unprecedented access to productivity tools, time-tracking apps, and optimization systems, knowledge workers report feeling less productive than ever. The paradox resolves when you realize that most productivity tools don\'t save time — they create new obligations, maintenance overhead, and complexity that consume more attention than they free up. Research confirms that the most productive knowledge workers use the simplest systems that actually work, and aggressively eliminate everything else. The optimal system isn\'t the most sophisticated — it\'s the most consistently used. Every app you add to manage your life is another surface demanding attention, updates, and decisions. The question is not "is this useful?" but "does my life measurably improve when I use it?" Most tools fail that test.',
    actionTip: 'Delete one productivity app you haven\'t actively used in the past 7 days.',
  },
  {
    id: 'te2',
    interest: 'tech',
    title: 'Deep Work: The Rarest and Most Valuable Skill',
    body: 'Cal Newport defines deep work as cognitively demanding, distraction-free professional activity that pushes your abilities to their limits and creates lasting value — the kind of work that cannot be easily replicated or outsourced. Shallow work is logistical and cognitive-light: emails, quick responses, meetings, notifications. The tragedy of modern knowledge work is that most professionals spend the majority of their day in shallow work and have filled their schedules so completely that deep work has become structurally impossible. The ability to focus without distraction for 90 minutes is increasingly rare in modern workplaces, and therefore increasingly valuable. Cultivating deep work capacity is one of the highest-leverage career investments a professional can make — and it costs nothing but the discipline to close notifications.',
    actionTip: 'Block a 90-minute slot tomorrow with all notifications off. One task only.',
    source: 'Cal Newport, Deep Work',
  },
  {
    id: 'te3',
    interest: 'tech',
    title: 'What Digital Minimalism Actually Means',
    body: 'Digital minimalism, as Cal Newport defines it, is not anti-technology — it is a philosophy of intentional technology use where you adopt tools only when their benefits clearly outweigh the costs, and where you use them in ways that serve your values. The key insight is opportunity cost: every hour spent on social media is an hour not spent on something with higher long-term return. The math isn\'t about moderation; it\'s about substitution. The honest question is not "how do I use less?" but "what am I giving up in exchange for what?" For most people, answering that question honestly and completely changes the calculation entirely. Technology is neutral — the problem is using high-cost tools by default, without ever consciously evaluating what you\'re trading.',
    actionTip: 'Identify the app you use most that adds the least real value. Disable it for 48 hours.',
    source: 'Cal Newport, Digital Minimalism',
  },
  // gaming
  {
    id: 'ga1',
    interest: 'gaming',
    title: 'Flow State, Games, and What It Means for Real Work',
    body: 'Psychologist Mihaly Csikszentmihalyi identified the conditions that produce flow — optimal engagement where skill meets challenge, time distorts, and self-consciousness disappears. Games are extraordinarily well-engineered to produce this state: immediate feedback, clear objectives, difficulty calibrated to competence, and measurable progress at every step. The problem is not that games create flow — it\'s that they create it more reliably and with less setup cost than most meaningful work. When games become the primary source of flow experiences, the motivation to cultivate flow in work, creative practice, or relationships gradually atrophies. The insight isn\'t to stop gaming — it\'s to consciously build flow-inducing structures into the parts of life that matter more. Use games as proof of concept, then reverse-engineer the conditions into your work.',
    actionTip: 'Identify one task at work you could make more game-like with clear milestones and immediate feedback.',
    source: 'Mihaly Csikszentmihalyi, Flow',
  },
  {
    id: 'ga2',
    interest: 'gaming',
    title: 'Cooperative vs. Competitive: A Different Nervous System',
    body: 'Research on gaming physiology shows that competitive online games — ranked modes, PvP arenas, first-person shooters — activate the sympathetic nervous system similarly to social media: comparison, status anxiety, reactive aggression, win/loss stress, and post-session cortisol spikes are all documented. Cooperative and narrative games, by contrast, activate entirely different circuits: empathy, collaborative problem-solving, storytelling immersion, and intrinsic rather than comparative motivation. The distinction matters for how gaming affects your actual wellbeing. If you\'re gaming to unwind but finishing sessions more anxious than you started, you may simply be using the wrong category of game for your nervous system\'s actual needs. Genre selection matters as much as time management. Not all games are the same experience.',
    actionTip: 'Try a cooperative or narrative game this week instead of a competitive one. Compare how you feel after.',
  },
  {
    id: 'ga3',
    interest: 'gaming',
    title: 'Gaming With Intention',
    body: 'The neurological difference between healthy and problematic gaming is not duration — it\'s intention and control. Research on behavioral patterns shows that gaming sessions begun with a pre-committed time limit are experienced fundamentally differently than sessions that "just started" with vague plans to stop "after a bit." The former maintains prefrontal cortex engagement — you remain the decision-maker. The latter gradually transfers control to the reward system, and stopping becomes cognitively expensive. This is also why playing with an end goal (finish this level, complete this quest) is healthier than open-ended grinding. The decision to play consciously is made before you sit down, not when you\'re already in it. Intention precedes action. It cannot be applied retroactively.',
    actionTip: 'Set a timer before you start playing. The timer ends the session — not tiredness or boredom.',
  },
]

export function getInsightForInterests(
  interests: Interest[],
  excludeIds: string[]
): LearningInsight | null {
  if (!interests || interests.length === 0) return null

  const pool = INSIGHTS.filter(i => interests.includes(i.interest))
  if (pool.length === 0) return null

  const available = pool.filter(i => !excludeIds.includes(i.id))
  const source = available.length > 0 ? available : pool
  return source[Math.floor(Math.random() * source.length)]
}
