import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Ruler, c as Moon, d as Focus, f as Download, i as Send, l as LoaderCircle, o as PanelRightOpen, r as Sun, s as PanelRightClose, t as Upload, u as Layers } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as Cell, i as Bar, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as BarChart } from "../_libs/recharts+[...].mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DVlEAXWB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "id") {
	return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}
function formatPct(n, digits = 1) {
	return `${n.toFixed(digits)}%`;
}
function formatArea(px, gsdMeters) {
	const m2 = px * gsdMeters * gsdMeters;
	if (m2 >= 1e6) return `${(m2 / 1e6).toFixed(2)} km²`;
	if (m2 >= 1e4) return `${(m2 / 1e4).toFixed(2)} ha`;
	return `${Math.round(m2).toLocaleString()} m²`;
}
function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 disabled:pointer-events-none disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-ring/70 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-surface-2",
			ghost: "text-fg hover:bg-secondary",
			outline: "border border-border bg-transparent text-fg hover:bg-secondary"
		},
		size: {
			default: "h-10 px-3.5",
			sm: "h-8 px-2.5 text-xs",
			icon: "size-10",
			"icon-sm": "size-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Badge({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full border border-border bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground", className),
		...props
	});
}
function Separator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-px w-full bg-border", className),
		role: "separator",
		...props
	});
}
function TooltipProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration: 250,
		skipDelayDuration: 80,
		children
	});
}
function Tooltip$1({ content, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root3, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset: 6,
		className: cn("z-50 rounded-md border border-border bg-surface px-2 py-1 text-xs text-fg shadow-md"),
		children: content
	}) })] });
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var analyzeScene = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("40a7b6ccdc9a16182bf9bcfb0181e4808a1567378372e9121ac348c4f1d73ea6"));
var LAND_CLASSES = [
	"water",
	"vegetation",
	"urban",
	"bare",
	"other"
];
var CLASS_META = {
	water: {
		label: "Water",
		hex: "#3d7ca6",
		rgb: [
			61,
			124,
			166
		]
	},
	vegetation: {
		label: "Vegetation",
		hex: "#4a8a5a",
		rgb: [
			74,
			138,
			90
		]
	},
	urban: {
		label: "Built-up",
		hex: "#c4a574",
		rgb: [
			196,
			165,
			116
		]
	},
	bare: {
		label: "Bare soil",
		hex: "#a07a4a",
		rgb: [
			160,
			122,
			74
		]
	},
	other: {
		label: "Other",
		hex: "#6a7270",
		rgb: [
			106,
			114,
			112
		]
	}
};
var CLASS_ID = {
	water: 0,
	vegetation: 1,
	urban: 2,
	bare: 3,
	other: 4
};
function classifyPixel(r, g, b) {
	const sum = r + g + b + 1;
	const max = Math.max(r, g, b);
	const sat = max === 0 ? 0 : (max - Math.min(r, g, b)) / max;
	const ndvi = (g - r) / (g + r + 1);
	const brightness = sum / 3;
	const blueShare = b / sum;
	const redShare = r / sum;
	if (blueShare > .38 && b > r + 12 && b > g - 4 && ndvi < .08) return "water";
	if (ndvi > .1 && g > r + 6 && g > 40) return "vegetation";
	if (redShare > .36 && r > b + 25 && ndvi < .05 && brightness < 170 && sat > .12) {
		if (brightness < 95 && sat < .35) return "water";
		return "bare";
	}
	if (sat < .16 && brightness > 55 && brightness < 210) return "urban";
	if (r > g && g >= b - 8 && ndvi < .08 && sat > .1) return "bare";
	if (ndvi > .04 && g >= r) return "vegetation";
	return "other";
}
function drawToContext(img, maxEdge) {
	const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
	const w = Math.max(8, Math.round(img.naturalWidth * scale));
	const h = Math.max(8, Math.round(img.naturalHeight * scale));
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	ctx.drawImage(img, 0, 0, w, h);
	return {
		canvas,
		ctx
	};
}
async function loadHtmlImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error("Could not load image"));
		img.src = src;
	});
}
async function computeCover(src, maxEdge = 360) {
	const { canvas, ctx } = drawToContext(await loadHtmlImage(src), maxEdge);
	const { width, height } = canvas;
	const data = ctx.getImageData(0, 0, width, height).data;
	const mask = new Uint8Array(width * height);
	const counts = {
		water: 0,
		vegetation: 0,
		urban: 0,
		bare: 0,
		other: 0
	};
	const bins = 16;
	const rHist = new Array(bins).fill(0);
	const gHist = new Array(bins).fill(0);
	const bHist = new Array(bins).fill(0);
	for (let i = 0, p = 0; i < data.length; i += 4, p++) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const cls = classifyPixel(r, g, b);
		mask[p] = CLASS_ID[cls];
		counts[cls] += 1;
		rHist[Math.min(15, r * bins >> 8)] += 1;
		gHist[Math.min(15, g * bins >> 8)] += 1;
		bHist[Math.min(15, b * bins >> 8)] += 1;
	}
	const total = width * height;
	const percents = {};
	for (const c of LAND_CLASSES) percents[c] = counts[c] / total * 100;
	return {
		width,
		height,
		mask,
		counts,
		percents,
		total,
		histogram: {
			bins: Array.from({ length: bins }, (_, i) => i),
			r: rHist,
			g: gHist,
			b: bHist
		}
	};
}
function blobsFromCover(cover, classId, minFrac = .0025, label) {
	const { width: w, height: h, mask } = cover;
	const target = CLASS_ID[classId];
	const visited = new Uint8Array(w * h);
	const minArea = Math.max(12, Math.floor(w * h * minFrac));
	const out = [];
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		const i = y * w + x;
		if (visited[i] || mask[i] !== target) continue;
		let minX = x, maxX = x, minY = y, maxY = y, area = 0;
		const stack = [i];
		visited[i] = 1;
		while (stack.length) {
			const cur = stack.pop();
			const cx = cur % w;
			const cy = cur / w | 0;
			area += 1;
			if (cx < minX) minX = cx;
			if (cx > maxX) maxX = cx;
			if (cy < minY) minY = cy;
			if (cy > maxY) maxY = cy;
			const n = [
				cur - 1,
				cur + 1,
				cur - w,
				cur + w
			];
			for (const ni of n) {
				if (ni < 0 || ni >= w * h || visited[ni]) continue;
				const nx = ni % w;
				if (Math.abs(nx - cx) + Math.abs((ni / w | 0) - cy) !== 1) continue;
				if (mask[ni] !== target) continue;
				visited[ni] = 1;
				stack.push(ni);
			}
		}
		if (area < minArea) continue;
		const bw = maxX - minX + 1;
		const bh = maxY - minY + 1;
		if (bw < 3 || bh < 3) continue;
		out.push({
			id: uid("det"),
			label,
			confidence: Math.min(.93, .55 + area / (w * h) * 8),
			bbox: [
				minX / w,
				minY / h,
				bw / w,
				bh / h
			],
			source: "local"
		});
		if (out.length >= 28) return out;
	}
	return out;
}
function localDetections(cover) {
	return [
		...blobsFromCover(cover, "urban", .008, "building / structure"),
		...blobsFromCover(cover, "water", .008, "water body"),
		...blobsFromCover(cover, "vegetation", .05, "vegetation patch")
	].slice(0, 40);
}
async function computeChange(beforeSrc, afterSrc, maxEdge = 360) {
	const [a, b] = await Promise.all([loadHtmlImage(beforeSrc), loadHtmlImage(afterSrc)]);
	const A = drawToContext(a, maxEdge);
	const B = drawToContext(b, maxEdge);
	const w = Math.min(A.canvas.width, B.canvas.width);
	const h = Math.min(A.canvas.height, B.canvas.height);
	if (A.canvas.width !== w || A.canvas.height !== h) {
		const tmp = document.createElement("canvas");
		tmp.width = w;
		tmp.height = h;
		tmp.getContext("2d").drawImage(A.canvas, 0, 0, w, h);
		A.canvas = tmp;
	}
	if (B.canvas.width !== w || B.canvas.height !== h) {
		const tmp = document.createElement("canvas");
		tmp.width = w;
		tmp.height = h;
		tmp.getContext("2d").drawImage(B.canvas, 0, 0, w, h);
		B.canvas = tmp;
	}
	const da = A.canvas.getContext("2d").getImageData(0, 0, w, h).data;
	const db = B.canvas.getContext("2d").getImageData(0, 0, w, h).data;
	const mask = new Uint8Array(w * h);
	let changed = 0;
	for (let i = 0, p = 0; i < da.length; i += 4, p++) {
		const dr = da[i] - db[i];
		const dg = da[i + 1] - db[i + 1];
		const dbb = da[i + 2] - db[i + 2];
		const mag = Math.sqrt(dr * dr + dg * dg + dbb * dbb);
		if (mag > 42) {
			mask[p] = Math.min(255, mag);
			changed += 1;
		}
	}
	const percent = changed / (w * h) * 100;
	const coverA = await computeCover(beforeSrc, maxEdge);
	const coverB = await computeCover(afterSrc, maxEdge);
	const vegDelta = coverB.percents.vegetation - coverA.percents.vegetation;
	const urbanDelta = coverB.percents.urban - coverA.percents.urban;
	const waterDelta = coverB.percents.water - coverA.percents.water;
	const parts = [];
	if (vegDelta < -4) parts.push(`vegetation down ${Math.abs(vegDelta).toFixed(1)} pts`);
	else if (vegDelta > 4) parts.push(`vegetation up ${vegDelta.toFixed(1)} pts`);
	if (urbanDelta > 3) parts.push(`built-up up ${urbanDelta.toFixed(1)} pts`);
	if (waterDelta > 3) parts.push(`water up ${waterDelta.toFixed(1)} pts`);
	return {
		percent,
		summary: parts.length > 0 ? `${percent.toFixed(1)}% of pixels shifted. ${parts.join("; ")}.` : `${percent.toFixed(1)}% of pixels shifted between the two captures.`,
		regions: blobsFromCover({
			...coverB,
			mask: mask.map((v) => v > 0 ? CLASS_ID.urban : CLASS_ID.other),
			width: w,
			height: h
		}, "urban", .006, "changed region").map((d) => ({
			label: d.label,
			bbox: d.bbox,
			percent: d.confidence * 10
		})),
		mask,
		width: w,
		height: h
	};
}
function coverToSegments(cover) {
	return LAND_CLASSES.filter((c) => c !== "other" || cover.percents[c] > 8).map((c) => ({
		label: CLASS_META[c].label,
		classId: c,
		coveragePct: cover.percents[c],
		color: CLASS_META[c].hex
	}));
}
async function thumbnailDataUrl(src, maxEdge = 768, quality = .72) {
	const { canvas } = drawToContext(await loadHtmlImage(src), maxEdge);
	return canvas.toDataURL("image/jpeg", quality);
}
function paintCoverOverlay(canvas, cover, visible, alpha = .42) {
	const ctx = canvas.getContext("2d");
	if (canvas.width !== cover.width || canvas.height !== cover.height) {
		canvas.width = cover.width;
		canvas.height = cover.height;
	}
	const img = ctx.createImageData(cover.width, cover.height);
	const d = img.data;
	for (let i = 0; i < cover.mask.length; i++) {
		const cls = LAND_CLASSES[cover.mask[i]] ?? "other";
		if (visible[cls] === false) continue;
		if (cls === "other" && visible.other !== true) continue;
		const [r, g, b] = CLASS_META[cls].rgb;
		const o = i * 4;
		d[o] = r;
		d[o + 1] = g;
		d[o + 2] = b;
		d[o + 3] = Math.round(alpha * 255);
	}
	ctx.putImageData(img, 0, 0);
}
function paintChangeOverlay(canvas, change) {
	if (!change.mask || !change.width || !change.height) return;
	const ctx = canvas.getContext("2d");
	canvas.width = change.width;
	canvas.height = change.height;
	const img = ctx.createImageData(change.width, change.height);
	const d = img.data;
	for (let i = 0; i < change.mask.length; i++) {
		const v = change.mask[i];
		if (!v) continue;
		const o = i * 4;
		d[o] = 220;
		d[o + 1] = 70;
		d[o + 2] = 50;
		d[o + 3] = Math.min(200, 50 + v);
	}
	ctx.putImageData(img, 0, 0);
}
function downloadBlob(blob, name) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	URL.revokeObjectURL(url);
}
function exportCsv(analysis) {
	const lines = ["name,value"];
	for (const s of analysis.statistics) lines.push(`"${s.name.replace(/"/g, "\"\"")}","${s.value.replace(/"/g, "\"\"")}"`);
	for (const s of analysis.segments) lines.push(`"coverage ${s.label}","${s.coveragePct.toFixed(2)}%"`);
	downloadBlob(new Blob([lines.join("\n")], { type: "text/csv" }), "satquery-stats.csv");
}
function exportGeoJson(analysis, image) {
	const doc = {
		type: "FeatureCollection",
		features: analysis.detections.map((d) => {
			const [x, y, w, h] = d.bbox;
			const coords = [[
				[x * image.width, y * image.height],
				[(x + w) * image.width, y * image.height],
				[(x + w) * image.width, (y + h) * image.height],
				[x * image.width, (y + h) * image.height],
				[x * image.width, y * image.height]
			]];
			return {
				type: "Feature",
				properties: {
					label: d.label,
					confidence: d.confidence,
					source: d.source
				},
				geometry: {
					type: "Polygon",
					coordinates: coords
				}
			};
		}),
		properties: {
			image: image.name,
			crs: "pixel-space"
		}
	};
	downloadBlob(new Blob([JSON.stringify(doc, null, 2)], { type: "application/geo+json" }), "satquery-detections.geojson");
}
function exportJsonReport(analysis, image) {
	downloadBlob(new Blob([JSON.stringify({
		image: image.name,
		generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		analysis
	}, null, 2)], { type: "application/json" }), "satquery-report.json");
}
function pdfEscape(s) {
	return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E]/g, "?");
}
function exportPdf(analysis, image) {
	const lines = [
		"SatQuery AI report",
		image.name,
		(/* @__PURE__ */ new Date()).toISOString(),
		"",
		analysis.answer.replace(/\s+/g, " ").slice(0, 900),
		"",
		...analysis.statistics.map((s) => `${s.name}: ${s.value}`),
		"",
		...analysis.segments.map((s) => `${s.label}: ${s.coveragePct.toFixed(1)}%`),
		"",
		`${analysis.detections.length} detections`
	];
	const wrapped = [];
	for (const line of lines) {
		const chunks = line.match(/.{1,88}/g) ?? [""];
		wrapped.push(...chunks);
	}
	const content = wrapped.slice(0, 42).map((l, i) => `BT /F1 11 Tf 48 ${760 - i * 16} Td (${pdfEscape(l)}) Tj ET`).join("\n");
	const objects = [
		"1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
		"2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
		"3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj",
		`4 0 obj << /Length ${content.length} >> stream\n${content}\nendstream endobj`,
		"5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj"
	];
	let offset = 9;
	const xref = [0];
	let body = "%PDF-1.4\n";
	for (const obj of objects) {
		xref.push(offset);
		body += obj + "\n";
		offset = body.length;
	}
	const startxref = body.length;
	body += `xref\n0 ${objects.length + 1}\n`;
	body += "0000000000 65535 f \n";
	for (const x of xref.slice(1)) body += `${String(x).padStart(10, "0")} 00000 n \n`;
	body += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF`;
	downloadBlob(new Blob([body], { type: "application/pdf" }), "satquery-report.pdf");
}
async function exportAnnotatedPng(source) {
	source.toBlob((blob) => {
		if (!blob) return;
		downloadBlob(blob, "satquery-annotated.png");
	}, "image/png");
}
var IMAGE_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif"
];
function isTiff(file) {
	const n = file.name.toLowerCase();
	return n.endsWith(".tif") || n.endsWith(".tiff") || n.endsWith(".geotiff") || /tiff/.test(file.type);
}
function isSupportedRaster(file) {
	if (IMAGE_TYPES.includes(file.type) || file.type === "image/tiff" || file.type === "image/tif") return true;
	return /\.(jpe?g|png|webp|gif|tiff?|geotiff)$/i.test(file.name);
}
async function decodeTiff(file) {
	const image = await (await (await import("../_libs/geotiff+[...].mjs").then((n) => n.t)).fromArrayBuffer(await file.arrayBuffer())).getImage();
	const width = image.getWidth();
	const height = image.getHeight();
	const scale = Math.min(1, 2048 / Math.max(width, height));
	const tw = Math.max(1, Math.round(width * scale));
	const th = Math.max(1, Math.round(height * scale));
	const rasters = await image.readRasters({
		width: tw,
		height: th,
		resampleMethod: "nearest",
		interleave: true
	});
	const samples = image.getSamplesPerPixel();
	const canvas = document.createElement("canvas");
	canvas.width = tw;
	canvas.height = th;
	const ctx = canvas.getContext("2d");
	const img = ctx.createImageData(tw, th);
	const n = tw * th;
	let maxV = 1;
	for (let i = 0; i < rasters.length; i++) {
		const v = Number(rasters[i]);
		if (v > maxV) maxV = v;
	}
	const scaleV = maxV > 255 ? 255 / maxV : 1;
	for (let p = 0; p < n; p++) {
		const o = p * samples;
		const r = Number(rasters[o] ?? 0) * scaleV;
		const g = Number(rasters[o + Math.min(1, samples - 1)] ?? r) * scaleV;
		const b = Number(rasters[o + Math.min(2, samples - 1)] ?? r) * scaleV;
		const d = p * 4;
		img.data[d] = r;
		img.data[d + 1] = g;
		img.data[d + 2] = b;
		img.data[d + 3] = 255;
	}
	ctx.putImageData(img, 0, 0);
	return {
		src: canvas.toDataURL("image/jpeg", .9),
		width: tw,
		height: th
	};
}
function imageSize(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve({
			width: img.naturalWidth,
			height: img.naturalHeight
		});
		img.onerror = () => reject(/* @__PURE__ */ new Error("Unsupported or corrupt image"));
		img.src = src;
	});
}
async function rasterFromFile(file) {
	if (!isSupportedRaster(file)) throw new Error("Use JPEG, PNG, WebP, TIFF, or GeoTIFF.");
	if (isTiff(file)) {
		const decoded = await decodeTiff(file);
		return {
			id: uid("img"),
			name: file.name,
			src: decoded.src,
			width: decoded.width,
			height: decoded.height,
			gsdMeters: 1,
			kind: "upload"
		};
	}
	const src = URL.createObjectURL(file);
	const size = await imageSize(src);
	return {
		id: uid("img"),
		name: file.name,
		src,
		width: size.width,
		height: size.height,
		gsdMeters: 1,
		kind: "upload"
	};
}
var SAMPLE_SCENES = [
	{
		name: "Urban core",
		src: "/samples/urban.jpg",
		width: 1600,
		height: 1200,
		gsdMeters: .5,
		kind: "sample",
		note: "Dense rooftops, grid streets, river",
		blurb: "City grid — buildings, roads, parks"
	},
	{
		name: "Farmland mosaic",
		src: "/samples/agriculture.jpg",
		width: 1600,
		height: 1200,
		gsdMeters: 3,
		kind: "sample",
		note: "Crop fields and irrigation",
		blurb: "Agriculture — fields, soil, canals"
	},
	{
		name: "Coastal harbor",
		src: "/samples/coastal.jpg",
		width: 1600,
		height: 1200,
		gsdMeters: 1,
		kind: "sample",
		note: "Water, beach, marina, city edge",
		blurb: "Coast — water, sand, harbor"
	},
	{
		name: "Flood extent",
		src: "/samples/flood.jpg",
		width: 1600,
		height: 1200,
		gsdMeters: 2,
		kind: "sample",
		note: "Muddy inundation over fields",
		blurb: "Disaster — floodwater and sediment"
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
			note: "Before: intact canopy"
		}
	}
];
function slotFromSample(sample) {
	return {
		primary: {
			id: uid("img"),
			name: sample.name,
			src: sample.src,
			width: sample.width,
			height: sample.height,
			gsdMeters: sample.gsdMeters,
			kind: "sample",
			note: sample.note
		},
		before: sample.pair ? {
			id: uid("img"),
			...sample.pair
		} : void 0
	};
}
var PROMPT_GALLERY = [
	{
		label: "Describe the scene",
		text: "Describe this area and what stands out."
	},
	{
		label: "Detect buildings",
		text: "Detect all buildings and report the count."
	},
	{
		label: "Segment water",
		text: "Segment water bodies and give coverage percentage."
	},
	{
		label: "Vegetation cover",
		text: "Calculate the vegetation coverage and estimate forest or crop area."
	},
	{
		label: "Land-cover stats",
		text: "Give land-cover statistics for water, vegetation, built-up, and bare soil."
	},
	{
		label: "Change detection",
		text: "What changed between these two images? Highlight new construction and deforestation."
	},
	{
		label: "Flooded?",
		text: "Is this region flooded? Estimate inundated area."
	},
	{
		label: "Landing sites",
		text: "Find potential open landing sites with low vegetation and few buildings."
	}
];
function ImageViewer({ primary, before, analysis, mode, showDetections, showLabels, showSeg, showChange, classVisibility, measuring, measure, onMeasure, onFitRequest, onPickSample, captureRef }) {
	const viewportRef = (0, import_react.useRef)(null);
	const worldRef = (0, import_react.useRef)(null);
	const overlayRef = (0, import_react.useRef)(null);
	const captureCanvasRef = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(1);
	const [tx, setTx] = (0, import_react.useState)(0);
	const [ty, setTy] = (0, import_react.useState)(0);
	const drag = (0, import_react.useRef)(null);
	const fit = () => {
		const vp = viewportRef.current;
		if (!vp || !primary) return;
		const pad = 24;
		const s = Math.min((vp.clientWidth - pad) / primary.width, (vp.clientHeight - pad) / primary.height);
		setScale(s);
		setTx((vp.clientWidth - primary.width * s) / 2);
		setTy((vp.clientHeight - primary.height * s) / 2);
	};
	(0, import_react.useEffect)(() => {
		fit();
		onFitRequest?.(fit);
		const ro = new ResizeObserver(() => fit());
		if (viewportRef.current) ro.observe(viewportRef.current);
		return () => ro.disconnect();
	}, [primary?.id, mode]);
	(0, import_react.useEffect)(() => {
		const canvas = overlayRef.current;
		if (!canvas || !primary) return;
		canvas.width = primary.width;
		canvas.height = primary.height;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (showSeg && analysis?.cover) {
			const tmp = document.createElement("canvas");
			paintCoverOverlay(tmp, analysis.cover, classVisibility);
			ctx.imageSmoothingEnabled = false;
			ctx.drawImage(tmp, 0, 0, canvas.width, canvas.height);
		}
		if (showChange && analysis?.change?.mask) {
			const tmp = document.createElement("canvas");
			paintChangeOverlay(tmp, analysis.change);
			ctx.drawImage(tmp, 0, 0, canvas.width, canvas.height);
		}
		if (showDetections && analysis) for (const d of analysis.detections) {
			const [x, y, w, h] = d.bbox;
			ctx.strokeStyle = d.source === "model" ? "#9bb8b3" : "#c4a574";
			ctx.lineWidth = Math.max(2, canvas.width / 700);
			ctx.strokeRect(x * canvas.width, y * canvas.height, w * canvas.width, h * canvas.height);
			if (showLabels) {
				const label = `${d.label} ${Math.round(d.confidence * 100)}%`;
				ctx.font = `${Math.max(12, canvas.width / 90)}px IBM Plex Sans, sans-serif`;
				const tw = ctx.measureText(label).width + 10;
				const th = Math.max(16, canvas.width / 70);
				ctx.fillStyle = "rgba(7,9,11,0.82)";
				ctx.fillRect(x * canvas.width, y * canvas.height - th, tw, th);
				ctx.fillStyle = "#e8ebe9";
				ctx.fillText(label, x * canvas.width + 5, y * canvas.height - 5);
			}
		}
		if (analysis?.change?.regions && showChange) {
			ctx.setLineDash([8, 6]);
			ctx.strokeStyle = "#d07058";
			for (const r of analysis.change.regions) {
				const [x, y, w, h] = r.bbox;
				ctx.strokeRect(x * canvas.width, y * canvas.height, w * canvas.width, h * canvas.height);
			}
			ctx.setLineDash([]);
		}
		if (measure.a) {
			ctx.fillStyle = "#9bb8b3";
			const r = Math.max(4, canvas.width / 220);
			ctx.beginPath();
			ctx.arc(measure.a.x * canvas.width, measure.a.y * canvas.height, r, 0, Math.PI * 2);
			ctx.fill();
			if (measure.b) {
				ctx.beginPath();
				ctx.arc(measure.b.x * canvas.width, measure.b.y * canvas.height, r, 0, Math.PI * 2);
				ctx.fill();
				ctx.strokeStyle = "#e8ebe9";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(measure.a.x * canvas.width, measure.a.y * canvas.height);
				ctx.lineTo(measure.b.x * canvas.width, measure.b.y * canvas.height);
				ctx.stroke();
			}
		}
		const cap = captureCanvasRef.current;
		if (cap && primary) {
			cap.width = primary.width;
			cap.height = primary.height;
			const cctx = cap.getContext("2d");
			const img = worldRef.current?.querySelector("img.primary-raster");
			if (img?.complete) {
				cctx.drawImage(img, 0, 0, cap.width, cap.height);
				cctx.drawImage(canvas, 0, 0);
			}
			if (captureRef) captureRef.current = cap;
		}
	}, [
		analysis,
		showDetections,
		showLabels,
		showSeg,
		showChange,
		classVisibility,
		measure,
		primary,
		captureRef
	]);
	const clientToNorm = (clientX, clientY) => {
		const vp = viewportRef.current;
		if (!vp || !primary) return {
			x: 0,
			y: 0
		};
		const rect = vp.getBoundingClientRect();
		const x = (clientX - rect.left - tx) / scale / primary.width;
		const y = (clientY - rect.top - ty) / scale / primary.height;
		return {
			x: clamp(x, 0, 1),
			y: clamp(y, 0, 1)
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: viewportRef,
		className: "relative h-full min-h-[280px] w-full overflow-hidden bg-sidebar",
		onWheel: (e) => {
			e.preventDefault();
			const vp = viewportRef.current;
			if (!vp || !primary) return;
			const rect = vp.getBoundingClientRect();
			const mx = e.clientX - rect.left;
			const my = e.clientY - rect.top;
			const factor = e.deltaY < 0 ? 1.12 : .89;
			const next = clamp(scale * factor, .08, 18);
			const wx = (mx - tx) / scale;
			const wy = (my - ty) / scale;
			setScale(next);
			setTx(mx - wx * next);
			setTy(my - wy * next);
		},
		onPointerDown: (e) => {
			if (e.target.closest("button, a, input, textarea")) return;
			if (measuring && primary) {
				const p = clientToNorm(e.clientX, e.clientY);
				if (!measure.a || measure.b) onMeasure({
					a: p,
					b: null
				});
				else onMeasure({
					a: measure.a,
					b: p
				});
				return;
			}
			if (!primary) return;
			e.currentTarget.setPointerCapture(e.pointerId);
			drag.current = {
				x: e.clientX,
				y: e.clientY,
				tx,
				ty
			};
		},
		onPointerMove: (e) => {
			if (!drag.current) return;
			setTx(drag.current.tx + (e.clientX - drag.current.x));
			setTy(drag.current.ty + (e.clientY - drag.current.y));
		},
		onPointerUp: () => {
			drag.current = null;
		},
		role: "application",
		"aria-label": "Satellite image viewer",
		children: [
			!primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full flex-col items-center justify-center gap-4 overflow-y-auto px-4 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground",
					children: "Drop a satellite image or load a sample scene"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3",
					children: SAMPLE_SCENES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "overflow-hidden rounded-lg border border-border bg-surface text-left hover:border-accent",
						onClick: () => onPickSample?.(s),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.src,
							alt: "",
							className: "aspect-4/3 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium text-fg",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground",
								children: s.blurb
							})]
						})]
					}, s.src))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: worldRef,
				className: "absolute left-0 top-0 origin-top-left will-change-transform",
				style: { transform: `translate(${tx}px, ${ty}px) scale(${scale})` },
				children: mode === "split" && before ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex",
					style: {
						width: primary.width * 2,
						height: primary.height
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: before.src,
						alt: before.name,
						width: primary.width,
						height: primary.height,
						className: "block select-none",
						draggable: false
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: primary.src,
						alt: primary.name,
						width: primary.width,
						height: primary.height,
						className: "primary-raster block select-none",
						draggable: false
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					style: {
						width: primary.width,
						height: primary.height
					},
					children: [
						mode === "before" && before ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: before.src,
							alt: before.name,
							className: "block h-full w-full select-none",
							draggable: false
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: primary.src,
							alt: primary.name,
							className: "primary-raster block h-full w-full select-none",
							draggable: false
						}),
						mode === "blend" && before ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: before.src,
							alt: "",
							className: "absolute inset-0 block h-full w-full select-none opacity-45",
							draggable: false
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: overlayRef,
							className: "pointer-events-none absolute inset-0 h-full w-full"
						})
					]
				})
			}),
			primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: captureCanvasRef,
				className: "hidden"
			}) : null,
			primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-3 left-3 rounded-md border border-border bg-bg/80 px-2 py-1 font-mono text-xs text-muted-foreground",
				children: [
					Math.round(scale * 100),
					"% · ",
					primary.width,
					"×",
					primary.height,
					" · GSD ",
					primary.gsdMeters,
					" m"
				]
			}) : null,
			primary && showSeg && analysis?.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-3 top-3 flex flex-col gap-1 rounded-lg border border-border bg-bg/80 p-2 text-[11px]",
				children: Object.keys(CLASS_META).filter((k) => k !== "other").map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2.5 rounded-sm",
						style: { background: CLASS_META[k].hex }
					}), CLASS_META[k].label]
				}, k))
			}) : null
		]
	});
}
function useTheme() {
	const [light, setLight] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", light);
	}, [light]);
	return {
		light,
		setLight
	};
}
function loadSample(sample, setPrimary, setBefore, setMode, setAnalysis, setMessages) {
	const loaded = slotFromSample(sample);
	setPrimary(loaded.primary);
	setBefore(loaded.before);
	setMode(loaded.before ? "split" : "primary");
	setAnalysis(null);
	setMessages([]);
}
function SatQueryWorkspace() {
	const { light, setLight } = useTheme();
	const [primary, setPrimary] = (0, import_react.useState)();
	const [before, setBefore] = (0, import_react.useState)();
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [analysis, setAnalysis] = (0, import_react.useState)(null);
	const [mode, setMode] = (0, import_react.useState)("primary");
	const [showDetections, setShowDetections] = (0, import_react.useState)(true);
	const [showLabels, setShowLabels] = (0, import_react.useState)(true);
	const [showSeg, setShowSeg] = (0, import_react.useState)(true);
	const [showChange, setShowChange] = (0, import_react.useState)(true);
	const [classVisibility, setClassVisibility] = (0, import_react.useState)({});
	const [measuring, setMeasuring] = (0, import_react.useState)(false);
	const [measure, setMeasure] = (0, import_react.useState)({
		a: null,
		b: null
	});
	const [mobileTab, setMobileTab] = (0, import_react.useState)("scene");
	const [panelOpen, setPanelOpen] = (0, import_react.useState)(true);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const fitRef = (0, import_react.useRef)(() => {});
	const captureRef = (0, import_react.useRef)(null);
	const chatEnd = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const beforeFileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		chatEnd.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, busy]);
	const measureMeters = (0, import_react.useMemo)(() => {
		if (!primary || !measure.a || !measure.b) return null;
		const dx = (measure.b.x - measure.a.x) * primary.width;
		const dy = (measure.b.y - measure.a.y) * primary.height;
		return Math.hypot(dx, dy) * primary.gsdMeters;
	}, [measure, primary]);
	const ingestFiles = (0, import_react.useCallback)(async (files, asBefore = false) => {
		const list = Array.from(files);
		if (list.length === 0) return;
		try {
			if (list.length >= 2) {
				const a = await rasterFromFile(list[0]);
				const b = await rasterFromFile(list[1]);
				setBefore(a);
				setPrimary(b);
				setMode("split");
				toast.message("Loaded a before / after pair");
			} else {
				const slot = await rasterFromFile(list[0]);
				if (asBefore) {
					setBefore(slot);
					toast.message("Before image loaded");
				} else {
					setPrimary(slot);
					toast.message("Scene loaded");
				}
			}
			setAnalysis(null);
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not read file");
		}
	}, []);
	const runQuery = (0, import_react.useCallback)(async (question) => {
		if (!primary) {
			toast.error("Load an image first");
			return;
		}
		const q = question.trim();
		if (!q) return;
		setDraft("");
		const userMsg = {
			id: uid("m"),
			role: "user",
			text: q,
			createdAt: Date.now()
		};
		setMessages((m) => [...m, userMsg]);
		setBusy(true);
		try {
			const cover = await computeCover(primary.src);
			let change;
			if (before) change = await computeChange(before.src, primary.src);
			const localDet = localDetections(cover);
			const local = {
				answer: "",
				intent: before && /change|deforest|new construction/i.test(q) ? "change" : "describe",
				detections: localDet,
				segments: coverToSegments(cover),
				statistics: LAND_CLASSES.map((c) => ({
					name: CLASS_META[c].label,
					value: formatPct(cover.percents[c]),
					hint: formatArea(cover.counts[c] * (primary.width / cover.width) * (primary.height / cover.height), primary.gsdMeters)
				})),
				change,
				cover
			};
			const images = [{
				name: primary.name,
				dataUrl: await thumbnailDataUrl(primary.src),
				role: "primary"
			}];
			if (before) images.unshift({
				name: before.name,
				dataUrl: await thumbnailDataUrl(before.src),
				role: "before"
			});
			const res = await analyzeScene({ data: {
				question: q,
				images,
				history: [...messages, userMsg].map((m) => ({
					role: m.role,
					text: m.text
				})),
				localStats: {
					percents: cover.percents,
					detectionCount: localDet.length,
					changePercent: change?.percent,
					changeSummary: change?.summary
				}
			} });
			let merged = local;
			if (res.ok) merged = {
				...local,
				answer: res.analysis.answer,
				sceneSummary: res.analysis.sceneSummary,
				intent: res.analysis.intent,
				detections: res.analysis.detections.length > 0 ? res.analysis.detections : res.analysis.intent === "detect" ? local.detections : [],
				statistics: res.analysis.statistics.length ? res.analysis.statistics : local.statistics,
				change: res.analysis.change ? {
					...local.change,
					...res.analysis.change,
					mask: local.change?.mask,
					width: local.change?.width,
					height: local.change?.height
				} : local.change
			};
			else merged = {
				...local,
				answer: `${local.change?.summary ?? "Local land-cover analysis complete."} AI commentary is unavailable (${res.error}).`
			};
			setAnalysis(merged);
			setShowSeg(true);
			setShowChange(Boolean(merged.change));
			setMessages((m) => [...m, {
				id: uid("m"),
				role: "assistant",
				text: merged.answer,
				analysis: merged,
				createdAt: Date.now()
			}]);
			setMobileTab("ask");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Analysis failed");
			setMessages((m) => [...m, {
				id: uid("m"),
				role: "assistant",
				text: "Something went wrong while analyzing this scene. Try a shorter question or another image.",
				createdAt: Date.now()
			}]);
		} finally {
			setBusy(false);
		}
	}, [
		before,
		messages,
		primary
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) {
				if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
					e.preventDefault();
					runQuery(draft);
				}
				return;
			}
			if (e.key === "0") fitRef.current();
			if (e.key === "m" || e.key === "M") setMeasuring((v) => !v);
			if (e.key === "d" || e.key === "D") setShowDetections((v) => !v);
			if (e.key === "s" || e.key === "S") setShowSeg((v) => !v);
			if (e.key === "Escape") {
				setMeasuring(false);
				setMeasure({
					a: null,
					b: null
				});
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [draft, runQuery]);
	const chartData = analysis ? analysis.segments.map((s) => ({
		name: s.label,
		pct: Number(s.coveragePct.toFixed(1)),
		fill: s.color
	})) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		onDragOver: (e) => {
			e.preventDefault();
			setDragOver(true);
		},
		onDragLeave: () => setDragOver(false),
		onDrop: (e) => {
			e.preventDefault();
			setDragOver(false);
			ingestFiles(e.dataTransfer.files);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex h-14 shrink-0 items-center gap-3 border-b border-border bg-surface px-3 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-md bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold tracking-tight",
							children: "SatQuery AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden text-[11px] text-muted-foreground sm:block",
							children: "Ask the imagery"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
							content: "Load image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => fileRef.current?.click(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Upload"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
							content: "Fit to view",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								onClick: () => fitRef.current(),
								"aria-label": "Fit",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
							content: "Measure (M)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: measuring ? "default" : "ghost",
								size: "icon-sm",
								onClick: () => setMeasuring((v) => !v),
								"aria-pressed": measuring,
								"aria-label": "Measure",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ruler, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
							content: "Toggle theme",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								onClick: () => setLight(!light),
								"aria-label": "Theme",
								children: light ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon-sm",
							className: "lg:hidden",
							onClick: () => setPanelOpen((v) => !v),
							"aria-label": "Toggle panel",
							children: panelOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightClose, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRightOpen, {})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: cn("flex min-w-0 flex-1 flex-col", mobileTab === "ask" && "hidden lg:flex"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1 border-b border-border bg-surface px-2 py-1.5",
							children: [
								[
									"primary",
									"before",
									"split",
									"blend"
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cn("h-8 rounded-md px-2.5 text-xs capitalize", mode === m ? "bg-secondary text-fg" : "text-muted-foreground hover:text-fg"),
									onClick: () => setMode(m),
									disabled: m !== "primary" && !before,
									children: m === "primary" ? "After / scene" : m
								}, m)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-4 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex h-8 items-center gap-1.5 px-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: showDetections,
										onChange: (e) => setShowDetections(e.target.checked)
									}), "Boxes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex h-8 items-center gap-1.5 px-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: showSeg,
										onChange: (e) => setShowSeg(e.target.checked)
									}), "Cover"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex h-8 items-center gap-1.5 px-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: showChange,
										onChange: (e) => setShowChange(e.target.checked)
									}), "Change"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex h-8 items-center gap-1.5 px-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: showLabels,
										onChange: (e) => setShowLabels(e.target.checked)
									}), "Labels"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-auto hidden items-center gap-1 px-2 text-xs text-muted-foreground sm:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-3.5" }), "overlays"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative min-h-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageViewer, {
								primary,
								before,
								analysis,
								mode,
								showDetections,
								showLabels,
								showSeg,
								showChange,
								classVisibility,
								measuring,
								measure,
								onMeasure: setMeasure,
								onFitRequest: (fn) => {
									fitRef.current = fn;
								},
								onPickSample: (s) => loadSample(s, setPrimary, setBefore, setMode, setAnalysis, setMessages),
								captureRef
							}), dragOver ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center bg-bg/70 text-sm font-medium",
								children: "Drop JPEG, PNG, or GeoTIFF"
							}) : null]
						}),
						measureMeters != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground",
							children: [
								"Distance ",
								measureMeters.toFixed(1),
								" m"
							]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: cn("flex w-full shrink-0 flex-col border-l border-border bg-surface lg:w-[400px]", mobileTab === "scene" ? "hidden lg:flex" : "flex", !panelOpen && "hidden"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 overflow-y-auto px-3 py-3",
						children: !primary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-lg font-semibold tracking-tight",
									children: "Query the planet"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Load a scene, ask in plain language, and get detections, land cover, statistics, and change maps."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex w-full flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-bg px-4 py-8 text-sm text-muted-foreground hover:border-accent hover:text-fg",
									onClick: () => fileRef.current?.click(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5" }),
										"Drop imagery here or browse",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs",
											children: "JPEG, PNG, TIFF, GeoTIFF"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Sample scenes are also on the viewer. For change detection, choose Forest change pair or upload two files."
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium uppercase tracking-wide text-subtle",
									children: "Conversation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 space-y-3",
									children: [
										messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: "Try a prompt below, or type your own question about this scene."
										}) : null,
										messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("rounded-lg px-3 py-2 text-sm leading-relaxed", m.role === "user" ? "bg-secondary" : "bg-bg border border-border"),
											children: m.text
										}, m.id)),
										busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Reading the scene…"]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: chatEnd })
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: PROMPT_GALLERY.filter((p) => before || !/change/i.test(p.text)).slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground hover:text-fg",
										onClick: () => void runQuery(p.text),
										disabled: busy,
										children: p.label
									}, p.label))
								}),
								analysis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-2 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-medium uppercase tracking-wide text-subtle",
												children: "Land cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [analysis.detections.length, " objects"] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
												width: "100%",
												height: "100%",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
													data: chartData,
													margin: {
														top: 4,
														right: 4,
														left: -20,
														bottom: 0
													},
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
															dataKey: "name",
															tick: {
																fill: "currentColor",
																fontSize: 10
															}
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: {
															fill: "currentColor",
															fontSize: 10
														} }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
															background: "var(--color-surface)",
															border: "1px solid var(--color-border)"
														} }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
															dataKey: "pct",
															radius: [
																4,
																4,
																0,
																0
															],
															children: chartData.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: e.fill }, e.name))
														})
													]
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-2 space-y-1",
											children: analysis.statistics.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex justify-between gap-3 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: s.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono tabular-nums",
													children: [s.value, s.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "ml-2 text-subtle",
														children: s.hint
													}) : null]
												})]
											}, s.name))
										}),
										analysis.change ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted-foreground",
											children: analysis.change.summary
										}) : null
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1",
										children: Object.keys(CLASS_META).filter((k) => k !== "other").map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: cn("rounded-full border px-2 py-1 text-[11px]", classVisibility[k] === false ? "border-border text-subtle" : "border-border text-fg"),
											onClick: () => setClassVisibility((v) => ({
												...v,
												[k]: v[k] === false
											})),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mr-1.5 inline-block size-2 rounded-sm",
												style: { background: CLASS_META[k].hex }
											}), CLASS_META[k].label]
										}, k))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: () => analysis && primary && exportCsv(analysis),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " CSV"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: () => analysis && primary && exportGeoJson(analysis, primary),
												children: "GeoJSON"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: () => analysis && primary && exportPdf(analysis, primary),
												children: "PDF"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: () => analysis && primary && exportJsonReport(analysis, primary),
												children: "JSON"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: () => {
													const c = captureRef.current;
													if (c) exportAnnotatedPng(c);
												},
												children: "PNG"
											})
										]
									})
								] }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs text-muted-foreground underline-offset-2 hover:underline",
									onClick: () => beforeFileRef.current?.click(),
									children: "Add a before image for change detection"
								}) })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "border-t border-border p-3",
						onSubmit: (e) => {
							e.preventDefault();
							runQuery(draft);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "ask",
								children: "Ask about the image"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "ask",
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								placeholder: primary ? "Ask about this scene…" : "Load a scene, then ask a question",
								disabled: !primary || busy,
								rows: 3,
								className: "w-full resize-none rounded-lg border border-border bg-bg px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/70 disabled:opacity-50"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-subtle",
									children: "Ctrl+Enter to send"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									size: "sm",
									disabled: !primary || busy || !draft.trim(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), " Ask"]
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "grid grid-cols-2 border-t border-border bg-surface lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: cn("h-12 text-sm", mobileTab === "scene" ? "text-fg" : "text-muted-foreground"),
					onClick: () => setMobileTab("scene"),
					children: "Scene"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: cn("h-12 text-sm", mobileTab === "ask" ? "text-fg" : "text-muted-foreground"),
					onClick: () => setMobileTab("ask"),
					children: "Ask"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: "image/*,.tif,.tiff,.geotiff",
				multiple: true,
				className: "hidden",
				onChange: (e) => {
					if (e.target.files) ingestFiles(e.target.files);
					e.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: beforeFileRef,
				type: "file",
				accept: "image/*,.tif,.tiff,.geotiff",
				className: "hidden",
				onChange: (e) => {
					if (e.target.files) ingestFiles(e.target.files, true);
					e.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, { theme: light ? "light" : "dark" })
		]
	}) });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SatQueryWorkspace, {});
}
//#endregion
export { Home as component };
