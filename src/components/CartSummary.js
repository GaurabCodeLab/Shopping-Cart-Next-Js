const CartSummary = ({ price, items }) => {

    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Total Quantity
                            <span>{items}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Total amount</strong>
                            </div>
                            <span>
                                <strong>${price}</strong>
                            </span>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                    >
                        Go to checkout
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CartSummary;