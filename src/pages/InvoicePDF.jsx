import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { Button, Loading } from "../components";

const baseURL = "https://ecommercebackend-rt0y.onrender.com/api/v1/user/orders";

const InvoicePDF = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const thisURL = `${baseURL}/${id}`;

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["specificInvoice", id],
    queryFn: async () => {
      const response = await axios.get(thisURL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data.data.order;
    },
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: "center",
    },
    subheader: {
      fontSize: 18,
      marginBottom: 10,
    },
    address: {
      fontSize: 12,
      marginBottom: 10,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCellLong: {
      margin: "auto",
      padding: "4px",
      height: "100%",
      width: "35%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      fontSize: 13,
    },
    tableCellShort: {
      margin: "auto",
      padding: "4px",
      height: "100%",
      width: "15%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      fontSize: 13,
    },
    tableCellHeaderLong: {
      margin: "auto",
      width: "35%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
      fontSize: 13,
    },
    tableCellHeaderShort: {
      margin: "auto",
      width: "15%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
      fontSize: 13,
    },
    totalsRow: {
      flexDirection: "row",
    },
    totalsCell: {
      width: "100%",
      textAlign: "right",
      fontSize: 15,
    },
    text: {
      fontSize: 18,
      textAlign: "center",
      marginTop: "32px",
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>{error.message}</div>;

  console.log(data);
  const cartValue = data.products
    .map((product) => product.product.price * product.quantity)
    .reduce((acc, cv) => acc + cv);

  let taxes = cartValue * 0.12;
  let stringTaxes = taxes.toFixed(2);
  taxes = parseFloat(stringTaxes);

  const deliveryFee = data.deliveryFee;

  let total = cartValue + taxes + deliveryFee;
  let stringTotal = total.toFixed(2);
  total = parseFloat(stringTotal);

  return (
    <>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.header}>Invoice</Text>
              <Text style={styles.subheader}>Invoice #{data._id}</Text>
              <Text style={styles.address}>Bill To:</Text>
              <Text style={styles.address}>{data.address.name},</Text>
              <Text style={styles.address}>{data.address.houseNum},,,,</Text>
              <Text style={styles.address}>{data.address.area},</Text>
              <Text style={styles.address}>{data.address.landmark},</Text>
              <Text style={styles.address}>{data.address.city},</Text>
              <Text style={styles.address}>{data.address.state},</Text>
              <Text style={styles.address}>
                {data.address.country} - {data.address.pinCode}
              </Text>

              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableCellHeaderLong}>Name</Text>
                  <Text style={styles.tableCellHeaderLong}>Description</Text>
                  <Text style={styles.tableCellHeaderShort}>Quantity</Text>
                  <Text style={styles.tableCellHeaderShort}>Price in USD</Text>
                </View>
                {data.products.map((item, index) => (
                  <View key={index} style={styles.tableRow}>
                    <Text style={styles.tableCellLong}>
                      {item.product.name}
                    </Text>
                    <Text style={styles.tableCellLong}>
                      {item.product.quote}
                    </Text>
                    <Text style={styles.tableCellShort}>{item.quantity}</Text>
                    <Text style={styles.tableCellShort}>
                      {item.product.price}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Order Totals */}
              <View style={styles.totalsRow}>
                <Text style={[styles.totalsCell, { fontWeight: "bold" }]}>
                  Order Value: USD {cartValue}
                </Text>
              </View>
              <View style={styles.totalsRow}>
                <Text style={[styles.totalsCell, { fontWeight: "bold" }]}>
                  Taxes: USD {taxes}
                </Text>
              </View>
              <View style={styles.totalsRow}>
                <Text style={[styles.totalsCell, { fontWeight: "bold" }]}>
                  Delivery Fee: USD {deliveryFee}
                </Text>
              </View>
              <View style={styles.totalsRow}>
                <Text style={styles.totalsCell}>Total: USD {total}</Text>
              </View>
              <Text style={styles.text}>Order fulfiled by UrbanForge!</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <div className="flex justify-end p-4">
        <Button style="text-white text-lg" onClick={() => navigate("/orders")}>
          Back to orders
        </Button>
      </div>
    </>
  );
};

export default InvoicePDF;
