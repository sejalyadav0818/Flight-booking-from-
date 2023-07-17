import React, { Fragment, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation/validationSchema";
import {
  Paper,
  Box,
  Grid,
  FormLabel,
  TextField,
  Typography,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";

const steps = [
  "Basic Details",
  "Flight Schedule",
  "Ticket Purchase",
  "GST Details",
  "Contact Information",
];
const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            React Hook Form - Yup - Material UI - Validation
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={handleSubmit(onSubmit)}>
            {activeStep === 0 && (
              <Paper px={3} py={2}>
                <Box px={3} py={2} mb={3} mt={2} color="primary">
                  <Typography variant="h6" align="center" margin="dense">
                    Basic Details
                  </Typography>
                  <Fragment>
                    {" "}
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="firstname"
                          name="firstname"
                          label="Firstname"
                          fullWidth
                          margin="dense"
                          {...register("firstname")}
                          error={errors.firstname ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.firstname?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="lastname"
                          name="lastname"
                          label="Lastname"
                          fullWidth
                          margin="dense"
                          {...register("lastname")}
                          error={errors.lastname ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.lastname?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="email"
                          name="email"
                          label="email"
                          type="email"
                          fullWidth
                          margin="dense"
                          {...register("email")}
                          error={errors.email ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.email?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="Phone"
                          name="Phone"
                          label="Phone"
                          type="number"
                          fullWidth
                          margin="dense"
                          {...register("Phone")}
                          error={errors.Phone ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.Phone?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          label="Gender"
                          name="radio-buttons-group">
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          id="street"
                          name="street"
                          label="Street"
                          type="text"
                          fullWidth
                          margin="dense"
                          {...register("street")}
                          error={errors.street ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.street?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            City
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="city"
                            // value={age}
                            label="City"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography variant="inherit" color="textSecondary">
                          {errors.city?.message}
                        </Typography>
                      </Grid>{" "}
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            State
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="State"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography variant="inherit" color="textSecondary">
                          {errors.state?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="zipCode"
                          name="zipCode"
                          label="zipCode"
                          type="number"
                          fullWidth
                          margin="dense"
                          {...register("zipCode")}
                          error={errors.zipCode ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.zipCode?.message}
                        </Typography>
                      </Grid>{" "}
                    </Grid>
                  </Fragment>
                </Box>
              </Paper>
            )}
            {activeStep === 1 && (
              <Paper px={3} py={2}>
                <Box px={3} py={2} mb={3} mt={2}>
                  <Fragment>
                    <Typography variant="h6" align="center" margin="dense">
                      Flight Schedule
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          id="flightNo"
                          name="flightNo"
                          label="flightNo"
                          fullWidth
                          margin="dense"
                          {...register("flightNo")}
                          error={errors.flightNo ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.flightNo?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id=""
                          name="arrivedAirport"
                          label="arrivedAirport"
                          type="arrivedAirport"
                          fullWidth
                          margin="dense"
                          {...register("arrivedAirport")}
                          error={errors.arrivedAirport ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.arrivedAirport?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="departureAirport"
                          name="departureAirport"
                          label="departureAirport"
                          type="text"
                          fullWidth
                          margin="dense"
                          {...register("departureAirport")}
                          error={errors.departureAirport ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.departureAirport?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Seat Class
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          label="Gender"
                          name="radio-buttons-group">
                          <FormControlLabel
                            value="One Way Tripse"
                            control={<Radio />}
                            label="One Way Trips"
                          />
                          <FormControlLabel
                            value="Business Classe"
                            control={<Radio />}
                            label="Business Class"
                          />
                          <FormControlLabel
                            value="Economy Class"
                            control={<Radio />}
                            label="Economy Class"
                          />
                        </RadioGroup>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Airline Name
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="airlineName"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Air India</MenuItem>
                            <MenuItem value={20}>IndiGo</MenuItem>
                            <MenuItem value={30}>SpiceJet</MenuItem>
                            <MenuItem value={10}>Go First</MenuItem>
                            <MenuItem value={20}>Air India Express</MenuItem>
                            <MenuItem value={30}>Vistara</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography variant="inherit" color="textSecondary">
                          {errors.airlineName?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            tripType
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="tripType"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>onewayTrips</MenuItem>
                            <MenuItem value={20}>circleTrip</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography variant="inherit" color="textSecondary">
                          {errors.state?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputLabel id="demo-simple-select-label">
                          Departure Date
                        </InputLabel>
                        <TextField
                          id="departureDate"
                          name="departureDate"
                          type="date"
                          fullWidth
                          margin="dense"
                          {...register("departureDate")}
                          error={errors.departureDate ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.departureDate?.message}
                        </Typography>
                      </Grid>{" "}
                      <Grid item xs={12} sm={6}>
                        <InputLabel id="demo-simple-select-label">
                          Return Date
                        </InputLabel>
                        <TextField
                          id="returnDate"
                          name="returnDate"
                          type="date"
                          fullWidth
                          margin="dense"
                          {...register("returnDate")}
                          error={errors.returnDate ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.returnDate?.message}
                        </Typography>
                      </Grid>{" "}
                    </Grid>
                  </Fragment>
                </Box>
              </Paper>
            )}
            {activeStep === 2 && (
              <Paper px={3} py={2}>
                <Box px={3} py={2} mb={3} mt={2}>
                  <Fragment>
                    <Typography variant="h6" align="center" margin="dense">
                      Ticket Purchase
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="fullname"
                          name="fullname"
                          label="fullname"
                          fullWidth
                          margin="dense"
                          {...register("fullname")}
                          error={errors.fullname ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.fullname?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="cardnumber"
                          name="cardnumber"
                          label="cardnumber"
                          fullWidth
                          margin="dense"
                          {...register("cardnumber")}
                          error={errors.cardnumber ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.cardnumber?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputLabel>Payment DateTime</InputLabel>
                        <TextField
                          id="paymentDateTime"
                          name="paymentDateTime"
                          type="date"
                          fullWidth
                          margin="dense"
                          {...register("paymentDateTime")}
                          error={errors.paymentDateTime ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.paymentDateTime?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="Phone"
                          name="Phone"
                          label="Phone"
                          type="number"
                          fullWidth
                          margin="dense"
                          {...register("Phone")}
                          error={errors.Phone ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.Phone?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputLabel>Expiration (MM/YYYY):</InputLabel>
                        <TextField
                          id="month"
                          type="month"
                          fullWidth
                          margin="dense"
                          {...register("month")}
                          error={errors.month ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.month?.message}
                        </Typography>
                      </Grid>{" "}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="cvv"
                          name="cvv"
                          label="CVV"
                          type="number"
                          fullWidth
                          margin="dense"
                          {...register("cvv")}
                          error={errors.cvv ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.cvv?.message}
                        </Typography>
                      </Grid>{" "}
                    </Grid>
                  </Fragment>
                </Box>
              </Paper>
            )}
            {activeStep === 3 && (
              <Paper px={3} py={2}>
                <Box px={3} py={2} mb={3} mt={2}>
                  <Fragment>
                    <Typography variant="h6" align="center" margin="dense">
                      Gst Details
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="gstNumber"
                          name="gstNumber"
                          label="gstNumber"
                          fullWidth
                          margin="dense"
                          {...register("gstNumber")}
                          error={errors.gstNumber ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.gstNumber?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="companyName"
                          name="companyName"
                          label="companyName"
                          fullWidth
                          margin="dense"
                          {...register("companyName")}
                          error={errors.companyName ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.companyName?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          id="street"
                          name="street"
                          label="Street"
                          type="text"
                          fullWidth
                          margin="dense"
                          {...register("street")}
                          error={errors.street ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.street?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            City
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="city"
                            // value={age}
                            label="City"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography variant="inherit" color="textSecondary">
                          {errors.city?.message}
                        </Typography>
                      </Grid>{" "}
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            State
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="State"
                            // onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography variant="inherit" color="textSecondary">
                          {errors.state?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="zipCode"
                          name="zipCode"
                          label="zipCode"
                          type="number"
                          fullWidth
                          margin="dense"
                          {...register("zipCode")}
                          error={errors.zipCode ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.zipCode?.message}
                        </Typography>
                      </Grid>{" "}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="companyId"
                          name="companyId"
                          label="companyId"
                          type="email"
                          fullWidth
                          margin="dense"
                          {...register("companyId")}
                          error={errors.companyId ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.companyId?.message}
                        </Typography>
                      </Grid>{" "}
                    </Grid>
                  </Fragment>
                </Box>
              </Paper>
            )}
            {activeStep === 4 && (
              <Paper px={3} py={2}>
                <Box px={3} py={2} mb={3} mt={2}>
                  <Fragment>
                    <Typography variant="h6" align="center" margin="dense">
                      Contact Information
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="mobilePhone"
                          name="mobilePhone"
                          label="mobilePhone"
                          fullWidth
                          margin="dense"
                          {...register("mobilePhone")}
                          error={errors.mobilePhone ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.mobilePhone?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="emergencyContactNumber"
                          name="emergencyContactNumber"
                          label="emergencyContactNumber"
                          fullWidth
                          margin="dense"
                          {...register("emergencyContactNumber")}
                          error={errors.emergencyContactNumber ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.emergencyContactNumber?.message}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="emergencyContactName"
                          name="emergencyContactName"
                          label="emergencyContactName"
                          type="number"
                          fullWidth
                          margin="dense"
                          {...register("emergencyContactName")}
                          error={errors.emergencyContactName ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                          {errors.emergencyContactName?.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Fragment>
                </Box>
              </Paper>
            )}

            <Box mt={3}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                color="primary">
                Back
              </Button>
              {activeStep < steps.length - 1 && (
                <Button
                  type="submit"
                  onClick={handleNext}
                  variant="contained"
                  color="primary">
                  Next
                </Button>
              )}
              {activeStep === steps.length - 1 && (
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Paper>
    </Fragment>
  );
};
export default Form;
