(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/StarCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StarCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function StarCanvas() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarCanvas.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationId;
            const stars = [];
            const resize = {
                "StarCanvas.useEffect.resize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["StarCanvas.useEffect.resize"];
            resize();
            window.addEventListener("resize", resize);
            for(let i = 0; i < 220; i++){
                stars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    radius: Math.random() * 1.4 + 0.2,
                    opacity: Math.random() * 0.7 + 0.3,
                    speed: Math.random() * 0.003 + 0.001,
                    twinkleOffset: Math.random() * Math.PI * 2
                });
            }
            let t = 0;
            const draw = {
                "StarCanvas.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    t += 0.016;
                    for (const star of stars){
                        const twinkle = Math.sin(t * star.speed * 60 + star.twinkleOffset) * 0.3;
                        const opacity = Math.max(0.1, star.opacity + twinkle);
                        ctx.beginPath();
                        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.fill();
                    }
                    animationId = requestAnimationFrame(draw);
                }
            }["StarCanvas.useEffect.draw"];
            draw();
            return ({
                "StarCanvas.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                    window.removeEventListener("resize", resize);
                }
            })["StarCanvas.useEffect"];
        }
    }["StarCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/StarCanvas.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(StarCanvas, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = StarCanvas;
var _c;
__turbopack_context__.k.register(_c, "StarCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/OrbitRing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrbitRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function OrbitRing({ size }) {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitRing.useEffect": ()=>{
            const svg = svgRef.current;
            if (!svg) return;
            const dot = svg.querySelector("#orbit-dot");
            if (!dot) return;
            let frame;
            let angle = 0;
            const r = size / 2 - 6;
            const animate = {
                "OrbitRing.useEffect.animate": ()=>{
                    angle += 0.008;
                    const x = size / 2 + r * Math.cos(angle);
                    const y = size / 2 + r * Math.sin(angle) * 0.38;
                    dot.setAttribute("cx", String(x));
                    dot.setAttribute("cy", String(y));
                    frame = requestAnimationFrame(animate);
                }
            }["OrbitRing.useEffect.animate"];
            animate();
            return ({
                "OrbitRing.useEffect": ()=>cancelAnimationFrame(frame)
            })["OrbitRing.useEffect"];
        }
    }["OrbitRing.useEffect"], [
        size
    ]);
    const r = size / 2 - 6;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        width: size,
        height: size,
        className: "absolute inset-0 pointer-events-none",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: size / 2,
                cy: size / 2,
                rx: r,
                ry: r * 0.38,
                fill: "none",
                stroke: "rgba(99,179,237,0.25)",
                strokeWidth: "1.5",
                strokeDasharray: "4 6"
            }, void 0, false, {
                fileName: "[project]/src/components/OrbitRing.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                id: "orbit-dot",
                r: "4",
                fill: "#38bdf8",
                opacity: "0.9",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                    attributeName: "opacity",
                    values: "0.6;1;0.6",
                    dur: "2s",
                    repeatCount: "indefinite"
                }, void 0, false, {
                    fileName: "[project]/src/components/OrbitRing.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/OrbitRing.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/OrbitRing.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(OrbitRing, "89Ty783ABEwsfMbSOeu9vscWF34=");
_c = OrbitRing;
var _c;
__turbopack_context__.k.register(_c, "OrbitRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0thqw96._.js.map