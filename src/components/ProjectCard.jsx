export default function ProjectCard({
  type,
  title,
  excerpt,
  tags,
  isNDA,
  onClick,
  image
}) {
  return (
    <div className="pcard" onClick={onClick}>

      {/* Image Section */}
     <div className="pcard-vis">
  {image && <img src={image} alt={title} />}
</div>

      {/* Card Body */}
      <div className="pcard-body">

        <div className="pcard-type">
          {type}
          {isNDA && <span className="nda-badge">🔒 NDA</span>}
        </div>

        <div className="pcard-title">
          {title}
        </div>

        <div className="pcard-excerpt">
          {excerpt}
        </div>

        <div className="pcard-tags">
          {tags.map((tag, index) => (
            <span key={index} className="ptag">
              {tag}
            </span>
          ))}
        </div>

      </div>

      <div className="pcard-arrow">→</div>

    </div>
  );
}