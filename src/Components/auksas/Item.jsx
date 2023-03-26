function Item({ data, modal, remove }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
      <tr>
        <td>{data.name}</td>
        <td>{data.svoris}</td>
        <td>{data.price}</td>
        <td>{data.kiekis}</td>
        <td> <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button> </td>
        <td>  <button className="btn btn-danger" onClick={()=> remove(data)}>
          Delete
        </button></td>
      </tr>
    );
  }
  
  export default Item;