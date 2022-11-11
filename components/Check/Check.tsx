import * as React from 'react'
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

export default function Check() {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-check-circle">
            <motion.path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
            </motion.path>
            <motion.polyline points="22 4 12 14.01 9 11.01">
            </motion.polyline>
        </motion.svg>
    )
}
