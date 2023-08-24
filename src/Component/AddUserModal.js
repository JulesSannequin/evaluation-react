import React, {useState} from "react";

function AddUserModal({ onAddUser, onCancel}) {
    const [newUser, setNewUser] = useState({
        nom: "",
        prenom: "",
        age: "",
        genre: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    };

    const handleAddUserSubmit = (e) => {
        e.preventDefault();
        onAddUser(newUser);
        setNewUser({
            nom: "",
            prenom: "",
            age: "",
            genre: "",
        })
    };

    const handleCancel = () => {
      onCancel();
      setNewUser({
          nom: "",
          prenom: "",
          age: "",
          genre: ""
      });
  };

    return (
        <div className="add-user-modal">
        <div className="modal-content">
          <h2>Ajouter un utilisateur</h2>
          <form onSubmit={handleAddUserSubmit}>
            <label>
              Nom:
              <input
                type="text"
                name="nom"
                value={newUser.nom}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Prénom:
              <input
                type="text"
                name="prenom"
                value={newUser.prenom}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={newUser.age}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Genre:
              <input
                type="text"
                name="genre"
                value={newUser.genre}
                onChange={handleInputChange}
              />
            </label>
            <div className="button-container">
              <button className="green-btn" type="submit">
                Ajouter
              </button>
              <button className='red-btn' type='button' onClick={handleCancel}>Annuler</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default AddUserModal