import "./ProductsDetailsPage.css";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import SliderImg from "../../assets/images/12132.webp";
import SliderImg1 from "../../assets/images/si.jpg"
import Slider from "react-slick";
import { TbBrandAmd } from "react-icons/tb";
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

const ProductsDetailsPage = () => {
    var ProductSliders = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var ProductSlidersSml = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className="right-content w-100 ">
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

            <div className="card ProductDetailsSection ">
                <br /> <br />
                <div className="row ">
                    <div className="col-md-4">
                        <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                            <h5 className="mb-4">Product Gallery</h5>
                            <Slider {...ProductSliders} className="sliderBig mb-2">
                                <div className="item">
                                    <img src={SliderImg} alt="" className="w-100" />
                                </div>
                            </Slider>

                            <Slider {...ProductSlidersSml} className="sliderSml">
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                                <div className="item">
                                    <img src={SliderImg1} alt="" className="w-100" />
                                </div>
                            </Slider>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="pt-3 pb-3 pl-4 pr-4">
                            <h5 className="mb-3">Product Details</h5>
                            <h4> This Cotton women’s stitched dress features screen-print, patchwork & handwork.</h4>

                            <div className="producutInfo mt-3">
                                <div className="row">
                                    <div className="col-sm-5 d-flex align-items-center">
                                        <span className="icon pl-4"><TbBrandAmd /></span>
                                        <span className="name">Brand</span>
                                    </div>

                                    <div className="col-sm-7">
                                        <span className="name">Ecstasy</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-5 d-flex align-items-center">
                                        <span className="icon pl-4"><TbBrandAmd /></span>
                                        <span className="name">Category</span>
                                    </div>

                                    <div className="col-sm-7">
                                        <span className="name">Man's</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductsDetailsPage;
