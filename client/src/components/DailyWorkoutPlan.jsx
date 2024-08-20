import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import axios from 'axios';
// import './DailyWorkoutPlan.css';

const DailyWorkoutPlan = () => {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({
    date: '',
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
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
        const response = await axios.get('http://localhost:5000/api/workout-plans', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPlans(response.data.reverse()); // Show recent plans at the top
      } catch (error) {
        console.error('Failed to fetch workout plans:', error);
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
          `http://localhost:5000/api/workout-plans/${updatedPlan._id}`,
          updatedPlan,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const updatedPlans = [...plans];
        updatedPlans[editingIndex] = response.data;
        setPlans(updatedPlans); // Maintain the order
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        const response = await axios.post(
          'http://localhost:5000/api/workout-plans',
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setPlans([response.data, ...plans]); // Add the new plan at the top
      }
      setForm({
        date: '',
        exercise: '',
        sets: '',
        reps: '',
        weight: '',
        notes: '',
        done: false,
      });
    } catch (error) {
      console.error('Failed to save workout plan:', error);
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
        `http://localhost:5000/api/workout-plans/${planToDelete._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedPlans = plans.filter((_, i) => i !== index);
      setPlans(updatedPlans);
    } catch (error) {
      console.error('Failed to delete workout plan:', error);
    }
  };

  const handleMarkAsDone = async (index) => {
    const token = localStorage.getItem('token');
    const planToUpdate = { ...plans[index], done: true };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/workout-plans/${planToUpdate._id}`,
        planToUpdate,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const updatedPlans = [...plans];
      updatedPlans[index] = response.data;
      setPlans(updatedPlans);
    } catch (error) {
      console.error('Failed to update workout plan:', error);
    }
  };

  const handleSeeMore = () => {
    setVisiblePlans(plans.length); // Show all plans
  };

  const handleSeeLess = () => {
    setVisiblePlans(4); // Show only the initial number of plans
  };

  return (
    <div className="daily-workout-plan">
      <form className="plan-form" onSubmit={handleSubmit}>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="text" name="exercise" value={form.exercise} onChange={handleChange} placeholder="Exercise" required />
        <input type="number" name="sets" value={form.sets} onChange={handleChange} placeholder="Sets" required />
        <input type="number" name="reps" value={form.reps} onChange={handleChange} placeholder="Reps" required />
        <input type="number" name="weight" value={form.weight} onChange={handleChange} placeholder="Weight" required />
        <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Notes" />
        <button type="submit">{isEditing ? 'Update' : 'Log'}</button>
      </form>
      <table className="plan-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Notes</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.slice(0, visiblePlans).map((plan, index) => (
            <tr key={index}>
              <td>{new Date(plan.date).toLocaleDateString()}</td>
              <td>{plan.exercise}</td>
              <td>{plan.sets}</td>
              <td>{plan.reps}</td>
              <td>{plan.weight}</td>
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

export default DailyWorkoutPlan;
