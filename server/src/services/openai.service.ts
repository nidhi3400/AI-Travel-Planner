import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

type GenerateTripInput = {
  budget: number;
  duration: number;
  sourceCity: string;
  interests: string[];
  destinationCity?: string;
  aiDestination?: boolean;
};

export async function generateTrip(
  data: GenerateTripInput
) {
  let destinationInstruction = "";

  if (
    data.aiDestination === false &&
    data.destinationCity
  ) {
    destinationInstruction = `
Destination City: ${data.destinationCity}

IMPORTANT:
Use this destination.
Do not suggest another destination.
`;
  } else {
    destinationInstruction = `
IMPORTANT:
Suggest the most suitable destination
based on budget, duration and interests.
`;
  }

  const prompt = `
You are an expert travel planner.

Create a realistic travel itinerary.

Budget: ₹${data.budget}
Duration: ${data.duration} days
Source City: ${data.sourceCity}
Interests: ${data.interests.join(", ")}

${destinationInstruction}

Rules:
1. Destination must fit within the user's budget.
2. Estimated cost should be realistic.
3. Generate EXACTLY ${data.duration} days.
4. Each day must contain 3-5 meaningful activities.
5. Activities should match the user's interests.
6. Include local attractions, food recommendations, and experiences.
7. Return ONLY valid JSON.
8. Do not include markdown, explanations, or code blocks.

JSON Format:

{
  "destination": "string",
  "estimatedCost": number,
  "itinerary": [
    {
      "day": 1,
      "activities": [
        "Activity 1",
        "Activity 2",
        "Activity 3"
      ]
    }
  ]
}

IMPORTANT:
The itinerary array length MUST equal ${data.duration}.
If duration is ${data.duration}, generate exactly ${data.duration} day objects.
`;

  const response =
    await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.7,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      response_format: {
        type: "json_object",
      },
    });

  return JSON.parse(
    response.choices[0].message.content || "{}"
  );
}