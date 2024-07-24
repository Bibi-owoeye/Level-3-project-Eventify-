import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <section className="banner-section">
        <div>
          <p className="banner-text font-bold">Upload Image</p>
          <input type="file" className="banner-input" />
          <p className="banner-subtext">Feature Image Must Be Atleast 1170 pixels wide by 504 pixels high.</p>
          <p className="banner-subtext">Valid File Formats: JPG, GIF, PNG</p>
        </div>
        <div className="banner-button-group">
          <button type="button" className="btn-secondary">Go Back To Event Edit</button>
          <button type="button" className="btn-primary">Save & Continue</button>
        </div>
      </section>
    </div>
  );
}

export default Banner;
