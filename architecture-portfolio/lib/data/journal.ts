export interface JournalPost {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  readTime: string
  body: string[]
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'on-restraint',
    title: 'On Restraint',
    category: 'Essay',
    date: '2024-11-12',
    excerpt:
      'The discipline of removal. Why the hardest act in architecture is deciding what not to build.',
    readTime: '6 min read',
    body: [
      'There is a moment in every project when the drawings are still full of ideas. Schemes within schemes. Gestures that demonstrate intelligence. Forms that justify their own existence. This moment is the most dangerous in the life of a building.',
      'The discipline of architecture — at least the kind we practice — is not the discipline of addition. It is the discipline of removal. Every material we do not use is a decision. Every wall we choose not to build is an argument. Every unnecessary gesture we eliminate is an act of respect for the person who will live or work within the result.',
      'Restraint is not the same as minimalism. Minimalism is an aesthetic position — a style that can be applied to almost anything. Restraint is an ethical position. It asks: what does this building actually need in order to fulfil its purpose? And then it removes everything else.',
      'The buildings we return to again and again are almost never those with the most ideas. They are those with the clearest ideas. The ones where every decision seems not just justified but inevitable — where the building could not be otherwise without being fundamentally different.',
      'This is the standard we hold ourselves to. Not perfection, which is an abstraction. But inevitability, which is a lived experience.',
    ],
  },
  {
    slug: 'material-time',
    title: 'Material and Time',
    category: 'Essay',
    date: '2024-09-04',
    excerpt:
      'How a building ages is part of its design. The patina of weathering concrete and the silver of aged timber are not failures — they are the completion of the work.',
    readTime: '5 min read',
    body: [
      'We specify materials that age. This is not always what clients expect. The contemporary appetite for surfaces that remain perpetually new — for the permanent present tense of polished stainless steel and powder-coated aluminium — represents a particular anxiety about time.',
      'Concrete weathers. Timber silvers. Bronze darkens to a deep, complex brown that no paint colour can approximate. Lime plaster develops a micro-texture that speaks of the hand that applied it. These are not failures of maintenance. They are the completion of the design.',
      'A building that does not age is a building that does not belong to time. And a building that does not belong to time cannot belong to a place, because places are shaped by time — by weather, by season, by the accumulated decisions of the people who have lived there before.',
      'When we choose board-formed concrete over smooth white plaster, we are choosing to allow the building to accumulate a history that is visible in its surface. When we specify untreated larch, we are accepting that the silver it will become in five years is as much our design as the honey it presents on the day of completion.',
      'Architecture understood this way is not about the photograph taken at completion. It is about the building at ten years, at twenty, at fifty — when it has been marked by the people who use it and by the climate in which it stands.',
    ],
  },
  {
    slug: 'light-as-material',
    title: 'Light as Material',
    category: 'Essay',
    date: '2024-06-20',
    excerpt:
      'The most important material in any building is the one that cannot be ordered from a supplier. Notes on designing with natural light.',
    readTime: '7 min read',
    body: [
      'Every project begins with the sun. Before we have drawn a single wall, we have considered its orientation relative to the cardinal points, its relationship to adjacent structures that might cast shadow, and the quality of natural light available at the site — the diffuse northern light of Copenhagen, the intense southern light of Barcelona, the fleeting horizontal light of an Amsterdam winter.',
      'Light is the most important material in any building. It cannot be ordered from a supplier; it cannot be applied after the fact. It must be designed in from the beginning, at the level of massing and section, before the details are resolved.',
      'We distinguish between three qualities of natural light in our practice. Direct sunlight — the hard, shadow-casting light that creates drama and marks time. Diffuse light — the even, shadowless light that reveals surface and material with equal fidelity. And reflected light — the most complex and interesting quality, where light has struck a surface and been transformed by it before reaching the eye.',
      'A room that receives only one quality of light is incomplete. The great rooms of architecture — the Pantheon, the Salk Institute, Le Corbusier\'s chapel at Ronchamp — work because they orchestrate all three qualities in a single space, creating conditions for what can only be described as a kind of visual music.',
      'We spend considerable time in early design exploring section diagrams that show light trajectories at winter solstice and summer solstice, at dawn and at noon. The apertures that result from this analysis are rarely the most obvious ones. They are often small, precisely positioned, and more powerful for their precision.',
    ],
  },
  {
    slug: 'the-threshold',
    title: 'The Threshold',
    category: 'Essay',
    date: '2024-03-11',
    excerpt:
      'The moment of entering a building is one of the most charged in the human experience. Why the threshold deserves more architectural attention than it typically receives.',
    readTime: '4 min read',
    body: [
      'The threshold is the most important moment in any building. Not the façade, which belongs to the city. Not the room, which belongs to the occupant. The threshold — the compressed space between outside and inside — belongs to the act of transition itself.',
      'In traditional architecture, this was understood and elaborated: the porch, the loggia, the porte-cochère, the vestibule. These are not wasted space. They are the spatial preparation for the experience of interior. They decompress the arrival, allow the body to adjust from urban noise to domestic quiet, from exterior weather to interior climate.',
      'Contemporary architecture has largely eliminated the threshold in the interest of efficiency. The door opens directly from street to interior, from lobby to corridor, from corridor to room. There is no moment of preparation.',
      'We try, in every project, to create a threshold experience that is proportionate to the size and importance of the building. Sometimes this is as simple as a change of level — three steps down into a garden room, for example, which carries the body from one spatial register to another. Sometimes it is a compression of ceiling height before a release into double-height volume. Sometimes it is a material shift — from hard to soft, from rough to smooth — that signals to the body that a change of realm has occurred.',
    ],
  },
  {
    slug: 'on-collaboration',
    title: 'On Collaboration',
    category: 'Practice',
    date: '2023-12-05',
    excerpt:
      'Architecture is never made alone. The clients, engineers, and craftspeople who shape every project are not constraints on design — they are its material.',
    readTime: '5 min read',
    body: [
      'Architecture is the least solitary of the arts. A painting is made by one person; a novel by one person. Even a film, collaborative by definition, has a director whose vision ultimately prevails. But a building — at least a good building — is made by a collective: architect, client, engineer, landscape designer, builder, and every craftsperson who interprets a drawing into physical reality.',
      'We have come to believe that the quality of this collaboration is the primary determinant of the quality of the result. The projects we are most proud of are almost always those where the client relationship was deep and trusting; where the structural engineer was involved from scheme design; where the contractor was a craftsperson who understood that a drawing is a proposal, not an instruction.',
      'This is not a romantic position. It is a technical one. The client knows the programme better than we do. The engineer knows structural possibility better than we do. The craftsperson knows material behaviour better than we do. In each case, their knowledge enriches our decisions — if we are willing to ask for it and capable of receiving it.',
      'The architect who regards the engineer as a constraint, the contractor as a threat, and the client as a obstacle has misunderstood the practice entirely. We are not artists who happen to build. We are service providers who happen to create. The service is the design of spaces that serve human life. The creation is what happens when that service is performed with intelligence, care, and conviction.',
    ],
  },
  {
    slug: 'drawing-thinking',
    title: 'Drawing and Thinking',
    category: 'Practice',
    date: '2023-08-22',
    excerpt:
      'The hand drawing is not a relic — it remains the fastest, most direct interface between architectural thought and architectural form.',
    readTime: '4 min read',
    body: [
      'We draw by hand at the start of every project. Not as affectation — digital tools are faster for almost everything else — but because the hand drawing remains the fastest, most direct interface between thought and form.',
      'When you draw by hand, the drawing is imprecise. This imprecision is not a bug; it is the feature. A sketch that does not specify scale allows the mind to hold the drawing at multiple scales simultaneously. A line that is not perfectly straight implies that the wall it represents is a proposal, not a commitment. The ambiguity of the hand drawing keeps options open at the moment when options should be open.',
      'As the design develops, the drawings become more precise. Soft pencil becomes hard pencil becomes ink. Freehand becomes structured. But we return to soft pencil every time a design problem requires genuine thought — when the logic of the plan is not resolving, when a section relationship is not working, when the massing is not finding its form.',
      'The lesson we have drawn from this practice is that the tool shapes the thought. A mouse navigating a parametric model thinks differently from a hand moving a pencil across paper. Neither is better in absolute terms; but for the earliest stages of a design, we have found hand drawing to be consistently more generative, more surprising, and more likely to produce work we had not anticipated at the outset.',
    ],
  },
]

export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug)
}
