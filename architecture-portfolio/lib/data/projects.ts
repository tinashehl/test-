export interface Project {
  slug: string
  title: string
  category: string
  year: string
  location: string
  area: string
  status: string
  description: string
  concept: string
  approach: string
  materials: string[]
  tags: string[]
  heroImage: string
  images: string[]
  featured: boolean
  index: number
}

export const projects: Project[] = [
  {
    slug: 'house-01',
    title: 'House 01',
    category: 'Residential',
    year: '2024',
    location: 'Zurich, Switzerland',
    area: '320 m²',
    status: 'Completed',
    description:
      'A single-family residence conceived as a study in restraint — where every material decision is an act of reduction, not subtraction.',
    concept:
      'House 01 began as a question: what remains when you remove everything unnecessary? The answer is a dwelling that converses fluently with its wooded surroundings, its concrete skin softening through the filter of deciduous light.\n\nThe programme is organized around a central void — a double-height atrium that pulls natural light deep into the floor plate and orients each room toward its most compelling exterior view. Living, working, and sleeping are treated as equal acts, given equal architectural attention.',
    approach:
      'We worked from the landscape inward, allowing the gradient of privacy to define the section. Public rooms open fully to the garden through floor-to-ceiling glazing; private rooms recede behind solid concrete and narrow apertures that frame precise moments of sky and tree.',
    materials: [
      'Board-formed in-situ concrete',
      'European white oak flooring',
      'Steel-framed glazing system',
      'Natural limestone',
      'Hand-applied plaster',
    ],
    tags: ['Residential', 'Concrete', 'Minimal'],
    heroImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
    ],
    featured: true,
    index: 1,
  },
  {
    slug: 'urban-courtyard',
    title: 'Urban Courtyard',
    category: 'Mixed Use',
    year: '2023',
    location: 'Vienna, Austria',
    area: '1,840 m²',
    status: 'Completed',
    description:
      'A mixed-use block that reclaims the forgotten logic of the urban courtyard — making public what was once residual.',
    concept:
      'In the dense fabric of Vienna's 7th district, a site left vacant for decades offered an opportunity to reintroduce a building typology the city had largely abandoned: the fully permeable courtyard block. The project creates a new public room at the heart of a private development.\n\nThe ground floor is entirely given to the city — colonnaded passages invite pedestrian movement through the block, connecting two streets that had no direct relationship. The courtyard above becomes a semi-public garden, accessible to residents and the wider community at defined hours.',
    approach:
      'The facades respond to their orientation with calibrated precision. Street-facing elevations are composed of load-bearing masonry with rhythmic fenestration; courtyard-facing walls are lighter, more transparent, more domestic in scale.',
    materials: [
      'Rammed earth masonry',
      'Weathered Corten steel',
      'Reclaimed granite paving',
      'Thermal mass concrete',
      'Larch timber cladding',
    ],
    tags: ['Mixed Use', 'Urban', 'Courtyard'],
    heroImage:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85',
      'https://images.unsplash.com/photo-1548196923-2ef61e709867?w=1200&q=85',
      'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
    ],
    featured: true,
    index: 2,
  },
  {
    slug: 'atelier-residence',
    title: 'Atelier Residence',
    category: 'Residential',
    year: '2023',
    location: 'Copenhagen, Denmark',
    area: '210 m²',
    status: 'Completed',
    description:
      'A painter's live-work dwelling structured around the logic of northern light — where studio and residence exist in quiet dialogue.',
    concept:
      'The client — a painter of considerable reputation — required a space that could function simultaneously as home and professional studio without either compromising the other. The key insight was sectional: by elevating the studio half a level above the residential areas, we created acoustic and visual separation while maintaining the sense of a single, unified volume.\n\nNorth-facing sawtooth skylights flood the studio with the flat, consistent light the client required. The residence below is lit through carefully composed fenestration that prioritizes morning and evening light.',
    approach:
      'Every room was calibrated to the body's relationship with natural light across the day. The kitchen faces east for morning sun. The main living space faces south through a double-height slot that tracks the winter sun's low trajectory. The bedroom opens north, toward a private garden, for cool, even light at night.',
    materials: [
      'Structural timber frame',
      'Polished microcement',
      'Raw steel details',
      'Handmade ceramic tiles',
      'Birch plywood',
    ],
    tags: ['Residential', 'Studio', 'Light'],
    heroImage:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85',
    ],
    featured: true,
    index: 3,
  },
  {
    slug: 'concrete-pavilion',
    title: 'Concrete Pavilion',
    category: 'Cultural',
    year: '2022',
    location: 'Basel, Switzerland',
    area: '480 m²',
    status: 'Completed',
    description:
      'A monolithic cultural pavilion that explores the expressive potential of a single material — concrete — pushed to its absolute limit.',
    concept:
      'Commissioned for a temporary art installation that became permanent, the Concrete Pavilion was conceived as a meditation on materiality and time. Concrete is not presented here as infrastructure but as the subject itself — its surface, texture, weight, and shadow are the architecture.\n\nThe plan is deceptively simple: a long, narrow hall bisected by a central spine wall. But the section is complex — a series of varying ceiling heights, angled light slots, and carefully positioned apertures that transform the quality of light throughout the day and across the seasons.',
    approach:
      'The formwork was designed with the same care as the spaces it would create. Board patterns were specified by orientation: horizontal boards on external faces to echo the landscape's ground plane; vertical boards internally to accentuate height and draw the eye upward toward the light.',
    materials: [
      'Board-formed in-situ concrete',
      'Polished concrete floor',
      'Structural glazing inserts',
      'Cor-Ten steel threshold plates',
      'Raw concrete render',
    ],
    tags: ['Cultural', 'Concrete', 'Pavilion'],
    heroImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85',
      'https://images.unsplash.com/photo-1549407015-ab7e6d9a3e59?w=1200&q=85',
    ],
    featured: true,
    index: 4,
  },
  {
    slug: 'minimal-workspace',
    title: 'Minimal Workspace',
    category: 'Commercial',
    year: '2022',
    location: 'Berlin, Germany',
    area: '640 m²',
    status: 'Completed',
    description:
      'A creative agency's headquarters reimagined as a landscape of focused work — where the architecture supports deep concentration.',
    concept:
      'The brief was unusually clear: no open-plan sea of desks. The client had studied how their people actually worked and concluded that focused, individual work required spatial privacy; collaboration required genuine common ground — not a compromise space but a room designed purely for gathering.\n\nThe result organizes ninety workstations into clusters of six, each cluster separated by low bookshelves and oriented around a shared table. The collective space — a double-height room with a kitchen, a library, and a presentation wall — occupies the building's most dramatic volume.',
    approach:
      'Acoustic performance was treated as a spatial problem, not a material afterthought. Every partition, ceiling, floor, and upholstered surface was specified in relation to its acoustic role. The result is a workspace with a distinctive quality of quiet that staff describe as "monastic without the austerity."',
    materials: [
      'Acoustic felt wall panels',
      'Smoked oak millwork',
      'Honed black granite',
      'Powder-coated steel frames',
      'Natural wool upholstery',
    ],
    tags: ['Commercial', 'Workplace', 'Interior'],
    heroImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85',
    ],
    featured: true,
    index: 5,
  },
  {
    slug: 'cultural-extension',
    title: 'Cultural Extension',
    category: 'Cultural',
    year: '2021',
    location: 'Amsterdam, Netherlands',
    area: '2,100 m²',
    status: 'Completed',
    description:
      'An extension to a nineteenth-century cultural institution that negotiates between heritage and contemporary spatial demands.',
    concept:
      'The existing building — a neo-classical warehouse converted to gallery use in the 1980s — had exhausted its adaptation capacity. The institution needed more space but the site constraints, heritage listing, and urban context demanded an addition that both respected and productively challenged its host.\n\nThe extension is built entirely underground, surfacing only as a glass volume that emerges from the existing courtyard. This allows the original building to remain visually intact from the street while adding significant gallery and support space beneath. The underground connection is treated as a spatial event in its own right: a long corridor lined with archive material that prepares visitors for the exhibition spaces beyond.',
    approach:
      'The glass pavilion above ground is deliberately modest in scale — it is a lantern, not a monument. Its role is to bring light into the levels below and to mark the institution's presence in the courtyard without dominating it.',
    materials: [
      'Structural glazing (triple-layered)',
      'Belgian Blue Stone',
      'Exposed concrete vaults',
      'Bronze-framed fenestration',
      'Polished terrazzo',
    ],
    tags: ['Cultural', 'Extension', 'Heritage'],
    heroImage:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=85',
    images: [
      'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=85',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85',
      'https://images.unsplash.com/photo-1548196923-2ef61e709867?w=1200&q=85',
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&q=85',
    ],
    featured: true,
    index: 6,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(
  slug: string
): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
