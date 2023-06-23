

function Footer() {
    return (

        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-3 lg:py-3 ">
                <div className="md:flex md:justify-center">
                    <div id="info" className=" grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 ">
                        <div>
                            <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white">(817)-585-1088</h2>
                        </div>
                        <div>
                            <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                <a href="mailto:">jasin@tattoocathedral.com</a>
                            </h2>
                        </div>
                        <div>
                            <h2 className="mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                <a href="https://goo.gl/maps/dWXW8PhzJZnaW2AQ7">3014 Alta Mere Dr, Forth Worth, TX 76116</a>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="sm:flex sm:items-center sm:justify-center">
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
                <div id="map" className="text-center flex justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.3510709614197!2d-97.44349078481913!3d32.72986738098616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e0d5a5552475f%3A0x9fbe6d6f08407359!2sTattoo%20Cathedral!5e0!3m2!1sen!2sus!4v1686583780392!5m2!1sen!2sus" width="1000" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>


    )
}

export default Footer


