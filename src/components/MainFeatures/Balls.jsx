const Ball = ({ ballStyles }) => {
    return (
        <div
            style={{
                borderRadius: '50%',
                background: '#DFE5FD',
                border: '2px solid #DFE5FD',
                position: 'absolute',
                ...ballStyles,
            }}
        ></div>
    );
};

const Balls = () => {
    return (
        <>
            <Ball
                ballStyles={{
                    width: '60px',
                    height: '60px',
                    top: '65%',
                    left: '10%',
                }}
            />
            <Ball
                ballStyles={{
                    width: '40px',
                    height: '40px',
                    top: '64%',
                    left: '12.5%',
                    background: 'transparent',
                }}
            />
        </>
    );
};

export default Balls;
