import Table from 'react-bootstrap/Table';
import MoreBtn from '../../assets/more-btn.svg'
import Apple from '../../assets/apple.svg'
import Orange from '../../assets/orange.svg'
import Button from 'react-bootstrap/Button';
import './ProductView.css'

function ProductView() {
  return (
    <div className='container'>
        <div className='h2-button-container'>
            <h2>Products</h2>
            <Button className='btn-upload-products' variant="success">Upload Product</Button>{' '}
        </div>
    <Table stripe>
      <thead>
        <tr className='table-row'>
          <th className='table-header'>Product</th>
          <th className='table-header'>Sold</th>
          <th className='table-header'>Gross</th>
          <th className='table-header'>Status</th>
          <th className='table-header'><img src={MoreBtn} alt="" /></th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td className='image-holder table-header'><img src={Apple} alt="" /> Farm Fresh apple </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="success">Active</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>
        <tr>
        <td className='image-holder table-header'><img src={Orange} alt="" /> Farm Fresh orange </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="success">Active</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /> <img src={MoreBtn} alt="" /></td>
         
        </tr>
        <tr>
        <td className='image-holder table-header'><img src={Apple} alt="" /> Farm Fresh apple </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="success">Active</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>
        <tr>
        <td className='image-holder table-header'><img src={Orange} alt="" /> Farm fresh oranges </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="danger">Cancelled</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>

        <tr>
        <td className='image-holder table-header' ><img src={Apple} alt="" /> Farm Fresh apple </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="warning">Pending</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>
        <tr>
        <td className='image-holder table-header' ><img src={Orange} alt="" />Farm Fresh oranges </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="danger">Cancelled</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>
        <td className='image-holder table-header'><img src={Apple} alt="" /> Farm Fresh apple </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="success">Success</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        <tr>
        <td className='image-holder table-header '><img src={Orange} alt="" /> Farm Fresh oranges </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="danger">Cancelled</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>

        <tr>
        <td className='image-holder table-header '><img src={Apple} alt="" /> Farm Fresh apple </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="success">Success</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>

        <tr>
        <td className='image-holder table-header'><img src={Orange} alt="" /> Farm Fresh oranges </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="warning">Pending</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>

        <tr>
        <td className='image-holder table-header'><img src={Apple} alt="" /> Farm Fresh apple </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="success">Success</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>

        <tr>
        <td className='image-holder table-header '><img src={Orange} alt="" /> Farm Fresh oranges </td>
          <td>20/600Pcs</td>
          <td>#5000</td>
          <td><Button variant="warning">Pending</Button>{' '}</td>
          <td><img src={MoreBtn} alt="" /></td>
         
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default ProductView;