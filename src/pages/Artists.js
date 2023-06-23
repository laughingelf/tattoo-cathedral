

function Artists() {
    return (
        <div className="page-data">
            <h1>Artists</h1>
            <div id='social-links' className="flex flex-row justify-center items-center px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <a href="https://www.facebook.com/tattoojasin.13" target="_blank"><img className="social-logo w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2" src="./img/fb-logo.png" /></a>
                <a href="https://www.instagram.com/jasintattoos/?hl=en" target="_blank"><img className="social-logo w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-2" src="./img/insta-logo.png" /></a>
            </div>

            <div id="instagram" className="h-2/3 m-5">
                <h3 className="mb-1">@jasintattoos</h3>
                <img className="h-1/3 sm:h-1/4 md:h-1/5 lg:h-1/6 rounded shadow" src="./img/jasin-fb.jpg" />
            </div>
        </div>

    )
}

export default Artists