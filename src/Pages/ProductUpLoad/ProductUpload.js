import "./ProductUpload.css";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
const ProductUpload = () => {
  const [categoryVal, setcategoryVal] = useState("");
  const [ratingValue, setRatingValue] = useState(1);
  const handleChangeCategory = (event) => {
    setcategoryVal(event.target.value);
  };

  const [categoryVal2, setcategoryVal2] = useState("");

  const handleChangeCategory2 = (event) => {
    setcategoryVal2(event.target.value);
  };

  return (
    <div className="right-content w-100 ">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Product Upload</h5>
        <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumb_">
          <StyledBreadcrumb
            component="a"
            href="/dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
          />

          <StyledBreadcrumb component="a" href="/product" label="Products" />
          <StyledBreadcrumb
            component="a"
            href="/product/details"
            label="Product View"
          />
        </Breadcrumbs>
      </div>
      <form className="form">
        <div className="row">
          <div className=" col-sm-7">
            <div className="card p-4">
              <h5 className="mb-4">Basic Information</h5>

              <div className="form-group">
                <h6>TITLE</h6>
                <input type="text" />
              </div>

              <div className="form-group">
                <h6>DESCRIPTION</h6>
                <textarea rows={5} cols={10} />
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <h6>DESCRIPTION</h6>
                    <Select
                      value={categoryVal}
                      onChange={handleChangeCategory}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className="w-100"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6>Brand</h6>
                    <Select
                      value={categoryVal2}
                      onChange={handleChangeCategory2}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      className="w-100"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <h6>REGULAR PRICE</h6>
                    <input type="text" />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6>DISCOUNT PRICE</h6>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <h6>RATING</h6>
                    <Rating
                      name="simple-controlled"
                      value={ratingValue}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                      }}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    <h6>DISCOUNT PRICE</h6>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>

            <Button className="btn-blue btn-big btn-lg w-100 mt-4">
              drop product image
            </Button>
          </div>

          <div className="col-sm-5"></div>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
