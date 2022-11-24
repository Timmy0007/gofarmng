import React from 'react'

const ProductUpload = () => {
  return (
    <div className='container'>
        <h2>Upload Products</h2>
        <form>
            <label htmlFor="country">Country
                <select name="" id="">
                <option value="ni">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
                </select>
            </label>

            <label htmlFor="">Title
                <input type="text" name="title" id="title" />
            </label>
            
            <label htmlFor="">
                Add Image
            
                    <p className='image-no'>You can upload up to 5 Images of your product.</p>
                    <button className='image-btn' onClick={addImage}>+</button>
                    <p>Choose pictures from file (PNG or JPEG)</p>
            </label>

            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" />

            <label htmlFor="unit">Unit</label>
                <select name="unit-items" id="">
                    <option value="all">Select unit</option>
                    <option value="kg">Kg</option>
                    <option value=""></option>
                </select>
        </form>
    </div>
  )
}

export default ProductUpload