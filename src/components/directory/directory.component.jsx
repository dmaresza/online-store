import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

// const Directory = () => {
function Directory() {

    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "women\'s",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "men\'s",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]
    return (
        <div className="directory-container">
            {categories.map(({ title, id, imageUrl }) => (
                <CategoryItem key={id} title={title} imageUrl={imageUrl} />
            ))}
        </div>
    )
}

export default Directory;