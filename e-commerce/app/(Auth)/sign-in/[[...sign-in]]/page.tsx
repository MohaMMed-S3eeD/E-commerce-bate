"use client"
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
      <div className="w-full max-w-6xl h-[700px] mx-4 relative flex rounded-[30px] shadow-2xl shadow-color1/20 overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-color1/90 via-color1 to-color1/80">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full bg-[url('/pattern.svg')] opacity-5"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-color2/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-color2/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative w-full h-full p-16 flex flex-col items-start justify-center z-10">
            <div className="w-20 h-1 bg-color2/30 rounded-full mb-8"></div>
            
            <h1 className="text-color2 text-6xl font-bold leading-tight mb-6">
              Welcome 
              <span className="text-color2/80">Back</span>
            </h1>

            <p className="text-color2/70 text-lg max-w-md leading-relaxed mb-12">
              Continue your journey in the world of beautiful plants and create your perfect green space
            </p>

            <div className="relative w-full max-w-md h-[300px] rounded-3xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1545241047-6083a3684587"
                alt="Beautiful Plants Collection"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-2">Premium Collection</h3>
                    <p className="text-white/90 text-base">Discover our handpicked plants</p>
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-md"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-md"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-md flex items-center justify-center text-sm text-white">+5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 bg-white/80 backdrop-blur-xl p-8 flex items-center justify-center relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-color1/10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-color1/5 rounded-tr-full"></div>
          
          {/* Add Sign Up Link */}
          <div className="absolute top-6 right-6">
            <button 
              onClick={() => router.push('/sign-up')}
              className="text-color1 hover:text-color1/80 font-medium flex items-center gap-2 group"
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
            </button>
          </div>
          
          <div className="w-full max-w-md relative">
            <SignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 
                    "bg-color1 hover:bg-color1/90 transition-all duration-300 rounded-xl h-12",
                  card: 
                    "bg-transparent shadow-none",
                  headerTitle: 
                    "text-color1 text-3xl",
                  headerSubtitle: 
                    "text-color1/60",
                  socialButtonsBlockButton: 
                    "border-color1/20 hover:bg-color1/5 transition-all duration-300 rounded-xl h-12",
                  formFieldInput: 
                    "h-12 rounded-xl border-color1/20 focus:border-color1 focus:ring-1 focus:ring-color1/20 bg-white/50",
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
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}