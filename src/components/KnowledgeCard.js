import './KnowledgeCard.css'
import Avatar from './Avatar';

function KnowledgeCard({ cardInfo, avatarInfo }) {
    
    return (
        <div className="col knowledge-card">
            <Avatar 
                src={avatarInfo.src} 
                alt={avatarInfo.altName}
                imageSize={avatarInfo.imageSize} 
                size={avatarInfo.size} 
                borderRadius={avatarInfo.borderRadius}
            />
          
            <span style={{ fontSize: cardInfo.fontSize }}>{cardInfo.text}</span>
        </div>
    );
}

export default KnowledgeCard;