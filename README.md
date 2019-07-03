# Rentorbuy

## API Documentation :

To compute the results, issue a **POST** request to the `results` endpoint.

Your request body should be an object which contains all of your input's values.

### Example request
```
curl -X POST  -H "Content-Type: application/json" http://localhost:3000/results --data '{"contribution":30000, "income": 80000, "zipcode":"29200"}'
```

### Inputs
- income: **Mandatory** *Integer* Yearly net income
- contribution: **Mandatory** *Integer* Contribution available for the purchase
- zipcode: **Mandatory** *String* Zipcode of the flat
- price_per_sqm: *String* Price per square meter
- purchase_surface: *String* Surface of the good

- mortgage_rate: *Float*
- mortgage_duration: *Integer*
- insurance_rate: *Float* Yearly average insurance rate
 
- land_tax: *Integer*
- notary_fees: *Integer*
- guaranty_fees: *Integer*
- property_charges: *Integer*
 
- rent_per_sqm: *Integer*
- rented_surface: *Integer*
 
- monthly_savings: *Integer*
- housing_tax: *Integer*
- agency_fees: *Integer*
 
- inflation_rate: *Float*
- rent_growth_rate: *Float*
- savings_return_rate: *Float*
- home_price_growth_rate: *Float*
 
### Outputs
- income: *Integer* Yearly net income
- contribution: *Integer* Contribution available for the purchase
- zipcode: *String* Zipcode of the flat
- price_per_sqm: *String* Price per square meter
- purchase_surface: *String* Surface of the good
 
- mortgage_rate: *Float*
- mortgage_duration: *Integer*
- insurance_rate: *Float* Yearly average insurance rate
 
- land_tax: *Integer*
- notary_fees: *Integer*
- guaranty_fees: *Integer*
- property_charges: *Integer*
 
- rent_per_sqm: *Integer*
- rented_surface: *Integer*
 
- monthly_savings: *Integer*
- housing_tax: *Integer*
- agency_fees: *Integer*
 
- inflation_rate: *Float*
- rent_growth_rate: *Float*
- savings_return_rate: *Float*
- home_price_growth_rate: *Float*
- facts: {
  - price: *Integer*
  - rent: *Integer*
  - payment: *Integer*
  - equilibrium: *Integer*
  - costs: *Array* For each year from 1 to 25
  - rent: {
      - final_savings: *Integer*
      - initial_costs: *Integer*
      - recuring_costs: *Integer*
    },
    - purchase: {
      - final_savings: *Integer*
      - initial_costs: *Integer*
      - recuring_costs: *Integer*
    }
}
