import Hero from "./components/Hero";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Loader from "./components/Loader";
import { ProductsGrid } from "./components/ProductCard";
import Reveal from "./components/Reveal";

const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  {
    loading: () => (
      <div className="flex justify-center py-12">
        <Loader />
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />

        {/* Quality Section - Ultra Creative & Responsive Stats */}
        <section className="py-12 sm:py-20 bg-background border-t border-secondary overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Mobile-First Revolutionary Design */}
              <div className="block lg:hidden">
                <div className="relative min-h-screen py-8">
                  {/* Mobile Header with Animation */}
                  <div className="text-center mb-12 px-6">
                    <div className="inline-block">
                      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4 relative">
                        Our Impact
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"></div>
                      </h2>
                    </div>
                    <p className="text-base sm:text-lg text-text-secondary max-w-sm mx-auto leading-relaxed">
                      Numbers that define our excellence
                    </p>
                  </div>

                  {/* Floating Background Art */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-8 w-24 h-24 bg-teal/10 rounded-full blur-2xl animate-pulse delay-75"></div>
                    <div className="absolute top-96 left-8 w-28 h-28 bg-aqua/8 rounded-full blur-2xl animate-pulse delay-150"></div>
                    <div className="absolute bottom-40 right-4 w-36 h-36 bg-royal/5 rounded-full blur-3xl animate-pulse delay-300"></div>
                  </div>

                  {/* Revolutionary Mobile Stats Grid */}
                  <div className="relative z-10 space-y-8 px-4">
                    {/* Hero Stat - Clients */}
                    <div className="relative">
                      <div className="group">
                        <div className="relative bg-gradient-primary p-8 rounded-[2rem] transform -rotate-2 transition-all duration-500 shadow-2xl border border-white/20">
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-[2rem]"></div>
                          <div className="absolute top-4 right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>

                          {/* Content */}
                          <div className="relative text-center text-primary">
                            <div className="flex items-center justify-center mb-4">
                              <div className="text-6xl sm:text-7xl font-black">
                                500
                              </div>
                              <div className="text-2xl sm:text-3xl font-bold text-accent ml-2">
                                +
                              </div>
                            </div>
                            <div className="text-lg sm:text-xl font-bold mb-2">
                              Happy Clients
                            </div>
                            <div className="text-sm sm:text-base opacity-90">
                              Worldwide Excellence
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4 w-24 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
                              <div
                                className="h-full bg-accent rounded-full animate-pulse"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Floating Icons */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full shadow-lg flex items-center justify-center">
                          <span className="text-primary text-sm font-bold">
                            ★
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Duo Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Categories Stat */}
                      <div className="relative group">
                        <div className="bg-teal p-6 sm:p-7 rounded-3xl transform rotate-2 transition-all duration-300 shadow-xl">
                          <div className="text-center text-white">
                            <div className="text-4xl sm:text-5xl font-black mb-3">
                              8
                            </div>
                            <div className="text-sm sm:text-base font-semibold mb-1">
                              Product
                            </div>
                            <div className="text-xs sm:text-sm opacity-90">
                              Categories
                            </div>

                            {/* Mini Icon */}
                            <div className="mt-3 w-8 h-1 bg-white/40 rounded-full mx-auto"></div>
                          </div>

                          {/* Corner Accent */}
                          <div className="absolute -top-2 -left-2 w-6 h-6 bg-aqua rounded-full shadow-md"></div>
                        </div>
                      </div>

                      {/* Experience Stat */}
                      <div className="relative group">
                        <div className="bg-royal p-6 sm:p-7 rounded-3xl transform -rotate-1 transition-all duration-300 shadow-xl">
                          <div className="text-center text-white">
                            <div className="flex items-center justify-center mb-3">
                              <div className="text-4xl sm:text-5xl font-black">
                                5
                              </div>
                              <div className="text-lg sm:text-xl font-bold ml-1">
                                +
                              </div>
                            </div>
                            <div className="text-sm sm:text-base font-semibold mb-1">
                              Years
                            </div>
                            <div className="text-xs sm:text-sm opacity-90">
                              Experience
                            </div>

                            {/* Mini Progress Dots */}
                            <div className="mt-3 flex justify-center space-x-1">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            </div>
                          </div>

                          {/* Corner Accent */}
                          <div className="absolute -top-1 -right-2 w-5 h-5 bg-accent rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Satisfaction Mega Stat */}
                    <div className="relative">
                      <div className="group">
                        <div className="relative bg-gradient-cool p-8 sm:p-10 rounded-[2rem] transform rotate-1 transition-all duration-500 shadow-2xl border border-aqua/30">
                          {/* Animated Background Elements */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-black/10 rounded-[2rem]"></div>
                          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                          <div className="absolute top-4 right-6 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>

                          {/* Content */}
                          <div className="relative text-center text-primary">
                            <div className="flex items-center justify-center mb-4">
                              <div className="text-6xl sm:text-7xl font-black">
                                99
                              </div>
                              <div className="text-3xl sm:text-4xl font-bold ml-2">
                                %
                              </div>
                            </div>
                            <div className="text-xl sm:text-2xl font-bold mb-2">
                              Satisfaction
                            </div>
                            <div className="text-sm sm:text-base opacity-95 mb-4">
                              Guaranteed Excellence
                            </div>

                            {/* Satisfaction Indicators */}
                            <div className="flex justify-center space-x-2">
                              <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse delay-75"></div>
                                <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse delay-150"></div>
                              </div>
                            </div>
                          </div>

                          {/* Corner Stars */}
                          <div className="absolute -top-2 -left-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <span className="text-teal text-sm font-bold">
                              ★
                            </span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full shadow-md"></div>
                        </div>
                      </div>
                    </div>

                    {/* Poster Showcase */}
                    <div className="relative mt-12">
                      <div className="relative">
                        {/* Premium Frame */}
                        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-700">
                          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                            <Image
                              src="/01.jpeg"
                              alt="Layered Luxe Premium Poster"
                              fill
                              className="object-contain transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Glass Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 pointer-events-none"></div>
                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/50 rounded-full blur-xl"></div>
                          </div>

                          {/* Poster Info */}
                          <div className="mt-4 text-center">
                            <div className="text-lg sm:text-xl font-bold text-text-primary mb-1">
                              Premium Collection
                            </div>
                            <div className="text-sm text-text-secondary">
                              Quality Craftsmanship
                            </div>

                            {/* Quality Badge */}
                            <div className="inline-flex items-center mt-3 px-4 py-2 bg-accent/10 rounded-full">
                              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                              <span className="text-xs font-semibold text-accent">
                                PREMIUM QUALITY
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-2xl shadow-lg transform rotate-12"></div>
                        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-teal rounded-full shadow-md"></div>
                        <div className="absolute top-1/4 -left-3 w-6 h-6 bg-aqua rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/3 -right-3 w-7 h-7 bg-royal/60 rounded-full animate-pulse delay-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Stats Side */}
                  <div className="relative z-10">
                    <div className="mb-8">
                      <h2 className="font-heading text-3xl font-semibold text-text-primary lg:text-4xl mb-4">
                        Our Impact in Numbers
                      </h2>
                      <p className="text-lg text-text-secondary">
                        Delivering excellence across every metric that matters
                      </p>
                    </div>

                    {/* Desktop Creative Stats Layout */}
                    <div className="space-y-6">
                      {/* Top Row - Large Stat */}
                      <div className="relative">
                        <div className="bg-linear-to-r from-accent to-accent/80 p-8 rounded-3xl text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                          <div className="text-5xl font-bold mb-2 text-primary">
                            500+
                          </div>
                          <div className="text-primary font-semibold">
                            Happy Clients Worldwide
                          </div>
                        </div>
                      </div>

                      {/* Middle Row - Two Medium Stats */}
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-teal text-white p-6 rounded-2xl text-center transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                          <div className="text-3xl font-bold mb-2">8</div>
                          <div className="text-sm font-medium">
                            Product Categories
                          </div>
                        </div>
                        <div className="bg-royal text-white p-6 rounded-2xl text-center transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                          <div className="text-3xl font-bold mb-2">5+</div>
                          <div className="text-sm font-medium">
                            Years Experience
                          </div>
                        </div>
                      </div>

                      {/* Bottom Row - Large Stat with Different Style */}
                      <div className="relative">
                        <div className="bg-linear-to-br from-aqua to-teal p-8 rounded-3xl text-center transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <div className="text-5xl font-bold text-primary">
                              99
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              %
                            </div>
                          </div>
                          <div className="text-primary font-semibold">
                            Client Satisfaction Rate
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-teal/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* Poster Side */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="relative max-w-md w-full">
                      {/* Poster Frame */}
                      <div className="bg-white p-6 rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50">
                          <Image
                            src="/01.jpeg"
                            alt="Layered Luxe Quality Poster"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          {/* Poster Glass Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none"></div>
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white/40 rounded-full blur-sm"></div>
                        </div>

                        {/* Poster Title */}
                        <div className="mt-4 text-center">
                          <div className="text-lg font-bold text-text-primary mb-1">
                            Premium Collection
                          </div>
                          <div className="text-sm text-text-secondary">
                            Layered Luxe Quality
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements around Poster */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full opacity-60 animate-pulse shadow-lg"></div>
                      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-teal/30 rounded-full animate-pulse delay-75 blur-sm"></div>
                      <div className="absolute top-1/4 -right-4 w-8 h-8 bg-aqua/50 rounded-full animate-pulse delay-150"></div>
                      <div className="absolute bottom-1/3 -left-6 w-10 h-10 bg-royal/40 rounded-full animate-pulse delay-300"></div>

                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl -z-10 scale-110"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Manufacture in India Section - Creative & Colorful */}
        <Reveal>
          <section className="py-16 sm:py-24 bg-gradient-to-br from-background via-surface to-background relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-16 w-24 h-24 bg-teal/15 rounded-full blur-2xl animate-pulse delay-75"></div>
              <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-royal/8 rounded-full blur-3xl animate-pulse delay-150"></div>
              <div className="absolute bottom-20 right-20 w-28 h-28 bg-aqua/12 rounded-full blur-2xl animate-pulse delay-300"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              {/* Enhanced Header */}
              <div className="text-center mb-16 sm:mb-20">
                <div className="inline-block relative mb-6">
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary relative z-10">
                    Why Manufacture in
                    <span className="relative ml-3">
                      <span className="text-primary bg-gradient-primary bg-clip-text">
                        India
                      </span>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent rounded-full"></div>
                    </span>
                    ?
                  </h2>
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-8 w-6 h-6 bg-accent rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-4 -left-6 w-4 h-4 bg-teal rounded-full animate-bounce delay-200"></div>
                </div>

                <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                  India is a{" "}
                  <span className="font-semibold text-accent">
                    global powerhouse
                  </span>{" "}
                  in apparel manufacturing, combining tradition with innovation.
                </p>

                {/* Stats Mini Bar */}
                <div className="flex justify-center items-center space-x-8 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">#1</div>
                    <div className="text-xs text-text-secondary">
                      Global Exporter
                    </div>
                  </div>
                  <div className="w-px h-8 bg-accent/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal">40M+</div>
                    <div className="text-xs text-text-secondary">Workers</div>
                  </div>
                  <div className="w-px h-8 bg-accent/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-royal">$15B</div>
                    <div className="text-xs text-text-secondary">
                      Export Value
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Card 1: World-Class Materials */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-90"></div>
                  <div className="relative bg-white p-8 rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-all duration-500 shadow-xl hover:shadow-2xl border border-accent/20">
                    {/* Floating Icon */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/60 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-accent/40 rounded-full animate-pulse delay-100"></div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      World-Class Materials
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      We leverage world-class materials, skilled artisans, and
                      sustainable practices to bring your ideas to life.
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 h-2 bg-accent/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transform group-hover:scale-x-100 scale-x-75 transition-transform duration-700 origin-left"></div>
                      </div>
                      <span className="text-sm font-semibold text-accent">
                        95%
                      </span>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full"></div>
                  </div>
                </div>

                {/* Card 2: Competitive Pricing */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal to-aqua rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-90"></div>
                  <div className="relative bg-white p-8 rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-all duration-500 shadow-xl hover:shadow-2xl border border-teal/20">
                    {/* Floating Icon */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal to-aqua rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal/60 rounded-full animate-ping delay-75"></div>
                      <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-aqua/40 rounded-full animate-pulse delay-200"></div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-primary mb-4 group-hover:text-teal transition-colors duration-300">
                      Competitive Pricing
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      Competitive pricing and global supply chain ensure smooth
                      production and worldwide delivery.
                    </p>

                    {/* Cost Saving Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal">40%</div>
                        <div className="text-xs text-text-secondary">
                          Cost Savings
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-6 bg-teal rounded-full"></div>
                        <div className="w-2 h-4 bg-teal/70 rounded-full"></div>
                        <div className="w-2 h-8 bg-teal rounded-full"></div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-teal/10 rounded-full"></div>
                  </div>
                </div>

                {/* Card 3: Global Standards */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal to-royal/80 rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-90"></div>
                  <div className="relative bg-white p-8 rounded-[2rem] transform -rotate-1 group-hover:rotate-0 transition-all duration-500 shadow-xl hover:shadow-2xl border border-royal/20">
                    {/* Floating Icon */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-royal to-royal/80 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                          />
                        </svg>
                      </div>
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-royal/60 rounded-full animate-ping delay-150"></div>
                      <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-royal/40 rounded-full animate-pulse delay-300"></div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-primary mb-4 group-hover:text-royal transition-colors duration-300">
                      Global Standards
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      International quality standards with the advantage of
                      cost-effective production and skilled craftsmanship.
                    </p>

                    {/* Certification Badges */}
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 flex space-x-2">
                        <div className="px-3 py-1 bg-royal/10 rounded-full text-xs font-semibold text-royal">
                          ISO
                        </div>
                        <div className="px-3 py-1 bg-royal/10 rounded-full text-xs font-semibold text-royal">
                          GOTS
                        </div>
                        <div className="px-3 py-1 bg-royal/10 rounded-full text-xs font-semibold text-royal">
                          OEKO
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-royal/10 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Section */}
              <div className="text-center mt-16 sm:mt-20">
                <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-accent rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="text-primary font-semibold">
                    Ready to start manufacturing?
                  </span>
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Uniform Quality Excellence Section */}
        <Reveal>
          <section className="py-16 sm:py-24 bg-gradient-subtle relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-16 left-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 right-12 w-32 h-32 bg-teal/10 rounded-full blur-3xl animate-pulse delay-75"></div>
              <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-royal/10 rounded-full blur-xl animate-pulse delay-150"></div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image Side - First on mobile, left on desktop */}
                <div className="order-1">
                  <div className="relative group">
                    {/* Main Image Container */}
                    <div className="relative">
                      <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-200">
                        <Image
                          src="/02.jpeg"
                          alt="Premium Quality Uniforms Manufacturing - Layered Luxe"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />

                        {/* Quality Overlay Badge */}
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                                <span className="text-sm">⭐</span>
                              </div>
                              <div>
                                <div className="font-bold text-sm text-text-primary">
                                  Premium
                                </div>
                                <div className="text-xs text-text-secondary">
                                  Quality
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Manufacturing Excellence Badge */}
                        <div className="absolute bottom-6 right-6">
                          <div className="bg-teal text-white rounded-xl p-3 shadow-lg">
                            <div className="text-center">
                              <div className="text-lg font-bold">100%</div>
                              <div className="text-xs">Quality Check</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal/15 rounded-full blur-2xl animate-pulse delay-100"></div>

                      {/* Small Accent Dots */}
                      <div className="absolute top-12 right-12 w-3 h-3 bg-accent rounded-full shadow-lg"></div>
                      <div className="absolute bottom-12 left-12 w-4 h-4 bg-royal rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="order-2">
                  <div className="space-y-6 sm:space-y-8">
                    {/* Quality Header */}
                    <div>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
                        <span>🏆</span>
                        <span>Manufacturing Excellence</span>
                      </div>

                      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
                        Crafting
                        <span className="relative block text-accent mt-2">
                          Premium Uniforms
                          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-accent rounded-full"></div>
                        </span>
                        with Precision
                      </h2>

                      <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                        At Layered Luxe, we don&apos;t just make uniforms—we
                        engineer professional confidence. Our state-of-the-art
                        manufacturing processes and premium materials ensure
                        every piece meets the highest standards of{" "}
                        <span className="font-semibold text-teal">
                          quality, durability, and comfort
                        </span>
                        .
                      </p>
                    </div>

                    {/* Quality Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-accent"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              Premium Fabrics
                            </h4>
                            <p className="text-sm text-text-secondary">
                              Carefully sourced materials
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-teal"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              Fast Production
                            </h4>
                            <p className="text-sm text-text-secondary">
                              Quick turnaround times
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-royal/10 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-royal"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              Quality Control
                            </h4>
                            <p className="text-sm text-text-secondary">
                              Rigorous testing process
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-aqua/10 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-aqua"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              Custom Fit
                            </h4>
                            <p className="text-sm text-text-secondary">
                              Tailored to perfection
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Manufacturing Stats */}
                    <div className="bg-gradient-primary p-6 rounded-2xl">
                      <div className="grid grid-cols-3 gap-4 text-center text-primary">
                        <div>
                          <div className="text-2xl font-bold text-accent">
                            500+
                          </div>
                          <div className="text-sm opacity-90">
                            Designs Created
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">
                            99.5%
                          </div>
                          <div className="text-sm opacity-90">Quality Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-accent">
                            24/7
                          </div>
                          <div className="text-sm opacity-90">Production</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        href="/uniforms"
                        className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-accent rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      >
                        <span className="text-primary font-bold text-lg">
                          View Our Uniform Collection
                        </span>
                        <svg
                          className="w-6 h-6 text-primary transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Product Range Section */}
        <Reveal>
          <section className="py-20 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl font-semibold text-text-primary lg:text-4xl">
                  Explore Our Product Range
                </h2>
                <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
                  Discover our premium collection of custom apparel designed for
                  quality, comfort, and style. From corporate uniforms to
                  promotional wear - we deliver unmatched craftsmanship for
                  every need.
                </p>
              </div>

              {/* Products Grid */}
              <ProductsGrid className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12" />

              {/* View All Products CTA */}
              <div className="text-center">
                <Link
                  href="/products"
                  className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-accent rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-primary font-bold text-lg">
                    View All Products
                  </span>
                  <svg
                    className="w-6 h-6 text-primary transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* services Section */}
        <Reveal>
          <section className="py-20 bg-surface">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-heading text-3xl font-semibold text-text-primary lg:text-4xl mb-6">
                    Services we offer
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-text-secondary">
                        Low minimum order quantities (MOQs) to support startups
                        and brands.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-text-secondary">
                        Multiple decoration techniques — embroidery, screen
                        Printing printing, 3D embossing, sublimation, DTF
                        printing, and more.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <svg
                          className="h-3 w-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-text-secondary">
                        Sampling process ensures perfect fit, fabric, and finish
                        before mass production.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/customisation"
                      className="inline-flex items-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                    >
                      Learn More About Our Services
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-secondary p-4 border border-accent/20">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {/* Embroidery */}
                      <div className="relative rounded-2xl overflow-hidden border border-secondary transition-all duration-500 hover:transform hover:-rotate-5 hover:scale-105">
                        <Image
                          alt="embroidery image"
                          src={"/embroidery.webp"}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-center justify-center p-4">
                          <span className="text-sm font-medium text-white text-center">
                            Embroidery
                          </span>
                        </div>
                      </div>

                      {/* DTF Printing */}
                      <div className="relative rounded-2xl overflow-hidden border border-secondary transition-all duration-500 hover:transform hover:-rotate-5 hover:scale-105">
                        <Image
                          alt="dtf printing"
                          src="/dtf.webp"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-center justify-center p-4">
                          <span className="text-sm font-medium text-white text-center">
                            DTF Printing
                          </span>
                        </div>
                      </div>

                      {/* Sublimation */}
                      <div className="relative rounded-2xl overflow-hidden border border-secondary transition-all duration-500 hover:transform hover:-rotate-5 hover:scale-105">
                        <Image
                          alt="sublimation"
                          src="/sublimation.webp"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-center justify-center p-4">
                          <span className="text-sm font-medium text-white text-center">
                            Sublimation
                          </span>
                        </div>
                      </div>

                      {/* 3D Embossing */}
                      <div className="relative rounded-2xl overflow-hidden border border-secondary transition-all duration-500 hover:transform hover:-rotate-5 hover:scale-105">
                        <Image
                          alt="3d embossing"
                          src="/embossed.webp"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-center justify-center p-4">
                          <span className="text-sm font-medium text-white text-center">
                            3D Embossing
                          </span>
                        </div>
                      </div>

                      {/* Screen Printing */}
                      <div className="relative rounded-2xl overflow-hidden border border-secondary transition-all duration-500 hover:transform hover:-rotate-5 hover:scale-105">
                        <Image
                          alt="screen printing"
                          src="/screen.webp"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-center justify-center p-4">
                          <span className="text-sm font-medium text-white text-center">
                            Screen Printing
                          </span>
                        </div>
                      </div>

                      {/* Batch Printing */}
                      <div className="relative rounded-2xl overflow-hidden border border-secondary transition-all duration-500 hover:transform hover:-rotate-5 hover:scale-105">
                        <Image
                          alt="batch printing"
                          src="/batch.webp"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10 flex items-center justify-center p-4">
                          <span className="text-sm font-medium text-white text-center">
                            Batch Printing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Testimonials Section */}
        <Suspense
          fallback={
            <div className="flex justify-center py-8">
              <Loader />
            </div>
          }
        >
          <Reveal>
            <TestimonialsSection />
          </Reveal>
        </Suspense>
      </main>
    </div>
  );
}
