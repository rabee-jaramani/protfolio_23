import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor(props) {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });


    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "#60d2ff",
            mixBlendMode: "multiply"
        }
    }

    return (
        <div>
            <motion.div
                className='cursor'
                variants={variants}
                animate={props.cursorVariant}
            />
        </div>
    )
}
