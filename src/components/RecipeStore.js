import { removeRecipe, clearRecipes } from "../utils/recipeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import marked from "marked";

const RecipeCard = ({ recipe, index, isShow, isExpanded, handleRemoveRecipe }) => {
    function limitWords(text, limit) {
        return text.split(' ').slice(0, limit).join(' ') + '...';
    }
    return (
        <div className='p-2 m-2 bg-pink-300 shadow-md rounded-lg'>
            <div key={recipe.id} className="bg-pink-200 shadow-md p-4 m-4 rounded-md h-64"> {/* Fixed height added here */}
                <h3 className="text-2xl mb-2">{recipe.name}</h3>
                {recipe.aiResponse ? (
                    <p
                        className='text-left text-black-500 m-5 p-5 rounded shadow-sm rounded-e-3xl h-full overflow-hidden' // Use overflow-hidden to manage overflowing content
                        dangerouslySetInnerHTML={{
                            __html: isExpanded === index ? marked.parse(recipe.aiResponse) : marked.parse(limitWords(recipe.aiResponse, 50)),
                        }}
                    ></p>
                ) : (
                    <p>No recipe available</p>
                )}

                {recipe.aiResponse && recipe.aiResponse.length > 50 && isExpanded !== index ? (
                    <button
                        onClick={() => isExpanded === index ? isShow(-1 * index) : isShow(index)}
                        className='bg-blue-500 p-2 m-2 rounded-md'
                    >
                        {isExpanded === index ? 'Show Less' : 'Show More'}
                    </button>
                ) : null}
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleRemoveRecipe(recipe)}
                >
                    ⭐
                </button>
            </div>
        </div>
    );
}

const RecipeStore = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipe.recipes);
    const [isExpanded, setIsExpanded] = useState(-1);

    const handleClearRecipes = () => {
        dispatch(clearRecipes());
    }

    const handleRemoveRecipe = (recipe) => {
        dispatch(removeRecipe(recipe));
    }
    const isShow = (num) => {
        setIsExpanded(num)
    }

    return (
        <div className="flex flex-col items-center justify-center h-[100vh] p-4">  
            <h1 className="text-2xl font-bold mb-4">RecipeStore</h1>
            <div className="grid grid-cols-1 gap-4">
                {recipes.map((recipe, index) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        isShow={isShow}
                        isExpanded={isExpanded}
                        index={index}
                        handleRemoveRecipe={handleRemoveRecipe}
                    />
                ))}
            </div>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={handleClearRecipes}
            >
                Clear Recipes
            </button>
        </div>
    );
};

export default RecipeStore;
