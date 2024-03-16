
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import './Header.css'

const Header = () => {
    return (
        <div className="mx-14">
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li>
                                <a>Recipes</a>
                            </li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex border-2 p-1 rounded-3xl">
                            <p className="text-2xl text-gray-400 mt-1"><CiSearch /></p>
                            <input className="text-center p-1 border-0" type="text"
                                placeholder="Search" />
                        </div>
                        <p className="text-3xl text-green-600"><CgProfile /></p>
                    </div>
                </div>
            </div>
            <div >
                <img className="w-[1100px] h-[450px] my-6 ml-7 rounded-xl" src="back.jpg" alt="" />
                <div className="header-content">
                    <h2 className="text-center text-4xl font-bold text-white">Discover an exceptional cooking
                        <br />class tailored for you!</h2>
                    <p className="text-center mt-3 text-white">Cooking is an artful blend of flavors and techniques, turning raw ingredients <br />
                        into delicious meals that nourish the body and soul.</p>
                    <div className="flex justify-center items-center">
                        <button className="text-white border-2 bg-green-600 rounded-3xl p-[6px] font-semibold mr-4 mt-3">Explore now</button>
                        <button className="border-2 bg-gray-200 rounded-3xl p-[6px] font-semibold mt-3">Our  Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;