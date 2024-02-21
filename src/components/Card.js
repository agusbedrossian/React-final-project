import "../style/Card.css";

function Card({ product }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image product-image">
                    <img className="" src={product.img} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{product.title}</p>
                        <p className="subtitle is-6">{product.description}</p>
                    </div>
                </div>

                <div className="content">
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;