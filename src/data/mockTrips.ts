import { Trip, User, JoinRequest } from '../types'

export const currentUser: User = {
  id: 'u1',
  name: 'Alex Johnson',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  tripsCreated: 2,
  tripsJoined: 5,
}

export const mockTrips: Trip[] = [
  {
    id: 't1',
    destination: 'Tokyo, Japan',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    startDate: '2024-04-10',
    endDate: '2024-04-17',
    organizer: {
      id: 'u2',
      name: 'Sarah Chen',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tripsCreated: 5,
      tripsJoined: 12,
    },
    description:
      'A week of cherry blossoms, sushi making classes, and exploring the hidden alleys of Tokyo. Looking for foodies and culture enthusiasts!',
    totalSlots: 6,
    openSlots: 2,
    totalCost: 1200,
    currency: 'USD',
    tags: ['Culture', 'Food', 'Urban'],
    itinerary: [
      {
        id: 'a1',
        day: 1,
        time: '18:00',
        title: 'Welcome Dinner at Shinjuku',
        description: 'Meet and greet dinner at a traditional Izakaya.',
        cost: 50,
        capacity: 6,
        spotsAvailable: 2,
        location: 'Shinjuku',
      },
      {
        id: 'a2',
        day: 2,
        time: '09:00',
        title: 'Tsukiji Outer Market Tour',
        description: 'Morning food tour and sushi breakfast.',
        cost: 80,
        capacity: 6,
        spotsAvailable: 2,
        location: 'Tsukiji',
      },
      {
        id: 'a3',
        day: 2,
        time: '14:00',
        title: 'TeamLab Planets',
        description: 'Immersive digital art museum experience.',
        cost: 35,
        capacity: 6,
        spotsAvailable: 2,
        location: 'Toyosu',
      },
    ],
  },
  {
    id: 't2',
    destination: 'Reykjavik, Iceland',
    image:
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    startDate: '2024-09-15',
    endDate: '2024-09-22',
    organizer: {
      id: 'u3',
      name: 'Mike Ross',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tripsCreated: 8,
      tripsJoined: 3,
    },
    description:
      'Chasing northern lights and hiking glaciers. This is an active trip involving moderate hiking and cold weather.',
    totalSlots: 4,
    openSlots: 1,
    totalCost: 1800,
    currency: 'USD',
    tags: ['Nature', 'Adventure', 'Hiking'],
    itinerary: [
      {
        id: 'a4',
        day: 1,
        time: '10:00',
        title: 'Blue Lagoon',
        description: 'Relaxing soak in the geothermal spa.',
        cost: 90,
        capacity: 4,
        spotsAvailable: 1,
        location: 'Grindavík',
      },
      {
        id: 'a5',
        day: 2,
        time: '08:00',
        title: 'Golden Circle Tour',
        description: 'Full day tour of Thingvellir, Geysir, and Gullfoss.',
        cost: 120,
        capacity: 4,
        spotsAvailable: 1,
        location: 'South Iceland',
      },
    ],
  },
  {
    id: 't3',
    destination: 'Barcelona, Spain',
    image:
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    startDate: '2024-06-20',
    endDate: '2024-06-25',
    organizer: {
      id: 'u4',
      name: 'Elena Rodriguez',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tripsCreated: 12,
      tripsJoined: 20,
    },
    description:
      "Architecture, tapas, and beach vibes. A relaxed trip focusing on Gaudi's masterpieces and culinary delights.",
    totalSlots: 8,
    openSlots: 4,
    totalCost: 950,
    currency: 'USD',
    tags: ['Art', 'Food', 'Relaxation'],
    itinerary: [
      {
        id: 'a6',
        day: 1,
        time: '16:00',
        title: 'Sagrada Familia Tour',
        description: 'Guided tour of the famous basilica.',
        cost: 40,
        capacity: 8,
        spotsAvailable: 4,
        location: 'Eixample',
      },
    ],
  },
]

export const mockRequests: JoinRequest[] = [
  {
    id: 'r1',
    userId: 'u5',
    user: {
      id: 'u5',
      name: 'David Kim',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tripsCreated: 0,
      tripsJoined: 2,
    },
    tripId: 't1',
    tripName: 'Tokyo, Japan',
    activityIds: [],
    status: 'pending',
    message: 'Hi! I love Japanese culture and would love to join your group.',
    date: '2024-03-15',
  },
  {
    id: 'r2',
    userId: 'u6',
    user: {
      id: 'u6',
      name: 'Lisa Wang',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      tripsCreated: 1,
      tripsJoined: 4,
    },
    tripId: 't1',
    tripName: 'Tokyo, Japan',
    activityIds: ['a2'],
    status: 'accepted',
    message: 'Just interested in the food tour!',
    date: '2024-03-14',
  },
]
