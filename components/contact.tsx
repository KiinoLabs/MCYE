'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message. We will be in touch soon!')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E5AA8] font-serif mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? We&apos;d love to hear from you. Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#4FA64E]">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E5AA8] mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@mcye.org"
                  className="text-gray-600 hover:text-[#1E5AA8] transition-colors"
                >
                  info@mcye.org
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#4FA64E]">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E5AA8] mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+251911223344"
                  className="text-gray-600 hover:text-[#1E5AA8] transition-colors"
                >
                  +251 (911) 223-344
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#4FA64E]">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E5AA8] mb-1">
                  Address
                </h3>
                <p className="text-gray-600">
                  123 Community Street<br />
                  Your City, State 12345
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-8 space-y-6">
              <Field>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="rounded-lg"
                />
              </Field>

              <Field>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="rounded-lg"
                />
              </Field>

              <Field>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="rounded-lg resize-none"
                />
              </Field>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1E5AA8] to-[#0d3f6d] hover:from-[#164a8a] hover:to-[#0a2c52] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-semibold">
              Map integration coming soon
            </p>
            <p className="text-sm text-gray-400">
              123 Community Street, Your City
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
