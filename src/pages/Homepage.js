

function Homepage() {
    return (
        <div className="page-data h-full mt-1">
            <div id="logo">
                <img src="./img/IMG-8817.jpg" className="lg:h-[40rem] md:h-[20rem]" style={{ opacity: 0.8 }} />
            </div>
            <div id="shop-pictures">
                <div className="flex flex-wrap">
                    <div className="m-2" style={{ maxWidth: '45vw' }}>
                        <img src="./img/shop1.jpg" className="rounded shadow" style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="m-2" style={{ maxWidth: '45vw' }}>
                        <img src="./img/shop3.jpg" className="rounded shadow" style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="m-2" style={{ maxWidth: '45vw' }}>
                        <img src="./img/shop4.jpg" className="rounded shadow" style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="m-2" style={{ maxWidth: '45vw' }}>
                        <img src="./img/shop6.jpg" className="rounded shadow" style={{ maxWidth: '100%' }} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Homepage