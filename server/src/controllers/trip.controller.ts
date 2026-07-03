import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { generateTrip } from "../services/openai.service";
import { validateTripResponse } from "../utils/validateTrip";

export async function createTrip(
  req: Request,
  res: Response
) {
  try {
    const {
      budget,
      duration,
      sourceCity,
      interests,
    } = req.body;

    const searchKey = [
  sourceCity.toLowerCase(),

  (
    req.body.destinationCity ||
    "AI"
  ).toLowerCase(),

  duration,
  budget,

  [...interests]
    .map((i: string) =>
      i.trim().toLowerCase()
    )
    .sort()
    .join(","),
].join("-");

    const existingTrip =
      await prisma.trip.findUnique({
        where: {
          searchKey,
        },
      });

    if (existingTrip) {
      return res.json({
        success: true,
        duplicate: true,
        tripId: existingTrip.id,
        data: existingTrip.itinerary,
      });
    }

    const aiResponse =
      await generateTrip(req.body);

    const trip =
      validateTripResponse(
        aiResponse
      );

    const savedTrip =
      await prisma.trip.create({
        data: {
          budget,
          duration,
          sourceCity,
          interests,

          destination:
            trip.destination,

          estimatedCost:
            trip.estimatedCost ||
            budget,

          itinerary: trip,

          searchKey,
        },
      });

    return res.json({
      success: true,
      tripId: savedTrip.id,
      data: trip,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to generate trip",
    });
  }
}

export async function getTrips(
  req: Request,
  res: Response
) {
  try {
    const trips = await prisma.trip.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(trips);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch trips",
    });
  }
}