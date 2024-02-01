function ItemListContainer({ title, description }) {
    return <div>
        <div className="card">
            <div className="card-content">
                <div className="media-content">
                    <h2 className="title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
}

export default ItemListContainer;