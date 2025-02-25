"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "Browse Menu",
    description: "Explore our wide variety of delicious meals",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Place Your Order",
    description: "Select your favorites and customize as needed",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Track Your Food Live",
    description: "Watch your order being prepared in real-time",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Enjoy Your Meal",
    description: "Savor your freshly prepared food",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "The food is always fresh and delicious. The ordering system is so convenient!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4,
    comment: "Great variety of options and quick delivery. Highly recommend!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    comment: "The tracking feature is amazing! I always know exactly when my food will arrive.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Food background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          className="container relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Order Smart, Eat Fresh, Delivered Fast!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience the future of campus dining with our smart canteen ordering system. Fresh food, zero queues,
            maximum convenience.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/menu">
              <Button size="lg" className="group">
                Explore Menu
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="bg-white/10">
                Login / Signup
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="container py-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative w-full aspect-square mb-6">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-slate-50 py-20">
        <div className="container">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Subscribe to our newsletter for exclusive offers and updates
          </motion.p>
          <motion.form
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit">Subscribe</Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-primary transition">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-primary transition">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-primary transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="hover:text-primary transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary transition">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-primary transition">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p>&copy; 2024 Smart Canteen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

