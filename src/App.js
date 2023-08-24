import React, { useState } from "react";
import UserCard from "./Component/UserCard";
import EditModal from "./Component/EditModal";
import { userData as initialUserData } from "./Component/Data";
import AddUserModal from "./Component/AddUserModal";
import "./App.css";

function App() {
  const [editingUser, setEditingUser] = useState(null);
  const [userData, setUserData] = useState(initialUserData);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  const handleProfilClick = (user) => {
    setEditingUser(user);
  };

  const handleEditFormSubmit = (editedUser) => {
    const updatedUserData = userData.map((user) =>
      user === editingUser ? editedUser : user
    );
    setUserData(updatedUserData);
    setEditingUser(null);
  };

  const handleEditFormCancel = () => {
    setEditingUser(null);
  };

  const handleAddUserClick = () => {
    setIsAddUserModalOpen(true);
  };

  const handleAddUserSubmit = (newUser) => {
    if (newUser.nom && newUser.prenom && newUser.age && newUser.genre) {
      setUserData([...userData, newUser]);
    }
    setIsAddUserModalOpen(false);
  };

  const handleAddUserModalCancel = () => {
    setIsAddUserModalOpen(false);
  };

  const handleDeleteUser = (userToDelete) => {
    const updatedUserData = userData.filter(user => user !== userToDelete);
    setUserData(updatedUserData)
  }

  return (
    <div className="App">
      <button className="add-user-button" onClick={handleAddUserClick}>
        Ajouter un utilisateur
      </button>

      <div className="container">
        {userData.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onClick={() => handleProfilClick(user)}
          />
        ))}
      </div>

      {editingUser && (
        <EditModal
          user={editingUser}
          onSubmit={handleEditFormSubmit}
          onDeleteUser={handleDeleteUser}
          onCancel={handleEditFormCancel}
        />
      )}

      {isAddUserModalOpen && (
        <AddUserModal
          onAddUser={handleAddUserSubmit}
          onCancel={handleAddUserModalCancel}
        />
      )}
    </div>
  );
}

export default App;
