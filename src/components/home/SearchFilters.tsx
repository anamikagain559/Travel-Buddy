import React from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
interface SearchFiltersProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: any) => void
}
export function SearchFilters({
  onSearch,
  onFilterChange, 
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search destinations (e.g., Tokyo, Iceland)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          <select
            className="px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
            onChange={(e) =>
              onFilterChange({
                type: e.target.value,
              })
            }
          >
            <option value="">All Types</option>
            <option value="Adventure">Adventure</option>
            <option value="Culture">Culture</option>
            <option value="Food">Food</option>
            <option value="Relaxation">Relaxation</option>
          </select>

          <select
            className="px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
            onChange={(e) =>
              onFilterChange({
                budget: e.target.value,
              })
            }
          >
            <option value="">Any Budget</option>
            <option value="low">Under $1000</option>
            <option value="medium">$1000 - $2500</option>
            <option value="high">$2500+</option>
          </select>

        </div>
      </div>
    </div>
  )
}
