import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import axios from 'axios';
// import './DailyMealPlan.css';

const DailyMealPlan = () => {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({
    date: '',
    breakfast: '',
    lunch: '',
    dinner: '',
    snacks: '',
    notes: '',
    done: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [visiblePlans, setVisiblePlans] = useState(4);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/health-data/meal-plan', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlans(response.data.reverse()); // Show recent plans at the top
      } catch (error) {
        console.error('Failed to fetch meal plans:', error);
      }
    };
    fetchPlans();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      if (isEditing) {
        const updatedPlan = { ...plans[editingIndex], ...form };
        const response = await axios.put(
          `http://localhost:5000/api/health-data/meal-plan/${updatedPlan._id}`,
          updatedPlan,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const updatedPlans = [...plans];
        updatedPlans[editingIndex] = response.data;
        setPlans(updatedPlans.reverse());
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        const response = await axios.post(
          'http://localhost:5000/api/health-data/meal-plan',
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setPlans([response.data, ...plans]); // Add the new plan at the top
      }
      setForm({
        date: '',
        breakfast: '',
        lunch: '',
        dinner: '',
        snacks: '',
        notes: '',
        done: false,
      });
    } catch (error) {
      console.error('Failed to save meal plan:', error);
    }
  };

  const handleEdit = (index) => {
    setForm(plans[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const token = localStorage.getItem('token');
    const planToDelete = plans[index];

    try {
      await axios.delete(
        `http://localhost:5000/api/health-data/meal-plan/${planToDelete._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedPlans = plans.filter((_, i) => i !== index);
      setPlans(updatedPlans.reverse());
    } catch (error) {
      console.error('Failed to delete meal plan:', error);
    }
  };

  const handleMarkAsDone = async (index) => {
    const token = localStorage.getItem('token');
    const planToUpdate = { ...plans[index], done: true };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/health-data/meal-plan/${planToUpdate._id}`,
        planToUpdate,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedPlans = [...plans];
      updatedPlans[index] = response.data;
      setPlans(updatedPlans.reverse());
    } catch (error) {
      console.error('Failed to update meal plan:', error);
    }
  };

  const handleSeeMore = () => {
    setVisiblePlans(plans.length); // Show all plans
  };

  const handleSeeLess = () => {
    setVisiblePlans(4); // Show only the initial number of plans
  };

  return (
    <div className="daily-meal-plan">
      <form className="plan-form" onSubmit={handleSubmit}>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="text" name="breakfast" value={form.breakfast} onChange={handleChange} placeholder="Breakfast" required />
        <input type="text" name="lunch" value={form.lunch} onChange={handleChange} placeholder="Lunch" required />
        <input type="text" name="dinner" value={form.dinner} onChange={handleChange} placeholder="Dinner" required />
        <input type="text" name="snacks" value={form.snacks} onChange={handleChange} placeholder="Snacks" />
        <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
        <button type="submit">{isEditing ? 'Update' : 'Log'}</button>
      </form>
      <table className="plan-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Snacks</th>
            <th>Notes</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.slice(0, visiblePlans).map((plan, index) => (
            <tr key={index}>
              <td>{new Date(plan.date).toLocaleDateString()}</td>
              <td>{plan.breakfast}</td>
              <td>{plan.lunch}</td>
              <td>{plan.dinner}</td>
              <td>{plan.snacks}</td>
              <td>{plan.notes}</td>
              <td>{plan.done ? <FaCheck style={{ color: 'green' }} /> : 'Pending'}</td>
              <td>
                <FaEdit onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                <FaTrash onClick={() => handleDelete(index)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                {!plan.done && <FaCheck onClick={() => handleMarkAsDone(index)} style={{ cursor: 'pointer' }} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {plans.length > visiblePlans ? (
        <button className="see-more-button" onClick={handleSeeMore}>See More</button>
      ) : plans.length > 4 && (
        <button className="see-more-button" onClick={handleSeeLess}>See Less</button>
      )}
    </div>
  );
};

export default DailyMealPlan;
