import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function createData(
  companyName: string,
  orderWeight: number,
  color: number,
  materialType: number,
  address: number,
  city: number,
) {

  return {
    companyName,
  orderWeight,
  color,
  materialType,
  address,
  city,
    history: [
      {
        date: '2020-01-05',
        color: 'RAL-1109',
        weight: 32.5,
      },
      {
        date: '2020-06-02',
        color: 'RAL-1112',
        weight: 12.5,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  
  
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.companyName}
        </TableCell>
        <TableCell align="right">{row.color}</TableCell>
        <TableCell align="right">{row.materialType}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.city}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
               */}
              {/* <FormSummary /> */}
              <Box sx={{border:'0.5px solid black', borderRadius:'6px'}} padding="12px">
                <Box mb={2}>
                <Typography variant='h5'>Order Summary</Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" sx={{backgroundColor:'black'}} padding="4px"><Typography color="white" fontWeight='bold'>Company Name</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" padding="4px" ><Typography  fontWeight="bold">{row.companyName}</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" sx={{backgroundColor:'black'}} padding="4px"><Typography color="white" fontWeight='bold'>Product Color</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" padding="4px"><Typography fontWeight="bold">{row.color}</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" sx={{backgroundColor:'black'}} padding="4px"><Typography color="white" fontWeight='bold'>Order Weight</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" padding="4px"><Typography fontWeight="bold">{row.orderWeight}</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" sx={{backgroundColor:'black'}} padding="4px"><Typography color="white" fontWeight='bold'>Address</Typography></Box>
                    </Grid>
                    <Grid item sm={6} >
                        <Box display='flex' flexDirection="row" padding="4px"><Typography fontWeight="bold">{row.address}</Typography></Box>
                    </Grid>
                </Grid>
              </Box>
              {/* <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell align="right">Weight</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.color}</TableCell>
                      <TableCell align="right">{historyRow.weight}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function TableComponent(props:any) {
    console.log('render')
    console.log(props.data);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data ? (props.data.map((row:any,id:string) => (
            <Row key={id} row={row.data} />
          ))) : (rows.map((row:any)=>{
            console.log("Row: ",row.data);
            <Row key={row.name} row={row} />
          }))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
