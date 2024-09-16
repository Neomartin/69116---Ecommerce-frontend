import ProductGallery from "../../components/product-gallery/ProductGallery";

export default function Home() {

  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images7.alphacoders.com/133/1330715.png" className="d-block w-100" alt="https://images7.alphacoders.com/133/1330715.png" />
    </div>
    <div className="carousel-item">
      <img src="https://images7.alphacoders.com/133/1330715.png" className="d-block w-100" alt="https://images7.alphacoders.com/133/1330715.png"/>
    </div>
    <div className="carousel-item">
      <img src="https://images7.alphacoders.com/133/1330715.png" className="d-block w-100" alt="https://images7.alphacoders.com/133/1330715.png"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      {/* #Sección de productos */}
      <ProductGallery />

    </>
  )
}
