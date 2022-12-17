import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaBlock from "../PizzaBlock/PizzaBlock";

const MainPage = ({ data }) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {data.map((pizza) => (
                        <PizzaBlock
                            key={pizza.id}
                            pizza={pizza}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
