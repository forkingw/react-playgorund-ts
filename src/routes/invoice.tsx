import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate()
  let location = useLocation()
  
  let params = useParams();
  let invoice = params.invoiceId && getInvoice(parseInt(params.invoiceId, 10))
  if (invoice) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
        <button
          onClick={() => {
            if (invoice && invoice.number) {
              deleteInvoice(invoice.number);
              navigate("/invoices" + location.search);
            }
          }}
        >
          Delete
        </button>
      </p>
      </main>
    ) 
  }
  return null
}