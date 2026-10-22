// Image manifest: only list photos confirmed to depict the actual advertised truck.
// Place verified images at static/vehicles/<vehicle-id>/cover.webp and set the path here.
// Do not use generic stock photos or unverified image URLs.
export const vehicleImages: Record<string, { cover: string; gallery?: string[]; credit?: string }> = {};
