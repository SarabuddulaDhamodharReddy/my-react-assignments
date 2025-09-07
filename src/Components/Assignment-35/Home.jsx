
function Home() {
  return (
    <div className='body'>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5">
            <div className="col">
                <div className="card rounded-4 h-100">
                    <img className="w-100" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQR5xDHI4VTaIGAZtlo1yalVlzQ-ZbcZBiSog1oJn2wqVUE3hSTjTaNKYiR9ntfmn7jGrZ5kaAs-e48J2FsXlZvBre6wPXVSYYZYgJBzBpzH4p5SFopnJWmg" alt=""/>
                    <div className="card-body">
                        <p className="text-center fs-4"><b>Sony Camera</b></p>
                        <p>Sony is a leading innovator in the digital camera market, renowned for its mirrorless camera systems that deliver exceptional image quality and advanced video capabilities.</p>
                    </div>
                  
                    <div className="card-fotter mb-5 mx-auto">
                        <button className="btn btn-primary">Specifiactions</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card rounded-4 h-100">
                    <img className="w-100" src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb1140306/images/Titan/Catalog/1774SM01_1.jpg?sw=360&sh=360" alt=""/>
                    <div className="card-body">
                        <p className="text-center fs-4"><b>Titan Watch</b></p>
                        <p>Titan began its watchmaking journey in 1984, revolutionizing the Indian watch industry with a blend of technology and aesthetics. </p>
                    </div>
                    <div className="card-fotter mb-5 mx-auto">
                        <button className="btn btn-primary">About</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card rounded-4 h-100">
                    <img className="w-100" src="https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16pro__erw9alves2qa_xlarge_2x.png" alt=""/>
                    <div className="card-body">
                        <p className="text-center fs-4"><b>iPhone 16 Pro</b></p>
                        <p>The iPhone 16 Pro is the latest generation of Apple's flagship smartphone, featuring a new A18 Pro chip with enhanced AI capabilities.</p>
                    </div>
                  
                    <div className="card-fotter mb-5 mx-auto">
                        <button className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Home
