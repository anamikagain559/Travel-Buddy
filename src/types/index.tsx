export interface User {
  id: string
  name: string
  avatar: string
  tripsCreated: number
  tripsJoined: number
}

export interface Activity {
  id: string
  day: number
  time: string
  title: string
  description: string
  cost: number
  capacity: number
  spotsAvailable: number
  location?: string
}

export interface Trip {
  id: string
  destination: string
  image: string
  startDate: string
  endDate: string
  organizer: User
  description: string
  itinerary: Activity[]
  totalSlots: number
  openSlots: number
  totalCost: number
  currency: string
  tags: string[]
}

export interface JoinRequest {
  id: string
  userId: string
  user: User
  tripId: string
  tripName: string
  activityIds: string[] // Empty if joining full trip
  status: 'pending' | 'accepted' | 'declined'
  message: string
  date: string
}
