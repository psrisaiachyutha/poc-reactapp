import './Avatar.css'

function Avatar({ src, alt, imageSize, size, borderRadius }) {
    const styles = { 
        height : size, 
        borderRadius : borderRadius, 
        width: size,
        backgroundColor: '#0E336A0A' // TODO: need to be modified again
    };
    
    return (
        <div style={styles}
            className="avatar-container "
            >
            <img
                src={src}
                alt={alt}
                height={imageSize}
                width={imageSize}
                className="avatar"
            />
        </div>
    );
}

export default Avatar;