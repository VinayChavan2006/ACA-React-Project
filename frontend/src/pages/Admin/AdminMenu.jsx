import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Menu Button */}
            <button
                className={`fixed top-5 right-7 bg-gray-900 p-3 rounded-full z-50 ${
                    isMenuOpen ? "transform rotate-90" : ""
                } transition-transform duration-300 focus:outline-none`}
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <FaTimes size={20} color="white" />
                ) : (
                    <FaBars size={20} color="white" />
                )}
            </button>

            {/* Admin Menu */}
            {isMenuOpen && (
                <section className="fixed top-20 right-7 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-40 transition-transform duration-300 transform translate-x-0">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                className="block py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-700"
                                to="/admin/dashboard"
                                style={({ isActive }) => ({
                                    color: isActive ? "#10B981" : "white",
                                })}
                            >
                                Admin Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="block py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-700"
                                to="/admin/categorylist"
                                style={({ isActive }) => ({
                                    color: isActive ? "#10B981" : "white",
                                })}
                            >
                                Create Category
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="block py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-700"
                                to="/admin/productlist"
                                style={({ isActive }) => ({
                                    color: isActive ? "#10B981" : "white",
                                })}
                            >
                                Create Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="block py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-700"
                                to="/admin/allproductslist"
                                style={({ isActive }) => ({
                                    color: isActive ? "#10B981" : "white",
                                })}
                            >
                                All Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="block py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-700"
                                to="/admin/userlist"
                                style={({ isActive }) => ({
                                    color: isActive ? "#10B981" : "white",
                                })}
                            >
                                Manage Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="block py-2 px-3 rounded-md transition-colors duration-200 hover:bg-gray-700"
                                to="/admin/orderlist"
                                style={({ isActive }) => ({
                                    color: isActive ? "#10B981" : "white",
                                })}
                            >
                                Manage Orders
                            </NavLink>
                        </li>
                    </ul>
                </section>
            )}
        </>
    );
};

export default AdminMenu;


