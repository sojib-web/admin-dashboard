import "./ProductDetails.css";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import SliderImg from "../../assets/images/RBL-DT-F3-00194-2-450x450.webp";

import Slider from "react-slick";

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
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const ProductDetails = () => {
  var ProductSliders = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="right-content container-fluid w-100 ">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumb_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb component="a" href="#" label="Products" />
            <StyledBreadcrumb component="a" href="#" label="Product View" />
          </Breadcrumbs>
        </div>

        <div className="card">
          <br /> <br />
          <div className="row">
            <div className="col-md-4">
              <Slider {...ProductSliders}>
                <div className="item">
                  <img src={SliderImg} alt="" className="" />
                </div>
              </Slider>
            </div>
            <div className="col-md-8">ayfush</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
