import React from 'react';
import Lottie from 'lottie-react';

const LottieIcon = ({ animationData, className }) => {
    return (
        <div className={className}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid meet"
                }}
            />
        </div>
    );
};

export default LottieIcon;
