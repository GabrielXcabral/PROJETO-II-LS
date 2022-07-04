function Arte({ arte }) {
  return (
    <article>
      <div className="card">
        <img src={arte.image} 
        className="card-img-top" 
        alt="..." />
        <div className="card-body">
          <h5 className="card-title">{arte.name}</h5>
        </div>
        <a href='../../teste.html' id='btn' class="btn third"><i class="bi bi-bag-fill"></i></a>
      </div>
    </article>
  );
} // Gerando dinamicamente

export default Arte;
