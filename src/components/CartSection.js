import { deleteProduct, incrementQuantity, decrementQuantity } from "@/redux/productSlice";
import { useDispatch } from "react-redux";

const CartSection = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-8">
      <div className="card mb-4">
        <div className="card-header py-3">
          <h5 className="mb-0">Cart - {cart.length} items</h5>
        </div>

        {cart.length ? (
          cart.map((value) => (
            <div className="card-body" key={value._id}>
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  <div
                    className="bg-image hover-overlay hover-zoom ripple rounded"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={value.img}
                      className="w-100"
                      alt="Blue Jeans Jacket"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}
                      ></div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  <p>
                    <strong>{value.title}</strong>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm me-1 mb-2"
                    data-mdb-toggle="tooltip"
                    title="Remove item"
                    onClick={() => dispatch(deleteProduct(value._id))}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  <div
                    className="d-flex mb-4"
                    style={{ maxWidth: "300px" }}
                  >
                    <button
                      className="btn btn-primary px-3 me-2"
                      onClick={() =>
                        dispatch(decrementQuantity(value._id))
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </button>

                    <div className="form-outline">
                      <input
                        id="form1"
                        name="quantity"
                        value={value.quantity}
                        type="number"
                        className="form-control border"
                        readOnly
                      />
                    </div>

                    <button
                      className="btn btn-primary px-3 ms-2"
                      onClick={() =>
                        dispatch(incrementQuantity(value._id))
                      }
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  <p className="text-start text-md-center">
                    <strong>${value.price}</strong>
                  </p>
                </div>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <h3 className="mx-auto mt-4">Your Cart is Empty</h3>
        )}
      </div>
    </div>

  )
}

export default CartSection;