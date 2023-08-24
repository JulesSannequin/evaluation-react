import {useState} from 'react';

function EditModal({user, onSubmit, onCancel, onDeleteUser}) {
    const [editedUser, setEditedUser] = useState({
        nom: user.nom,
        prenom: user.prenom,
        age: user.age,
        genre: user.genre,
        photo: user.photo
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(`Changing ${name} to ${value}`);
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting edited user:", editedUser);
        onSubmit(editedUser)
    };

    const handleDeleteUser = () => {
        onDeleteUser(user);
        onCancel();
    }

    return (
      <div className='edit-modal'>
        <div className='modal-content'>
         <h2>Modifier l'utilisateur</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Nom: <input 
                type='text'
                name="nom"
                value={editedUser.nom}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Prénom: 
                <input 
                type='text'
                name='prenom'
                value={editedUser.prenom}
                onChange={handleInputChange}>
                </input>
            </label>
            <label>
                Age: 
                <input
                type='number'
                name='age'
                value={editedUser.age}
                onChange={handleInputChange}>
                </input>
            </label>
            <label>
                genre: 
                <input
                type='text'
                name='genre'
                value={editedUser.genre}
                onChange={handleInputChange}>
                </input>
            </label>
            <div className='button-container'>
                <button className='green-btn' type='submit'>Enregistrer</button>
                <button className='red-btn' type='button' onClick={onCancel}>Annuler</button>
                <button className='red-btn' type='button' onClick={handleDeleteUser}>Supprimer</button>
            </div>
        </form>
        </div>
       
      </div>
    )
}

export default EditModal;