/**
 * Display labels for `Lesson.category` filter keys. Topic pages show filter
 * chips only for categories actually present on that topic's lessons, in
 * this order — adding a category here plus tagging lessons with it is all a
 * new filter needs.
 */
export const LESSON_CATEGORY_LABELS: Record<string, string> = {
  // Airport
  "check-in": "Check-in",
  tsa: "TSA",
  boarding: "Boarding",
  plane: "On the plane",
  delay: "Delay",
  baggage: "Baggage",
  // Nails
  consultation: "Consultation",
  appointment: "Appointment",
  manicure: "Manicure",
  pedicure: "Pedicure",
  gel: "Gel",
  acrylic: "Acrylic",
  "gel-x": "Gel-X",
  upsell: "Upsell",
  concerns: "Customer concerns",
  "small-talk": "Small talk",
  checkout: "Checkout",
};

const ORDER = Object.keys(LESSON_CATEGORY_LABELS);

export function sortCategories(keys: string[]): string[] {
  return [...keys].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
}
