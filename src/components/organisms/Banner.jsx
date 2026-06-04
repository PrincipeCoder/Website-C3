import { useEffect, useRef } from "react";
import Text from "../atoms/Text";
import Heading from "../atoms/Heading";
import PrimaryButton from "../atoms/PrimaryButton";

const Banner = ({ intetactionUserBtn1, intetactionUserBtn2 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: Math.ceil(columns) }).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0f0";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
            {/* Matrix Background */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-[0.15]"></canvas>

            {/* Scanlines Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-50"></div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0 pointer-events-none"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-6 md:px-20 flex flex-col gap-6 md:gap-8 mt-20 md:mt-0">
                <Text
                    type="gradient"
                    size="2xl"
                    className="font-mono text-center md:text-left text-base md:text-xl lg:text-2xl flex items-center justify-center md:justify-start gap-2"
                >
                    <span className="text-[#8bc34a] font-bold">&gt;_</span>
                    <span className="text-gray-300">LA INTERSECCIÓN ENTRE INNOVACIÓN Y SEGURIDAD</span>
                    <span className="animate-pulse bg-[#8bc34a] w-3 h-6 inline-block"></span>
                </Text>

                <Heading
                    level={1}
                    size={5}
                    className="text-white text-center md:text-left text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-[0_0_15px_rgba(139,195,74,0.3)]"
                >
                    Cultura Digital <br /> Con Impacto <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8bc34a] to-green-400 filter drop-shadow-[0_0_10px_rgba(139,195,74,0.8)]">Social</span>
                </Heading>

                <div className="bg-[#111]/80 border border-green-500/30 p-4 md:p-6 rounded-xl font-mono text-sm md:text-base text-gray-300 max-w-2xl mx-auto md:mx-0 shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm">
                    <p className="mb-2"><span className="text-[#8bc34a]">$</span> <span className="text-blue-400">root@c3</span>:<span className="text-purple-400">~</span># ./join_community.sh --ethic --resilient</p>
                    <p className="text-gray-400 leading-relaxed">
                        Únete como miembro o aliado estratégico para construir una comunidad digital más consciente, ética y resiliente en el Perú.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-4 items-center md:items-start">
                    <PrimaryButton
                        onClick={intetactionUserBtn1}
                        text="[ CONÓCENOS ]"
                        className="w-full md:w-auto px-10 py-4 font-mono shadow-[0_0_15px_rgba(139,195,74,0.3)] hover:shadow-[0_0_25px_rgba(139,195,74,0.6)] hover:-translate-y-1 transition-all duration-300 border border-[#8bc34a] bg-[#8bc34a]/10 text-[#8bc34a] hover:bg-[#8bc34a] hover:text-black"
                    />
                    <PrimaryButton
                        onClick={intetactionUserBtn2}
                        text="[ COLABORA ]"
                        className="w-full md:w-auto px-10 py-4 font-mono border border-gray-600 bg-black/60 text-gray-300 hover:border-[#8bc34a] hover:text-[#8bc34a] hover:shadow-[0_0_15px_rgba(139,195,74,0.2)] transition-all duration-300 backdrop-blur-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;