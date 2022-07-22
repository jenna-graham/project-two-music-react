import { useEffect } from 'react';
import { useDataContext } from './ContextProvider';
import { Link } from 'react-router-dom';

import DeleteButtons from './DeleteButton';
import UserProfile from './UserProfile';

export default function FavoritesPage() {
  const { favorites, handleDeleteFavorite, handleGetFavorites, profileName, handleGetUserProfileById, user } = useDataContext();
  

  useEffect(() => {
    handleGetFavorites();
    handleGetUserProfileById(user.id);
  }, []); //eslint-disable-line

 

  return (
    <div className='favorite-page'>
      <h2>{`Welcome to your Favorites Artists, ${profileName.user_name }`}</h2>

      <div className="fave-list">
        {favorites.map((favorite, i) => (
          <div className="fave-artist" key={favorite.name + i}>
            <Link to={`/artist/${favorite.artist_id}`}>
              <h3>{favorite.name}</h3>
              <img src={favorite.images} />
            </Link>
            <DeleteButtons onClick={() => handleDeleteFavorite(favorite.id)}>
            Remove from Favorites
            </DeleteButtons>
          </div>
        ))}
        <div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
