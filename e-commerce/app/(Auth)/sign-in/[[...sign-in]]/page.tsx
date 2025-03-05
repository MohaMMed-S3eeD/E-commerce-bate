"use client"
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Page() {
  const router = useRouter()

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative bg-green-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="leaf-1"></div>
        <div className="leaf-2"></div>
        <div className="leaf-3"></div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-4 my-8 sm:my-4 relative flex flex-col lg:flex-row lg:h-[700px] rounded-[20px] sm:rounded-[30px] shadow-2xl shadow-color1/20 overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 bg-white/95 sm:bg-white/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 flex items-center justify-center relative min-h-[550px] order-2 lg:order-1">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-color1/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-color1/5 rounded-tl-full"></div>
          
          {/* Mobile Toggle Button - Well-positioned and visible */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 lg:hidden z-10">
            <Link 
              href="/sign-up"
              className="text-color1 hover:text-color1/80 font-medium flex items-center gap-2 group bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full shadow-md"
            >
              <svg 
                className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
              <span>Sign Up</span>
            </Link>
          </div>
          
          <div className="w-full max-w-md py-8 sm:py-0 relative">
            {/* Mobile header visible only on small screens */}
            <div className="lg:hidden text-center mb-6">
              <h2 className="text-color1 text-xl font-bold">Welcome Back</h2>
              <p className="text-color1/60 text-sm mt-1">Sign in to your account</p>
            </div>
            
            <SignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 
                    "bg-color1 hover:bg-color1/90 transition-all duration-300 rounded-xl h-11 sm:h-12",
                  card: 
                    "bg-transparent shadow-none",
                  headerTitle: 
                    "text-color1 text-xl",
                  headerSubtitle: 
                    "text-color1/60",
                  socialButtonsBlockButton: 
                    "border-color1/20 hover:bg-color1/5 transition-all duration-300 rounded-xl h-11 sm:h-12",
                  formFieldInput: 
                    "h-11 sm:h-12 rounded-xl border-color1/20 focus:border-color1 focus:ring-1 focus:ring-color1/20 bg-white/80",
                  footer: 
                    "hidden",
                  dividerLine: 
                    "bg-color1/20",
                  dividerText: 
                    "text-color1/40",
                  formFieldLabel: 
                    "text-color1/80",
                  identityPreviewText: 
                    "text-color1",
                  identityPreviewEditButton: 
                    "text-color1 hover:text-color1/80",
                  rootBox: 
                    "w-full",
                  main: 
                    "w-full mx-auto",
                  form:
                    "mx-auto",
                },
              }}
            />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex w-1/2 relative bg-gradient-to-bl from-color1/90 via-color1 to-color1/80 order-1 lg:order-2">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full bg-[url('/pattern.svg')] opacity-5"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-color2/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-color2/10 rounded-full blur-2xl"></div>
          </div>
              
          <div className="relative w-full h-full p-16 flex flex-col items-start justify-center z-10">
            {/* Add Sign Up Link - desktop */}
            <div className="absolute top-8 right-8">
              <Link 
                href="/sign-up"
                className="text-color2 hover:text-color2/80 font-medium flex items-center gap-2 group"
              >
                <span>Sign Up</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            <div className="w-20 h-1 bg-color2/30 rounded-full mb-8"></div>
            
            <h1 className="text-color2 text-6xl font-bold leading-tight mb-6">
              Welcome 
              <span className="text-color2/80">Back</span>
            </h1>

            <p className="text-color2/70 text-lg max-w-md leading-relaxed mb-12">
              Continue your green journey and manage your plant collection
            </p>

            <div className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1582131503261-fca1d1c781a8"
                alt="Indoor Plants Collection"
                fill
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-color1/80 via-color1/40 to-transparent"></div>
              
              {/* Image Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-2">Your Collection</h3>
                    <p className="text-white/90 text-base">Resume your plant journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}