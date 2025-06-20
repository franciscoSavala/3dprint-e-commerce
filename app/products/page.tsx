"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Dragon Figurine",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Figurines",
    rating: 4.8,
    reviews: 127,
  },
  {
    id: 2,
    name: "Geometric Vase",
    price: 18.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "Phone Stand",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 4,
    name: "Miniature Castle",
    price: 32.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Figurines",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 5,
    name: "Desk Organizer",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    rating: 4.5,
    reviews: 98,
  },
  {
    id: 6,
    name: "Decorative Bowl",
    price: 22.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    rating: 4.8,
    reviews: 134,
  },
  {
    id: 7,
    name: "Robot Figure",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Figurines",
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 8,
    name: "Laptop Stand",
    price: 35.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    rating: 4.6,
    reviews: 76,
  },
  {
    id: 9,
    name: "Wall Art Panel",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    rating: 4.7,
    reviews: 112,
  },
]

const categories = ["All", "Figurines", "Home Decor", "Accessories"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || product.category === selectedCategory),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-gray-600">Explore our complete collection of high-quality 3D printed objects</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("All")
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
