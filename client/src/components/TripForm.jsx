import { useState } from "react";
import { generateTrip } from "../api/tripApi";
import "../styles/TripForm.css";

export default function TripForm({
  onResult,
  setLoading,
}) {
  const [formData, setFormData] =
    useState({
      sourceCity: "",
      destinationCity: "",
      budget: "",
      duration: "",
      interests: "",
      aiDestination: true,
    });

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading?.(true);

      const response =
        await generateTrip({
          sourceCity:
            formData.sourceCity,

          destinationCity:
            formData.aiDestination
              ? undefined
              : formData.destinationCity,

          budget:
            Number(
              formData.budget
            ),

          duration:
            Number(
              formData.duration
            ),

          interests:
            formData.interests
              .split(",")
              .map((i) =>
                i.trim()
              ),

          aiDestination:
            formData.aiDestination,
        });

      onResult(
        response.data
      );
    } catch (error) {
      console.error(error);
      alert(
        "Failed to generate trip"
      );
    } finally {
      setLoading?.(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="trip-form"
    >
      <div className="form-group">
        <label>
          Source City
        </label>

        <input
          name="sourceCity"
          value={
            formData.sourceCity
          }
          onChange={
            handleChange
          }
          required
        />
      </div>

      <div className="form-group">
        <label>
          Destination Mode
        </label>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              checked={
                formData.aiDestination
              }
              onChange={() =>
                setFormData(
                  (prev) => ({
                    ...prev,
                    aiDestination:
                      true,
                  })
                )
              }
            />
            Let AI Suggest
          </label>

          <label>
            <input
              type="radio"
              checked={
                !formData.aiDestination
              }
              onChange={() =>
                setFormData(
                  (prev) => ({
                    ...prev,
                    aiDestination:
                      false,
                  })
                )
              }
            />
            I Know Destination
          </label>
        </div>
      </div>

      {!formData.aiDestination && (
        <div className="form-group">
          <label>
            Destination City
          </label>

          <input
            name="destinationCity"
            value={
              formData.destinationCity
            }
            onChange={
              handleChange
            }
            required
          />
        </div>
      )}

      <div className="form-group">
        <label>
          Budget (₹)
        </label>

        <input
          type="number"
          name="budget"
          value={
            formData.budget
          }
          onChange={
            handleChange
          }
          required
        />
      </div>

      <div className="form-group">
        <label>
          Duration (Days)
        </label>

        <input
          type="number"
          name="duration"
          value={
            formData.duration
          }
          onChange={
            handleChange
          }
          required
        />
      </div>

      <div className="form-group">
        <label>
          Interests
        </label>

        <input
          name="interests"
          placeholder="Coffee, Mountains, Food"
          value={
            formData.interests
          }
          onChange={
            handleChange
          }
          required
        />
      </div>

      <button
        type="submit"
        className="generate-btn"
      >
        Generate Trip
      </button>
    </form>
  );
}