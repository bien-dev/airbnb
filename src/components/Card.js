
export default function Card(props) {
   
    return (
        <section className="card">
            <img src={require(`../images/${props.coverImg}`)} 
            className="card__img" />
            <div className="card__stats">
                <img src={require("../images/star.png")} className="card__star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card__title">{props.title}</p>
            <p className="card__price"><strong>From ${props.price}</strong> / person</p>
        </section>
    )
}