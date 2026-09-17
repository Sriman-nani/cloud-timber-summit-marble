import type { RasterSlot } from "./types";
import { uid } from "./utils";

export const SAMPLE_SCENES: Array<
  Omit<RasterSlot, "id"> & { pair?: Omit<RasterSlot, "id">; blurb: string }
> = [
  {
    name: "Urban core",
    src: "/samples/urban.jpg",
    width: 1600,
    height: 1200,
    gsdMeters: 0.5,
    kind: "sample",
    note: "Dense rooftops, grid streets, river",
    blurb: "City grid — buildings, roads, parks",
  },
  {
    name: "Farmland mosaic",
    src: "/samples/agriculture.jpg",
    width: 1600,
    height: 1200,
    gsdMeters: 3,
    kind: "sample",
    note: "Crop fields and irrigation",
    blurb: "Agriculture — fields, soil, canals",
  },
  {
    name: "Coastal harbor",
    src: "/samples/coastal.jpg",
    width: 1600,
    height: 1200,
    gsdMeters: 1,
    kind: "sample",
    note: "Water, beach, marina, city edge",
    blurb: "Coast — water, sand, harbor",
  },
  {
    name: "Flood extent",
    src: "/samples/flood.jpg",
    width: 1600,
    height: 1200,
    gsdMeters: 2,
    kind: "sample",
    note: "Muddy inundation over fields",
    blurb: "Disaster — floodwater and sediment",
  },
  {
    name: "Forest change pair",
    src: "/samples/forest-after.jpg",
    width: 1600,
    height: 1200,
    gsdMeters: 2,
    kind: "sample",
    note: "After: clearing and new construction",
    blurb: "Change detection — forest to clearing",
    pair: {
      name: "Forest (before)",
      src: "/samples/forest-before.jpg",
      width: 1600,
      height: 1200,
      gsdMeters: 2,
      kind: "sample",
      note: "Before: intact canopy",
    },
  },
];

export function slotFromSample(
  sample: (typeof SAMPLE_SCENES)[number],
): { primary: RasterSlot; before?: RasterSlot } {
  const primary: RasterSlot = {
    id: uid("img"),
    name: sample.name,
    src: sample.src,
    width: sample.width,
    height: sample.height,
    gsdMeters: sample.gsdMeters,
    kind: "sample",
    note: sample.note,
  };
  const before = sample.pair
    ? {
        id: uid("img"),
        ...sample.pair,
      }
    : undefined;
  return { primary, before };
}

export const PROMPT_GALLERY = [
  { label: "Describe the scene", text: "Describe this area and what stands out." },
  { label: "Detect buildings", text: "Detect all buildings and report the count." },
  { label: "Segment water", text: "Segment water bodies and give coverage percentage." },
  { label: "Vegetation cover", text: "Calculate the vegetation coverage and estimate forest or crop area." },
  { label: "Land-cover stats", text: "Give land-cover statistics for water, vegetation, built-up, and bare soil." },
  { label: "Change detection", text: "What changed between these two images? Highlight new construction and deforestation." },
  { label: "Flooded?", text: "Is this region flooded? Estimate inundated area." },
  { label: "Landing sites", text: "Find potential open landing sites with low vegetation and few buildings." },
];
