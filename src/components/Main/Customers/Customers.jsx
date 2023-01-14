import React from "react";
import CustomersLogoMenu from "../../Menus/CustomersLogos/CustomersLogoMenu";
import PageLine from "../../Shapes/Lines/PageLine";

function Customers() {
  return (
    <section className="customers" id="customers">
      <div className="customers__container">
        <CustomersLogoMenu />
      </div>
      <PageLine id={"customers-pageLine"} />
    </section>
  );
}
export default Customers;
