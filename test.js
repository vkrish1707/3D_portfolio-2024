import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import './ModalComponent.css'; // Assuming you have some CSS styles here

const colors = [
  { name: "Physical re-use", value: "#0085b0" },
  { name: "Logical re-use", value: "#2085e0" },
  { name: "Re-use with minor change", value: "#d0ff00" },
  { name: "Re-use with major change", value: "#ff0000" },
  { name: "New, value", value: "#ffc800" }
];

const ModalComponent = ({ isOpen, onClose, cellData }) => {
  const [data, setData] = useState(cellData);
  const [cellValue, setCellValue] = useState({ value: '', color: '', comments: '' });

  useEffect(() => {
    if (isOpen) {
      const initialCellValue = cellData.value ? cellData : { value: '', color: '#FFFFFF', comments: '' };
      setCellValue(initialCellValue);
    }
  }, [isOpen, cellData]);

  const handleValueChange = (index, key, value) => {
    const newData = [...data];
    newData[index][key] = value;
    setData(newData);
  };

  const handleColorChange = (event) => {
    const newColorValue = event.target.value;
    const newColorObj = colors.find(color => color.value === newColorValue) || {};
    setCellValue(prevState => ({
      ...prevState,
      color: newColorObj.value,
      colorName: newColorObj.name
    }));
  };

  const handleSubmit = () => {
    onSubmit(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        border: '2px solid #000'
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modal Title
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p><strong>Row Name:</strong> {cellData.rowName}</p>
          <p><strong>Column Name:</strong> {cellData.headerName}</p>
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Value"
            value={cellValue.value}
            onChange={(e) => handleValueChange(0, 'value', e.target.value)} // Assuming index 0 for demonstration
            fullWidth
            margin="normal"
            InputProps={{
              style: {
                backgroundColor: cellValue.color,
              },
            }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Color</InputLabel>
            <Select
              value={cellValue.color}
              onChange={handleColorChange}
              label="Color"
              style={{ backgroundColor: cellValue.color }}
            >
              {colors.map((color) => (
                <MenuItem key={color.value} value={color.value} style={{ backgroundColor: color.value, color: '#FFFFFF' }}>
                  {color.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Derived From"
            value={cellValue.comments}
            onChange={(e) => handleValueChange(0, 'comments', e.target.value)} // Assuming index 0 for demonstration
            fullWidth
            margin="normal"
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2, ml: 2 }}>Submit</Button>
          <Button onClick={onClose} variant="outlined" sx={{ mt: 2, ml: 2 }}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
