import React, { useContext, useState } from 'react';
import { getImgUrl } from '../utils/cine-utility';
import Rating from './Rating';
import MovieDetailsModal from './MovieDetailsModal';
import tagImg from "../assets/tag.svg"
import { MovieContext } from '../contex';
import { toast } from 'react-toastify';


const MovieCard = ({ movie }) => {
   
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)
   const{state,dispatch}= useContext(MovieContext)
   
    const handleModalClose = () => {
        setSelectedMovie(null)
        setShowModal(false)

    }
    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie)
        setShowModal(true)
    }
    const handleAddToCart =(event,movie)=>{
        
        event.stopPropagation()
        event.preventDefault()
        
        const found = state.cartData.find((item)=>{
            return item.id === movie.id
        })
        if(!found){
            dispatch({
                type:"ADD_TO_CART",
                payload:{
                    ...movie
                }
            })
            toast.success(`${movie.title} added successfully to the cart`)
        }else{
            console.error(`The movie ${movie.title} has been added to the cart already `);
            toast.error(` ${movie.title} has been added to the cart already `);
        }

    }
    return (
        <>
            {showModal && <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} onCartAdd={handleAddToCart}/>}

            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
             
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-96 object-cover" src={getImgUrl(movie.cover)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                       <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#" 
                            onClick={(event)=>handleAddToCart(event,movie)}>
                            <img src={tagImg} alt="" />
                            <span>{movie.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
                 
            </figure>
        </>
    );
};

export default MovieCard; 