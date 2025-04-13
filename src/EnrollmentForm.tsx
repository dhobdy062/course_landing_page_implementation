import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function EnrollmentForm({ onComplete }: { onComplete: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });

  const createEnrollment = useMutation(api.enrollments.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEnrollment(formData);
      onComplete();
    } catch (error) {
      console.error("Error creating enrollment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="enrollment-form">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          required
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
        />
      </div>
      <button type="submit" className="button button-primary">
        Continue to Payment
      </button>
    </form>
  );
}
