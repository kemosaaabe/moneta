const Ball = ({ ballStyles }) => {
    return (
        <div
            style={{
                borderRadius: '50%',
                background: '#DFE5FD',
                border: '2px solid #DFE5FD',
                position: 'absolute',
                zIndex: '1',
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
            <Ball
                ballStyles={{
                    width: '48px',
                    height: '48px',
                    top: '77%',
                    left: '25.5%',
                }}
            />
            <Ball
                ballStyles={{
                    width: '21px',
                    height: '21px',
                    top: '91.5%',
                    left: '38.5%',
                }}
            />
            <Ball
                ballStyles={{
                    width: '27px',
                    height: '27px',
                    top: '63.5%',
                    left: '37.5%',
                }}
            />
            <Ball
                ballStyles={{
                    width: '30px',
                    height: '30px',
                    top: '54.5%',
                    left: '26.5%',
                    background: 'transparent',
                }}
            />
            <Ball
                ballStyles={{
                    width: '35px',
                    height: '35px',
                    top: '68.5%',
                    right: '26.5%',
                    background: 'transparent',
                }}
            />
            <Ball
                ballStyles={{
                    width: '27px',
                    height: '27px',
                    top: '15.5%',
                    left: '20.5%',
                }}
            />
            <Ball
                ballStyles={{
                    width: '50px',
                    height: '50px',
                    top: '17.3%',
                    left: '55.3%',
                }}
            />
            <Ball
                ballStyles={{
                    width: '15px',
                    height: '15px',
                    top: '18.3%',
                    right: '10%',
                    background:
                        'linear-gradient(135deg, #FFFFFF 0%, #0029EA 100%)',
                    boxShadow: `7px -7px 14px rgba(171, 171, 171, 0.1), 2px 7px 18px rgba(171, 171, 171, 0.6), 
                    inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(171, 171, 171, 0.4)`,
                    border: 'none',
                }}
            />
            <Ball
                ballStyles={{
                    width: '15px',
                    height: '15px',
                    top: '73.3%',
                    right: '11%',
                    background:
                        'linear-gradient(135deg, #FFFFFF 0%, #0029EA 100%)',
                    boxShadow: `7px -7px 14px rgba(171, 171, 171, 0.1), 2px 7px 18px rgba(171, 171, 171, 0.6), 
                    inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(171, 171, 171, 0.4)`,
                    border: 'none',
                }}
            />
        </>
    );
};

export default Balls;
