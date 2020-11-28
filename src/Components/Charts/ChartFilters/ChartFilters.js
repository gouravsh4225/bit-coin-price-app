import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./ChartFilters.css";

function ChartFilters({ selectOption, filterList, onChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(selectOption);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e, selectValue, item = null) => {
    if (selectValue && item) {
      onChange(item);
      setSelectedFilter(item);
    }
    setAnchorEl(null);
  };

  return (
    <div className="chart-filters">
      <div className="chart-filters-heading">Historical Data</div>
      <Button
        variant="contained"
        color="primary"
        aria-controls="hart-filter-menu"
        aria-haspopup="true"
        onClick={(e) => handleClick(e)}
      >
        {selectedFilter?.name}
      </Button>
      <Menu
        id="hart-filter-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(e) => handleClose(e, false)}
      >
        {filterList.map((item) => (
          <MenuItem onClick={(e) => handleClose(e, true, item)} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
export default ChartFilters;
