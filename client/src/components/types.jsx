import React from 'react';

const Types = (props) => {

  return (
    <div>
      <h1>What are you in the mood for?</h1>
      <table>
        <tbody>
          <tr>
            <td>American</td>
            <td>Asian</td>
            <td>Chinese</td>
            <td>Dessert</td>
            <td>Greek</td>
          </tr>
          <tr>
            <td>Hambugers</td>
            <td>Healthy</td>
            <td>Indian</td>
            <td>Italian</td>
            <td>Japanese</td>
          </tr>
          <tr>
            <td>Lunch Specials</td>
            <td>Mediterranean</td>
            <td>Mexican</td>
            <td>Middle Eastern</td>
            <td>Pasta</td>
          </tr>
          <tr>
            <td>Pizza</td>
            <td>Salads</td>
            <td>Sandwiches</td>
            <td>Seafood</td>
            <td>Soup</td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>Thai</td>
            <td>Vegetarian</td>
            <td>Wings</td>
            <td>Wraps</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default Types;