import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-[#E7F0DC] min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="hidden lg:relative lg:flex lg:h-full lg:items-center bg-gradient-to-br from-[#597445] to-[#597445]/80 lg:col-span-5 xl:col-span-6">
          <img
            alt="Online Shopping"
            src="https://images.unsplash.com/photo-1612690669207-fed642192c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-30"
          />

          <div className="relative z-10 w-full text-center px-12 py-8">
            <div className="mx-auto mb-8 w-16 h-16">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                <path d="M16 8H8V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 8H19L20 21H4L5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-4">
              Welcome to <span className="text-[#E7F0DC]">E-commerce </span>
            </h2>

            <p className="text-lg text-[#E7F0DC]/90 max-w-md mx-auto">
              Your sustainable shopping destination. Discover eco-friendly products that make a difference.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-4 py-8 sm:px-8 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-full max-w-xl lg:max-w-3xl">
            <div className="text-center mb-8 lg:hidden">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-[#597445] text-white shadow-lg">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8H8V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 8H19L20 21H4L5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>

              <h1 className="mt-2 text-2xl font-bold text-[#597445] sm:text-3xl">
                Welcome Back
              </h1>
            </div>

            <SignIn appearance={{
              elements: {
                formButtonPrimary: "bg-[#597445] hover:bg-[#597445]/90 transition-all",
                card: "shadow-md",
                headerTitle: "text-2xl font-bold text-[#597445]",
                headerSubtitle: "text-gray-600",
                footer: "hidden",
                footerAction: "hidden",
                dividerRow: "hidden",
                dividerText: "hidden",
                formField__input: "border-gray-300 focus:border-[#597445] focus:ring-[#597445]",
                formField__label: "text-[#597445]",
                identityPreview: "bg-[#E7F0DC] border-[#597445]",
              }
            }} />
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a 
                  href="/sign-up" 
                  className="text-[#597445] hover:text-[#597445]/80 font-semibold transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

