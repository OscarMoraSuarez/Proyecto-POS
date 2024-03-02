
export const Card = ({codigo,imagePath,descripcion}) => {
    console.log(`codigo:${codigo}`,`imagenPath:${imagePath}`,`descripcion:${imagePath}`)
    return (
        <>
            <div className="col-sm-12 col-md-5 col-lg-4">
                <div className="card text-white mt-5 border border-success border-2">
                    <div className="card-header bg-dark">
                        {descripcion}
                    </div>
                    <img src={imagePath} className="card-img-top img-fluid mt-2" alt="Imagen del producto" style={{ maxHeight: '200px', objectFit: 'contain' }} />
                    <div className="card-body">
                        <h5 className="card-title">{codigo}</h5>
                        <a href=""><button className="btn btn-success">Detalles</button></a>
                    </div>
                </div>
            </div>

        </>
    );
};