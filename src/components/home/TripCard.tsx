import React from 'react'
import Link from "next/link";
import Image from "next/image"; // Added for optimization
import { Calendar, ArrowRight } from 'lucide-react'
import { Trip } from '@/types/index'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface TripCardProps {
  trip: Trip
}

export function TripCard({ trip }: TripCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  const isFull = trip.openSlots === 0

  return (
    <Card
      
      className="h-full flex flex-col group hover:shadow-md transition-shadow"
    >
      {/* Main Trip Image */}
      <div className="relative h-48 w-full overflow-hidden">
      
        <div className="absolute top-3 right-3 z-10">
         
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
            {trip.destination}
          </h3>
          <span className="font-semibold text-blue-600">${trip.totalCost}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {trip.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <Image
                src={trip.organizer.avatar}
                alt={trip.organizer.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">
              {trip.organizer.name}
            </span>
          </div>

          {/* Corrected "to" to "href" */}
          <Link href={`/trips/${trip.id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-0"
            >
              View Details <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}