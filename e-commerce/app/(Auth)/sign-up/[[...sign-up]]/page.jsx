import { SignUp } from "@clerk/nextjs";

export default function Page() {
return (
    <section className="bg-[#E7F0DC] min-h-screen">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            {/* Left side - sign up form */}
            <main className="flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div className="w-full max-w-xl lg:max-w-3xl">
                    <div className="relative mt-4 mb-6 lg:hidden text-center">
                        <span className="inline-flex size-14 sm:size-16 items-center justify-center rounded-full bg-[#597445] text-white shadow-lg">
                            <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2L14.5 8H19.5L15.5 12L17 18L12 15L7 18L8.5 12L4.5 8H9.5L12 2Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>

                        <h1 className="mt-3 text-xl font-bold text-[#597445] sm:text-2xl md:text-3xl">
                            Create Account
                        </h1>
                    </div>

                    <SignUp
                        appearance={{
                            elements: {
                                formButtonPrimary:
                                    "bg-[#597445] hover:bg-[#597445]/90 transition-all w-full",
                                card: "shadow-md p-4 sm:p-6",
                                headerTitle: "text-xl sm:text-2xl font-bold text-[#597445]",
                                headerSubtitle: "text-sm sm:text-base text-gray-600",
                                footer: "hidden",
                                footerAction: "hidden",
                                formField__input:
                                    "border-gray-300 focus:border-[#597445] focus:ring-[#597445] text-sm sm:text-base",
                                formField__label: "text-[#597445] text-sm sm:text-base",
                                identityPreview: "bg-[#E7F0DC] border-[#597445]",
                            },
                        }}
                    />
                    
                    <div className="mt-4 sm:mt-6 text-center">
                        <p className="text-sm sm:text-base text-gray-600">
                            Already have an account?{" "}
                            <a 
                                href="/sign-in" 
                                className="text-[#597445] hover:text-[#597445]/80 font-semibold transition-colors"
                            >
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Right side - decorative */}
            <section className="relative hidden lg:flex h-32 items-center bg-gradient-to-br from-[#597445] to-[#597445]/80 lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                    alt="Plant Garden"
                    src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-30"
                />

                <div className="relative z-10 w-full text-center px-12 py-8">
                    <div className="mx-auto mb-8 w-16 h-16">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-full text-white"
                        >
                            <path
                                d="M12 2L14.5 8H19.5L15.5 12L17 18L12 15L7 18L8.5 12L4.5 8H9.5L12 2Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-4">
                        Join <span className="text-[#E7F0DC]">E-commerce Plant</span> Today
                    </h2>

                    <p className="text-lg text-[#E7F0DC]/90 max-w-md mx-auto">
                        Start your gardening journey with us. Create an account and explore our
                        collection of beautiful plants and gardening essentials.
                    </p>
                </div>
            </section>
        </div>
    </section>
);
}
