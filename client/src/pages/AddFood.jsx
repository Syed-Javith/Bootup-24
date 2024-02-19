import React, { useState } from 'react';

const AddFood = () => {
  const [formData, setFormData] = useState({
    foodTitle: '',
    foods: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Food Title:
        <input
          type="text"
          name="foodTitle"
          value={formData.foodTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Foods Available:
        <textarea
          type="text"
          name="foods"
          value={formData.foods}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFood;

