import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlock from "../PizzaBlock";

const MainPage = () => {
    return (
        <div class="content">
            <div class="container">
                <div class="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 class="content__title">Все пиццы</h2>
                <div class="content__items">
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                    <PizzaBlock />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
