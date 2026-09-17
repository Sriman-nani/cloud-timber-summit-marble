import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analyze-Bxyv29Qr.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function extractJson(text) {
	const start = text.indexOf("{");
	const end = text.lastIndexOf("}");
	if (start < 0 || end <= start) return null;
	try {
		return JSON.parse(text.slice(start, end + 1));
	} catch {
		return null;
	}
}
var analyzeScene_createServerFn_handler = createServerRpc({
	id: "40a7b6ccdc9a16182bf9bcfb0181e4808a1567378372e9121ac348c4f1d73ea6",
	name: "analyzeScene",
	filename: "src/lib/analyze.ts"
}, (opts) => analyzeScene.__executeServer(opts));
var analyzeScene = createServerFn({ method: "POST" }).validator((input) => input).handler(analyzeScene_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment"
	};
	const system = `You are SatQuery AI, an Earth-observation analyst. Reply with ONLY compact JSON:
{
  "answer": "plain language answer (2-6 sentences)",
  "sceneSummary": "one line",
  "intent": "detect" | "segment" | "stats" | "change" | "describe",
  "detections": [{"id":"d1","label":"building","confidence":0.86,"bbox":[0.1,0.2,0.05,0.08]}],
  "segments": [{"label":"vegetation","coveragePct":34.2,"color":"#4a8a5a"}],
  "statistics": [{"name":"Building count","value":"42","hint":"optional"}],
  "change": {"percent":12.4,"summary":"...","regions":[{"label":"clearing","bbox":[0.2,0.3,0.1,0.1]}]}
}
bbox is normalized [x,y,width,height] from the top-left of the PRIMARY image.
Use the client-computed land cover as a prior; do not invent wildly different percentages.
Prefer fewer, high-quality detections (max 24). If two images, first is BEFORE and second is AFTER.
No markdown.`;
	const content = [];
	for (const img of data.images) content.push({
		type: "image_url",
		image_url: {
			url: img.dataUrl,
			detail: "high"
		}
	});
	const historyBlock = data.history.slice(-6).map((m) => `${m.role}: ${m.text}`).join("\n");
	content.push({
		type: "text",
		text: `Image names: ${data.images.map((i) => `${i.role}=${i.name}`).join(", ")}
Client land cover %: ${JSON.stringify(data.localStats.percents)}
Local object proposals: ${data.localStats.detectionCount}
${data.localStats.changePercent != null ? `Pixel change: ${data.localStats.changePercent.toFixed(1)}%. ${data.localStats.changeSummary ?? ""}` : "Single image (no before pair)."}
Prior turns:
${historyBlock || "(none)"}
User question: ${data.question}`
	});
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .2,
			max_tokens: 1800,
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	const text = (await res.json()).choices?.[0]?.message?.content ?? "";
	const parsed = extractJson(text);
	if (!parsed?.answer) return {
		ok: true,
		analysis: {
			answer: text.slice(0, 1200) || "The model returned an empty response.",
			intent: "describe",
			detections: [],
			segments: [],
			statistics: []
		}
	};
	const detections = Array.isArray(parsed.detections) ? parsed.detections.filter((d) => Array.isArray(d.bbox) && d.bbox.length === 4).slice(0, 24).map((d, i) => ({
		id: d.id || `m${i}`,
		label: String(d.label || "object"),
		confidence: Number(d.confidence ?? .7),
		bbox: d.bbox,
		source: "model"
	})) : [];
	return {
		ok: true,
		analysis: {
			answer: String(parsed.answer),
			sceneSummary: parsed.sceneSummary ? String(parsed.sceneSummary) : void 0,
			intent: parsed.intent ?? "describe",
			detections,
			segments: Array.isArray(parsed.segments) ? parsed.segments.slice(0, 8) : [],
			statistics: Array.isArray(parsed.statistics) ? parsed.statistics.slice(0, 12) : [],
			change: parsed.change
		}
	};
});
//#endregion
export { analyzeScene_createServerFn_handler };
