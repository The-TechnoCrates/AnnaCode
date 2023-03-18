import React from 'react'

function Hero() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900"><b>Welcome,Dear farmer!</b>
                            <br class="hidden lg:inline-block text-xl"/>It's a pleasure to have you here.
                        </h1>
                        <p class="mb-8 leading-relaxed">We recognize the challenges that come with farming, such as unpredictable weather, pests, and market fluctuations. However, your perseverance and commitment to your craft are truly admirable.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero