import { useMutation } from "@tanstack/react-query";

import { generateTrip } from "../api/tripApi";

export function useGenerateTrip() {
 return useMutation({
   mutationFn: generateTrip
 });
}