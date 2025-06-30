

import { motion } from 'framer-motion';

function FramerMotion() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-64 h-32 bg-blue-500 rounded-lg shadow-lg"
        >
            <p className="text-white text-center pt-10">I'm a box</p>
        </motion.div>
        </div>
    );
}

export default FramerMotion;