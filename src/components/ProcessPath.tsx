// Adapted from Skiper UI #19, SVG Follow Scroll, by @gurvinder-singh02.
// https://skiper-ui.com/v1/skiper19 | Original inspiration: https://comgio.ai/
// Free version requires attribution, provided in the footer and THIRD_PARTY.md.
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
export default function ProcessPath({calm=false}:{calm?:boolean}){
 const ref=useRef<HTMLDivElement>(null);
 const {scrollYProgress}=useScroll({target:ref,offset:['start end','end center']});
 const pathLength=useTransform(scrollYProgress,[0,1],[0,1]);
 const reduce=useReducedMotion();
 return <div ref={ref} className="process-path"><svg viewBox="0 0 600 80" fill="none" aria-hidden="true"><path d="M10 40H180L210 15H390L420 40H590" stroke="currentColor" opacity=".2"/><motion.path d="M10 40H180L210 15H390L420 40H590" stroke="currentColor" strokeWidth="2" style={{pathLength:reduce||calm?1:pathLength}}/></svg><div><span>Video input</span><span>Pose estimation</span><span>Phase feedback</span></div></div>;
}
