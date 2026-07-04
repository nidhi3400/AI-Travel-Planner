import { useState } from "react";
import { generateTrip } from "../api/tripApi";
import "../styles/TripForm.css";
import type { Trip } from "../types/trip";

interface TripFormProps {
  onResult: (trip: Trip) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
}

export default function TripForm({
  onResult,
  loading,
  setLoading,
}: TripFormProps) {

  const [formData, setFormData] =
    useState({
      sourceCity: "",
      destinationCity: "",
      budget: "",
      duration: "",
      interests: "",
      aiDestination: true,
    });

  const [errorMessage, setErrorMessage] =
  useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

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
    } catch (error: unknown) {
      const err = error as { response?: { status: number; data: { message: string } } };
      console.error(error);
      if (
    err?.response?.status === 409
  ) {
    setErrorMessage(
      err?.response.data.message
    );
  } else {
    setErrorMessage(
      "Failed to generate trip"
    );
  }
    } finally {
      setLoading?.(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="trip-form"
    >
      {errorMessage && (
        <div className="warning-message">
          ⚠️ {errorMessage}
        </div>
      )}
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
          placeholder="Eg. Coffee, Mountains, Food"
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
        disabled={loading}
      >
        Generate Trip
      </button>
    </form>
  );
}