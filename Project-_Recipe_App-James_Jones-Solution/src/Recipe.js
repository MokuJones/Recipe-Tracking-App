import React, { useState } from "react";


function Recipe({ recipe, handleDelete }) {
    return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} className="image"/>
        </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
          <button type="delete" name="delete" onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    );
  } 

export default Recipe;

