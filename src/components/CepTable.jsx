import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const CepTable = () => {

    return (
        <div>
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>CEP</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell>CEP</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>teste</TableCell>
                            <TableCell>teste</TableCell>
                            <TableCell>teste</TableCell>
                            <TableCell>teste</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>teste</TableCell>
                            <TableCell>teste</TableCell>
                            <TableCell>teste</TableCell>
                            <TableCell>teste</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CepTable;