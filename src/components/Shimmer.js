
const CardShimmer = () => {
    return (
        <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
        </div>
    );
}

const Shimmer = () => {
    return (
        <div className="shimmer-wrapper" data-testid="shimmer">
            {
                [...Array(10)].map((_, index) => (
                    <CardShimmer key={index} />
                ))
            }
        </div>
    );
}

    
export default Shimmer;