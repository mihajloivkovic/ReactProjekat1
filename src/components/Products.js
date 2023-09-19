function Products ({items}){
 
  return <div className='section-center'>
    {items.map((productItem)=>{
      const{id,title,img,price,desc}=productItem;
      return <div key={id} className="menu-item">
        <img src={img} alt={title} className="photo"/>
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>{price}.00 RSD</h4>
          </header>
          <p className='item-text'>{desc}</p>
        </div>  
        
      </div> 
    })}
  </div>
};

export default Products;
