import { IoMdTime } from "react-icons/io";
import { GiCelebrationFire } from "react-icons/gi";

const Recipe = ({ recipe }) => {
    //console.log(recipe);
    const { recipe_image, recipe_name, short_description,
        ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card-item">
                <img className='card-img' src={recipe_image} alt={`image of ${recipe_name}`} />
                <h4 className='font-bold my-1'>{recipe_name}</h4>
                <p>{short_description}</p>
                <h6 className='font-bold'>Ingredients: {ingredients.length}</h6>
                <ul>
                    {
                        ingredients.map((ingredient, idx) =>
                            <span key={idx}>*{ingredient} <br /></span>)
                    }
                </ul>
                <div className="flex justify-around mt-3">
                    <div className="flex items-center gap-1">
                        <IoMdTime />
                        <p>{preparing_time} min</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <GiCelebrationFire />
                        <p>{calories}</p>
                    </div>
                </div>
                <button className='border-2 bg-green-600 rounded-3xl p-[6px] font-semibold mr-4 mt-3'>Want to Cook</button>
            </div>
        </div>
    );
};

export default Recipe;