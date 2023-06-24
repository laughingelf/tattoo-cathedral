

function Artists() {
    return (
        <div className="page-data flex flex-col items-center justify-center">
            <h1>Artists</h1>

            <div id="artist-card" className="h-2/3 m-5">
                <div id="social-links" className="flex flex-wrap justify-center items-center px-4 py-6 sm:flex-row sm:justify-evenly sm:items-center">
                    <h1 className="mb-1">@jasintattoos</h1>
                    <a href="https://www.facebook.com/tattoojasin.13" target="_blank" className="mx-2 sm:mx-3">
                        <img className="social-logo w-6 h-6 sm:w-8 sm:h-8" src="./img/fb-logo.png" />
                    </a>
                    <a href="https://www.instagram.com/jasintattoos/?hl=en" target="_blank" className="mx-2 sm:mx-3">
                        <img className="social-logo w-6 h-6 sm:w-8 sm:h-8" src="./img/insta-logo.png" />
                    </a>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <img id="artist-img" className="rounded shadow" src="./img/jasin-fb.jpg" />
                </div>
            </div>
        </div>


    )
}

export default Artists