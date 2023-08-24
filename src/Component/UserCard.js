import React from "react";

const UserCard = ({user, onClick}) => {
    return (
        <div className="user-card" onClick={onClick}>
            <img src={user.photo} alt={`${user.nom} ${user.prenom}`} />
            <p>Nom: {user.nom}</p>
            <p>Prénom: {user.prenom}</p>
            <p>Age: {user.age}</p>
            <p>genre: {user.genre}</p>
        </div>
    )
};

export default UserCard;