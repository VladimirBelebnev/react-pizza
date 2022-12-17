import { useState } from "react";

import "./Categories.scss";

const categoriesArray = [
    { id: 0, name: "Все" },
    { id: 1, name: "Мясные" },
    { id: 2, name: "Вегетарианская" },
    { id: 3, name: "Гриль" },
    { id: 4, name: "Острые" },
    { id: 5, name: "Закрытые" },
];

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <div className="categories">
            <ul>
                {categoriesArray.map((category) => (
                    <li
                        onClick={() => setSelectedCategory(category.id)}
                        className={
                            selectedCategory === category.id ? "active" : ""
                        }
                        key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
