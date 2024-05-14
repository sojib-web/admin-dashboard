import "./ProductsDetailsPage.css";
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import SliderImg from "../../assets/images/12132.webp";
import SliderImg1 from "../../assets/images/si.jpg";
import Slider from "react-slick";
import { TbBrandAmd } from "react-icons/tb";
import uesrAvatar from "../../assets/images/male-avatar.jpg";
import { BiSolidCategory } from "react-icons/bi";
import UserAvatar from "../../Component/userAvatarCom/UserAvatar";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import { FaReply } from "react-icons/fa6";
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
  const ProductSliderBig = React.useRef();
  const ProductSliderSml = React.useRef();
  var ProductSliders = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var ProductSlidersSml = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToSlide = (index) => {
    ProductSliderBig.current.slickGoTo(index);
    ProductSliderSml.current.slickGoTo(index);
  };

  return (
    <div className="right-content w-100 ">
      <div className="card shadow border-0 w-100 flex-row p-4">
        <h5 className="mb-0">Product View</h5>
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
        <div className="row ">
          <div className="col-md-4">
            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
              <h5 className="mb-4">Product Gallery</h5>
              <Slider
                {...ProductSliders}
                ref={ProductSliderBig}
                className="sliderBig mb-2"
              >
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
                <div className="item">
                  <img src={SliderImg} alt="" className="w-100" />
                </div>
              </Slider>

              <Slider
                {...ProductSlidersSml}
                ref={ProductSliderSml}
                className="sliderSml"
              >
                <div className="item" onClick={() => goToSlide(1)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
                <div className="item" onClick={() => goToSlide(2)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
                <div className="item" onClick={() => goToSlide(3)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
                <div className="item" onClick={() => goToSlide(4)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
                <div className="item" onClick={() => goToSlide(5)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
                <div className="item" onClick={() => goToSlide(7)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
                <div className="item" onClick={() => goToSlide(7)}>
                  <img src={SliderImg1} alt="" className="w-100" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-8">
            <div className="pt-3 pb-3 pl-4 pr-4">
              <h5 className="mb-3">Product Details</h5>
              <h4>
                {" "}
                This Cotton women’s stitched dress features screen-print,
                patchwork & handwork.
              </h4>

              <div className="producutInfo mt-5">
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <TbBrandAmd />
                    </span>
                    <span className="name">Brand</span>
                  </div>

                  <div className="col-sm-9">
                    :<span className="name">Ecstasy</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Category</span>
                  </div>
                  <div className="col-sm-9">
                    :<span className="name">Man's</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Tags</span>
                  </div>

                  <div className="col-sm-9">
                    :
                    <span>
                      <ul className="list list-inline tags">
                        <li className="list-inline-item">
                          <span>SUITE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>Bag</span>
                        </li>
                        <li className="list-inline-item">
                          <span>DRESS</span>
                        </li>
                        <li className="list-inline-item">
                          <span>SMART</span>
                        </li>
                        <li className="list-inline-item">
                          <span>MAN</span>
                        </li>
                        <li className="list-inline-item">
                          <span>STYLES</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Colors</span>
                  </div>

                  <div className="col-sm-9">
                    :
                    <span>
                      <ul className="list list-inline tags">
                        <li className="list-inline-item">
                          <span>RED</span>
                        </li>
                        <li className="list-inline-item">
                          <span>BLUE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>WHITE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>BLACK</span>
                        </li>
                        <li className="list-inline-item">
                          <span>PURPLE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>ORANGE</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Size</span>
                  </div>

                  <div className="col-sm-9">
                    :
                    <span>
                      <ul className="list list-inline tags">
                        <li className="list-inline-item">
                          <span>M</span>
                        </li>
                        <li className="list-inline-item">
                          <span>XXL</span>
                        </li>
                        <li className="list-inline-item">
                          <span>XL</span>
                        </li>
                        <li className="list-inline-item">
                          <span>XXL</span>
                        </li>
                        <li className="list-inline-item">
                          <span>XXXL</span>
                        </li>
                        <li className="list-inline-item">
                          <span>SS</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Price</span>
                  </div>

                  <div className="col-sm-9">
                    :
                    <span>
                      <ul className="list list-inline tags">
                        <li className="list-inline-item">
                          <span>$6.06</span>
                        </li>
                        <li className="list-inline-item">
                          <span>$8468.56</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Stock</span>
                  </div>

                  <div className="col-sm-9">
                    :<span className="name">(35)Piece</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Reviews</span>
                  </div>

                  <div className="col-sm-9">
                    :<span className="name">(09)Review</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 d-flex align-items-center">
                    <span className="icon pl-4">
                      <BiSolidCategory />
                    </span>
                    <span className="name">Published</span>
                  </div>

                  <div className="col-sm-9">
                    :<span className="name">02 feb 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h5 className="mb-3 mt-4">Product Des</h5>
          <p className="pText">
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <br />
          <h5 className="mb-3 mt-3">Rating Analytics</h5>
          <div className="ratingSection">
            <div className="ratingrow d-flex align-items-center">
              <span className="col1 Start">5 Star</span>
              <div className="col2 progress">
                <div class="progress-bar" style={{ width: "70%" }}></div>
              </div>

              <span className="col3">(22)</span>
            </div>
          </div>

          <div className="ratingSection">
            <div className="ratingrow d-flex align-items-center">
              <span className="col1 Start">5 Star</span>
              <div className="col2 progress">
                <div class="progress-bar" style={{ width: "70%" }}></div>
              </div>

              <span className="col3">(22)</span>
            </div>
          </div>

          <div className="ratingSection">
            <div className="ratingrow d-flex align-items-center">
              <span className="col1 Start">5 Star</span>
              <div className="col2 progress">
                <div class="progress-bar" style={{ width: "70%" }}></div>
              </div>

              <span className="col3">(22)</span>
            </div>
          </div>
          <div className="ratingSection">
            <div className="ratingrow d-flex align-items-center">
              <span className="col1 Start">5 Star</span>
              <div className="col2 progress">
                <div class="progress-bar" style={{ width: "70%" }}></div>
              </div>

              <span className="col3">(22)</span>
            </div>
          </div>
          <br />
          <h5 className="mb-3 mt-3"> Customer Reviews </h5>
          <div className="reviewsSection">
            <div className="ReviewRow">
              <div className="row">
                <div className="com-sm-7 d-flex">
                  <div className="d-flex align-items-center flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatar img={uesrAvatar} lg={true} />
                      <div className="info pl-3 mt-2">
                        <h5>Hasib ALi</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 ml-auto d-flex align-item-center">
                  <div className="ml-auto">
                    <Button className="btn-blue btn-lg ml-auto">
                      <FaReply /> &nbsp; Reply
                    </Button>
                  </div>
                </div>

                <p className="mt-3 pText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="ReviewRow reply">
              <div className="row">
                <div className="com-sm-7 d-flex">
                  <div className="d-flex align-items-center flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatar img={uesrAvatar} lg={true} />
                      <div className="info pl-3 mt-2">
                        <h5>Hasib ALi</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 ml-auto d-flex align-item-center">
                  <div className="ml-auto">
                    <Button className="btn-blue btn-lg ml-auto">
                      <FaReply /> &nbsp; Reply
                    </Button>
                  </div>
                </div>

                <p className="mt-3 pText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="ReviewRow">
              <div className="row">
                <div className="com-sm-7 d-flex">
                  <div className="d-flex align-items-center flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatar img={uesrAvatar} lg={true} />
                      <div className="info pl-3 mt-2">
                        <h5>Hasib ALi</h5>
                        <span>25 minutes ago</span>
                      </div>
                    </div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 ml-auto d-flex align-item-center">
                  <div className="ml-auto">
                    <Button className="btn-blue btn-lg ml-auto">
                      <FaReply /> &nbsp; Reply
                    </Button>
                  </div>
                </div>

                <p className="mt-3 pText">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <br />

          <h5 className="mb-3 mt-3"> Review Reply From </h5>
          <form className="reviewForm">
            <textarea placeholder="Write Your Message Here..."></textarea>

            <Button className="btn-blue btn-big btn-lg w-100 mt-4">
              drop your replies
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
