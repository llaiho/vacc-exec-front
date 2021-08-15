import 'date-fns';
import React from 'react';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



  let dateTime = new Date()

export var selectedDateFrom = Date();
export var selectedDateFromMS = Date.parse(selectedDateFrom);

export var selectedDateTo = Date();
export var selectedDateToMS = Date.parse(selectedDateTo);


function MaterialUIPickers() {



  
  const [selectedDateFrom, setSelectedDateFrom] = React.useState<Date | null>(
    new Date("2021-01-11T08:59:28.642790Z"),
  );

  const [selectedDateTo, setSelectedDateTo] = React.useState<Date | null>(
    new Date(dateTime),
  );

  const handleDateChangeFrom = (date: Date | null) => {
    setSelectedDateFrom(date);
  };

  const handleDateChangeTo = (date: Date | null) => {
    setSelectedDateTo(date);
  };

  return (
    <MuiPickersUtilsProvider  utils={DateFnsUtils} >
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDateFrom}
          onChange={handleDateChangeFrom}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDateFrom}
          onChange={handleDateChangeFrom}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
      <div>

        <Grid container justifyContent="space-around">
            <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDateTo}
            onChange={handleDateChangeTo}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
            />
            <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDateTo}
            onChange={handleDateChangeTo}
            KeyboardButtonProps={{
                'aria-label': 'change time',
            }}
            />
        </Grid>
      </div>
    </MuiPickersUtilsProvider>
  );


}

export default MaterialUIPickers;

