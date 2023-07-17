import * as Yup from "yup";

  export  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    // phone: Yup.string()
    //   .required("Phone number is required")
    //   .matches(
    //     /^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$/,
    //     "Invalid phone number"
    //   )
    //   .min(10, "Phone number should be 10 digits"),
    street: Yup.string().required("Street is required"),
    // state: Yup.string().required("State is required"),
    city: Yup.string().optional(),
    zipCode: Yup.string().required("Zip code is required"),
    // gender: Yup.string().required("Gender is required"),
    flightNo: Yup.string()
      .required("Flight number is required")
      .matches(/^([A-Z]{2}\d{4})$/, "Invalid flight number"),
    // airlineName: Yup.string()
    //   .required("Airline name is required")
    //   .matches(/^[A-Za-z\s]+$/, "Invalid airline name"),
    // tripType: Yup.string().required("Trip type is required"),
    departureAirport: Yup.string()
      .required("Departure airport is required")
      .matches(/^[A-Za-z\s]+$/, "Invalid departure airport"),
    arrivedAirport: Yup.string()
      .required("Arrival airport is required")
      .matches(/^[A-Za-z\s]+$/, "Invalid arrival airport").
      notOneOf([Yup.ref("departureAirport"), null], 'Arrival airport and Departure airportshould not be same'),

    departureDate: Yup.date()
      .required("Departure date is required")
      .min(new Date(), "Invalid departure date"),
    returnDate: Yup.date().when("tripType", {
      is: "return",
      then: Yup.date()
        .required("Return date is required")
        .min(Yup.ref("departureDate"), "Invalid return date"),
    }),
    // seatClass: Yup.string().required("Seat class is required"),
    // fullName: Yup.string()
    //   .required("Full name is required")
    //   .matches(/^[^\d]+$/i, "Invalid last name"),
    cardnumber: Yup.string()
      .required("Card number is required")
      .matches(/^\d{16}$/, "Invalid card number, card length should be 16"),
    paymentDateTime: Yup.date()
      .required("Payment date and time are required")
      .min(
        new Date(),
        "Invalid payment date and time, it must be a future date"
      ),
    Phone: Yup.string()
      .required("Phone is required")
      .matches(/^[0-9\b]+$/i, "Invalid phone number")
      .min(10, "Phone number should be 10 digits"),
    month: Yup.string()
      .required("Expiry month is required")
      .matches(/^0[1-9]|1[0-2]$/i, "Invalid expiry month"),
    cvv: Yup.string()
      .required("CVV is required")
      .matches(/^\d{3}$/i, "Invalid CVV"),
    gstNumber: Yup.string().required("GST number is required"),
    companyName: Yup.string().required("Company name is required"),
    // companyID: Yup.string().required("Company ID is required"),
    mobilePhone: Yup.string().required("Mobile phone number is required"),
    emergencyContactNumber: Yup.string().required(
      "Emergency contact number is required"
    ),
    emergencyContactName: Yup.string().required(
      "Emergency contact name is required"
    ),
  });




//   export const validationSchema = Yup.object().shape({
//     firstname: Yup.string().required("Firstname is required"),
//     lastname: Yup.string().required("Latsname is required"),
//     email: Yup.string().required("Email is required").email("Email is invalid"),
//     Phone: Yup.number()
//       .typeError("That doesn't look like a phone number")
//       .positive("A phone number can't start with a minus")
//       .integer("A phone number can't include a decimal point")
//       .min(8)
//       .required("A phone number is required"),
//     username: Yup.string()
//       .required("Username is required")
//       .min(6, "Username must be at least 6 characters")
//       .max(20, "Username must not exceed 20 characters"),

//     password: Yup.string()
//       .required("Password is required")
//       .min(6, "Password must be at least 6 characters")
//       .max(40, "Password must not exceed 40 characters"),
//     confirmPassword: Yup.string()
//       .required("Confirm Password is required")
//       .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
//     acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
//   });
