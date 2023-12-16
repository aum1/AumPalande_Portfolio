const SingleStar = ({x, y} : {x: number, y: number, }) => {
    return (
        <div className="animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[3500ms]">
            <img src="stars/star_one_gif.gif" alt="star" style={{position: "absolute", left: `${x}px`, top: `${y}px`}}/>
        </div>
    )
}

export default SingleStar;